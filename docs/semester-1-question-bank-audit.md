# Semester 1 question bank audit

**Current bank:** 130 unique questions  
**Concept tags:** 204 unique concept identifiers  
**Source provenance:** 10 source questions with textually or visually supported answers; 120 AI-generated questions derived from recovered notes, source screenshots, and lesson concepts.

## Recent expansion

The latest three batches added 44 distinct questions:
- 28 questions grounded in recovered Semester 1 text blocks, covering network scope, Internet structure, host roles, peer-to-peer trade-offs, reliable-network characteristics, packet switching, modern network trends, business connectivity, QoS, and layered security.
- 8 questions grounded in source screenshots, covering DHCP and IPv6 autoconfiguration, IOS command syntax, console access, IOS command modes, Layer 3 source/destination addressing, MAC addressing, and transport ports.
- 8 questions grounded in Protocols and Models source screenshots, covering PDU encapsulation order, segmentation, open standards, message delivery types, same-LAN and remote-network frame addressing, per-hop Layer 2 changes, and protocol-stack responsibilities.

## Format coverage

| Format | Questions |
|---|---:|
| Single choice | 62 |
| Multiple select | 10 |
| True / false | 1 |
| Fill in the blank | 15 |
| Matching | 11 |
| Ordering | 10 |
| Scenario / troubleshooting | 21 |
| **Total** | **130** |

## Difficulty coverage

| Difficulty | Questions |
|---|---:|
| 1 — Introductory | 27 |
| 2 — Foundational | 43 |
| 3 — Applied | 42 |
| 4 — Advanced | 14 |
| 5 — Challenging | 4 |

## Provenance rules

- `origin: "source"` is reserved for questions whose prompt and answer are explicitly supported by recovered source text or a visually checked answer mark.
- `origin: "ai-generated"` identifies new questions or questions whose answer was derived from source material rather than explicitly supplied in the original.
- `sourceRefs` points to `block-XXXX` text blocks or `IMG-XXXX` image assets.
- OCR question candidates are not promoted into the active bank merely because OCR found a question mark. They remain candidates until their wording, visual dependencies, and answer key have been reviewed.
- Every active question is mapped to one or more concepts. The adaptive engine updates each mapped concept from the response.

## Coverage and remaining work

The 130-question bank is an implementation-stage bank, not the final target. The source archive contains substantial diagram-dependent content and question-like screenshots that still need visual answer-key review. Continue expanding the bank only with distinct, concept-tagged items; do not treat raw OCR candidates as verified questions.

The recovered text is especially dense in Networking Today. Screenshot-derived additions now cover selected Basic Switch and End Device Configuration and Protocols and Models concepts. Later-module coverage should be expanded from their corresponding source pages and diagrams, rather than inferred from module titles alone.
