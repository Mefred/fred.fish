# Semester 1 question bank audit

**Current bank:** 86 questions  
**Concept tags:** 146 unique concept identifiers  
**Source provenance:** 10 source questions with textually or visually supported answers (8 image-linked candidates and 2 text-block-only questions); 76 AI-generated questions derived from the recovered notes and lesson concepts. Every active question carries one or more concept tags and at least one source reference.

## Format coverage

| Format | Questions |
|---|---:|
| Single choice | 37 |
| Multiple select | 6 |
| True / false | 1 |
| Fill in the blank | 15 |
| Matching | 8 |
| Ordering | 7 |
| Scenario / troubleshooting | 12 |
| **Total** | **86** |

## Difficulty coverage

| Difficulty | Questions |
|---|---:|
| 1 — Introductory | 18 |
| 2 — Foundational | 23 |
| 3 — Applied | 30 |
| 4 — Advanced | 11 |
| 5 — Challenging | 4 |

## Provenance rules

- `origin: "source"` is reserved for questions whose prompt and answer are supported by recovered source text or a visually checked answer mark.
- `origin: "ai-generated"` identifies new questions or questions whose answer was derived from the source lesson rather than explicitly supplied in the original material.
- `sourceRefs` points to `block-XXXX` text blocks or `IMG-XXXX` image assets.
- OCR question candidates are not promoted into the active bank merely because OCR found a question mark. They remain candidates until their wording, visual dependencies, and answer key have been reviewed.
- Every active question is mapped to one or more concepts. The adaptive engine updates each mapped concept from the response.

## Current limitation

86 is an initial verified bank for implementation and workflow testing, not the final target. The archive yielded 474 normalized question-like OCR candidates, and many source diagrams and scenario prompts still need visual review. The bank should continue to grow as those candidates are audited and converted into distinct, concept-tagged items.
