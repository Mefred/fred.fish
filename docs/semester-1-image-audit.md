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
- Eighteen additional unique candidate images have now been visually inspected and linked to existing or newly added source questions. Combined with the 16 earlier source-origin associations and two newly verified Module 8 slides, there are **40 source-origin image-question associations**. Fifteen unique images are now used as visual context for AI-generated applied questions, bringing the total reviewed image-question associations to **55**. The latest review added IMG-0430 (half/full-duplex communication) and IMG-0405 (CSMA/CD operation), and removed IMG-0572 after native-resolution inspection showed it was only a section-title slide. The latest visual-context links connect IMG-0522 to physical-media signaling, IMG-0535 to throughput factors, IMG-0536 to Ethernet frame fields, IMG-0541 to UTP termination quality, and IMG-0562 to first-hop destination-MAC selection. Recent additions include IMG-0944 (hierarchical IPv6 subnet-ID allocation), IMG-1070 (IPv4 subnet-table membership), IMG-1567 (first-hop Layer 2/Layer 3 addressing), IMG-1584 (equal-size subnet mask selection for unequal host requirements), and IMG-2104 (UTP cable selection for console/switch/router links). IMG-1576 was already represented by an existing cable-termination question and was not counted as a new image association. The coaxial-cable question now links IMG-0324 and IMG-0557; the existing UTP-identification question now links IMG-0348 and IMG-0545. Four false-positive candidates remain excluded.
- A separate visual triage inspected 77 unique unresolved candidate images with prominent blue annotations or diagram components. Eighteen were already linked to active questions; the remaining 59 were checked for answer marks and diagram evidence. They did not yield additional unambiguous answer keys: most were unmarked question slides, repeated diagrams, or Packet Tracer task screens. These remain unresolved rather than being promoted on an inferred answer.
- All 772 unresolved candidate image records were screened across 25 visual contact sheets at thumbnail resolution. This is a complete corpus-level screening pass, not a full-resolution answer-key verification. The slides predominantly show unmarked quiz prompts, repeated question variants, diagrams, and Packet Tracer activity screens; the screening did not reveal a new confidently marked answer key beyond the source associations already listed.
- The original OCR export still labels 744 unique candidate images (750 asset records when duplicate references are counted) as unresolved. Manual review batches are tracked in this repository; the original export status fields have not been rewritten. The 77-image blue-component triage is a targeted screening pass within that corpus, not a substitute for full-resolution verification. New explanations or answers derived from networking knowledge remain labeled `ai-generated`.

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

### High-resolution contact-sheet review — batch 1

The first 36 unresolved candidate images were screened at 960×540 per image. Three answer-marked images were opened individually at native resolution and confirmed against existing source-origin questions: IMG-0063 (signal distance and installation environment), IMG-0279 (Application layer), and IMG-0282 (Data Link layer). All three are already linked in the active bank; no new source-origin association was added. The remaining 33 images in this batch are unmarked prompts, blank matching activities, lesson summaries, or unmarked diagrams. The full batch log is in [semester-1-image-review-batch-1.md](./semester-1-image-review-batch-1.md).

This contact-sheet screen does not count as native-resolution review for the other 33 images. The original OCR export still marks 744 unique images (750 asset records including duplicate references) unresolved. This is an export-status count, not the number of images remaining in these four manual-review batches. Of the 36 candidates in batch 1, 33 were contact-sheet-only and had not yet been opened individually at native resolution.

### High-resolution contact-sheet review — batch 2

The next 36 candidates (IMG-0287–IMG-0427) were screened. Five marked OSI-layer answers were opened at native resolution and confirmed against existing source-origin questions: destination port/Transport (IMG-0287), open standards/interoperability (IMG-0292), destination IP/Network (IMG-0306), source IP/Network (IMG-0314), and source port/Transport (IMG-0322). IMG-0348 was opened at native resolution and confirms the four twisted pairs in the existing UTP-identification visual. All six already belong to existing source-origin associations; no new association was added. The other 30 images are unmarked prompts, choices without selections, or instructional slides/diagrams. See [the batch 2 review log](./semester-1-image-review-batch-2.md).

