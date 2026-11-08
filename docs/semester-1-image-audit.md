# Semester 1 source coverage audit

**Audit date:** 2026-11-08  
**Source package:** `Semester_1_FredFish_AI_Ingestion_Package.zip`

## Text corpus

- 73/73 JSONL text blocks were read and inventoried.
- The source extraction includes a large metadata-heavy final block (`block-0073`, approximately 1.06 MB); it contains recovered question text plus embedded OneNote metadata and asset references. It must be filtered before being used as student-facing prose.
- Administrative/identifying details such as instructor email addresses and OneNote account identifiers are not copied into public lessons.
- Short or administrative blocks remain in the source inventory; they are not silently treated as instructional content.

## Image corpus

All 2,646 manifest assets were passed through Tesseract OCR and have a corresponding OCR text file.

| Audit status | Count | Meaning |
|---|---:|---|
| OCR text on unique images | 2,353 | Unique images with non-empty OCR output |
| Exact duplicate copies | 270 | Byte-identical images, linked to a canonical asset ID |
| Unique images without OCR text | 23 | Blank, non-text, or unreadable to OCR |
| **Total accounted** | **2,646** | Every manifest asset has a status |

The 270 exact duplicates are flagged, not deleted. Repeated material may be pedagogically meaningful or appear in different notebook contexts. OCR text similarity is also recorded separately from exact byte identity; it is not used to silently remove near-duplicates.

## Question discovery

- 792 image assets contain question-like OCR text.
- Normalizing exact OCR text yields 474 candidate groups.
- These are candidate prompts, not 474 verified answer-key entries. Some are duplicate slides, matching activities, diagram-dependent questions, or questions whose correct answer is indicated only by a visual mark.
- Candidate prompts without a visually verified answer remain out of the active source-question bank. New explanations or answers derived from networking knowledge are labeled `ai-generated`.

## Module sequence discovered

The images identify the Cisco Introduction to Networks sequence:

1. Networking Today
2. Basic Switch and End Device Configuration
3. Protocols and Models
4. Physical Layer
5. Number Systems
6. Data Link Layer
7. Ethernet Switching
8. Network Layer
9. Address Resolution
10. Basic Router Configuration
11. IPv4 Addressing
12. IPv6 Addressing
13. ICMP
14. Transport Layer
15. Application Layer
16. Network Security Fundamentals
17. Build a Small Network

## Visual review status

OCR is complete, but visual review is not. OCR cannot reliably capture diagram relationships, handwritten annotations, topology labels, answer-selection marks, command-line formatting, or low-contrast text. A human/vision review pass is still required for the 23 no-text images, the 474 unique question candidates, and diagrams/screenshots whose relationships matter to the explanation.

## Structured export

The accompanying OCR export contains:

- `image-ocr.jsonl`: one record per image asset, including source ID, OCR text, exact-duplicate status, and canonical asset ID.
- `image-audit.csv`: compact audit status for every image.
- `question-candidates.jsonl`: question-like OCR candidates with an explicit `needs_visual_answer_verification` status.
- `README.md`: export summary and limitations.

See `scripts/ingest-semester-images.py` for the resumable OCR workflow.
