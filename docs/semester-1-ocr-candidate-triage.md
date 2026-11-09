# Semester 1 OCR candidate triage

This is a text-only triage pass over `fredfish_semester1_ocr_bundle.zip`. It is not a visual answer-key audit and must not be treated as approval to promote any OCR candidate into the active question bank.

## Bundle contents and coverage

The archive contains `image-ocr.jsonl`, `image-audit.csv`, `question-candidates.jsonl`, `module-image-map.csv`, a classifier script, and this export's README. It does **not** contain the referenced `images/*.png` files. The CSV records image paths and hashes, but the image bytes are absent, so the visual content and marked answers cannot be inspected from this bundle.

| Measure | Result |
|---|---:|
| Image assets accounted for by the export | 2,646 |
| Unique images with OCR text | 2,353 |
| Question-like candidate asset records | 792 |
| Normalized OCR-text candidates | 474 |
| Exact duplicate OCR groups with two asset records | 318 |
| Single-asset OCR groups | 156 |
| Candidate asset records already promoted after visual review | 10 |
| Candidate asset records visually reviewed as not questions | 4 |
| Candidate asset records still requiring visual answer verification | 778 |

The 792 records collapse to 474 unique OCR-text groups after Unicode normalization, lowercasing, punctuation removal, and whitespace normalization. Five promoted groups and two visually rejected groups also have duplicate asset records that remain marked for review, so per-record status counts should not be added as if they were mutually exclusive unique groups.

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

These eight normalized groups had a best token-overlap score of 0.20 or lower. They are listed first for human classification because they are less readily reconciled with the extracted numbered question blocks.

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

1. Do not infer the correct option from OCR ordering, text position, or a guessed answer key.
2. Verify the question prompt, all answer choices, selected/circled answer, and any diagram labels against the original image.
3. Preserve the original `IMG-XXXX` reference and map it to the correct active question ID only after visual verification.
4. If the asset is a lesson summary, configuration example, lab instruction, or explanatory diagram, keep it as instructional material instead of forcing it into the quiz bank.
5. For diagram-dependent questions, verify the complete diagram and its labels; OCR text alone is insufficient.

## Current disposition

- The ten already promoted image associations documented in the export README remain the only visually verified promoted set in this bundle.
- The four manually rejected assets remain excluded as non-question slides.
- The remaining candidates are not approved for source-question promotion.
- The next required input for the image-audit phase is the original image files referenced by `image-audit.csv` (for example, `images/0000.png` through the exported asset range). This archive contains their metadata and OCR, but not the images themselves.
