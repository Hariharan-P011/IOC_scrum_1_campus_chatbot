from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.schemas.category import CategoriesListResponse, CategoryEntriesResponse
from app.services import category_service

router = APIRouter(prefix="/api/categories", tags=["Categories"])


@router.get("", response_model=CategoriesListResponse, summary="Get all available categories")
def get_categories(db: Session = Depends(get_db)):
    return category_service.get_categories(db)


@router.get("/{category}", response_model=CategoryEntriesResponse, summary="Get entries for a category")
def get_category_entries(category: str, db: Session = Depends(get_db)):
    return category_service.get_category_entries(db, category)
