from typing import List
from sqlalchemy.orm import Session
from app.repositories import knowledge_repository, category_repository
from app.schemas.knowledge_base import KnowledgeBaseCreate, KnowledgeBaseUpdate, KnowledgeBaseResponse
from app.schemas.category import CategoryEntriesResponse, CategoriesListResponse
from fastapi import HTTPException


def get_categories(db: Session) -> CategoriesListResponse:
    cats = category_repository.get_all_categories(db)
    return CategoriesListResponse(categories=cats)


def get_category_entries(db: Session, category: str) -> CategoryEntriesResponse:
    entries = knowledge_repository.get_by_category(db, category)
    if not entries:
        raise HTTPException(status_code=404, detail=f"No entries found for category: {category}")
    return CategoryEntriesResponse(
        category=category,
        entries=[KnowledgeBaseResponse.model_validate(e) for e in entries]
    )


def get_all_entries(db: Session) -> List[KnowledgeBaseResponse]:
    return [KnowledgeBaseResponse.model_validate(e) for e in knowledge_repository.get_all(db)]


def get_entry(db: Session, entry_id: int) -> KnowledgeBaseResponse:
    entry = knowledge_repository.get_by_id(db, entry_id)
    if not entry:
        raise HTTPException(status_code=404, detail="Entry not found")
    return KnowledgeBaseResponse.model_validate(entry)


def create_entry(db: Session, data: KnowledgeBaseCreate) -> KnowledgeBaseResponse:
    entry = knowledge_repository.create(db, data)
    return KnowledgeBaseResponse.model_validate(entry)


def update_entry(db: Session, entry_id: int, data: KnowledgeBaseUpdate) -> KnowledgeBaseResponse:
    entry = knowledge_repository.update(db, entry_id, data)
    if not entry:
        raise HTTPException(status_code=404, detail="Entry not found")
    return KnowledgeBaseResponse.model_validate(entry)


def delete_entry(db: Session, entry_id: int) -> dict:
    success = knowledge_repository.delete(db, entry_id)
    if not success:
        raise HTTPException(status_code=404, detail="Entry not found")
    return {"message": "Entry deleted successfully"}
