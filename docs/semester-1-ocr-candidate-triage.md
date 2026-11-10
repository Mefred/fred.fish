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
| Visually verified source-origin image-question associations | 40 |
| Visual references used by AI-generated questions | 15 |
| Total visually reviewed image-question associations | 55 |
| Candidate asset records visually reviewed as not questions | 4 |
| Unique unresolved candidate images still marked unresolved in original export | 744 |
| Candidate asset records still marked unresolved in original export | 750 |

The 792 records collapse to 474 unique OCR-text groups after Unicode normalization, lowercasing, punctuation removal, and whitespace normalization. Duplicate asset records remain linked to their canonical image and are not counted as independent question ideas.

## Newly visually verified source-question associations

Eighteen additional unique image candidates were inspected across three follow-up passes. Five images were linked to existing source-origin questions to avoid duplicate prompts; twelve distinct source-origin questions were added, with one connector question supported by two separate image assets.

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
| IMG-0545 | `s4-utp-identification-source-001` | Second image shows four unshielded twisted copper pairs |
| IMG-0324, IMG-0557 | `s4-coax-identification-source-001` | Two images show coaxial cable construction: central conductor and concentric metallic shield |
| IMG-1725, IMG-1872 | `s4-rj45-connector-source-001` | Connector comparison identifies RJ-45/8P8C for twisted-pair Ethernet |
| IMG-0306 | `s3-destination-ip-layer-source-001` | Circled answer: Network layer |
| IMG-0314 | `s3-source-ip-layer-source-001` | Circled answer: Network layer |
| IMG-0279 | `s3-application-data-layer-source-001` | Circled answer: Application layer |
| IMG-0779, IMG-0624 | `s8-diffserv-priority-source-001` | Source explanation/table identifies Differentiated Services as the 8-bit QoS field |
| IMG-0599 | `s8-ipv4-source-address-field-source-001` | 32-bit sending-interface address is the Source IPv4 Address field |
| IMG-0607 | `s8-ipv4-ttl-field-source-001` | Packet lifetime is limited by the Time to Live field |
| IMG-0615 | `s8-ipv4-destination-address-field-source-001` | Unicast, multicast, and broadcast destination is the Destination IPv4 Address field |
| IMG-0619 | `s8-ipv4-protocol-field-source-001` | The Protocol field identifies the next-level protocol, including ICMP, TCP, and UDP |
| IMG-0640 | `s8-ipv4-version-field-source-001` | Four-bit value 0100 identifies IPv4 Version 4 |
| IMG-0647 | `s8-ipv4-header-checksum-field-source-001` | Header Checksum detects corruption in the IPv4 header |

The original OCR export's promotion status has not been rewritten in the Library ZIP; the current source-question associations are maintained in `src/data/learning/semester-1-seed.ts` and the question-bank audit.

The current totals include later Module 8 and AI-generated visual-context reviews; the consolidated, current association list and provenance breakdown are maintained in [the image audit](./semester-1-image-audit.md).

## High-resolution contact-sheet review — batch 1

The first 36 unique unresolved question-candidate images were screened on contact sheets at 960×540 per image. Three marked slides were also opened individually at native resolution:

- IMG-0063 — blue checks mark signal distance and installation environment; already linked to source question s1-media-selection-001.
- IMG-0279 — blue oval marks the Application layer; already linked to source question s3-application-data-layer-source-001.
- IMG-0282 — blue oval marks the Data Link layer; already linked to source question s3-destination-mac-layer-002.

The other 33 candidates show unmarked question prompts, blank matching targets, lesson summaries, or diagrams without an answer mark. No new source-origin questions were added. See [the batch-by-batch review log](./semester-1-image-review-batch-1.md) for all 36 references and decisions.

The 960×540 contact-sheet screen is not counted as native-resolution verification for the other 33 images. The original export's 744-unique-image / 750-asset-record unresolved status is not a native-resolution backlog count. Across batches 1–4, 144 candidates were screened at contact-sheet scale; twelve were opened at native resolution and 132 were not individually opened at native resolution. The original OCR ZIP candidate-status fields remain unchanged in the Library; this repository audit is the current review record.

## High-resolution contact-sheet review — batch 2

