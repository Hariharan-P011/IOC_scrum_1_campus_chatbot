from pydantic import BaseModel
from typing import Optional


class ChatRequest(BaseModel):
    question: str

    model_config = {"json_schema_extra": {"example": {"question": "Where is the admission office?"}}}


class ChatResponse(BaseModel):
    answer: str
    confidence: float
    matched: bool
    category: Optional[str]
    source: str
