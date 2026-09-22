from pydantic import BaseModel, field_validator
from typing import Optional
from datetime import datetime


class KnowledgeBaseCreate(BaseModel):
    category: str
    question: str
    keywords: Optional[str] = None
    answer: str
    metadata_json: Optional[str] = None

    @field_validator("question", "answer", "category")
    @classmethod
    def not_empty(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("Field cannot be empty")
        return v.strip()


class KnowledgeBaseUpdate(BaseModel):
    category: Optional[str] = None
    question: Optional[str] = None
    keywords: Optional[str] = None
    answer: Optional[str] = None
    metadata_json: Optional[str] = None

    @field_validator("question", "answer", "category", mode="before")
    @classmethod
    def not_empty(cls, v):
        if v is not None and not str(v).strip():
            raise ValueError("Field cannot be empty")
        return v


class KnowledgeBaseResponse(BaseModel):
    id: int
    category: str
    question: str
    keywords: Optional[str]
    answer: str
    metadata_json: Optional[str]
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}
