# Semester 1 question bank audit

## Current bank snapshot

| Measure | Current value |
|---|---:|
| Active questions | **604** |
| Unique question IDs | 604 |
| Unique normalized prompts | 604 |
| Lesson IDs represented | 22 |
| Distinct concept tags | 607 |
| Concepts with only one question | **0** |
| Minimum questions per concept | **2** |
| Source-origin questions | 40 |
| AI-generated questions | 564 |

Every existing concept tag has at least two question records. This is a bank-coverage floor, not evidence that a learner has mastered each concept or that every source objective has been exhaustively taught.

### Concept exposure distribution

The current 607 concept tags are not evenly represented. This distribution makes the coverage floor visible and helps prioritize future depth work; it counts distinct question records per tag, not learner mastery.

| Questions per concept | Concept tags |
|---:|---:|
| 2 | 409 |
| 3 | 77 |
| 4 | 37 |
| 5 | 22 |
| 6 | 18 |
| 7 | 9 |
| 8 | 8 |
| 9 | 1 |
| 10 | 6 |
| 11 | 6 |
| 12 | 3 |
| 13 | 3 |
| 14 | 1 |
| 15 | 3 |
| 16 | 1 |
| 18 | 1 |
| 19 | 1 |
| 31 | 1 |

**Priority implication:** 409 concepts (67.4%) sit exactly at the two-question minimum. Future expansion should prioritize concepts with thin coverage and add varied assessment modes or applied contexts only when the source supports the underlying learning objective.

## Question formats

| Format | Questions |
|---|---:|
| Single choice | 231 |
| Multiple select | 34 |
| True / false | 1 |
| Fill in the blank | 52 |
| Matching | 99 |
| Ordering | 20 |
| Scenario / troubleshooting | 167 |
| **Total** | **604** |

## Difficulty

| Level | Questions |
|---|---:|
| 1 — Introductory | 45 |
| 2 — Foundational | 168 |
| 3 — Applied | 264 |
| 4 — Advanced | 105 |
| 5 — Challenging | 22 |

## Concept-depth expansion

The bank grew from 393 to 604 questions during the full expansion. The 211 additions comprise 195 AI-generated questions and sixteen source-origin questions. Two earlier records were reclassified as AI-generated because their images showed prompts but no answer key. Most additions reuse existing concept identifiers; the two Module 1 career questions add the networking-careers and ccna-certification tags, each used by both questions. The active bank now has 607 distinct tags. The two-question minimum is enforced by `scripts/validate-learning-data.mjs`, so a future edit that leaves a concept with fewer than two questions fails validation.

The expansion adds distinct practice across:
- IOS navigation, device setup, interface configuration, password handling, SSH-only VTY access, management SVIs, and verification commands.
- Ethernet frame processing, MAC/LLC roles, VLAN access/trunk behavior, unknown-unicast flooding, native VLANs, STP, duplex, and switching methods.
- IPv4 subnet membership, host ranges, VLSM, prefix sizing, routing tables, route recursion, static/default routes, and OSPF.
- IPv6 addressing, compression, EUI-64, SLAAC, DHCPv6, Neighbor Discovery, multicast, anycast, and coexistence.
- TCP connection setup, sequence and acknowledgment numbers, SACK, receive windows, congestion control, MSS/MTU, UDP, ports, DNS, DHCP, HTTP, and file-sharing protocols.
- AAA, ACLs, firewall filtering, VPN/IPS, malware, attack categories, vulnerabilities, and physical security.
- DHCP/APIPA, DNS cache and scope faults, CDP, ping/traceroute, route-table analysis, traffic baselines, protocol-analyzer capture planning, and multi-device VLAN troubleshooting.
- Two additional Module 17 applied scenarios compare measured latency with a documented baseline and select representative protocol-analyzer capture conditions.
- Two additional Module 17 application questions assess QoS prioritization for voice/video and the roles of QoS, RTP, RTCP, and IP telephony.

## Additional visually verified source questions

