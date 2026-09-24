from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from app.database.models import AdminUser
from app.core.security import verify_password, hash_password, create_access_token
from app.schemas.admin import AdminLoginRequest, AdminLoginResponse


def login(db: Session, data: AdminLoginRequest) -> AdminLoginResponse:
    user = db.query(AdminUser).filter(AdminUser.username == data.username).first()
    if not user or not verify_password(data.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password"
        )
    token = create_access_token({"sub": user.username, "role": user.role})
    return AdminLoginResponse(access_token=token)


def create_admin_user(db: Session, username: str, password: str, role: str = "admin") -> AdminUser:
    existing = db.query(AdminUser).filter(AdminUser.username == username).first()
    if existing:
        return existing
    user = AdminUser(username=username, password_hash=hash_password(password), role=role)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user
