from sqlalchemy.orm import Session
from app.schemas.chat import ChatResponse
from app.services.knowledge_service import KnowledgeBaseChatbotEngine
from app.services import canteen_service


async def process_query(question: str, db: Session) -> ChatResponse:
    if canteen_service.is_canteen_question(question):
        answer, success = await canteen_service.get_menu_response()
        return ChatResponse(
            answer=answer,
            confidence=1.0 if success else 0.0,
            matched=success,
            category="Canteen",
            source="canteen_api" if success else "fallback"
        )

    engine = KnowledgeBaseChatbotEngine(db)
    result = engine.query(question)
    return ChatResponse(
        answer=result.answer,
        confidence=result.confidence,
        matched=result.matched,
        category=result.category,
        source=result.source
    )
