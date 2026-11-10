# Semester 1 image review — native-resolution follow-up 13

**Review scope:** ten additional candidates from the original batch 4 contact sheet: IMG-0556, IMG-0558, IMG-0559, IMG-0560, IMG-0561, IMG-0562, IMG-0563, IMG-0566, IMG-0568, and IMG-0570. All ten original image files were recovered from the supplied OneNote notebook and checked against the OCR export's SHA-256 manifest before inspection.

**Review method:** each image was opened individually at native resolution. Answer controls, diagrams, source/destination addresses, and slide text were checked.

## Results

- All ten are new unique native-resolution inspections within the original 144-candidate batch set.
- All visible radio buttons and checkboxes are unselected; blue stars are decorative.
- IMG-0563 is a Physical Layer module summary.
- IMG-0562 contains a two-router topology and an unfilled destination-MAC question. The diagram supports a new AI-generated scenario about the first-hop destination MAC; the source answer is not marked.
- No new source-origin association was added.
- The original batch 1–4 native-resolution count is now 112 of 144, leaving 32 contact-sheet-only.
- Follow-ups 7–10 separately inspected 40 additional images outside the original 144-candidate set. Across both workstreams, 152 unique images have now been individually inspected (112 + 40).

## Candidate-by-candidate log

| Image | Native-resolution finding | Decision |
|---|---|---|
| IMG-0556 | Host behavior for a broadcast destination MAC address; all four radio buttons are empty | No marked answer |
| IMG-0558 | Data-link layer services multiple-select question; all six checkboxes are empty | No marked answer |
| IMG-0559 | Topology-based UTP cable selection question including console and FastEthernet links; all four radio buttons are empty | No marked answer |
| IMG-0560 | Host behavior for an unrecognized destination MAC address; all four radio buttons are empty | No marked answer |
| IMG-0561 | Media communication type that does not require arbitration; all four radio buttons are empty | No marked answer |
| IMG-0562 | Web server and PC1 on different subnets, with router R2 as the web server's default gateway; all four destination-MAC choices are empty | No marked answer; used as topology context for one AI-generated scenario |
| IMG-0563 | Physical Layer summary covering connections, media, encoding/signaling, copper cable types, and straight-through/crossover wiring | Instructional review material |
| IMG-0566 | MAC sublayer functions multiple-select question; all five checkboxes are empty | No marked answer |
| IMG-0568 | IPv4 multicast destination-MAC behavior question; all four radio buttons are empty | No marked answer |
| IMG-0570 | Fiber-optic cable characteristics multiple-select question; all five checkboxes are empty | No marked answer |

## Added AI-generated question

- s4-first-hop-destination-mac-scenario-001 uses the router/server/PC topology in IMG-0562. The web server sends to PC1 on a remote subnet, so its first Ethernet frame uses the local default-gateway router R2 MAC address (00-60-2F-3A-07-CC) as the destination MAC. The item is explicitly AI-generated because the source answer controls are unselected.

## Review decisions

1. Do not infer source answer keys from unselected controls.
2. Keep the IMG-0562 question AI-generated and distinguish the Layer 2 next-hop MAC from the Layer 3 final-destination IP.
3. Keep IMG-0563 as instructional material.
4. Treat all blue stars as decorative.
5. Continue native-resolution inspection with the remaining batch 4 candidates.