The original OneNote image payloads were recovered and matched to the OCR export by SHA-256. Eighteen additional image assets have now been visually inspected across three follow-up passes. A further visual triage pass inspected 77 unique candidate images containing non-template blue marks or diagram components; 18 were already linked to source questions, and the remaining 59 did not provide a new unambiguous answer key (most showed unmarked question slides, duplicate diagrams, or Packet Tracer task screens). These include twelve new source-origin questions (one supported by two connector images) and five additional image references linked to existing questions.

| Image reference | Active question | Verified answer |
|---|---|---|
| `IMG-0063` | `s1-media-selection-001` | Signal distance and installation environment |
| `IMG-0256` | `s3-destination-port-001` | Transport layer |
| `IMG-0271` | `s3-decode-protocol-stack-source-001` | Ethernet → IP → TCP → HTTP |
| `IMG-0292` | `s3-open-standards-source-001` | Interoperability across different operating systems |
| `IMG-1315` | `s14-transport-multiplexing-source-001` | Transport ports deliver data to the correct browser/application |
| `IMG-1756` | `s11-subnet-mask-40-hosts-source-001` | 255.255.255.192 (/26) |
| `IMG-0270` | `s3-source-mac-001` | Data Link layer |
| `IMG-0282` | `s3-destination-mac-layer-002` | Data Link layer |
| `IMG-0287` | `s3-destination-port-001` | Transport layer |
| `IMG-0322` | `s3-source-port-layer-002` | Transport layer |
| `IMG-0816` | `s9-arp-cache-aging-source-001` | ARP cache aging timer |
| `IMG-0348` | `s4-utp-identification-source-001` | Unshielded twisted-pair cable |
| `IMG-1725`, `IMG-1872` | `s4-rj45-connector-source-001` | RJ-45 / 8P8C connector |
| `IMG-0306` | `s3-destination-ip-layer-source-001` | Network layer |
| `IMG-0314` | `s3-source-ip-layer-source-001` | Network layer |
| `IMG-0279` | `s3-application-data-layer-source-001` | Application layer |
| `IMG-0779`, `IMG-0624` | `s8-diffserv-priority-source-001` | Differentiated Services field carries QoS classification information |
| `IMG-0598` | `s8-host-routing-table-source-001` | Host maintains a local routing table with loopback, local, and default routes |
| `IMG-0639` | `s8-router-forwarding-steps-source-001` | Router decapsulates, selects a route using the destination IPv4 address, and re-encapsulates for the next hop |

There are now 36 source-origin image-question associations plus nine visually reviewed images used as context for AI-generated applied questions (45 total image-question associations). Four false-positive image candidates remain excluded. Of the 766 unique unresolved candidate images, 744 remain for visual review; duplicate asset records mean 750 unresolved records remain. Do not promote an OCR candidate solely because its text resembles an active question.

## Provenance rules

- `origin: "source"` is reserved for questions whose prompt and answer are supported by recovered source text or a visually checked answer mark/diagram.
- `origin: "ai-generated"` identifies new questions or questions whose answer is derived from source material rather than explicitly supplied in the original.
- `sourceRefs` points to `block-XXXX` text blocks or `IMG-XXXX` image assets.
- Existing source prompts are linked to additional source images instead of duplicating the same question.
- Every active question maps to one or more existing concept tags. The adaptive engine updates each mapped concept from learner responses.

## Validation

Distractor-feedback validation is isolated in `scripts/distractor-validation.mjs`. When a question supplies per-choice feedback, the data validator requires every feedback key to reference an existing incorrect choice and every explanation to contain non-empty text. Regression tests cover valid mappings, correct-answer IDs, unknown IDs, blank explanations, and malformed maps. Forty-one questions now include targeted explanations for incorrect choices, totaling 122 question-specific distractor explanations. Coverage includes ICMP troubleshooting, filtered ping, traceroute and TTL behavior, IPv6 Hop Limit, IOS interface verification and configuration saving, MAC learning and unknown-unicast forwarding, longest-prefix match, default-gateway addressing, ARP, DNS ports and troubleshooting, administratively disabled interfaces, DHCP relay and DNS option faults, missing routes, duplex mismatches, static-route next hops, Ethernet CRC/FCS errors, and multi-VLAN fault isolation. The feedback parser rejects malformed trailing entries, duplicate keys, invalid string escapes, and empty maps; dedicated regression tests cover these cases.

