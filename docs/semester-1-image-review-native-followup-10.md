# Semester 1 image review — native-resolution follow-up 10

**Review scope:** ten consecutive source-image references, IMG-0610 through IMG-0619. All ten original image files were recovered from the supplied OneNote notebook and checked against the OCR export's SHA-256 manifest before inspection.

**Review method:** each image was opened individually at native resolution. Slide text, diagram labels, question wording, and adjacent answer tables were inspected against the active question bank.

## Results

- Ten unique images opened individually at native resolution.
- IMG-0610 is a video-introduction slide; the actual video content is not embedded in this image.
- IMG-0611–0614, IMG-0616–0618 are instructional slides, diagrams, a module review slide, or a section-level reference. They do not contain marked quiz answers.
- IMG-0615 contains a Destination IPv4 Address question whose adjacent table explicitly identifies the answer. It is already linked to source-origin question s8-ipv4-destination-address-field-source-001.
- IMG-0619 contains a Protocol-field question whose adjacent table explicitly identifies Protocol as the field for the next-level protocol (ICMP, TCP, UDP, etc.). A new source-origin question now captures that item.
- The blue star on the IPv4 question slides is decorative, not an answer-selection mark.
- The 144-candidate batch 1–4 count remains 89/144 opened at native resolution, with 55 contact-sheet-only. Follow-ups 7–10 have opened forty additional images (IMG-0580–IMG-0619) outside those four contact-sheet batches; across both workstreams, 129 unique images have now been individually inspected (89 + 40).
- One source-origin question was added. The active bank now contains 618 questions: 42 source-origin and 576 AI-generated.

## Candidate-by-candidate log

| Image | Native-resolution finding | Decision |
|---|---|---|
| IMG-0610 | Video introduction to IPv4 router routing tables; screenshot only, no video transcript or answer | Instructional media reference; no quiz answer |
| IMG-0611 | IPv6 overview: 128-bit addressing, simplified header, address-space comparison, and NAT discussion | Instructional material; note that IPv6 reduces address-conservation pressure but does not technically prohibit NAT |
| IMG-0612 | IP encapsulation slide showing a transport segment inside an IP packet and stable end-to-end IP addressing absent NAT | Instructional diagram; no marked answer |
| IMG-0613 | Module review slide summarizing connectionless/best-effort IP, IPv4/IPv6, host route choice, default gateway, route-table types, and longest-prefix match | Instructional review material; no marked answer |
| IMG-0614 | Switch default-gateway slide with an IOS configuration example and management-plane explanation | Instructional material; no marked answer |
| IMG-0615 | IPv4 header question asks which field contains unicast, multicast, or broadcast destination addresses; adjacent table explicitly identifies Destination IPv4 Address | Existing source question s8-ipv4-destination-address-field-source-001 confirmed |
| IMG-0616 | IPv6 extension-header slide: optional headers between base header and payload; examples include fragmentation/security/mobility; routers do not fragment IPv6 packets | Instructional material; no marked answer |
| IMG-0617 | IPv4 header overview explaining packet direction, header fields, and Layer 3 device processing | Instructional material; no marked answer |
| IMG-0618 | Dynamic-routing slide explaining discovery of remote networks, updates, path selection, and topology-change adaptation with OSPF diagrams | Instructional material; no marked answer |
| IMG-0619 | IPv4 header question asks which field identifies the next-level protocol; adjacent table identifies Protocol and gives ICMP, TCP, UDP examples | New source-origin question s8-ipv4-protocol-field-source-001 added |

## Added source-origin question

- s8-ipv4-protocol-field-source-001 — asks which IPv4 header field identifies the next-level protocol. The adjacent source table explicitly states that Protocol identifies ICMP, TCP, UDP, etc.; the answer is not inferred from an unmarked selection.

## Review decisions

1. Preserve the existing IMG-0615 source question; do not duplicate it.
2. Add IMG-0619 as a source-origin question because the adjacent table explicitly provides the answer.
3. Treat the star as decorative and not as a marked response.
4. Avoid repeating the slide's claim that IPv6 “eliminates” NAT without qualification; IPv6 removes the need for NAT solely to conserve globally unique address space, but NAT is not technically impossible or categorically absent.
5. Continue native-resolution inspection with IMG-0620 onward.
