# Semester 1 question bank audit

**Current bank:** 164 unique questions  
**Concept tags:** 263 unique concept identifiers  
**Source provenance:** 10 source questions with textually or visually supported answers; 154 AI-generated questions derived from recovered notes, source screenshots, and lesson concepts.

## Recent expansion

The latest seven batches added 78 distinct questions:
- 28 questions grounded in recovered Semester 1 text blocks, covering network scope, Internet structure, host roles, peer-to-peer trade-offs, reliable-network characteristics, packet switching, modern network trends, business connectivity, QoS, and layered security.
- 8 questions grounded in source screenshots, covering DHCP and IPv6 autoconfiguration, IOS command syntax, console access, IOS command modes, Layer 3 source/destination addressing, MAC addressing, and transport ports.
- 8 questions grounded in Protocols and Models source screenshots, covering PDU encapsulation order, segmentation, open standards, message delivery types, same-LAN and remote-network frame addressing, per-hop Layer 2 changes, and protocol-stack responsibilities.
- 8 questions grounded in Physical Layer and Ethernet Switching screenshots, covering UTP interference cancellation, wireless media, MAC learning and aging, NIC frame filtering, Auto-MDIX, duplex mismatch, Ethernet frame size, and full-duplex media access.
- 8 questions grounded in Build a Small Network screenshots, covering DNS diagnosis, default-gateway failures, interface verification, traceroute, safe use of debug, troubleshooting sequence, CDP neighbor discovery, and redundancy.
- 10 questions grounded in Number Systems and ICMP screenshots, covering binary/decimal/hexadecimal conversion, IPv6 hexadecimal structure, ICMP Echo, TTL expiration, traceroute interpretation, traceroute source selection, and ICMPv6 Neighbor Discovery.
- 8 questions grounded in IPv6 Addressing screenshots, covering GUA/LLA/multicast prefixes, IPv6 prefix extraction, address compression, IPv4/IPv6 coexistence, RS/RA router discovery, modified EUI-64, and address-type recognition.

## Format coverage

| Format | Questions |
|---|---:|
| Single choice | 83 |
| Multiple select | 10 |
| True / false | 1 |
| Fill in the blank | 20 |
| Matching | 13 |
| Ordering | 11 |
| Scenario / troubleshooting | 26 |
| **Total** | **164** |

## Difficulty coverage

| Difficulty | Questions |
|---|---:|
| 1 — Introductory | 30 |
| 2 — Foundational | 57 |
| 3 — Applied | 55 |
| 4 — Advanced | 18 |
| 5 — Challenging | 4 |

## Provenance rules

- `origin: "source"` is reserved for questions whose prompt and answer are explicitly supported by recovered source text or a visually checked answer mark.
- `origin: "ai-generated"` identifies new questions or questions whose answer was derived from source material rather than explicitly supplied in the original.
- `sourceRefs` points to `block-XXXX` text blocks or `IMG-XXXX` image assets.
- OCR question candidates are not promoted into the active bank merely because OCR found a question mark. They remain candidates until their wording, visual dependencies, and answer key have been reviewed.
- Every active question is mapped to one or more concepts. The adaptive engine updates each mapped concept from the response.

## Coverage and remaining work

The 164-question bank is an implementation-stage bank, not the final target. The source archive contains substantial diagram-dependent content and question-like screenshots that still need visual answer-key review. Continue expanding the bank only with distinct, concept-tagged items; do not treat raw OCR candidates as verified questions.

Screenshot-derived additions now cover selected Basic Switch and End Device Configuration, Protocols and Models, Physical Layer, Ethernet Switching, Build a Small Network, Number Systems, ICMP, and IPv6 Addressing concepts. Address Resolution, Application Layer, Transport Layer, and some routing topics remain relatively sparse and should be prioritized next.