Across batches 1 and 2, 72 candidates have been screened at high-resolution contact-sheet scale and nine answer/visual items have been cross-checked at native resolution. The original export's 744-unique-image / 750-asset-record unresolved status count is unchanged; it should not be interpreted as the remaining manual-review count. Within these two batches, 63 images were not opened individually at native resolution.



The OCR export contains:

- `image-ocr.jsonl`: one record per image asset, including source ID, OCR text, exact-duplicate status, canonical asset ID, and SHA-256.
- `image-audit.csv`: compact audit status for every manifest asset.
- `question-candidates.jsonl`: question-like OCR candidates with an explicit visual-verification status.
- `module-image-map.csv`: heuristic module-topic suggestions.
- `README.md`: export summary and limitations.

Use `scripts/ingest-semester-images.py` to rerun OCR and `scripts/recover-onenote-images.py` to recover and hash-verify the original image bytes.

## High-resolution contact-sheet review — batch 3

The next 36 candidates (IMG-0428–IMG-0511) were screened. No clearly marked answer-selection or matching key was visible; the images are unmarked LLC/MAC sublayer, frame-field, switching, topology, and MAC-learning prompts, plus lesson-summary and Packet Tracer activity slides. No new source-origin or visual-context association was added. See [the batch 3 review log](./semester-1-image-review-batch-3.md).

Across batches 1–3, 108 candidate images have been screened at high-resolution contact-sheet scale. Nine answer/visual items have been cross-checked at native resolution and were already linked to existing source-origin questions. The remaining 99 images in these batches were contact-sheet-only; they still need native-resolution inspection where small answer marks or diagram details matter. The original OCR export's unresolved status count remains 744 unique images / 750 asset records.

## High-resolution contact-sheet review — batch 4

The next 36 candidates (IMG-0518–IMG-0578) were screened. IMG-0545 was opened at native resolution and confirms the four twisted copper pairs in the existing UTP question. IMG-0557 was opened at native resolution and confirms coaxial construction; together with IMG-0324 it supports the new self-contained coaxial-identification question. The UTP update adds one source-image association and the new coax question adds two, bringing source-origin associations to 39 and total reviewed image-question associations to 48. The other 34 candidates are unmarked prompts or instructional slides. See [the batch 4 review log](./semester-1-image-review-batch-4.md).

Across batches 1–4, 144 candidate images have been screened at high-resolution contact-sheet scale. Native-resolution follow-ups have now opened 129 of those images individually; eight marked-answer items were already linked to source questions, and the four cable images support the UTP and coaxial questions. The latest reviews corrected one false-positive link (IMG-0572 is a section-title slide), added two source-backed visual references (IMG-0430 for half/full-duplex communication and IMG-0405 for CSMA/CD), and inspected 26 additional unique candidates without finding new answer marks or source-image associations. The remaining 15 images from these four batches have contact-sheet-only review and still need native-resolution inspection where small marks or diagram details matter. The original OCR ZIP still labels 744 unique images (750 asset records) unresolved; that is the export's status count, not the post-review backlog. The original status fields remain unchanged in the Library.



### Native-resolution follow-up — 12 additional images

A second native-resolution pass opened twelve previously contact-sheet-only candidates from batches 1–4. None contains a clearly selected answer or a new marked matching key, so no new source-origin question or image-question association was added.

