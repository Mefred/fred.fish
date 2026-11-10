# Semester 1 question bank audit

## Current bank snapshot

| Measure | Current value |
|---|---:|
| Active questions | **629** |
| Unique question IDs | 629 |
| Unique normalized prompts | 629 |
| Lesson IDs represented | 22 |
| Distinct concept tags | 613 |
| Concepts with only one question | **0** |
| Minimum questions per concept | **2** |
| Source-origin questions | 42 |
| AI-generated questions | 587 |

Every existing concept tag has at least two question records. This is a bank-coverage floor, not evidence that a learner has mastered each concept or that every source objective has been exhaustively taught.

### Concept exposure distribution

The current 613 concept tags are not evenly represented. This distribution makes the coverage floor visible and helps prioritize future depth work; it counts distinct question records per tag, not learner mastery.

| Questions per concept | Concept tags |
|---:|---:|
| 2 | 405 |
| 3 | 78 |
| 4 | 39 |
| 5 | 23 |
| 6 | 19 |
| 7 | 7 |
| 8 | 9 |
| 9 | 6 |
| 10 | 5 |
| 11 | 6 |
| 12 | 2 |
| 13 | 2 |
| 14 | 3 |
| 15 | 2 |
| 16 | 4 |
| 18 | 1 |
| 20 | 1 |
| 31 | 1 |

**Priority implication:** 405 concepts (66.1%) sit exactly at the two-question minimum.

## Question formats

| Format | Questions |
|---|---:|
| Single choice | 235 |
| Multiple select | 38 |
| True / false | 1 |
| Fill in the blank | 52 |
| Matching | 91 |
| Ordering | 22 |
| Scenario / troubleshooting | 190 |
| **Total** | **629** |

## Difficulty

| Level | Questions |
|---|---:|
| 1 — Introductory | 46 |
| 2 — Foundational | 169 |
| 3 — Applied | 271 |
| 4 — Advanced | 121 |
| 5 — Challenging | 22 |

## Concept-depth expansion

The bank grew from 393 to 629 questions during the full expansion. The 236 additions comprise 218 AI-generated questions and eighteen source-origin questions. Two earlier records were reclassified as AI-generated because their images showed prompts but no answer key. Most additions reuse existing concept identifiers; the two Module 1 career questions add the networking-careers and ccna-certification tags, each used by both questions. The active bank now has 613 distinct tags. The two-question minimum is enforced by `scripts/validate-learning-data.mjs`, so a future edit that leaves a concept with fewer than two questions fails validation.

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
- Two further Module 17 applied questions assess employee endpoint utilization snapshots and the value of comparing resource/application use over time.

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

There are 40 source-origin image-question associations plus fifteen unique visually reviewed images used as context for AI-generated applied questions (55 combined reviewed associations). Four false-positive image candidates remain excluded. The original OCR export still labels 744 unique candidate images (750 asset records including duplicate references) as unresolved; this is an export-status count, not the current manual-review backlog. Manual review batches are tracked separately in the repository and have not been written back to the Library ZIP. Do not promote an OCR candidate solely because its text resembles an active question. Across batches 1–4, 144 candidates were screened at high-resolution contact-sheet scale; 144 have been opened individually at native resolution and zero remain contact-sheet-only. Follow-ups 5–6 inspected 26 new unique candidates plus two previously reviewed images as consistency checks and found no new associations. Follow-ups 7–10 separately inspected 40 additional images outside this 144-candidate set; they added one source-origin association (IMG-0619) and one AI-generated routing-table question based on IMG-0601. Follow-ups 11–12 opened twenty images from batch 4, thirteen of which were new unique inspections because seven had already been checked in follow-up 6. Follow-ups 13–14 opened fourteen further unique candidates; follow-up 15 opened ten additional unique candidates from batch 3. All answer controls were empty; IMG-0562's unmarked topology was used for one AI-generated scenario. Across both workstreams, 184 unique images have now been individually inspected. Follow-up 13 added one AI-generated first-hop destination-MAC scenario using IMG-0562 as visual context. Contact-sheet screening alone is not sufficient to rule out small answer marks or diagram details. See the native follow-up logs for the decisions.

## Provenance rules

- `origin: "source"` is reserved for questions whose prompt and answer are supported by recovered source text or a visually checked answer mark/diagram.
- `origin: "ai-generated"` identifies new questions or questions whose answer is derived from source material rather than explicitly supplied in the original.
- `sourceRefs` points to `block-XXXX` text blocks or `IMG-XXXX` image assets.
- Existing source prompts are linked to additional source images instead of duplicating the same question.
- Every active question maps to one or more existing concept tags. The adaptive engine updates each mapped concept from learner responses.

## Validation

