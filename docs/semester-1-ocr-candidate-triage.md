# Semester 1 OCR candidate triage

This audit combines OCR text analysis with a first visual answer-key pass against the original OneNote image assets. It does not approve every OCR candidate for promotion.

## Bundle contents and image recovery

The OCR export ZIP contains `image-ocr.jsonl`, `image-audit.csv`, `question-candidates.jsonl`, `module-image-map.csv`, a classifier script, and its README. It does not contain the referenced `images/*.png` files.

The original OneNote `.one` notebook contains the embedded image payloads. They were recovered using `scripts/recover-onenote-images.py` and checked against the OCR export's SHA-256 manifest:

- 2,646 / 2,646 image assets matched by SHA-256.
- 2,376 unique source image hashes matched.
- The extraction scanned 2,727 PNG/JPEG signatures and ignored unmatched/invalid payloads.

See [image recovery instructions](./semester-1-image-recovery.md) for the repeatable procedure.

## Candidate coverage

| Measure | Result |
|---|---:|
| Image assets accounted for by the export | 2,646 |
| Unique images with OCR text | 2,353 |
| Question-like candidate asset records | 792 |
| Normalized OCR-text candidates | 474 |
| Exact duplicate OCR groups with two asset records | 318 |
| Single-asset OCR groups | 156 |
| Visually verified image-question associations | 34 |
| Candidate asset records visually reviewed as not questions | 4 |
| Unique unresolved candidate images remaining | 748 |

The 792 records collapse to 474 unique OCR-text groups after Unicode normalization, lowercasing, punctuation removal, and whitespace normalization. Duplicate asset records remain linked to their canonical image and are not counted as independent question ideas.

## Newly visually verified source-question associations

Eighteen additional unique image candidates were inspected. Four were linked to existing source-origin questions to avoid duplicate prompts; six distinct prompts were added as source-origin questions, with the connector question supported by two separate image assets.

| Image reference | Active question ID | Visual finding |
|---|---|---|
| IMG-0063 | `s1-media-selection-001` | Marked answers: signal distance and installation environment |
| IMG-0256 | `s3-destination-port-001` | Marked answer: transport layer |
| IMG-0271 | `s3-decode-protocol-stack-source-001` | Marked answer: Ethernet, IP, TCP, HTTP |
| IMG-0292 | `s3-open-standards-source-001` | Marked answer: cross-OS interoperability |
| IMG-1315 | `s14-transport-multiplexing-source-001` | Marked answer: transport-layer application multiplexing |
| IMG-1756 | `s11-subnet-mask-40-hosts-source-001` | Marked answer: 255.255.255.192 (/26) |
| IMG-0270 | `s3-source-mac-001` | Circled answer: Data Link layer |
| IMG-0282 | `s3-destination-mac-layer-002` | Circled answer: Data Link layer |
| IMG-0287 | `s3-destination-port-001` | Circled answer: Transport layer |
| IMG-0322 | `s3-source-port-layer-002` | Circled answer: Transport layer |
| IMG-0816 | `s9-arp-cache-aging-source-001` | Explanatory slide confirms ARP cache aging timer and manual removal |
| IMG-0348 | `s4-utp-identification-source-001` | Diagram shows four unshielded twisted copper pairs |
| IMG-1725, IMG-1872 | `s4-rj45-connector-source-001` | Connector comparison identifies RJ-45/8P8C for twisted-pair Ethernet |
| IMG-0306 | `s3-destination-ip-layer-source-001` | Circled answer: Network layer |
| IMG-0314 | `s3-source-ip-layer-source-001` | Circled answer: Network layer |
| IMG-0279 | `s3-application-data-layer-source-001` | Circled answer: Application layer |
| IMG-0779, IMG-0624 | `s8-diffserv-priority-source-001` | Source explanation/table identifies Differentiated Services as the 8-bit QoS field |
| IMG-0599 | `s8-ipv4-source-address-field-source-001` | 32-bit sending-interface address is the Source IPv4 Address field |
| IMG-0607 | `s8-ipv4-ttl-field-source-001` | Packet lifetime is limited by the Time to Live field |
| IMG-0615 | `s8-ipv4-destination-address-field-source-001` | Unicast, multicast, and broadcast destination is the Destination IPv4 Address field |
| IMG-0640 | `s8-ipv4-version-field-source-001` | Four-bit value 0100 identifies IPv4 Version 4 |
| IMG-0647 | `s8-ipv4-header-checksum-field-source-001` | Header Checksum detects corruption in the IPv4 header |

