# Semester 1 question bank audit

**Current bank:** 342 unique questions  
**Concept tags:** 563 unique concept identifiers  
**Source provenance:** 24 source questions with prompt/answer support from recovered text or visually checked source screenshots; 318 AI-generated questions derived from recovered notes, source screenshots, and lesson concepts.

## Recent expansion

The latest twelve source-grounded batches added 120 distinct questions, followed by fifteen AI-generated practice questions for Network Topologies, Internet Connections, Address Resolution, Physical Layer, and ICMP:
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

A further five applied Network Layer scenarios exercise two-router static-route configuration, missing return paths, route-table interpretation, longest-prefix match, and configuration persistence after reload.

Added eighteen AI-generated Physical Layer questions beyond the original six. The expanded lesson now has 24 questions covering the data-link-to-physical-layer handoff, bandwidth, throughput, goodput and latency, copper cable types and interference, T568A/T568B wiring conventions, STP/coax selection, fiber modes/dispersion/connectors, wireless standards, WLAN contention, and secure AP/NIC deployment.

Added five AI-generated packet-header practice questions for Module 8. Two assess IPv4 field roles and packet inspection (including Protocol, TTL, and Header Checksum); three assess IPv6 field roles, Flow Label interpretation, and IPv4/IPv6 base-header differences. The additions use the recovered text block reference `block-0073`; they are not marked as verbatim source questions. The Network Layer lesson now has 28 questions and includes dedicated IPv4/IPv6 header concepts.

## Format coverage

| Format | Questions |
|---|---:|
| Single choice | 123 |
| Multiple select | 18 |
| True / false | 1 |
| Fill in the blank | 34 |
| Matching | 55 |
| Ordering | 13 |
| Scenario / troubleshooting | 85 |
| **Total** | **329** |

## Difficulty coverage

| Difficulty | Questions |
|---|---:|
| 1 — Introductory | 34 |
| 2 — Foundational | 89 |
| 3 — Applied | 135 |
| 4 — Advanced | 64 |
| 5 — Challenging | 7 |

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

The Module 8 source inventory decomposes the IPv4 and IPv6 packet-header objectives into field-level concepts and maps the first five corresponding practice questions to those targets. The new items are AI-generated from recovered source notes and cite `block-0073`; they are not counted as source-origin questions. Diagram-level visual verification remains outstanding. See the Module 8 packet-header concept decomposition in the source-concept inventory.

## Module 3 source mapping update

Completed a first-pass topic-to-question mapping for all seven Module 3 (Protocols and Models) objectives in the source-concept inventory. The lesson now has 23 questions. Five AI-generated questions address communication-rule categories, protocol-suite purpose, ISOC/IAB/IETF/IRTF responsibilities, TCP/IP layer roles, and decapsulation. All seven source topics now have direct practice evidence; remaining work is deeper applied variation, visual source verification, and quality review.

## Coverage and remaining work

A generated per-lesson breakdown of active question counts, distinct concept tags, format/difficulty distribution, represented concept IDs, and per-concept question exposure is maintained in [the coverage report](./semester-1-coverage-report.md). The first-pass [source-concept inventory](./semester-1-source-concept-inventory.md) now transcribes the recovered module/topic objectives and records source-review status. It is not yet a complete atomic-concept inventory or a topic-to-question-tag mapping, so it must not be used to claim definitive zero-coverage gaps. Single-question concept tags remain under-practiced candidates, not proof of missing source concepts.

The 329-question bank is an implementation-stage bank, not the final target. The source archive contains substantial diagram-dependent content and question-like screenshots that still need visual answer-key review. Continue expanding the bank only with distinct, concept-tagged items; do not treat raw OCR candidates as verified questions.

