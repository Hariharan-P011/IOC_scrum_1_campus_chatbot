from abc import ABC, abstractmethod
from typing import Optional
from dataclasses import dataclass


@dataclass
class EngineResult:
    answer: str
    confidence: float
    matched: bool
    category: Optional[str]
    source: str


class BaseChatbotEngine(ABC):
    @abstractmethod
    def query(self, question: str) -> EngineResult:
        pass
