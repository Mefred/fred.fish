# Semester 1 question bank audit

## Current bank snapshot

| Measure | Current value |
|---|---:|
| Active questions | **585** |
| Unique question IDs | 585 |
| Unique normalized prompts | 585 |
| Lesson IDs represented | 22 |
| Distinct concept tags | 605 |
| Concepts with only one question | **0** |
| Minimum questions per concept | **2** |
| Source-origin questions | 40 |
| AI-generated questions | 545 |

Every existing concept tag has at least two question records. This is a bank-coverage floor, not evidence that a learner has mastered each concept or that every source objective has been exhaustively taught.

## Question formats

| Format | Questions |
|---|---:|
| Single choice | 228 |
| Multiple select | 33 |
| True / false | 1 |
| Fill in the blank | 52 |
| Matching | 97 |
| Ordering | 19 |
| Scenario / troubleshooting | 155 |
| **Total** | **585** |

## Difficulty

| Level | Questions |
|---|---:|
| 1 — Introductory | 45 |
| 2 — Foundational | 166 |
| 3 — Applied | 250 |
| 4 — Advanced | 102 |
| 5 — Challenging | 22 |

## Concept-depth expansion

The bank grew from 393 to 585 questions during the full concept-depth effort. The 192 additions consist of 176 AI-generated applied questions and sixteen source-origin questions. All additions reuse existing concept identifiers; the number of distinct tags remains 605. The two-question minimum is enforced by `scripts/validate-learning-data.mjs`, so a future edit that leaves a concept with fewer than two questions fails validation.

The expansion adds distinct practice across:
- IOS navigation, device setup, interface configuration, password handling, SSH-only VTY access, management SVIs, and verification commands.
- Ethernet frame processing, MAC/LLC roles, VLAN access/trunk behavior, unknown-unicast flooding, native VLANs, STP, duplex, and switching methods.
- IPv4 subnet membership, host ranges, VLSM, prefix sizing, routing tables, route recursion, static/default routes, and OSPF.
- IPv6 addressing, compression, EUI-64, SLAAC, DHCPv6, Neighbor Discovery, multicast, anycast, and coexistence.
- TCP connection setup, sequence and acknowledgment numbers, SACK, receive windows, congestion control, MSS/MTU, UDP, ports, DNS, DHCP, HTTP, and file-sharing protocols.
- AAA, ACLs, firewall filtering, VPN/IPS, malware, attack categories, vulnerabilities, and physical security.
- DHCP/APIPA, DNS cache and scope faults, CDP, ping/traceroute, route-table analysis, traffic baselines, and multi-device VLAN troubleshooting.

## Additional visually verified source questions

The original OneNote image payloads were recovered and matched to the OCR export by SHA-256. Eighteen additional image assets have now been visually inspected across three follow-up passes. These include twelve new source-origin questions (one supported by two connector images) and five additional image references linked to existing questions.

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

There are now 34 source-origin image-question associations plus four visually reviewed images used as context for AI-generated applied questions (38 total image-question associations). Four false-positive image candidates remain excluded. Of the 766 unique unresolved candidate images, 744 remain for visual review; duplicate asset records mean 750 unresolved records remain. Do not promote an OCR candidate solely because its text resembles an active question.

## Provenance rules

- `origin: "source"` is reserved for questions whose prompt and answer are supported by recovered source text or a visually checked answer mark/diagram.
- `origin: "ai-generated"` identifies new questions or questions whose answer is derived from source material rather than explicitly supplied in the original.
- `sourceRefs` points to `block-XXXX` text blocks or `IMG-XXXX` image assets.
- Existing source prompts are linked to additional source images instead of duplicating the same question.
- Every active question maps to one or more existing concept tags. The adaptive engine updates each mapped concept from learner responses.

## Validation

GitHub Actions validates the question bank, adaptive-engine behavior, Astro type-check/build, generated links, Cisco lesson/quiz integrity, preserved routes, desktop/mobile browser behavior, and automated accessibility checks. The browser test suite runs a complete ten-question practice session at both desktop and mobile viewports and verifies feedback, local persistence, and dashboard updates.

The coverage report is regenerated from the active seed data and lists per-lesson counts, concept exposure, formats, and difficulty distribution.

## Remaining source and review limitations

- The OCR export's original ZIP contains metadata and OCR text, not the original image bytes. The original OneNote `.one` file was available separately and all 2,646 manifest assets were recovered from it with exact SHA-256 matches. See [image recovery instructions](./semester-1-image-recovery.md).
- Twenty-two additional question-image associations have been manually checked across the follow-up passes. The remaining 744 unique unresolved candidate images still need visual review. Some are duplicate slides, lesson summaries, Packet Tracer activities, or diagram-dependent questions rather than standalone quiz questions.
- The source-concept inventory is a first-pass transcription, not a fully reviewed atomic objective-to-question-tag matrix for every lesson.
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
