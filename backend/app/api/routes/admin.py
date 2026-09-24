from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.schemas.admin import AdminLoginRequest, AdminLoginResponse
from app.schemas.knowledge_base import KnowledgeBaseCreate, KnowledgeBaseUpdate, KnowledgeBaseResponse
from app.services import auth_service, category_service
from app.core.security import get_current_admin

router = APIRouter(prefix="/api/admin", tags=["Admin"])


@router.post("/login", response_model=AdminLoginResponse, summary="Admin login")
def admin_login(data: AdminLoginRequest, db: Session = Depends(get_db)):
    return auth_service.login(db, data)


@router.get(
    "/knowledge-base",
    response_model=List[KnowledgeBaseResponse],
    summary="List all knowledge base entries"
)
def list_entries(
    db: Session = Depends(get_db),
    _: dict = Depends(get_current_admin)
):
    return category_service.get_all_entries(db)


@router.get(
    "/knowledge-base/{entry_id}",
    response_model=KnowledgeBaseResponse,
    summary="Get a single knowledge base entry"
)
def get_entry(
    entry_id: int,
    db: Session = Depends(get_db),
    _: dict = Depends(get_current_admin)
):
    return category_service.get_entry(db, entry_id)


@router.post(
    "/knowledge-base",
    response_model=KnowledgeBaseResponse,
    status_code=201,
    summary="Create a knowledge base entry"
)
def create_entry(
    data: KnowledgeBaseCreate,
    db: Session = Depends(get_db),
    _: dict = Depends(get_current_admin)
):
    return category_service.create_entry(db, data)


@router.put(
    "/knowledge-base/{entry_id}",
    response_model=KnowledgeBaseResponse,
    summary="Update a knowledge base entry"
)
def update_entry(
    entry_id: int,
    data: KnowledgeBaseUpdate,
    db: Session = Depends(get_db),
    _: dict = Depends(get_current_admin)
):
    return category_service.update_entry(db, entry_id, data)


@router.delete(
    "/knowledge-base/{entry_id}",
    summary="Delete a knowledge base entry"
)
def delete_entry(
    entry_id: int,
    db: Session = Depends(get_db),
    _: dict = Depends(get_current_admin)
):
    return category_service.delete_entry(db, entry_id)