The next 36 unique candidates (IMG-0287–IMG-0427) were screened. Five marked OSI-layer answers were opened at native resolution and confirmed against existing source questions: IMG-0287 (Transport/destination port), IMG-0292 (open standards/interoperability), IMG-0306 (Network/destination IP), IMG-0314 (Network/source IP), and IMG-0322 (Transport/source port). IMG-0348 was also opened at native resolution and confirms the four twisted pairs in the existing UTP-identification visual.

All six are already linked to active source-origin questions. The remaining 30 images are unmarked prompts, answer-choice screens without selections, or instructional slides/diagrams. No new source-origin question was added. See [the batch 2 review log](./semester-1-image-review-batch-2.md).

Across batches 1–4, 144 candidate images have been screened at high-resolution contact-sheet scale. One hundred sixteen have been opened individually at native resolution, leaving 28 contact-sheet-only candidates in these four batches. Follow-ups 7–10 separately inspected 40 additional images outside this 144-candidate set; across both workstreams, 156 unique images have now been individually inspected. The original OCR ZIP status labels remain unchanged. Contact-sheet screening is not a substitute for native-resolution review of the remaining candidates or of additional diagram-dependent candidates selected for later review. The original export's 744-unique-image / 750-asset-record unresolved status count is not the current manual-review backlog.

## High-resolution contact-sheet review — batch 3

The next 36 candidates (IMG-0428–IMG-0511) were screened. No clearly marked answer-selection or matching key was visible. The batch contains unmarked LLC/MAC sublayer, frame-field, switching, topology, and MAC-learning prompts plus lesson-summary and Packet Tracer activity slides. No new source-origin question or visual-context association was added. See [the batch 3 review log](./semester-1-image-review-batch-3.md).

Across batches 1–3, 108 candidate images have been screened at high-resolution contact-sheet scale. Nine answer/visual items were cross-checked at native resolution and are already linked to existing questions; the other 99 were contact-sheet-only. At that scale they appeared to be unmarked prompts, blank matching activities, lesson summaries, or unmarked diagrams, but native-resolution review may still reveal small marks or details. The original export's 744-unique-image / 750-asset-record unresolved status is not a native-resolution backlog count.

 against extracted source questions

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

## High-resolution contact-sheet review — batch 4

The next 36 candidates (IMG-0518–IMG-0578) were screened. IMG-0545 was opened at native resolution and shows four color-coded twisted copper pairs; it is now linked as a second source image to the existing UTP-identification question. IMG-0557 was opened at native resolution and shows a central conductor, dielectric, and concentric metallic shield; together with IMG-0324 it supports the new self-contained coaxial-identification question. These add one source-origin question and three source-image associations in total (two coaxial images and one additional UTP image).

The other 34 images are unmarked prompts or instructional slides; no additional answer-selection marks were found. See [the batch 4 review log](./semester-1-image-review-batch-4.md).

Across batches 1–4, 144 candidate images have been screened at high-resolution contact-sheet scale. Seventy-six candidates have now been opened at native resolution, including the initial answer/visual checks and subsequent instructional-image follow-ups. The latest pass added twenty-six unique native-resolution inspections and found no new answer marks or source-image associations. The remaining 68 candidates are tracked in the consolidated image audit. The UTP and coaxial visuals are now represented in the active bank. The original OCR ZIP still labels 744 unique images (750 asset records) unresolved; this is the source-export count, not a live count after manual review. Manual review decisions are tracked in these repository logs, and the original ZIP status fields have not been rewritten.

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
- The original OCR export continues to mark 744 unique images (750 asset records including duplicate references) as unresolved. This is an export-status count, not a current manual-review backlog. Do not promote an image to a source-origin question without sufficient visual or textual evidence; the batch logs record the 144-candidate detailed screen and 89 native-resolution checks.
- The next review stage should prioritize diagram-dependent candidates and answer marks, then map visually relevant non-question images to lesson figures.


## Image-informed questions with inferred answers

The following candidate images were reviewed for prompt/diagram context, but the answer was derived from networking knowledge rather than a marked source answer key. These questions remain explicitly `ai-generated`:

