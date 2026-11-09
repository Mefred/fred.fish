# Semester 1 source coverage audit

**Audit date:** 2026-11-09  
**Primary source:** original Semester 1 OneNote notebook and its OCR export.

## Text corpus

- 73/73 recovered OneNote text blocks were read and inventoried.
- The source extraction includes a large metadata-heavy final block (`block-0073`, approximately 1.06 MB); it contains recovered question text plus embedded OneNote metadata and asset references. It must be filtered before being used as student-facing prose.
- Administrative/identifying details such as instructor email addresses and OneNote account identifiers are not copied into public lessons.
- Short or administrative blocks remain in the source inventory; they are not silently treated as instructional content.

## Image corpus

All 2,646 source image manifest records have OCR output and have now been matched to original image bytes recovered from the OneNote file.

| Audit status | Count | Meaning |
|---|---:|---|
| OCR text on unique images | 2,353 | Unique images with non-empty OCR output |
| Exact duplicate copies | 270 | Byte-identical images, linked to a canonical asset ID |
| Visually reviewed non-text images | 22 | Hardware/cabling photos, topology/configuration diagrams, certification badges, or decorative assets |
| Image requiring manual transcription | 1 | A dark slide with unclear short text; retained for review |
| **Total accounted** | **2,646** | Every manifest asset has a status |

The 270 exact duplicates are flagged, not deleted. Repeated material may be pedagogically meaningful or appear in different notebook contexts. OCR text similarity is also recorded separately from exact byte identity; it is not used to silently remove near-duplicates.

### Original image recovery

The OCR ZIP itself contains metadata and OCR text, not the referenced image files. The original `.one` notebook was available separately. `scripts/recover-onenote-images.py` scans embedded PNG/JPEG signatures and accepts extracted payloads only when their SHA-256 matches a manifest record.

Verified against the supplied notebook:

- 2,727 embedded PNG/JPEG signatures scanned.
- 2,682 valid image payloads extracted by signature parsing.
- 2,376 unique manifest image hashes recovered.
- **2,646 / 2,646 manifest asset records matched exactly by SHA-256.**
- Three additional unique image payloads were not referenced by the OCR manifest and were not treated as source assets.

See [the reproducible recovery procedure](./semester-1-image-recovery.md).

## Question discovery

- 792 image assets contain question-like OCR text.
- Normalizing the OCR text yields 474 candidate groups.
- These are candidate prompts, not 474 verified answer-key entries. Some are duplicate slides, matching activities, Packet Tracer instructions, lesson summaries, or questions whose answer depends on a diagram or visual mark.
- Six additional candidate images have now been visually inspected and linked to existing or newly added source questions. Combined with the ten previous promotions, 16 image-question associations have visual verification. Four false-positive candidates remain excluded.
- The remaining 772 candidate asset records still require visual answer-key review. New explanations or answers derived from networking knowledge remain labeled `ai-generated`.

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

OCR is complete and all image bytes are now recoverable and hash-verified. A visual contact-sheet pass reviewed the 23 unique images without OCR text: 22 were identified as visual-only assets (including cable/connectors, switch hardware, certification badges, and diagrams) and one dark slide remains flagged for manual transcription.

The six new question-image checks verified the exact prompt and answer marks for:
- Medium selection: signal distance and installation environment.
- Destination port layer: transport.
- Receive-side protocol decapsulation: Ethernet, IP, TCP, HTTP.
- Open standards: interoperability across operating systems.
- Transport-layer multiplexing: delivery to the correct browser/application.
- IPv4 subnet sizing for 40 hosts: /26.

OCR still cannot reliably capture diagram relationships, handwritten annotations, topology labels, answer-selection marks, command-line formatting, or low-contrast text. The remaining question candidates and diagram-dependent lesson references still need visual review.

## Structured export

The OCR export contains:

- `image-ocr.jsonl`: one record per image asset, including source ID, OCR text, exact-duplicate status, canonical asset ID, and SHA-256.
- `image-audit.csv`: compact audit status for every manifest asset.
- `question-candidates.jsonl`: question-like OCR candidates with an explicit visual-verification status.
- `module-image-map.csv`: heuristic module-topic suggestions.
- `README.md`: export summary and limitations.

Use `scripts/ingest-semester-images.py` to rerun OCR and `scripts/recover-onenote-images.py` to recover and hash-verify the original image bytes.

## Module classification

A heuristic classifier matched 1,393 assets to one or more module topic buckets (439 high-confidence heading matches and 954 medium-confidence keyword matches). The remaining 1,253 assets are unclassified by text heuristics and require visual/topic review. These hints are not authoritative: a diagram may be relevant to a module without containing its title, and a question can span multiple concepts.

Run `scripts/classify-semester-images.py` against the OCR JSONL export to regenerate a reviewable module-image map. Do not use heuristic classification as a reason to omit unclassified assets.