Screenshot-derived additions now cover selected Basic Switch and End Device Configuration, Protocols and Models, Physical Layer, Data Link Layer, Ethernet Switching, Build a Small Network, Number Systems, ICMP, IPv6 Addressing, Application Layer, Transport Layer, router configuration, Address Resolution, IPv4 addressing, and Network Layer concepts. The Data Link Layer bank now has 13 questions. Four new AI-generated items add frame-field matching, WAN topology matching, controlled-access application, and half/full-duplex matching. Existing questions cover LLC/MAC roles, CSMA/CD versus CSMA/CA, point-to-point versus multi-access links, and FCS error handling. The Network Topologies lesson was expanded from two to seven questions covering star, full-mesh, bus, ring, and extended-star layouts, including redundancy and failure scenarios. Internet Connections and Address Resolution were each expanded from five to eight questions, adding cable/DSL/fiber access comparisons and ARP broadcast/reply/cache behavior. Physical Layer grew from six to eight questions with single-mode fiber and attenuation scenarios; ICMP grew from seven to nine with Destination Unreachable and ICMP filtering troubleshooting. Remaining work includes deeper route-configuration labs, practical subnetting variants, and comparison against an authoritative concept inventory for every lesson.


The IPv4 Addressing bank was expanded with five applied subnetting items: locating a host's /27 network, calculating a /27 broadcast address, sizing a subnet for 50 hosts, identifying a valid host in a /26, and interpreting the effect of changing a /24 to /26. These complement the existing prefix conversion, host-capacity, /22 broadcast, and VLSM exercises. The generated coverage report now reflects 15 IPv4 Addressing questions. All five additions are explicitly marked AI-generated and cite related subnetting source images; they are not represented as verbatim source questions.


The Basic Device Configuration lesson now includes four additional applied troubleshooting scenarios: configuring a management SVI, setting a Layer 2 switch default gateway for remote management, interpreting an `up/down` interface state after enabling a port, and diagnosing an unsaved hostname change after reload. The bank now contains 17 questions for this lesson. These items are marked AI-generated and are intended to test command selection and interpretation of IOS operational state rather than rote command recall.


The Network Layer bank now contains four additional applied route-configuration and verification scenarios. These cover verifying static routes with `show ip route`, fault-isolating an unresolved static-route next hop, configuring a branch default route, and interpreting the `S*` default-route entry in IOS routing-table output. All five are marked AI-generated and cite the relevant routing screenshots; they test configuration and operational interpretation rather than verbatim source recall.


IPv4 Addressing now includes five additional applied subnetting/VLSM exercises: /29 network and broadcast identification, /23 broadcast calculation, subnet count and usable-host capacity when splitting a /24 into /27s, sizing a subnet for 100 hosts, and allocating a second VLSM subnet after a /25 allocation. These are AI-generated practice items tied to the subnetting source screenshots. The lesson now has 20 active questions.


The Physical Layer bank has now grown to 24 questions and 51 concept tags. In addition to the eight earlier expansions, four new AI-generated items add goodput, latency, T568A/T568B cable-type matching, and secure WLAN deployment with AP/NIC requirements. RJ-45 termination exhibits, cable-category identification, and connector/patch-cord visuals remain pending direct image review. These items use existing Physical Layer image references already represented in the bank and are mapped in the Module 4 first-pass topic-to-question table. Visual confirmation of the exact connector and cable exhibits remains outstanding.


The Number Systems bank has grown from eight to 16 questions. Eight AI-generated items add decimal/hexadecimal and hexadecimal/binary conversions, positional-notation matching, IPv6 hextet identification and counting, binary-octet arithmetic, and IPv4 dotted-decimal reasoning. The Module 5 first-pass topic mapping records the current coverage and remaining need for longer mixed-octet and IPv6 conversion drills.

## Module 1 source mapping update

Completed a first-pass topic-to-question mapping for all nine Module 1 (Networking Today) topic objectives in docs/semester-1-source-concept-inventory.md. Seven objectives have related active questions; two currently lack direct practice: **Networks Affect our Lives** and **The IT Professional**. The mapping also records follow-up checks for dial-up/cellular access, smart-home examples, and lesson-scope alignment. These are source-audit findings, not a claim that Module 1 is complete.

