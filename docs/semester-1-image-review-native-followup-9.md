# Semester 1 image review — native-resolution follow-up 9

**Review scope:** ten consecutive source-image references, IMG-0600 through IMG-0609. All ten original image files were recovered from the supplied OneNote notebook and checked against the OCR export's SHA-256 manifest before inspection.

**Review method:** each image was opened individually at native resolution. Diagrams, command output, header fields, prompt text, and answer indicators were checked against the active seed and existing source associations.

## Results

- Ten unique images opened individually at native resolution.
- IMG-0600, IMG-0602–0606, IMG-0608, and IMG-0609 are instructional slides, diagrams, terminology summaries, or section markers; they do not contain marked quiz answers.
- IMG-0601 is an unfilled routing-table matching activity. Its route table is legible, but all answer targets are blank. A new AI-generated applied matching question now uses the visible table entries; it is not labeled source-origin.
- IMG-0607 contains an IPv4 TTL question whose adjacent field-description table explicitly identifies Time to Live. It is already linked to source-origin question s8-ipv4-ttl-field-source-001.
- The blue star on the question slides is decorative, not an answer-selection mark.
- No new source-origin answer key or source-image association was needed.
- The 144-candidate batch 1–4 count remains 89/144 opened at native resolution, with 55 contact-sheet-only. Follow-ups 7–9 have opened thirty additional images (IMG-0580–IMG-0609) outside those four contact-sheet batches; across both workstreams, 119 unique images have now been individually inspected (89 + 30).
- One AI-generated question was added from the unfilled IMG-0601 routing-table activity. The active bank now contains 617 questions; the source-origin count remains 41.

## Candidate-by-candidate log

| Image | Native-resolution finding | Decision |
|---|---|---|
| IMG-0600 | Network Layer characteristics slide: IPv4/IPv6, addressing, encapsulation, routing, and de-encapsulation | Instructional material; no quiz answer |
| IMG-0601 | Router routing-table matching activity with five destination addresses and visible route entries; all answer targets are empty | No marked answer key; used as evidence for one AI-generated applied matching question |
| IMG-0602 | Router routing-table slide describing directly connected, remote, and default routes, with a two-router topology | Instructional material; no marked quiz answer |
| IMG-0603 | IPv6 base-header diagram showing Version, Traffic Class, Flow Label, Payload Length, Next Header, Hop Limit, and source/destination addresses | Instructional diagram; no marked answer |
| IMG-0604 | MTU/media-independence slide describing fragmentation, latency, and IPv6 packet-fragmentation behavior | Instructional material; no marked answer |
| IMG-0605 | Network Layer terms and commands summary | Reference slide; no question/answer key |
| IMG-0606 | Host routing-table slide identifying Windows route print/netstat -r and the interface list, IPv4 table, and IPv6 table sections | Instructional material; no marked answer |
| IMG-0607 | IPv4 packet-header TTL question; the adjacent table states that TTL is the Layer 3 hop count and the router discards the packet when it reaches zero | Existing source question s8-ipv4-ttl-field-source-001 confirmed |
| IMG-0608 | Network Layer Characteristics section-title slide | Instructional section marker |
| IMG-0609 | IPv4 header structure diagram showing fields and the 20-byte minimum header | Instructional diagram; no marked answer |

## Added question

- s8-routing-table-destination-interface-001 — matches five destination addresses from IMG-0601 to FastEthernet0/0, FastEthernet1/1, FastEthernet1/0, FastEthernet0/1, or the Serial0/0/0 default route. The answers are derived from the visible routing table and longest-prefix/default-route behavior; because the source activity's targets are blank, the question is explicitly AI-generated.

## Review decisions

1. Do not infer a source answer key from the empty matching targets in IMG-0601.
2. Keep the generated routing-table question labeled AI-generated and retain IMG-0601 as its supporting reference.
3. Preserve the existing source-origin TTL question link from IMG-0607.
4. Retain the other images as lesson/reference material rather than forcing them into quiz records.
5. Continue native-resolution inspection with IMG-0610 onward.