Distractor-feedback validation is isolated in `scripts/distractor-validation.mjs`. When a question supplies per-choice feedback, the data validator requires every feedback key to reference an existing incorrect choice and every explanation to contain non-empty text. Regression tests cover valid mappings, correct-answer IDs, unknown IDs, blank explanations, and malformed maps. Thirty-eight questions now include targeted explanations for incorrect choices, totaling 112 question-specific distractor explanations (counted directly from the active seed data). Coverage includes ICMP troubleshooting, filtered ping, traceroute and TTL behavior, IPv6 Hop Limit, IOS interface verification and configuration saving, MAC learning and unknown-unicast forwarding, longest-prefix match, default-gateway addressing, ARP, DNS ports and troubleshooting, administratively disabled interfaces, DHCP relay and DNS option faults, missing routes, duplex mismatches, static-route next hops, Ethernet CRC/FCS errors, and multi-VLAN fault isolation. The feedback parser rejects malformed trailing entries, duplicate keys, invalid string escapes, and empty maps; dedicated regression tests cover these cases.

Matching-answer validation is isolated in `scripts/matching-validation.mjs`. Dedicated regression tests reject missing or duplicate pair mappings, duplicate targets, unknown IDs, declared-answer mismatches, non-string or blank IDs, malformed top-level inputs, and mappings with extra delimiters. The learning test command runs these cases alongside adaptive-engine tests for weak/unseen-concept prioritization, bounded selection, recent-question fallback, progress immutability, mastery/review scheduling, ordering shuffles, and early lesson diversity.

Site CI run #649 passed on commit `79637c2`, including the dependency audit, question-bank and adaptive/parser regression tests, Astro type-check/build, generated local-link validation, desktop/mobile Playwright practice sessions, persistence/dashboard checks, Cisco lesson/quiz integrity, preserved routes, and axe-core accessibility checks. It completed successfully with zero reported accessibility violations. Later commits continue to receive the same full workflow; use the PR Checks tab to verify the latest head rather than treating any in-progress or queued run as passed.

Six additional diagram-based AI-generated questions now use verified visual context: IPv6 hierarchical subnet-ID allocation (IMG-0944), IPv4 subnet-table host membership (IMG-1070), first-hop Layer 2/Layer 3 address selection (IMG-1567), equal-size subnet-mask selection for four host groups (IMG-1584), and UTP cable selection for console/switch/router links (IMG-2104). The coverage report is regenerated from the active seed data and lists per-lesson counts, concept exposure, formats, and difficulty distribution. The fifteen Module 17 additions brought the bank to 616 questions before the subsequent Module 8 routing-table expansion; the regenerated report records 61 questions across 88 concept tags in `small-network`; subsequent Module 8 additions included a routing-table matching question, a source-origin IPv4 Protocol-field question, and an AI-generated first-hop destination-MAC scenario. Ten later questions expanded Modules 14–16; the current bank contains 629 questions across 613 concepts. The newest pairs assess network applications versus application-layer services and the ability of one server to provide multiple services. Three further AI-generated questions add source-grounded macOS host command practice for `ifconfig`, `networksetup -listallnetworkservices`, and `networksetup -getinfo`. Two additional applied design scenarios assess device capacity/selection and a documented, device-type-based IP addressing scheme. A new source-origin coaxial-cable identification question uses two verified cable images; an additional AI-generated first-hop destination-MAC scenario now uses IMG-0562 as a verified topology reference; the existing UTP question now includes a second verified source image.

## Remaining source and review limitations

- The OCR export's original ZIP contains metadata and OCR text, not the original image bytes. The original OneNote `.one` file was available separately and all 2,646 manifest assets were recovered from it with exact SHA-256 matches. See [image recovery instructions](./semester-1-image-recovery.md).
- All 772 unresolved candidate records have been screened at thumbnail resolution. The original export's 744 unique-image unresolved status (750 records including duplicates) is not a current full-size-review count. The detailed batch 1–4 review has screened and opened all 144 candidates individually at native resolution (144/144; zero contact-sheet-only candidates). Follow-ups 7–10 separately inspected 40 additional images outside that fixed set, for 184 unique native-resolution inspections overall. Any future image review must be scoped as a new batch rather than counted as unfinished work from the original 144.
- The source-concept inventory now contains content-level audit sections for all 17 modules, with active question counts, provenance, source alignment, duplicate/scope findings, and remaining validation work. This does not mean any module is fully signed off: native-resolution exhibit checks and source lab/Packet Tracer execution remain open.
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


### Latest continuation update (November 9, 2026 — Modules 4–17 audit reconciliation)

