# Selected source question references

This index provides stable references for source questions promoted into the active learning bank. The line numbers refer to `Sem1_Questions_and_Review_Material.md`, the extracted question/review-material file in the source archive.

## Q189 — IPv4 unicast delivery

- **Source line:** 11028
- **Extracted module label:** Module 9: Address Resolution
- **Prompt:** A host is transmitting a unicast. Which host or hosts will receive it?
- **Extracted answer:** "a specially defined group of hosts"
- **Review status:** The extracted answer conflicts with the networking definition. Unicast is one-to-one delivery to one destination host/interface. The active question reuses the source prompt but is marked AI-generated and uses the corrected answer. Do not treat the extracted answer as authoritative.

## Q194 — IPv4 broadcast delivery

- **Source line:** 11303
- **Module:** Module 11: IPv4 Addressing
- **Prompt:** A host is transmitting a broadcast. Which host or hosts will receive it?
- **Extracted answer:** "all hosts in the same subnet"
- **Review status:** Promoted as a source-origin question. The active explanation clarifies that the relevant scope is the local broadcast domain and ordinary Layer 2 broadcasts are not routed.

## Q201 — IPv4 multicast delivery

- **Source line:** 11611
- **Module:** Module 11: IPv4 Addressing
- **Prompt:** A host is transmitting a multicast. Which host or hosts will receive it?
- **Extracted answer:** "a specially defined group of hosts"
- **Review status:** Promoted as a source-origin question. The active explanation clarifies that multicast targets group members, not every host on the subnet.

## Q190 — IPv4 multicast address range

- **Source line:** 11182
- **Extracted module label:** Module 9: Address Resolution
- **Prompt:** Which address prefix range is reserved for IPv4 multicast?
- **Extracted answer:** "240.0.0.0 - 254.255.255.255"
- **Review status:** Not promoted. The extracted answer is incorrect: IPv4 multicast uses 224.0.0.0/4 (224.0.0.0 through 239.255.255.255). The supplied range is in the experimental/reserved Class E space. Keep this candidate flagged for source-image verification rather than copying the incorrect answer.

## Usage

Question IDs such as `Q194` and `Q201` may appear in a question's `sourceRefs`. These IDs resolve to the entries in this index. When OCR answer text conflicts with a protocol definition, preserve the source text in this index and document the correction in the active question explanation; do not silently reproduce an incorrect answer.