| Image reference | Active question ID | Applied concept |
|---|---|---|
| IMG-1576, IMG-1787 | `s4-utp-termination-diagnosis-applied-001` | Excessive untwisted wire length at an RJ-45 termination increases crosstalk risk |
| IMG-1714 | `s1-network-characteristics-failover-applied-001` | Security, QoS, and fault tolerance in a redundant WAN scenario |
| IMG-1088 | `s11-subnet-host-membership-matching-applied-001` | Match /27 subnet ranges to usable host addresses; reject broadcast/network addresses |
 against extracted source questions

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
- The original OCR export continues to mark 744 unique images (750 asset records including duplicate references) as unresolved. This is an export-status count, not the current manual-review backlog. Do not promote an image to a source-origin question without sufficient visual or textual evidence; the batch logs record the 144-candidate detailed screen and 63 native-resolution checks.
- The next review stage should prioritize diagram-dependent candidates and answer marks, then map visually relevant non-question images to lesson figures.


## Image-informed questions with inferred answers

The following candidate images were reviewed for prompt/diagram context, but the answer was derived from networking knowledge rather than a marked source answer key. These questions remain explicitly `ai-generated`:

| Image reference | Active question ID | Applied concept |
|---|---|---|
| IMG-1576, IMG-1787 | `s4-utp-termination-diagnosis-applied-001` | Excessive untwisted wire length at an RJ-45 termination increases crosstalk risk |
| IMG-1714 | `s1-network-characteristics-failover-applied-001` | Security, QoS, and fault tolerance in a redundant WAN scenario |
| IMG-1088 | `s11-subnet-host-membership-matching-applied-001` | Match /27 subnet ranges to usable host addresses; reject broadcast/network addresses |


## Native-resolution follow-up — ten additional images (follow-up 7)

Ten consecutive images, IMG-0580–IMG-0589, were opened individually at native resolution after SHA-256-verified recovery from the original OneNote notebook. Seven contain quiz/activity prompts, but all visible answer controls are empty. IMG-0585 shows a Packet Tracer switch-port activity window at 100% completion, but its assessment choices remain unselected and no verified port answer is visible; it is not treated as a solved answer. IMG-0580 and IMG-0586 are section-title slides, and IMG-0588 is an instructional data-link frame slide. Blue stars are decorative. No new answer key, source-origin association, or visual-context association was found. The 144-candidate batch 1–4 count remains **89 opened at native resolution / 55 contact-sheet-only**. Follow-up 7 opened ten additional images outside that set; across both workstreams, 99 unique images have been individually inspected. See [native-resolution follow-up 7](./semester-1-image-review-native-followup-7.md).


## Native-resolution follow-up — ten additional images (follow-up 8)

Ten more images, IMG-0590–IMG-0599, were opened individually at native resolution after SHA-256-verified recovery. IMG-0590 and IMG-0591 are unmarked prompts. IMG-0592 is a static-routing instructional slide, IMG-0593–0595 are partial packet-difference slide visuals, and IMG-0596–0597 are section-title slides. IMG-0598 explicitly answers its host-routing-table question and is already linked to source-origin question s8-host-routing-table-source-001; IMG-0599 explicitly identifies the Source IPv4 Address field and is already linked to s8-ipv4-source-address-field-source-001. No new question or image association was needed. The 144-candidate batch 1–4 count remains **89 opened at native resolution / 55 contact-sheet-only**. Follow-ups 7–8 have opened twenty additional images outside that set; across both workstreams, 109 unique images have been individually inspected. See [native-resolution follow-up 8](./semester-1-image-review-native-followup-8.md).


## Native-resolution follow-up — ten additional images (follow-up 9)

Ten more images, IMG-0600–IMG-0609, were opened individually at native resolution after SHA-256-verified recovery. IMG-0600, IMG-0602–0606, IMG-0608, and IMG-0609 are instructional slides, diagrams, terminology summaries, or section markers. IMG-0601 is an unfilled routing-table matching activity; its table is legible, so one AI-generated applied matching question now uses the five destination/interface mappings without claiming a source answer key. IMG-0607 contains an IPv4 TTL prompt whose adjacent table explicitly identifies the answer and is already linked to source-origin question s8-ipv4-ttl-field-source-001. No new source-origin association was needed. The 144-candidate batch 1–4 count remains **89 opened at native resolution / 55 contact-sheet-only**. Follow-ups 7–9 have opened thirty additional images outside that set; across both workstreams, 119 unique images have been individually inspected. See [native-resolution follow-up 9](./semester-1-image-review-native-followup-9.md).


