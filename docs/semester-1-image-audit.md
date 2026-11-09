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
- Eighteen additional unique candidate images have now been visually inspected and linked to existing or newly added source questions. Combined with the 16 earlier source-origin associations and two newly verified Module 8 slides, there are **36 source-origin image-question associations**. Ten images are now used as visual context for AI-generated applied questions, bringing the total reviewed image-question associations to **46**. Recent additions include IMG-0944 (hierarchical IPv6 subnet-ID allocation), IMG-1070 (IPv4 subnet-table membership), IMG-1567 (first-hop Layer 2/Layer 3 addressing), IMG-1584 (equal-size subnet mask selection for unequal host requirements), IMG-2104 (UTP cable selection for console/switch/router links), and IMG-1576 (shielded-cable braid termination). Four false-positive candidates remain excluded.
- A separate visual triage inspected 77 unique unresolved candidate images with prominent blue annotations or diagram components. Eighteen were already linked to active questions; the remaining 59 were checked for answer marks and diagram evidence. They did not yield additional unambiguous answer keys: most were unmarked question slides, repeated diagrams, or Packet Tracer task screens. These remain unresolved rather than being promoted on an inferred answer.
- All 772 unresolved candidate image records were screened across 25 visual contact sheets at thumbnail resolution. This is a complete corpus-level screening pass, not a full-resolution answer-key verification. The slides predominantly show unmarked quiz prompts, repeated question variants, diagrams, and Packet Tracer activity screens; the screening did not reveal a new confidently marked answer key beyond the source associations already listed.
- Of the 766 unique unresolved candidate images, 744 remain for full-size answer-key/diagram review (750 asset records when duplicate references are counted). The 77-image blue-component triage is a targeted screening pass within that corpus, not a substitute for full-resolution verification. New explanations or answers derived from networking knowledge remain labeled `ai-generated`.

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

The latest image verification added two source-supported Module 8 questions: `IMG-0598` explicitly asks how hosts route packets and provides the answer (a host-local routing table with loopback, local, and default routes); `IMG-0639` explicitly enumerates router forwarding as decapsulation, route lookup, and re-encapsulation toward R2.

The latest 11 image checks verified the exact prompt and answer marks/diagram details for:
- Medium selection: signal distance and installation environment.
- Destination port layer: transport.
- Receive-side protocol decapsulation: Ethernet, IP, TCP, HTTP.
- Open standards: interoperability across operating systems.
- Transport-layer multiplexing: delivery to the correct browser/application.
- IPv4 subnet sizing for 40 hosts: /26.
- Source and destination MAC addresses are added at the Data Link layer.
- Source and destination port numbers are added at the Transport layer.
- Source and destination IP addresses are added at the Network layer.
- Application data enters the encapsulation process at the Application layer.
- ARP cache entries age out after an operating-system-dependent timer.
- A four-pair unshielded twisted-pair cable.
- The IPv4 Differentiated Services field carries an 8-bit QoS classification/ECN value.
- IPv4 header questions identify the source and destination address fields, TTL, Version (0100), and Header Checksum.
- RJ-45/8P8C is the Ethernet twisted-pair connector.

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
