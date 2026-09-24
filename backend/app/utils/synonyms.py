"""
Domain-specific synonym / abbreviation expansion for the college chatbot.

This is NOT a general-purpose English thesaurus — it only covers terms that
actually show up in MIT-related questions (department short forms, common
misspellings, and everyday word variants for fees/hostel/admission/etc.).

Each key is a single lowercase token a student might type. Its value is a
list of tokens that should be injected alongside it before matching, so an
abbreviation like "cse" effectively also matches entries whose keywords say
"computer", "science", "engineering".

Add new entries here as new abbreviations/typos are discovered in real
usage — this file is the single place to extend recognition without
touching the matching engine itself.
"""

from typing import List, Set

SYNONYM_MAP = {
    # Department short forms / abbreviations
    "it": ["information", "technology"],
    "cse": ["computer", "science", "engineering"],
    "cs": ["computer", "science"],
    "ct": ["computer", "technology"],
    "ece": ["electronics", "communication", "engineering"],
    "eie": ["electronics", "instrumentation", "engineering"],
    "aero": ["aeronautical", "aerospace", "engineering"],
    "aeronautics": ["aeronautical"],
    "auto": ["automobile", "engineering"],
    "prod": ["production", "technology", "engineering"],
    "rpt": ["rubber", "plastics", "technology"],
    "aids": ["artificial", "intelligence", "data", "science"],
    "ai": ["artificial", "intelligence"],
    "ds": ["data", "science"],
    "robo": ["robotics", "automation"],
    "ash": ["applied", "science", "humanities"],

    # Roles / structure
    "hod": ["head", "department"],
    "dept": ["department"],
    "depts": ["departments"],
    "branch": ["department"],
    "branches": ["departments"],
    "principal": ["dean"],

    # Admission / cutoff
    "cuttoff": ["cutoff"],
    "cuttof": ["cutoff"],
    "cutof": ["cutoff"],
    "rank": ["cutoff"],
    "closing": ["cutoff"],
    "tnea": ["admission", "counselling"],
    "addmission": ["admission"],
    "admision": ["admission"],
    "counseling": ["counselling"],

    # Fees
    "fee": ["fees", "tuition", "cost", "charges"],
    "fees": ["fee", "tuition", "cost", "charges"],
    "tuition": ["fee", "fees"],
    "cost": ["fee", "fees"],
    "charges": ["fee", "fees"],

    # Hostel
    "hostal": ["hostel"],
    "hostle": ["hostel"],
    "accommodation": ["hostel", "stay"],
    "accomodation": ["hostel", "stay"],

    # Documents
    "doc": ["document"],
    "docs": ["documents"],
    "certi": ["certificate"],
    "certificates": ["certificate", "document"],
    "tc": ["transfer", "certificate"],

    # Facilities / connectivity
    "wifi": ["internet", "network"],
    "internet": ["wifi", "network"],
    "canteen": ["mess", "food", "dining"],
    "mess": ["canteen", "food", "dining"],
    "placement": ["internship", "recruitment", "job", "jobs"],
    "placements": ["internship", "recruitment", "job", "jobs"],
    "job": ["placement", "recruitment"],
    "jobs": ["placement", "recruitment"],
    "gym": ["fitness"],
    "kcc": ["computing", "centre", "center"],
    "center": ["centre"],

    # Contact / general
    "college": ["campus", "institute", "university", "mit"],
    "colege": ["college"],
    "campus": ["college"],
    "univ": ["university"],
    "contact": ["phone", "number", "address"],
    "no": ["number"],
    "grievance": ["complaint"],
    "complaint": ["grievance"],
    "ragging": ["harassment"],
}


def expand_tokens(tokens: List[str]) -> List[str]:
    """Return the original tokens plus any synonym/abbreviation tokens
    they map to. Order-preserving, duplicates removed."""
    expanded: List[str] = []
    seen: Set[str] = set()

    for tok in tokens:
        if tok not in seen:
            expanded.append(tok)
            seen.add(tok)
        for extra in SYNONYM_MAP.get(tok, []):
            if extra not in seen:
                expanded.append(extra)
                seen.add(extra)

    return expanded
