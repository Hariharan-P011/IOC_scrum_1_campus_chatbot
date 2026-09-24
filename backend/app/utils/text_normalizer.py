import re
from typing import List

from app.utils.synonyms import expand_tokens


def normalize(text: str) -> str:
    text = text.lower()
    # Join hyphenated compounds first (Wi-Fi -> wifi, co-ordinator ->
    # coordinator) so they survive as one meaningful token instead of
    # being split into two dead fragments ("wi", "fi") by the generic
    # punctuation strip below.
    text = re.sub(r"(\w)-(\w)", r"\1\2", text)
    text = re.sub(r"[^\w\s]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def tokenize(text: str) -> List[str]:
    return normalize(text).split()


STOPWORDS = {
    "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
    "have", "has", "had", "do", "does", "did", "will", "would", "could",
    "should", "may", "might", "shall", "can", "need", "dare", "ought",
    "used", "to", "of", "in", "on", "at", "by", "for", "with", "about",
    "against", "between", "into", "through", "during", "before", "after",
    "above", "below", "from", "up", "down", "out", "off", "over", "under",
    "again", "further", "then", "once", "i", "me", "my", "we", "our",
    "you", "your", "he", "she", "they", "them", "what", "which",
    "who", "this", "that", "these", "those", "and", "but", "or", "nor",
    "so", "yet", "both", "either", "not", "no", "just", "how",
    "where", "when", "why", "please", "tell", "know", "want", "get",
    "like", "kind", "sort", "type", "some", "any", "there", "here",
}

# "it" is genuinely ambiguous in English: it's both the ordinary pronoun
# ("what time is it") and the abbreviation for the Information Technology
# department ("it dept cutoff"). Blanket-removing it from STOPWORDS (the
# original attempted fix) broke pronoun sentences by matching them to the
# IT department. Blanket-keeping it (the original bug) broke department
# queries. The actual fix is contextual: only treat "it" as meaningful
# when another department-ish word appears alongside it in the same text
# — which is true for real department questions and essentially never
# true for ordinary pronoun sentences.
IT_CONTEXT_TRIGGERS = {
    "dept", "depts", "department", "departments", "branch", "branches",
    "hod", "cutoff", "admission", "engineering", "technology",
    "information", "course", "courses",
}


def _keep_it(raw_tokens: List[str]) -> bool:
    return any(t in IT_CONTEXT_TRIGGERS for t in raw_tokens)


def stem(word: str) -> str:
    """Lightweight suffix-stripping stemmer.

    Not a full Porter stemmer — deliberately conservative so short
    department abbreviations (it, cse, ece, hod, ...) pass through
    untouched, while common plural/verb endings collapse together
    (department/departments, cutoff/cutoffs, engineering/engineer).
    """
    if len(word) <= 3:
        return word
    if word.endswith("ies"):
        return word[:-3] + "y"
    if word.endswith("ing") and len(word) > 5:
        return word[:-3]
    if word.endswith("ed") and len(word) > 4:
        return word[:-2]
    if word.endswith("s") and not word.endswith("ss") and len(word) > 3:
        return word[:-1]
    return word


def meaningful_tokens(text: str) -> List[str]:
    """Tokens with stopwords/short junk removed. No stemming/synonyms —
    used where the raw vocabulary matters (e.g. building the TF-IDF
    corpus, which applies its own analyzer)."""
    raw = tokenize(text)
    keep_it = _keep_it(raw)
    result = []
    for t in raw:
        if t == "it":
            if keep_it:
                result.append(t)
            continue
        if t in STOPWORDS or len(t) <= 1:
            continue
        result.append(t)
    return result


def processed_tokens(text: str) -> List[str]:
    """Full pipeline for fuzzy/overlap scoring: tokenize -> drop
    stopwords -> expand synonyms/abbreviations -> stem. This is the
    token set that should be compared with set/Jaccard overlap."""
    base = meaningful_tokens(text)
    expanded = expand_tokens(base)
    stemmed = [stem(t) for t in expanded]
    return [t for t in stemmed if t not in STOPWORDS]
