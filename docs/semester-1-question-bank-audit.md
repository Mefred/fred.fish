# Semester 1 question bank audit

**Current bank:** 217 unique questions  
**Concept tags:** 358 unique concept identifiers  
**Source provenance:** 20 source questions with prompt/answer support from recovered text or visually checked source screenshots; 197 AI-generated questions derived from recovered notes, source screenshots, and lesson concepts.

## Recent expansion

The latest twelve source-grounded batches added 120 distinct questions, followed by eleven AI-generated practice questions for Network Topologies, Internet Connections, and Address Resolution:
- 28 questions grounded in recovered Semester 1 text blocks, covering network scope, Internet structure, host roles, peer-to-peer trade-offs, reliable-network characteristics, packet switching, modern network trends, business connectivity, QoS, and layered security.
- 8 questions grounded in source screenshots, covering DHCP and IPv6 autoconfiguration, IOS command syntax, console access, IOS command modes, Layer 3 source/destination addressing, MAC addressing, and transport ports.
- 8 questions grounded in Protocols and Models source screenshots, covering PDU encapsulation order, segmentation, open standards, message delivery types, same-LAN and remote-network frame addressing, per-hop Layer 2 changes, and protocol-stack responsibilities.
- 8 questions grounded in Physical Layer and Ethernet Switching screenshots, covering UTP interference cancellation, wireless media, MAC learning and aging, NIC frame filtering, Auto-MDIX, duplex mismatch, Ethernet frame size, and full-duplex media access.
- 8 questions grounded in Build a Small Network screenshots, covering DNS diagnosis, default-gateway failures, interface verification, traceroute, safe use of debug, troubleshooting sequence, CDP neighbor discovery, and redundancy.
- 10 questions grounded in Number Systems and ICMP screenshots, covering binary/decimal/hexadecimal conversion, IPv6 hexadecimal structure, ICMP Echo, TTL expiration, traceroute interpretation, traceroute source selection, and ICMPv6 Neighbor Discovery.
- 8 questions grounded in IPv6 Addressing screenshots, covering GUA/LLA/multicast prefixes, IPv6 prefix extraction, address compression, IPv4/IPv6 coexistence, RS/RA router discovery, modified EUI-64, and address-type recognition.
- 15 questions grounded in Application and Transport Layer screenshots, covering DNS resource records, SMTP/POP3/IMAP, email ports, TCP/IP application-layer mapping, hybrid P2P, HTTP GET, TCP windowing, UDP characteristics, TCP-only header fields, acknowledgment numbers, sockets, port ranges, real-time UDP use, and reliable HTTP transport.
- 8 questions grounded in router-configuration and address-resolution screenshots, covering router boot/setup behavior, router forwarding/path-selection roles, enabling interfaces, router memory, saving configuration, IPv6 interface verification, Layer 2 switch default gateways, and ARP cache inspection.
- 7 questions grounded in IPv4 addressing and Network Layer screenshots, covering /27 prefix notation, /26 usable host capacity, /22 broadcast calculation, sizing a subnet for 61 hosts, routing-table behavior, metric selection, and IP's connectionless/media-independent properties.
- 6 questions grounded in routing and route-table screenshots, covering static-route syntax, default-route syntax, C/L route codes, administrative distance versus metric, no-route behavior, and next-hop resolution on Ethernet.

## Format coverage

| Format | Questions |
|---|---:|
| Single choice | 106 |
| Multiple select | 18 |
| True / false | 1 |
| Fill in the blank | 26 |
| Matching | 19 |
| Ordering | 11 |
| Scenario / troubleshooting | 36 |
| **Total** | **217** |

## Difficulty coverage

| Difficulty | Questions |
|---|---:|
| 1 — Introductory | 34 |
| 2 — Foundational | 75 |
| 3 — Applied | 81 |
| 4 — Advanced | 23 |
| 5 — Challenging | 4 |

## Source provenance audit

The first automated promotion map contained several incorrect image-to-question associations. A second pass compared the actual OCR text and image content against each active question and corrected those links before adding more source-labelled items.

- 10 image question candidates have been visually checked and linked to active question IDs in the OCR candidate export.
- 4 false-positive candidates were manually marked as non-question slides and removed from the promoted set.
- The corrected candidate associations include client/server terminology, the transport source-port layer, destination MAC layer, protocol decapsulation order, IOS command keyword, saving configuration to NVRAM, LLC functions, Telnet encapsulation, IPv6 interface verification, and troubleshooting sequence.
- Source refs now point to the corresponding `IMG-XXXX` asset or `block-XXXX` text block. A source reference documents provenance; it does not imply that all surrounding slide content has been reconstructed.

## Provenance rules

- `origin: "source"` is reserved for questions whose prompt and answer are explicitly supported by recovered source text or a visually checked answer mark/diagram.
- `origin: "ai-generated"` identifies new questions or questions whose answer was derived from source material rather than explicitly supplied in the original.
- `sourceRefs` points to `block-XXXX` text blocks or `IMG-XXXX` image assets.
- OCR question candidates are not promoted into the active bank merely because OCR found a question mark. They remain candidates until their wording, visual dependencies, and answer key have been reviewed.
- Every active question is mapped to one or more concepts. The adaptive engine updates each mapped concept from the response.

## Coverage and remaining work

The 217-question bank is an implementation-stage bank, not the final target. The source archive contains substantial diagram-dependent content and question-like screenshots that still need visual answer-key review. Continue expanding the bank only with distinct, concept-tagged items; do not treat raw OCR candidates as verified questions.

Screenshot-derived additions now cover selected Basic Switch and End Device Configuration, Protocols and Models, Physical Layer, Data Link Layer, Ethernet Switching, Build a Small Network, Number Systems, ICMP, IPv6 Addressing, Application Layer, Transport Layer, router configuration, Address Resolution, IPv4 addressing, and Network Layer concepts. The Data Link Layer bank was expanded with six items covering MAC sublayer responsibilities, CSMA/CD versus CSMA/CA, point-to-point versus multi-access topologies, Ethernet frame fields, and FCS error handling. The Network Topologies lesson was expanded from two to seven questions covering star, full-mesh, bus, ring, and extended-star layouts, including redundancy and failure scenarios. Internet Connections and Address Resolution were each expanded from five to eight questions, adding cable/DSL/fiber access comparisons and ARP broadcast/reply/cache behavior. Remaining work includes deeper route-configuration labs, practical subnetting variants, and systematic coverage checks against every lesson's concept list.
