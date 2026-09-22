from sqlalchemy.orm import Session
from app.services.chatbot_engine import BaseChatbotEngine, EngineResult
from app.repositories import knowledge_repository
from app.services.nlp_matcher import matcher
from app.core.config import get_settings

settings = get_settings()

FALLBACK_ANSWER = (
    "I couldn't find a reliable answer to your question. "
    "Please contact the MIT Anna University Admission Office directly for assistance. "
    "You can also try rephrasing your question or browse the categories above."
)


class KnowledgeBaseChatbotEngine(BaseChatbotEngine):
    """Looks up the best-matching knowledge base entry using the hybrid
    NLP matcher (TF-IDF + stemming + synonym/abbreviation expansion +
    fuzzy matching — see app/services/nlp_matcher.py for the scoring
    breakdown)."""

    def __init__(self, db: Session):
        self._db = db

    def query(self, question: str) -> EngineResult:
        if not question or not question.strip():
            return EngineResult(
                answer=FALLBACK_ANSWER,
                confidence=0.0,
                matched=False,
                category=None,
                source="fallback"
            )

        entries = knowledge_repository.get_all(self._db)

        if not entries:
            return EngineResult(
                answer=FALLBACK_ANSWER,
                confidence=0.0,
                matched=False,
                category=None,
                source="fallback"
            )

        best_entry, best_score = matcher.best_match(entries, question)
        threshold = settings.CONFIDENCE_THRESHOLD

        if best_entry and best_score >= threshold:
            return EngineResult(
                answer=best_entry.answer,
                confidence=best_score,
                matched=True,
                category=best_entry.category,
                source="knowledge_base"
            )

        return EngineResult(
            answer=FALLBACK_ANSWER,
            confidence=best_score,
            matched=False,
            category=None,
            source="fallback"
        )