| Image | Native-resolution finding | Review decision |
|---|---|---|
| IMG-0195 | ServerB-to-HostA addressing topology; all six answer boxes are empty | Diagram is legible; no marked answer key |
| IMG-0291 | Repeated ServerB-to-HostA addressing prompt and topology; all six answer boxes are empty | Duplicate prompt variant; no marked answer key |
| IMG-0241 | Web-response decapsulation order; all four checkboxes are empty | No marked answer key |
| IMG-0344 | Fiber-optic cable characteristics; all five checkboxes are empty | No marked answer key |
| IMG-0346 | Wireless-interference devices; all six checkboxes are empty | No marked answer key |
| IMG-0347 | Physical-layer signaling lesson slide with fiber, digital/analog, microwave, and copper signal diagrams | Instructional exhibit; blue stars are decorative slide markers, not answer selections |
| IMG-0367 | PC-console/switch/router UTP cable-selection topology; all four radio options are empty | Diagram is legible; no marked answer key |
| IMG-0472 | Packet Tracer switch/MAC-table task screenshot; assessment response options are unselected | Activity prompt only; no solved state or answer key |
| IMG-0518 | WAN partial-mesh topology question; all four radio options are empty | No marked answer key |
| IMG-0562 | Web-server-to-PC1 destination-MAC topology; all four radio options are empty | Diagram is legible; no marked answer key |
| IMG-0457 | Repeated web-server-to-PC1 destination-MAC prompt and topology; all four radio options are empty | Duplicate prompt variant of IMG-0562; no marked answer key |
| IMG-0466 | Switch source-MAC-table behavior question; all four radio options are empty | No marked answer key |

The 12 native-resolution checks are additional to the prior 12 checks. They do not change the 39 source-origin image-question associations or nine AI-generated visual-context references (48 reviewed associations total). See [the native-resolution follow-up log](./semester-1-image-review-native-followup-1.md).



### Native-resolution follow-up — 24 additional images

A third native-resolution pass opened 24 more candidates from batches 1–4. All answer controls were unselected; the blue star graphic is a repeated slide decoration, not an answer mark. Several prompts are repeated variants of the same objective. No new source-origin question or image-question association was added.

| Image | Native-resolution finding | Review decision |
|---|---|---|
| IMG-0408 | Data-link layer services; all six checkboxes are empty | No marked answer key |
| IMG-0413 | Media-access-control functions; all six checkboxes are empty | No marked answer key |
| IMG-0414 | MAC-sublayer functions; all five checkboxes are empty | No marked answer key |
| IMG-0417 | Repeated MAC-sublayer functions prompt with a different option set; all five checkboxes are empty | Duplicate objective variant; no marked answer key |
| IMG-0420 | LLC-sublayer functions; all five checkboxes are empty | No marked answer key |
| IMG-0421 | Data-link frame trailer contents; all four radio options are empty | No marked answer key |
| IMG-0426 | Repeated LLC-sublayer functions prompt; all five checkboxes are empty | Duplicate objective variant; no marked answer key |
| IMG-0427 | Media communication type that does not require arbitration; all four radio options are empty | No marked answer key |
| IMG-0428 | LLC-sublayer functions; all five checkboxes are empty | No marked answer key |
| IMG-0432 | Data-link frame-header fields; all four radio options are empty | No marked answer key |
| IMG-0440 | Extended-star topology definition; all four radio options are empty | No marked answer key |
| IMG-0447 | Broadcast destination MAC behavior; all four radio options are empty | No marked answer key |
| IMG-0470 | Multicast destination MAC behavior; all four radio options are empty | No marked answer key |
| IMG-0483 | Switch behavior when source MAC is already in the MAC table; all four radio options are empty | No marked answer key |
| IMG-0488 | Ethernet frame acceptance/discard fields; all five checkboxes are empty | No marked answer key |
| IMG-0489 | Cut-through switching examples; all five checkboxes are empty | No marked answer key |
| IMG-0494 | Repeated source-MAC-table refresh question with reordered options; all four radio options are empty | Duplicate objective variant; no marked answer key |
| IMG-0496 | Switching method that uses CRC; all four radio options are empty | No marked answer key |
| IMG-0501 | Repeated CRC switching-method question; all four radio options are empty | Duplicate prompt variant; no marked answer key |
| IMG-0503 | LLC-sublayer characteristic; all four radio options are empty | No marked answer key |
| IMG-0506 | Repeated extended-star topology question; all four radio options are empty | Duplicate prompt variant; no marked answer key |
| IMG-0507 | Host behavior for an unknown destination MAC; all four radio options are empty | No marked answer key |
| IMG-0508 | Physical-media module-practice summary slide | Instructional exhibit; no question answer key |
| IMG-0511 | Repeated LLC-sublayer functions prompt; all five checkboxes are empty | Duplicate objective variant; no marked answer key |

