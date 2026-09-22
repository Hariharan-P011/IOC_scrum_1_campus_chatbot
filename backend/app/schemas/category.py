from pydantic import BaseModel
from typing import List
from app.schemas.knowledge_base import KnowledgeBaseResponse


class CategoriesListResponse(BaseModel):
    categories: List[str]


class CategoryEntriesResponse(BaseModel):
    category: str
    entries: List[KnowledgeBaseResponse]