## Native-resolution follow-up — ten additional images (follow-up 10)

Ten more images, IMG-0610–IMG-0619, were opened individually at native resolution after SHA-256-verified recovery. IMG-0610 is a video-introduction slide; IMG-0611–0614 and IMG-0616–0618 are instructional material or module-review slides. IMG-0615's destination-address question and answer are already represented by source-origin question s8-ipv4-destination-address-field-source-001. IMG-0619 explicitly asks for the IPv4 field identifying the next-level protocol, and the adjacent table supplies the answer (Protocol); this is now source-origin question s8-ipv4-protocol-field-source-001. The 144-candidate batch 1–4 count remains **89 opened at native resolution / 55 contact-sheet-only**. Follow-ups 7–10 separately opened 40 additional images (IMG-0580–IMG-0619) outside those four contact-sheet batches; across both workstreams, 129 unique images have now been individually inspected (89 + 40). See [native-resolution follow-up 10](./semester-1-image-review-native-followup-10.md).


## Native-resolution follow-up — ten additional batch-4 candidates (follow-up 11)

Ten candidates from the original 144-image set—IMG-0518, IMG-0519, IMG-0520, IMG-0522, IMG-0523, IMG-0524, IMG-0529, IMG-0531, IMG-0535, and IMG-0537—were opened individually at native resolution after SHA-256-verified recovery. All visible answer controls are empty; stars are decorative. IMG-0519 is a module review slide and IMG-0522 is a physical-layer signaling slide. No new source-origin association, AI visual-context association, or question was added in follow-up 11. The original batch 1–4 review stood at **93/144 native-resolution / 51 contact-sheet-only** after follow-up 11. Follow-ups 7–10 separately inspected 40 additional images outside that set, bringing the total across both workstreams to 133 individually inspected unique images at that point. See [native-resolution follow-up 11](./semester-1-image-review-native-followup-11.md).


## Native-resolution follow-up — ten additional batch-4 candidates (follow-up 12)

Ten more candidates from the original 144-image set—IMG-0539, IMG-0540, IMG-0542, IMG-0543, IMG-0544, IMG-0549, IMG-0550, IMG-0553, IMG-0554, and IMG-0555—were opened individually at native resolution after SHA-256-verified recovery. All visible answer controls are empty; stars are decorative. IMG-0540 and IMG-0555 are module-summary slides. No new source-origin association, AI visual-context association, or question was added in follow-up 12. The original batch 1–4 review stood at **102/144 native-resolution / 42 contact-sheet-only** after follow-up 12. Follow-ups 7–10 separately inspected 40 additional images outside that set, bringing the total across both workstreams to 142 individually inspected unique images at that point. See [native-resolution follow-up 12](./semester-1-image-review-native-followup-12.md).


### Additional AI visual-context association

IMG-0562 now supports AI-generated question s4-first-hop-destination-mac-scenario-001. The topology shows a web server and its default gateway router on one subnet, with PC1 on a remote subnet; the first Ethernet frame uses the local router's MAC address. The source choices are unselected, so this is not source-origin.


### Native-resolution follow-up 13 — ten additional batch-4 candidates

Ten new unique candidates, IMG-0556, IMG-0558, IMG-0559, IMG-0560, IMG-0561, IMG-0562, IMG-0563, IMG-0566, IMG-0568, and IMG-0570, were opened individually at native resolution. All answer controls were empty; IMG-0563 is a Physical Layer summary. IMG-0562's unmarked router/server/PC topology supports one AI-generated first-hop destination-MAC scenario; no source-origin answer was inferred. The original batch 1–4 count reached **112/144**, with **32** contact-sheet-only; across both workstreams, 152 unique images had been inspected. See [native-resolution follow-up 13](./semester-1-image-review-native-followup-13.md).

### Native-resolution follow-up 14 — final four batch-4 candidates

IMG-0571, IMG-0576, IMG-0577, and IMG-0578 were opened individually at native resolution. All answer controls were empty; IMG-0576 is a Data Link Layer summary. This completes all 36 candidates in batch 4. The original batch 1–4 count is now **116/144**, with **28** contact-sheet-only candidates remaining in batches 1–3; across both workstreams, 156 unique images have been inspected. See [native-resolution follow-up 14](./semester-1-image-review-native-followup-14.md).
