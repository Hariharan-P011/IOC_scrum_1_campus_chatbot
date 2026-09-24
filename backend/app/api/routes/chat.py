from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.schemas.chat import ChatRequest, ChatResponse
from app.services import chatbot_service

router = APIRouter(prefix="/api/chatbot", tags=["Chatbot"])


@router.post("/query", response_model=ChatResponse, summary="Submit a question to the chatbot")
async def query_chatbot(request: ChatRequest, db: Session = Depends(get_db)):
    if not request.question or not request.question.strip():
        raise HTTPException(status_code=422, detail="Question cannot be empty")
    return await chatbot_service.process_query(request.question.strip(), db)
