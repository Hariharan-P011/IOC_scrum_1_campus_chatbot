from typing import List, Optional
from sqlalchemy.orm import Session
from app.database.models import KnowledgeBaseEntry
from app.schemas.knowledge_base import KnowledgeBaseCreate, KnowledgeBaseUpdate


def get_all(db: Session) -> List[KnowledgeBaseEntry]:
    return db.query(KnowledgeBaseEntry).all()


def get_by_id(db: Session, entry_id: int) -> Optional[KnowledgeBaseEntry]:
    return db.query(KnowledgeBaseEntry).filter(KnowledgeBaseEntry.id == entry_id).first()


def get_by_category(db: Session, category: str) -> List[KnowledgeBaseEntry]:
    return db.query(KnowledgeBaseEntry).filter(
        KnowledgeBaseEntry.category.ilike(category)
    ).all()


def get_all_categories(db: Session) -> List[str]:
    rows = db.query(KnowledgeBaseEntry.category).distinct().all()
    return [r[0] for r in rows]


def create(db: Session, data: KnowledgeBaseCreate) -> KnowledgeBaseEntry:
    entry = KnowledgeBaseEntry(**data.model_dump())
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry


def update(db: Session, entry_id: int, data: KnowledgeBaseUpdate) -> Optional[KnowledgeBaseEntry]:
    entry = get_by_id(db, entry_id)
    if not entry:
        return None
    for field, value in data.model_dump(exclude_none=True).items():
        setattr(entry, field, value)
    db.commit()
    db.refresh(entry)
    return entry


def delete(db: Session, entry_id: int) -> bool:
    entry = get_by_id(db, entry_id)
    if not entry:
        return False
    db.delete(entry)
    db.commit()
    return True