Matching-answer validation is isolated in `scripts/matching-validation.mjs`. Dedicated regression tests reject missing or duplicate pair mappings, duplicate targets, unknown IDs, declared-answer mismatches, non-string or blank IDs, malformed top-level inputs, and mappings with extra delimiters. The learning test command runs these cases alongside adaptive-engine tests for weak/unseen-concept prioritization, bounded selection, recent-question fallback, progress immutability, mastery/review scheduling, ordering shuffles, and early lesson diversity.

GitHub Actions run #42682183545 passed on commit `111bc2b`, including the matching-answer regression tests. It validated the question bank, adaptive-engine behavior, dependency audit, Astro type-check/build, local links across 57 generated HTML pages, Cisco lesson/quiz integrity (30 lessons and 95 legacy quiz questions), and preserved routes. Playwright exercised all 57 routes at desktop and mobile sizes, completed a ten-question practice session at both viewports, and verified feedback, local persistence, and dashboard updates. axe-core reported zero violations across the tested routes. Later changes to matching-input validation and adaptive lesson diversity are checked by the current PR workflow; consult the PR Checks tab for the latest result.

Five additional diagram-based AI-generated questions now use verified visual context: IPv6 hierarchical subnet-ID allocation (IMG-0944), IPv4 subnet-table host membership (IMG-1070), first-hop Layer 2/Layer 3 address selection (IMG-1567), equal-size subnet-mask selection for four host groups (IMG-1584), and UTP cable selection for console/switch/router links (IMG-2104). The coverage report is regenerated from the active seed data and lists per-lesson counts, concept exposure, formats, and difficulty distribution. The latest four Module 17 additions bring the bank to 604 questions; the regenerated report records 50 questions across 85 concept tags in `small-network`.

## Remaining source and review limitations

- The OCR export's original ZIP contains metadata and OCR text, not the original image bytes. The original OneNote `.one` file was available separately and all 2,646 manifest assets were recovered from it with exact SHA-256 matches. See [image recovery instructions](./semester-1-image-recovery.md).
- Twenty-two additional question-image associations have been manually checked across the follow-up passes. All 772 unresolved candidate records have been screened at thumbnail resolution. The remaining 744 unique images still require full-size review where an answer or concept depends on a diagram, screenshot, or answer mark. Many are repeated unmarked question slides, lesson summaries, or Packet Tracer activity screens.
- The source-concept inventory includes a first-pass objective-to-question map for all 17 modules. It is not yet a page-by-page audit of every question, answer, diagram, and Packet Tracer activity.
- Desktop/mobile Chromium viewport tests and automated axe checks are not substitutes for a manual pass on physical devices, assistive technologies, or real learner sessions.
- Learner progress is browser-local; cross-device account sync and a backend are outside this PR.

## Review guide

- `src/data/learning/semester-1-seed.ts` — active question bank.
- `src/lib/learning/` — adaptive engine, progress model, and storage.
- `src/pages/cisco/practice/` and `src/pages/cisco/progress/` — practice and dashboard.
- `scripts/validate-learning-data.mjs` — question structure and minimum concept-exposure validation.
- `scripts/test-adaptive-engine.mjs` — adaptive-engine regression tests.
- `scripts/test-browser.mjs` — desktop/mobile browser and accessibility smoke tests.
- `docs/semester-1-coverage-report.md` — generated bank coverage.
- `docs/semester-1-source-concept-inventory.md` — source topic mapping and review status.
- `docs/semester-1-image-audit.md` and `docs/semester-1-ocr-candidate-triage.md` — image/OCR audit.
- `docs/semester-1-image-recovery.md` — reproducible OneNote image recovery.
