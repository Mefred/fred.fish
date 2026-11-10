# Module 4 native-resolution exhibit review — November 10, 2026

**Scope:** targeted follow-up for the UTP wiring and termination references used by the active Physical Layer lesson.

**Recovery and integrity:** the reviewed PNGs were extracted from the original 407,524,192-byte OneNote notebook. Each extracted image's SHA-256 matched its corresponding record in `image-ocr.jsonl`. The recovery procedure and full 2,646/2,646 manifest match are documented in `semester-1-image-recovery.md`.

## IMG-0353 — straight-through, crossover, and rollover wiring

- **Visual content:** two eight-position connector diagrams are labeled T568A and T568B. The table states:
  - Ethernet straight-through: both ends T568A or both ends T568B; host to network device.
  - Ethernet crossover: one end T568A and the other T568B; host-to-host, switch-to-switch, and router-to-router.
  - Crossover is labeled legacy because most NICs use Auto-MDIX to sense cable type.
  - Rollover is Cisco proprietary; host serial port to router or switch console port using an adapter.
- **Question-bank verification:** `s4-utp-cable-types-match-001` correctly tests same-standard versus different-standard termination and console use. `s4-utp-cable-types-applied-002` correctly tests the traditional unlike-device versus like-device convention, with an Auto-MDI/MDIX caveat.
- **Decision:** retain both questions. They assess distinct dimensions and are not contradictory. The diagram is instructional evidence, not a selected answer key.

## IMG-1576 and IMG-1787 — termination diagnosis

- **Visual content:** both images show the same question and the same RJ-45 cable exhibit. The individual conductors are untwisted for an excessive distance before reaching the connector.
- **Answer-control inspection:** all four checkboxes are empty in both images. Neither image provides a marked source answer.
- **Question-bank verification:** `s4-utp-termination-diagnosis-applied-001` selects “The untwisted length of each wire is too long” and explains that pair twists should be maintained close to the termination to limit crosstalk.
- **Decision:** the diagnosis is visually supported, but the record remains AI-generated. Do not relabel it source-origin.

## IMG-0541 — poor versus proper termination

- **Visual content:** the slide explicitly labels one cable “Poorly terminated UTP cable” and another “Properly terminated UTP cable.” The poorly terminated example exposes a longer untwisted conductor section; the proper example preserves pair twist closer to the connector.
- **Decision:** this is corroborating instructional evidence for the termination explanation. The blue star is a decorative slide marker, not an answer selection.

## IMG-0367 — cable-selection topology (previous review)

- **Visual content:** PC-to-console and Ethernet FastEthernet device connections form the basis of a UTP cable-selection prompt.
- **Answer-control inspection:** all four radio options were unselected.
- **Decision:** useful topology context only; no marked source answer key.

## Final status

The targeted Module 4 native-resolution review is **complete** for the T568A/T568B/rollover slide, the duplicate termination-question exhibits, the poor/proper termination comparison, and the cable-selection topology. The source exhibits support the current lesson explanations and distinctions. Source answer controls were unmarked, so AI-generated question provenance is preserved.

Remaining Module 4 sign-off work is execution of Packet Tracer **Connect the Physical Layer** and **Connect a Wired and Wireless LAN**, followed by repository validation and learner/accessibility testing.
