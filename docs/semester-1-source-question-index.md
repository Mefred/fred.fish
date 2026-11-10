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


## Q357 — Verify IPv6 interface addresses

- **Source line:** 27197
- **Module:** Module 17: Build a Small Network
- **Prompt:** A network technician is troubleshooting an issue and needs to verify all of the IPv6 interface addresses on a router. What is the best command to use to accomplish the task?
- **Extracted answer:** `show ipv6 interface`
- **Review status:** Promoted as a source-origin question. The active answer and explanation preserve the extracted command and clarify its interface-verification purpose.


## Q352 — IOS extended ping source address

- **Source line:** 27106
- **Module:** Module 17: Build a Small Network
- **Prompt:** Which method is used to send a ping message specifying the source address for the ping?
- **Extracted answer:** Enter the IOS `ping` command without specifying a destination IP address, then use the extended prompts.
- **Review status:** Promoted as a source-origin question. IOS extended ping is started from privileged EXEC mode by entering `ping` without a destination; the guided prompts allow the source address/interface and other parameters to be selected.

## Usage

Question IDs such as `Q194` and `Q201` may appear in a question's `sourceRefs`. These IDs resolve to the entries in this index. When OCR answer text conflicts with a protocol definition, preserve the source text in this index and document the correction in the active question explanation; do not silently reproduce an incorrect answer.


## Visually verified image-only questions

These active questions are grounded in recovered OneNote images whose answer marks or diagrams were inspected directly. They use `IMG-XXXX` source references rather than numbered text-question IDs.

| Image reference | Active question ID | Verified content |
|---|---|---|
| IMG-0816 | `s9-arp-cache-aging-source-001` | ARP cache entries age out when their timer expires; timer duration varies by OS and entries can be removed manually |
| IMG-0348 | `s4-utp-identification-source-001` | Four color-coded twisted copper pairs with no visible shield: UTP |
| IMG-1725, IMG-1872 | `s4-rj45-connector-source-001` | RJ-45/8P8C connector is used for twisted-pair Ethernet |
| IMG-0306 | `s3-destination-ip-layer-source-001` | Destination IP address is added at the Network layer |
| IMG-0314 | `s3-source-ip-layer-source-001` | Source IP address is added at the Network layer |
| IMG-0279 | `s3-application-data-layer-source-001` | Application data enters encapsulation at the Application layer |

The following additional images were checked and linked to existing source-origin questions rather than creating duplicates:

| Image reference | Active question ID | Verified content |
|---|---|---|
| IMG-0270 | `s3-source-mac-001` | Source MAC address is added at the Data Link layer |
| IMG-0282 | `s3-destination-mac-layer-002` | Destination MAC address is added at the Data Link layer |
| IMG-0287 | `s3-destination-port-001` | Destination port number is added at the Transport layer |
| IMG-0322 | `s3-source-port-layer-002` | Source port number is added at the Transport layer |


| IMG-0779 | `s8-diffserv-priority-source-001` | Differentiated Services field is the 8-bit IPv4 QoS field (modern DSCP + ECN) |


| IMG-0599 | `s8-ipv4-source-address-field-source-001` | 32-bit address of the sending interface is the Source IPv4 Address field |
| IMG-0607 | `s8-ipv4-ttl-field-source-001` | Time to Live limits packet lifetime across routers |
| IMG-0615 | `s8-ipv4-destination-address-field-source-001` | Destination IPv4 Address field contains unicast, multicast, or broadcast destination |
| IMG-0640 | `s8-ipv4-version-field-source-001` | Version field value 0100 identifies IPv4 |
| IMG-0647 | `s8-ipv4-header-checksum-field-source-001` | Header Checksum detects corruption in the IPv4 header |


## AI-generated questions informed by reviewed image scenarios

These questions use image references for scenario/diagram context, but their answer keys were derived from networking knowledge rather than a marked answer key. Their provenance therefore remains `ai-generated`.

| Image reference | Active question ID | Applied concept |
|---|---|---|
| IMG-1576, IMG-1787 | `s4-utp-termination-diagnosis-applied-001` | Excessive untwisted pair length at cable termination |
| IMG-1714 | `s1-network-characteristics-failover-applied-001` | Security, QoS, and fault tolerance during ISP failover |
| IMG-1088 | `s11-subnet-host-membership-matching-applied-001` | /27 subnet-to-host membership matching |
