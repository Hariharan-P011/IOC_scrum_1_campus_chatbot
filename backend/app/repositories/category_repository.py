from typing import List
from sqlalchemy.orm import Session
from app.repositories import knowledge_repository


def get_all_categories(db: Session) -> List[str]:
    return knowledge_repository.get_all_categories(db)