## Module 2 source mapping update

Completed a first-pass topic-to-question mapping for all eight Module 2 (Basic Switch and End Device Configuration) objectives in docs/semester-1-source-concept-inventory.md. The mapping identifies partial coverage for IOS access, command syntax, ports/SVIs, host IP configuration, and connectivity verification. It also flags two near-duplicate command-keyword questions and distinguishes cross-lesson references from coverage inside the intended Module 2 lesson. No questions were added in this mapping pass; the recorded gaps are targets for source-verified expansion.


## Module 6 source mapping update

Completed a first-pass topic-to-question mapping for the Module 6 Data Link Layer objectives: purpose of the layer, topologies and media access, and data-link frame structure. The lesson now has 13 questions. Four AI-generated items deepen frame-field, WAN topology, controlled-access, and duplex-mode practice. Visual topology and frame exhibits still require direct image verification.


## Module 7 source mapping update

Completed a first-pass topic-to-question mapping for the Module 7 Ethernet Switching objectives. The lesson now has 16 questions. Four AI-generated items add OUI identification, MAC-address movement between switch ports, switching-method trade-offs, and switch memory-buffering comparison. MAC-table and switch-buffer diagrams still require direct visual verification.


## Module 9 source mapping update

Completed a first-pass topic-to-question mapping for Module 9 Address Resolution. The lesson now has 11 questions. Three AI-generated items add remote-network default-gateway resolution, the roles of all five ICMPv6 Neighbor Discovery messages, and ARP cache-expiration behavior. ARP/ND topology exhibits still need direct visual verification.


## Module 10 source mapping update

Completed a first-pass topic-to-question mapping for Module 10 Basic Router Configuration. The lesson now has 11 questions. Three AI-generated items add router interface command ordering, concise interface verification, and host default-gateway selection. Packet Tracer interface and gateway exhibits still need direct visual verification.


## Module 11 source mapping update

Completed a first-pass topic-to-question mapping for Module 11 IPv4 Addressing. The lesson has 20 active questions with strong subnet-calculation coverage. The mapping identifies remaining gaps in unicast/broadcast/multicast delivery semantics, public/reserved IPv4 address categories, and the purpose of network segmentation. These are expansion targets; the current question count is not treated as proof of complete objective coverage.


## Module 12 source mapping update

Completed a first-pass topic-to-question mapping for Module 12 IPv6 Addressing. Three AI-generated items add Router Advertisement M/O flag interpretation, IPv6 subnet-ID planning, and Duplicate Address Detection. The lesson now has 19 questions. Anycast behavior and assigned multicast group scope remain practice gaps.


## Module 13 source mapping update

Completed a first-pass topic-to-question mapping for Module 13 ICMP. Four AI-generated items add ICMPv4 Destination Unreachable code matching, loopback testing, default-gateway testing, and IPv6 Hop Limit expiration. The lesson now has 13 questions. A full multi-hop traceroute-output diagnosis exercise and more ICMPv6 unreachable-code practice remain useful.


## Module 14 source mapping update

Completed a first-pass topic-to-question mapping for Module 14 Transport Layer. Four AI-generated questions add duplicate-ACK loss recovery, SACK, MSS/MTU comparison, and flow-versus-congestion-control distinctions. The lesson now has 17 questions. TCP termination and detailed sliding-window calculations remain practice gaps.


## Module 15 source mapping update

Completed a first-pass topic-to-question mapping for Module 15 Application Layer. Four AI-generated questions add HTTP method matching, presentation/session responsibilities, nslookup troubleshooting, and FTP/TFTP/SMB comparison. The lesson now has 14 questions. DHCPv6 message flow and HTTPS security behavior remain practice gaps.


## Module 16 source mapping update

Completed a first-pass topic-to-question mapping for Module 16 Network Security Fundamentals. Three AI-generated questions add malware-type, attack-category, and vulnerability-category matching. The lesson now has 11 questions. Physical threat categories, specific attack techniques, firewall modes, and hands-on SSH/device-hardening commands remain gaps.


