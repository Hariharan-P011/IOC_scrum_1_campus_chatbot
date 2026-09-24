import pytest
from contextlib import asynccontextmanager
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.database.database import Base, get_db
from app.seed.seed_data import run_seed

TEST_DB_URL = "sqlite:///./test_chatbot.db"
engine = create_engine(TEST_DB_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()


@pytest.fixture(scope="module")
def client():
    Base.metadata.create_all(bind=engine)
    db = TestingSessionLocal()
    run_seed(db)
    db.close()

    # Import app after DB is ready; override lifespan to skip re-seeding
    from app.main import app

    @asynccontextmanager
    async def noop_lifespan(app):
        yield

    app.router.lifespan_context = noop_lifespan
    app.dependency_overrides[get_db] = override_get_db

    with TestClient(app, raise_server_exceptions=True) as c:
        yield c

    app.dependency_overrides.clear()
    Base.metadata.drop_all(bind=engine)
    engine.dispose()
    import os
    try:
        os.remove("test_chatbot.db")
    except Exception:
        pass


@pytest.fixture(scope="module")
def auth_token(client):
    response = client.post("/api/admin/login", json={"username": "admin", "password": "admin123"})
    assert response.status_code == 200
    return response.json()["access_token"]