The 24 native-resolution checks in this follow-up are additional to the first 24. The total is now 48 individually opened images out of 144 candidates, leaving 96 with contact-sheet-only review. The 39 source-origin image-question associations and nine AI-generated visual-context references (48 reviewed associations total) remain unchanged. See [the native-resolution follow-up log](./semester-1-image-review-native-followup-2.md).

## Module classification

A heuristic classifier matched 1,393 assets to one or more module topic buckets (439 high-confidence heading matches and 954 medium-confidence keyword matches). The remaining 1,253 assets are unclassified by text heuristics and require visual/topic review. These hints are not authoritative: a diagram may be relevant to a module without containing its title, and a question can span multiple concepts.

Run `scripts/classify-semester-images.py` against the OCR JSONL export to regenerate a reviewable module-image map. Do not use heuristic classification as a reason to omit unclassified assets.


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


### Native-resolution follow-up — ten additional images (follow-up 7)

Ten consecutive images, IMG-0580–IMG-0589, were opened individually at native resolution after SHA-256-verified recovery from the original OneNote notebook. Seven contain quiz/activity prompts, but all visible answer controls are empty. IMG-0585 shows a Packet Tracer switch-port activity window at 100% completion, but its assessment choices remain unselected and no verified port answer is visible; it is not treated as a solved answer. IMG-0580 and IMG-0586 are section-title slides, and IMG-0588 is an instructional data-link frame slide. Blue stars are decorative. No new answer key, source-origin association, or visual-context association was found. The 144-candidate batch 1–4 count remains **89 opened at native resolution / 55 contact-sheet-only**. Follow-up 7 opened ten additional images outside that set; across both workstreams, 99 unique images have been individually inspected. See [native-resolution follow-up 7](./semester-1-image-review-native-followup-7.md).


### Native-resolution follow-up — ten additional images (follow-up 8)

Ten more images, IMG-0590–IMG-0599, were opened individually at native resolution after SHA-256-verified recovery. IMG-0590 and IMG-0591 are unmarked prompts. IMG-0592 is a static-routing instructional slide, IMG-0593–0595 are partial packet-difference slide visuals, and IMG-0596–0597 are section-title slides. IMG-0598 explicitly answers its host-routing-table question and is already linked to source-origin question s8-host-routing-table-source-001; IMG-0599 explicitly identifies the Source IPv4 Address field and is already linked to s8-ipv4-source-address-field-source-001. No new question or image association was needed. The 144-candidate batch 1–4 count remains **89 opened at native resolution / 55 contact-sheet-only**. Follow-ups 7–8 have opened twenty additional images outside that set; across both workstreams, 109 unique images have been individually inspected. See [native-resolution follow-up 8](./semester-1-image-review-native-followup-8.md).


### Native-resolution follow-up — ten additional images (follow-up 9)

Ten more images, IMG-0600–IMG-0609, were opened individually at native resolution after SHA-256-verified recovery. IMG-0600, IMG-0602–0606, IMG-0608, and IMG-0609 are instructional slides, diagrams, terminology summaries, or section markers. IMG-0601 is an unfilled routing-table matching activity; its table is legible, so one AI-generated applied matching question now uses the five destination/interface mappings without claiming a source answer key. IMG-0607 contains an IPv4 TTL prompt whose adjacent table explicitly identifies the answer and is already linked to source-origin question s8-ipv4-ttl-field-source-001. No new source-origin association was needed. The 144-candidate batch 1–4 count remains **89 opened at native resolution / 55 contact-sheet-only**. Follow-ups 7–9 have opened thirty additional images outside that set; across both workstreams, 119 unique images have been individually inspected. See [native-resolution follow-up 9](./semester-1-image-review-native-followup-9.md).


### Native-resolution follow-up — ten additional images (follow-up 10)