## Module 17 source mapping update

Completed a first-pass topic-to-question mapping for Module 17 Build a Small Network. The lesson has nine active questions covering troubleshooting methodology, DNS, default gateways, interface verification, traceroute, CDP, debug safety, and redundancy. Remaining gaps include device selection, host command interpretation, extended ping/traceroute, network baselines, and multi-symptom troubleshooting.


## Gap expansion update

Added two Module 11 questions for public/private/shared/link-local IPv4 address categories and subnetting to reduce broadcast-domain size; two Module 12 questions for anycast and assigned multicast groups; and two Module 16 questions for IOS device-hardening commands and SSH configuration order. Module 11 still needs direct unicast/broadcast/multicast delivery-semantics practice. Module 16 now covers physical-threat categories, VPN/IPS roles, firewall filtering modes, and core IOS hardening commands. Specific access-attack techniques and a full hardening lab remain gaps.


## Module 16 security-control expansion

Added three additional AI-generated questions for firewall filtering modes, physical threat categories, and VPN/IPS/AAA roles. The Network Security lesson now has 16 active questions.


## Module 17 host/IOS command expansion

At that stage, the lesson had ten questions after adding an AI-generated matching exercise for seven IOS show commands and their diagnostic purposes. The remaining gaps were addressed in later Module 17 expansions below.


## Source question indexing

Added `docs/semester-1-source-question-index.md` to preserve selected source-question identifiers, source line locations, extracted answer text, and answer-quality corrections. Module 11 now includes source-origin broadcast and multicast questions (Q194 and Q201) plus an AI-generated unicast item that explicitly corrects the conflicting extracted answer associated with Q189. Q190 was not promoted because its extracted multicast range is incorrect.


## Module 17 IPv6 interface verification

At that stage, the lesson had 11 questions after adding the source-origin Q357 item for IPv6 interface verification. Later Module 17 additions are documented below.


## Module 17 host, extended-command, and device-selection expansion

Added six distinct questions to the small-network lesson, bringing it to 17 questions:
- One source-origin question (Q352) tests IOS extended ping and selecting a source address.
- Five AI-generated applied questions test Windows APIPA/DHCP diagnosis from ipconfig /all, host ARP-cache inspection with arp -a, IOS extended traceroute source selection, small-network device-selection criteria, and first-step isolation when the host's physical link is down.
- The source notes also identify ipconfig /displaydns, ipconfig /release, ipconfig /renew, Linux/macOS host commands, network baselines, and trace output interpretation as further practice targets. These are not claimed complete by this batch.


## Module 17 DNS, baseline, trace, and performance troubleshooting

Added five applied questions to the small-network lesson, bringing it to 22 questions:
- DNS failure isolation with `nslookup` after numeric-IP reachability succeeds.
- DHCP lease refresh using `ipconfig /release` followed by `ipconfig /renew`.
- Interpreting a missing intermediate traceroute response when later hops and the destination respond.
- Comparing abnormal WAN utilization against an established network baseline and identifying traffic sources.
- Diagnosing a duplex mismatch from interface state and error/collision counters.

These additions address several previously listed gaps. Remaining practice should include reading realistic interface-counter snapshots, distinguishing DNS cache from authoritative/query results, and longer multi-stage fault-isolation cases.


## Module 17 fault-isolation expansion

Added two applied scenarios to the Small Network question bank, bringing it to 24 questions:
- A controlled interface-counter diagnosis uses rising CRC/input errors, matching duplex settings, and no late collisions to distinguish physical-path faults from an assumed duplex mismatch.
- A staged host-to-router diagnosis uses successful local reachability and an inspected routing table with no matching/default route to identify the missing remote route as the next issue to investigate.

These questions use the recovered small-network source block as conceptual grounding, but are AI-generated practice rather than verbatim source questions. The active bank now contains 342 questions: 24 source-origin and 318 AI-generated.