- Added the missing Module 4 Physical Layer content audit. The source-concept inventory now has content-level audit sections for all 17 modules. Module 1–3 are first-pass content reviews; Modules 4–17 have expanded objective/question/duplicate/scope findings. No module is considered fully signed off while visual and activity checks remain incomplete.
- Audited Module 4's 44 active questions: three source-origin and 41 AI-generated. The audit covers signaling, bandwidth/throughput/goodput/latency, UTP/STP/coax, TIA/EIA-568, fiber, connectors, wireless standards, interference, and the two source Packet Tracer activities.
- Corrected the Module 4 audit's cable-type interpretation after checking the actual answer mappings: the pinout question tests same/different wiring standards; the applied question tests traditional unlike/like device types. They are compatible, not contradictory.
- Updated the coverage-report generator and report footer to reflect that a content-level source inventory now exists for all 17 modules. The coverage report still measures question tags, not mastery or module sign-off.
- Latest-head CI run #758 failed during `validate:learning` because the source inventory referenced two nonexistent Module 4 question IDs: `s4-fiber-modes-match-001` and `s4-wireless-deployment-001`. Both were corrected to the actual active IDs (`s4-fiber-mode-match-001` and `s4-wlan-deployment-security-001`) in commit `370b289`. A direct cross-check found **503 unique question references in the inventory and zero missing active IDs**.
- CI run **#759** is queued against the corrected head `370b2893596e015b38a69892bdae8cd814282741`. Its result is not yet confirmed.
- The PR remains draft and unmerged. Remaining work: question-bank duplicate cleanup/corrections, native-resolution exhibit review, Packet Tracer/source activity execution, physical-device/accessibility/learner testing, and final human review.


### Content correction — Module 16 firewall filtering

- Updated `s16-firewall-filtering-applied-002` to label payload inspection as **Deep application-aware inspection**. Its explanation now distinguishes this advanced capability from the source-level application filtering example, which evaluates application types/services using port numbers.
- No question count, concept tags, difficulty, answer key, or provenance changed. The correction is an instructional distinction, not a new source-origin claim.


### Question-bank cleanup — Module 17 scenario differentiation

- Reworked `s17-baseline-monitoring-applied-002` from a paraphrase of the 25%-to-90% anomaly question into a five-week utilization trend/capacity-forecasting scenario.
- Reworked `s17-trace-interpretation-applied-002` from a duplicate intermediate-hop timeout into a multi-hop RTT interpretation scenario where the large latency increase first appears at hop 2.
- Question count, concept tags, difficulty range, and source provenance remain unchanged. These are AI-generated applied scenarios, not new source-origin questions.


### Question-bank cleanup — Module 17 command and DHCP verification

- Reworked `s17-windows-dhcp-command-applied-002` from a duplicate `ipconfig /release` / `ipconfig /renew` ordering question into verification of the new lease using `ipconfig /all`.
- Reworked `s17-ios-show-commands-applied-002` from a second command-matching task into a five-command collection scenario covering active configuration, ARP mappings, protocol state, IOS/platform details, and concise IPv4 interface status. The full IOS command map remains in `s17-ios-show-commands-match-001`.
- These edits retain the same question count and existing concept tags; provenance remains AI-generated.


### Difficulty distribution reconciliation — Module 17 scenarios

- The revised baseline and traceroute interpretation questions are now difficulty 4; the DHCP lease verification scenario is difficulty 3. The bank-wide difficulty totals therefore reconcile to **46 introductory, 171 foundational, 270 applied, 110 advanced, and 22 challenging**.
- Question count, concept-tag count, and provenance totals are unchanged.


### Focused question-bank expansion — Modules 14–16

- Added 10 AI-generated questions without changing existing IDs or source-origin classifications:
  - Module 14: TCP FIN/ACK termination order, RST versus FIN, UDP header field identification, and UDP Length/payload arithmetic.
  - Module 15: DNS hierarchy referrals, authoritative DNS answer interpretation, DHCPv6 message order, and stateless DHCPv6 with SLAAC.
  - Module 16: endpoint protection and EDR containment/telemetry preservation.
- Recomputed snapshot: **629 questions, 629 unique IDs/prompts, 613 concept tags, 42 source-origin, 587 AI-generated**. All concept tags remain at or above the two-question minimum.
- Updated bank-wide format and difficulty distributions from the active seed; the coverage report was reconciled separately.


### Duplicate cleanup — Modules 15–16

- Reworked `s15-hybrid-p2p-applied-002` to test pure P2P without a central index, distinct from the hybrid-P2P architecture question.
- Reworked `s15-http-methods-applied-002` into an applied PUT/idempotency scenario; the HTTP method matching item remains the broad method map.
- Reworked `s15-file-sharing-protocols-applied-002` into an FTP control-versus-data connection troubleshooting scenario.
- Reworked six Module 16 matching duplicates into applied scenarios: AAA authorization, Trojan behavior, denial-of-service objective, technological vulnerability, stateful firewall inspection, and environmental threat mitigation.
- Reworked `s16-vpn-ips-applied-002` into a two-control selection scenario. Existing question IDs and provenance remain unchanged.
- Recomputed formats and difficulty from the active seed: **235 single, 38 multiple, 1 true/false, 52 fill, 91 matching, 22 ordering, 190 scenario**; difficulty **46 / 169 / 271 / 121 / 22**. The 629-question and 613-concept totals remain unchanged, with no under-practiced tags.
