# Architecture — MIT Campus Chatbot

## System Architecture

```
USER (Browser / Mobile via QR code)
        │
        ▼
React + Vite (Frontend — port 5173)
  ├── ChatWidget (floating launcher)
  ├── MessageList / MessageBubble
  ├── QuickReplies (category buttons)
  ├── ChatInput
  ├── QRCodeDisplay
  └── AdminPage (CRUD interface)
        │
        │ REST API (HTTP/JSON)
        ▼
Python + FastAPI (Backend — port 8000)
  ├── POST /api/chatbot/query
  ├── GET  /api/categories
  ├── GET  /api/categories/{category}
  ├── POST /api/admin/login
  ├── CRUD /api/admin/knowledge-base
  └── GET  /api/canteen/menu
        │
        ▼
   ChatbotService (orchestrator)
   ┌──────────────────────────────┐
   │  CanteenService              │──► CanteenClient ──► Smart Canteen REST API
   │  KnowledgeBaseChatbotEngine  │──► KnowledgeRepository ──► SQLAlchemy ──► SQLite
   └──────────────────────────────┘

## Chatbot Matching Pipeline

User Question
  → normalize (lowercase, join hyphenated words, strip punctuation)
  → tokenize + remove stopwords (context-aware: "it" only kept as the
    IT-department abbreviation when a department-ish word like
    dept/cutoff/hod is also present, otherwise treated as the pronoun)
  → expand synonyms/abbreviations (app/utils/synonyms.py — cse, ece,
    hod, hostal, addmission, ...) and stem (department(s), cutoff(s), ...)
  → score each KB entry (app/services/nlp_matcher.py):
      35% TF-IDF cosine similarity (unigrams + bigrams, corpus-weighted)
      25% stemmed/expanded token overlap (question + keywords)
      25% keyword-field overlap (curated `keywords` column)
      15% fuzzy sequence ratio (difflib, catches typos)
    Overlap terms use the overlap coefficient (|A∩B| / min(|A|,|B|)),
    not Jaccard, so short queries aren't penalized against long
    keyword lists.
  → select best score
  → if score ≥ CONFIDENCE_THRESHOLD → return answer
  → else → return fallback

The TF-IDF index is rebuilt lazily and cached in-memory, keyed on each
entry's (id, updated_at) — any admin edit to the knowledge base
automatically invalidates and rebuilds it on the next query, no extra
wiring needed.

Note: this is lexical/statistical matching, not semantic embeddings —
it has no network dependency and needs no model download, but a query
that strings knowledge-base words together out of context can still
score above threshold. Extend app/utils/synonyms.py as new
abbreviations/typos show up in real usage.

## Canteen Routing

Question tokens ∩ CANTEEN_KEYWORDS ≠ ∅
  → route to CanteenService
  → USE_MOCK_CANTEEN=true → return MOCK_MENU
  → USE_MOCK_CANTEEN=false → call real API → fallback on failure
```