The original OCR export's promotion status has not been rewritten in the Library ZIP; the current source-question associations are maintained in `src/data/learning/semester-1-seed.ts` and the question-bank audit.

## Text-only comparison against extracted source questions

Each normalized OCR candidate was compared with all 612 numbered question blocks in `Sem1_Questions_and_Review_Material.md`. The best match was selected using token overlap:

`intersection(candidate tokens, source-question tokens) / candidate token count`

| Best token-overlap score | Candidate groups |
|---|---:|
| Greater than 0.80 | 55 |
| Greater than 0.60 through 0.80 | 75 |
| Greater than 0.40 through 0.60 | 37 |
| Greater than 0.20 through 0.40 | 114 |
| 0.20 or lower | 8 |

This is a prioritization heuristic only. It can be distorted by OCR noise, long slide summaries, repeated vocabulary, diagram labels, and answer-option text. A high score does not prove the image is linked to the right source question or that an answer is correct. A low score does not prove that an asset is irrelevant.

## Low-overlap candidates for first manual classification

These eight normalized groups had a best token-overlap score of 0.20 or lower. They remain first-priority review candidates because they are less readily reconciled with the extracted numbered question blocks.

| Candidate | Image reference | Best overlap | Text-only observation |
|---|---|---:|---|
| QIMG-2120 | IMG-2120 | 0.092 | Packet Tracer “Connect the Physical Layer” activity instructions; likely a lab asset rather than a standalone quiz question. |
| QIMG-0598 | IMG-0598 | 0.150 | “How a Host Routes” routing-table teaching slide with explanatory diagram text; inspect before deciding whether to convert into a scenario question. |
| QIMG-1398 | IMG-1398 | 0.152 | “What Did I Learn” module-summary slide listing IOS show commands and CDP details; retain as lesson material, not automatically as a question. |
| QIMG-0935 | IMG-0935 | 0.169 | IPv4/IPv6 migration module-summary slide; retain as lesson material unless a distinct question is visible. |
| QIMG-1226 | IMG-1226 | 0.192 | Application-layer module-summary slide; retain as lesson material unless a distinct question is visible. |
| QIMG-1482 | IMG-1482 | 0.191 | IOS IPv4 troubleshooting instructional slide; potentially valuable scenario material, but OCR alone does not establish a question or answer key. |
| QIMG-0808 | IMG-0808 | 0.192 | Initial router configuration command example with a partially OCR-read “What happens?” prompt; requires visual review before any question is authored. |
| QIMG-1471 | IMG-1471 | 0.198 | Small-network device-selection module-summary slide; retain as lesson material, not automatically as a question. |

## Promotion rules

1. Verify the question prompt, all answer choices, selected/circled answer, and any diagram labels against the original image.
2. Preserve the original `IMG-XXXX` reference and map it to the correct active question ID only after visual verification.
3. If the asset is a lesson summary, configuration example, lab instruction, or explanatory diagram, keep it as instructional material instead of forcing it into the quiz bank.
4. For diagram-dependent questions, verify the complete diagram and its labels; OCR text alone is insufficient.
5. If the correct answer is inferred from networking knowledge rather than visibly provided, mark the question `ai-generated`, not `source`.

## Current disposition

- Six new image candidates have been visually reviewed and associated with active source-origin questions.
- The original export's ten previously promoted candidate records remain; four false-positive candidates remain excluded.
- The remaining 748 unique unresolved candidate images are not approved for source-question promotion. The original OCR export status labels remain unchanged in the Library ZIP; this triage document and the active question bank record the additional reviews.
- The next review stage should prioritize diagram-dependent candidates and answer marks, then map visually relevant non-question images to lesson figures.