Ten more images, IMG-0610–IMG-0619, were opened individually at native resolution after SHA-256-verified recovery. IMG-0610 is a video-introduction slide; IMG-0611–0614 and IMG-0616–0618 are instructional material or module-review slides. IMG-0615's destination-address question and answer are already represented by source-origin question s8-ipv4-destination-address-field-source-001. IMG-0619 explicitly asks for the IPv4 field identifying the next-level protocol, and the adjacent table supplies the answer (Protocol); this is now source-origin question s8-ipv4-protocol-field-source-001. The original 144-candidate batch 1–4 count remains **89 opened at native resolution / 55 contact-sheet-only** after follow-up 10. Follow-ups 7–10 separately opened 40 additional images (IMG-0580–IMG-0619) outside those four contact-sheet batches; across both workstreams, 129 unique images had been individually inspected at that point (89 + 40). See [native-resolution follow-up 10](./semester-1-image-review-native-followup-10.md).


### Native-resolution follow-up — ten additional batch-4 candidates (follow-up 11)

Ten candidates from the original 144-image set—IMG-0518, IMG-0519, IMG-0520, IMG-0522, IMG-0523, IMG-0524, IMG-0529, IMG-0531, IMG-0535, and IMG-0537—were opened individually at native resolution after SHA-256-verified recovery. All visible answer controls are empty; stars are decorative. IMG-0519 is a module review slide and IMG-0522 is a physical-layer signaling slide. No new source-origin association was added. One AI-generated first-hop destination-MAC scenario now uses IMG-0562 as visual context; it is not labeled source-origin because the source answer controls are unselected. The original batch 1–4 review stood at **93/144 native-resolution / 51 contact-sheet-only** after follow-up 11. Follow-ups 7–10 separately inspected 40 additional images outside that set, bringing the total across both workstreams to 133 individually inspected unique images at that point. See [native-resolution follow-up 11](./semester-1-image-review-native-followup-11.md).


### Native-resolution follow-up — ten additional batch-4 candidates (follow-up 12)

Ten more candidates from the original 144-image set—IMG-0539, IMG-0540, IMG-0542, IMG-0543, IMG-0544, IMG-0549, IMG-0550, IMG-0553, IMG-0554, and IMG-0555—were opened individually at native resolution after SHA-256-verified recovery. All visible answer controls are empty; stars are decorative. IMG-0540 and IMG-0555 are module-summary slides. No new source-origin association was added. One AI-generated first-hop destination-MAC scenario now uses IMG-0562 as visual context because the source choices are unselected. The original batch 1–4 review stood at **102/144 native-resolution / 42 contact-sheet-only** after follow-up 12. Follow-ups 7–10 separately inspected 40 additional images outside that set, bringing the total across both workstreams to 142 individually inspected unique images at that point. See [native-resolution follow-up 12](./semester-1-image-review-native-followup-12.md).


### Native-resolution follow-up 13 — ten additional batch-4 candidates

Ten new unique candidates, IMG-0556, IMG-0558, IMG-0559, IMG-0560, IMG-0561, IMG-0562, IMG-0563, IMG-0566, IMG-0568, and IMG-0570, were opened individually at native resolution. All answer controls were empty; IMG-0563 is a Physical Layer summary. IMG-0562's unmarked router/server/PC topology supports one AI-generated first-hop destination-MAC scenario; no source-origin answer was inferred. The original batch 1–4 count reached **112/144**, with **32** contact-sheet-only; across both workstreams, 152 unique images had been inspected. See [native-resolution follow-up 13](./semester-1-image-review-native-followup-13.md).

### Native-resolution follow-up 14 — final four batch-4 candidates

IMG-0571, IMG-0576, IMG-0577, and IMG-0578 were opened individually at native resolution. All answer controls were empty; IMG-0576 is a Data Link Layer summary. This completes all 36 candidates in batch 4. The original batch 1–4 count is now **116/144**, with **28** contact-sheet-only candidates remaining in batches 1–3; across both workstreams, 156 unique images have been inspected. See [native-resolution follow-up 14](./semester-1-image-review-native-followup-14.md).
