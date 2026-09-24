"""
Hybrid NLP matching engine for the knowledge base.

Why hybrid, not just one technique:
- TF-IDF + cosine similarity is good at "which entry's vocabulary is
  overall closest to this query", weighted by how distinctive each word
  is across the whole knowledge base (so generic words like "mit" or
  "engineering" don't dominate the score the way they would with plain
  overlap).
- Stemmed + synonym-expanded token overlap (Jaccard) is good at short,
  keyword-style queries ("it dept cutoff") where TF-IDF's smoothing can
  under-score a very short query against a longer stored question.
- Keyword-field overlap gives extra weight to the curated `keywords`
  column, which is hand-written specifically to catch phrasings.
- difflib fuzzy ratio catches typos/character-level closeness
  (e.g. "cuttoff", "hostal") that token-based methods miss entirely.

None of these four is reliable alone; blended, they cover each other's
blind spots. The TF-IDF vectorizer is rebuilt only when the knowledge
base actually changes (cache keyed on entry id + updated_at), so normal
queries don't pay a rebuild cost.
"""

from dataclasses import dataclass
from difflib import SequenceMatcher
from typing import List, Optional, Sequence, Tuple

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

from app.utils.text_normalizer import normalize, meaningful_tokens, processed_tokens

# Blend weights — must sum to 1.0
W_TFIDF = 0.35
W_TOKEN_OVERLAP = 0.25
W_KEYWORD_OVERLAP = 0.25
W_FUZZY = 0.15


def _analyzer(text: str) -> List[str]:
    """Custom analyzer used by the TF-IDF vectorizer: normalize, drop
    stopwords, expand abbreviations/synonyms, stem, then emit unigrams
    and bigrams so short multi-word phrases ('computer science') carry
    signal beyond their individual words."""
    tokens = processed_tokens(text)
    grams = list(tokens)
    for i in range(len(tokens) - 1):
        grams.append(tokens[i] + "_" + tokens[i + 1])
    return grams


def _overlap_coefficient(a: Sequence[str], b: Sequence[str]) -> float:
    """Szymkiewicz-Simpson overlap coefficient: |A n B| / min(|A|, |B|).

    Unlike Jaccard, this doesn't get diluted when one side (typically
    the stored entry's keyword list) is much larger than the other
    (a short user query) — it asks "how much of the smaller set is
    covered", which is the right question for "does this entry contain
    what the user asked about".
    """
    set_a, set_b = set(a), set(b)
    if not set_a or not set_b:
        return 0.0
    smaller = min(len(set_a), len(set_b))
    return len(set_a & set_b) / smaller


def _fuzzy_ratio(a: str, b: str) -> float:
    return SequenceMatcher(None, a, b).ratio()


@dataclass
class ScoredEntry:
    entry: object
    score: float


class HybridMatcher:
    """Stateless-looking wrapper around a lazily-rebuilt TF-IDF index.
    One instance is reused (module-level singleton below); call
    `best_match` per query."""

    def __init__(self) -> None:
        self._cache_key: Optional[tuple] = None
        self._vectorizer: Optional[TfidfVectorizer] = None
        self._matrix = None
        self._entries: List[object] = []
        self._entry_tokens: List[List[str]] = []
        self._keyword_tokens: List[List[str]] = []

    def _build_cache_key(self, entries: Sequence[object]) -> tuple:
        return tuple(
            (getattr(e, "id", None), str(getattr(e, "updated_at", "")))
            for e in entries
        )

    def _rebuild(self, entries: Sequence[object]) -> None:
        self._entries = list(entries)
        corpus = []
        self._entry_tokens = []
        self._keyword_tokens = []

        for e in self._entries:
            question = e.question or ""
            keywords = e.keywords or ""
            # Keywords are curated signal — count them twice in the
            # TF-IDF document so distinctive keyword terms pull weight.
            doc_text = f"{question} {keywords} {keywords}"
            corpus.append(doc_text)
            self._entry_tokens.append(processed_tokens(f"{question} {keywords}"))
            self._keyword_tokens.append(processed_tokens(keywords))

        if not corpus:
            self._vectorizer = None
            self._matrix = None
            return

        self._vectorizer = TfidfVectorizer(
            analyzer=_analyzer,
            sublinear_tf=True,
            min_df=1,
        )
        self._matrix = self._vectorizer.fit_transform(corpus)

    def _ensure_fresh(self, entries: Sequence[object]) -> None:
        key = self._build_cache_key(entries)
        if key != self._cache_key:
            self._rebuild(entries)
            self._cache_key = key

    def score_all(self, entries: Sequence[object], query: str) -> List[ScoredEntry]:
        if not entries or not query or not query.strip():
            return []

        self._ensure_fresh(entries)

        if self._vectorizer is None or self._matrix is None:
            return []

        query_vec = self._vectorizer.transform([query])
        tfidf_scores = linear_kernel(query_vec, self._matrix).flatten()

        query_norm = normalize(query)
        query_tokens = processed_tokens(query)

        results: List[ScoredEntry] = []
        for i, entry in enumerate(self._entries):
            tfidf_score = float(tfidf_scores[i])
            token_score = _overlap_coefficient(query_tokens, self._entry_tokens[i])
            keyword_score = _overlap_coefficient(query_tokens, self._keyword_tokens[i]) if self._keyword_tokens[i] else 0.0
            fuzzy_score = _fuzzy_ratio(query_norm, normalize(entry.question or ""))

            combined = (
                W_TFIDF * tfidf_score
                + W_TOKEN_OVERLAP * token_score
                + W_KEYWORD_OVERLAP * keyword_score
                + W_FUZZY * fuzzy_score
            )
            results.append(ScoredEntry(entry=entry, score=round(combined, 4)))

        results.sort(key=lambda r: r.score, reverse=True)
        return results

    def best_match(self, entries: Sequence[object], query: str) -> Tuple[Optional[object], float]:
        scored = self.score_all(entries, query)
        if not scored:
            return None, 0.0
        top = scored[0]
        return top.entry, top.score


# Module-level singleton so the TF-IDF cache survives across requests
# within the same process. Cache is self-invalidating (see _build_cache_key),
# so knowledge-base CRUD via the admin routes needs no extra wiring.
matcher = HybridMatcher()
