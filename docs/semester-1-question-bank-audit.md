# Semester 1 question bank audit

**Current bank:** 146 unique questions  
**Concept tags:** 231 unique concept identifiers  
**Source provenance:** 10 source questions with textually or visually supported answers; 136 AI-generated questions derived from recovered notes, source screenshots, and lesson concepts.

## Recent expansion

The latest five batches added 60 distinct questions:
- 28 questions grounded in recovered Semester 1 text blocks, covering network scope, Internet structure, host roles, peer-to-peer trade-offs, reliable-network characteristics, packet switching, modern network trends, business connectivity, QoS, and layered security.
- 8 questions grounded in source screenshots, covering DHCP and IPv6 autoconfiguration, IOS command syntax, console access, IOS command modes, Layer 3 source/destination addressing, MAC addressing, and transport ports.
- 8 questions grounded in Protocols and Models source screenshots, covering PDU encapsulation order, segmentation, open standards, message delivery types, same-LAN and remote-network frame addressing, per-hop Layer 2 changes, and protocol-stack responsibilities.
- 8 questions grounded in Physical Layer and Ethernet Switching screenshots, covering UTP interference cancellation, wireless media, MAC learning and aging, NIC frame filtering, Auto-MDIX, duplex mismatch, Ethernet frame size, and full-duplex media access.
- 8 questions grounded in Build a Small Network screenshots, covering DNS diagnosis, default-gateway failures, interface verification, traceroute, safe use of debug, troubleshooting sequence, CDP neighbor discovery, and redundancy.

## Format coverage

| Format | Questions |
|---|---:|
| Single choice | 72 |
| Multiple select | 10 |
| True / false | 1 |
| Fill in the blank | 15 |
| Matching | 11 |
| Ordering | 11 |
| Scenario / troubleshooting | 26 |
| **Total** | **146** |

## Difficulty coverage

| Difficulty | Questions |
|---|---:|
| 1 — Introductory | 28 |
| 2 — Foundational | 51 |
| 3 — Applied | 48 |
| 4 — Advanced | 15 |
| 5 — Challenging | 4 |

## Provenance rules

- `origin: "source"` is reserved for questions whose prompt and answer are explicitly supported by recovered source text or a visually checked answer mark.
- `origin: "ai-generated"` identifies new questions or questions whose answer was derived from source material rather than explicitly supplied in the original.
- `sourceRefs` points to `block-XXXX` text blocks or `IMG-XXXX` image assets.
- OCR question candidates are not promoted into the active bank merely because OCR found a question mark. They remain candidates until their wording, visual dependencies, and answer key have been reviewed.
- Every active question is mapped to one or more concepts. The adaptive engine updates each mapped concept from the response.

## Coverage and remaining work

The 146-question bank is an implementation-stage bank, not the final target. The source archive contains substantial diagram-dependent content and question-like screenshots that still need visual answer-key review. Continue expanding the bank only with distinct, concept-tagged items; do not treat raw OCR candidates as verified questions.

The recovered text is especially dense in Networking Today. Screenshot-derived additions now cover selected Basic Switch and End Device Configuration, Protocols and Models, Physical Layer, Ethernet Switching, and Build a Small Network concepts. Number Systems, ICMP, and several other module areas still have relatively low question counts and should be prioritized for the next expansion.
