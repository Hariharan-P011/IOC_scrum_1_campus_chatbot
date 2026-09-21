from pydantic_settings import BaseSettings
from pydantic import ConfigDict
from functools import lru_cache


class Settings(BaseSettings):
    model_config = ConfigDict(env_file=".env")

    DATABASE_URL: str = "sqlite:///./college_chatbot.db"
    SECRET_KEY: str = "change-this-secret-key-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    # Tuned for the hybrid TF-IDF + overlap + fuzzy scorer (nlp_matcher.py)
    # against the actual seed knowledge base. Measured on realistic
    # off-topic queries ("what's the weather", "tell me a joke", etc.):
    # max score ~0.10. Measured on real but short/typo'd on-topic queries
    # ("wifi", "colege ranking", "nirf"): min score ~0.29. 0.30 sits in
    # that gap. Note: this is lexical matching, not semantic — a query
    # that deliberately strings together knowledge-base words out of
    # context ("cutoff jeans price") can still score above threshold.
    # If you significantly grow/edit the knowledge base, re-run the
    # calibration (see the test scripts used during development) rather
    # than assuming this number still holds.
    CONFIDENCE_THRESHOLD: float = 0.30
    CANTEEN_API_URL: str = "http://localhost:8001"
    FRONTEND_URL: str = "http://localhost:5173"
    USE_MOCK_CANTEEN: bool = True


@lru_cache()
def get_settings() -> Settings:
    return Settings()
