# Semester 1 source-concept inventory

**Status:** first-pass source inventory, not yet a complete concept-to-question audit  
**Primary evidence:** `Sem1_Lecture_Notes_Raw_Text.txt` in the Semester 1 source package  
**Method:** transcribe module objectives and topic objectives from the recovered lecture-note text. The line numbers below refer to that source text as indexed in the Library. Repeated objective blocks are treated as one module objective, not as additional concepts.

This inventory is deliberately kept separate from the active question bank. A source topic is not considered covered merely because a similarly named question tag exists. The next audit stage must map each reviewed topic to one or more explicit question-bank concept tags, then check the actual question prompts and answers.

## Module inventory

| Source module | Source objective | Topic objectives recovered from source | Related Fred.fish lesson IDs | Inventory status |
|---|---|---|---|---|
| 1. Networking Today | Explain the advances in modern technologies. | Networks Affect our Lives; Network Components; Network Representations and Topologies; Common Types of Networks; Internet Connections; Reliable Networks; Network Trends; Network Security | `network-components`, `network-topologies`, `network-types`, `internet-connections`, `reliable-networks`, `network-trends`, `network-security` | Objective and topic list transcribed (source lines 343–363). |
| 2. Basic Switch and End Device Configuration | Implement initial settings including passwords, IP addressing, and default gateway parameters on a network switch and end devices. | Cisco IOS Access; IOS Navigation; The Command Structure; Basic Device Configuration; Save Configurations; Ports and Addresses; Configure IP Addressing; Verify Connectivity | `basic-device-configuration` | Objective and topic list transcribed (source lines 1114–1140; topic list continues beyond the excerpt). |
| 3. Protocols and Models | Explain how network protocols enable devices to access local and remote network resources. | The Rules; Protocols; Protocol Suites; Standards Organizations; Reference Models; Data Encapsulation; Data Access | `protocols-and-models` | Objective and topic list transcribed (source lines 2625–2644; remaining topic objectives require a second-pass line review). |
| 4. Physical Layer | Explain how physical layer protocols, services, and network media support communications across data networks. | Purpose of the Physical Layer; Physical Layer Characteristics; Copper Cabling; UTP Cabling; Fiber-Optic Cabling; Wireless Media | `physical-layer` | Objective and topic list transcribed (source lines 4572–4593). |
| 5. Number Systems | Calculate numbers between decimal, binary, and hexadecimal systems. | Binary Number System; Hexadecimal Number System | `number-systems` | Objective and topic list transcribed (source lines 4833–4848). |
| 6. Data Link Layer | Explain how media access control in the data link layer supports communication across networks. | Purpose of the Data Link Layer; Topologies; Data Link Frame | `data-link-layer` | Objective and topic list transcribed (source lines 5344–5360). |
| 7. Ethernet Switching | Explain how Ethernet works in a switched network. | Ethernet Frame; Ethernet MAC Address; The MAC Address Table; Switch Speeds and Forwarding Methods | `ethernet-switching` | Objective and topic list transcribed (source lines 5953–5965). |
| 8. Network Layer | Explain how the network layer uses IP protocols for reliable communications. | Network Layer Characteristics; IPv4 Packet; IPv6 Packet; How a Host Routes; Router Routing Tables | `network-layer` | Topic list recovered from the explicit “Module 8: Topics” block (source lines 7788–7800). The OCR contains a second repeated copy; reconcile source page provenance in the visual pass. |
| 9. Address Resolution | Explain how ARP and ND enable communication on a network. | MAC and IP; Neighbor Discovery | `address-resolution` | Objective and topic list transcribed (source lines 8545–8558). |
| 10. Basic Router Configuration | Implement initial settings on a router and end devices. | Configure Initial Router Settings; Configure Interfaces; Configure the Default Gateway | `router-configuration` | Objective and topic list transcribed (source lines 9391–9406). |
| 11. IPv4 Addressing | Calculate an IPv4 subnetting scheme to efficiently segment your network. | IPv4 Address Structure; IPv4 Unicast, Broadcast, and Multicast; Types of IPv4 Addresses; Network Segmentation; Subnet an IPv4 Network | `ipv4-addressing` | Objective and topic list transcribed (source lines 11828–11849). |
| 12. IPv6 Addressing | Implement an IPv6 addressing scheme. | IPv4 Issues; IPv6 Address Representation; IPv6 Address Types; GUA and LLA Static Configuration; Dynamic Addressing for IPv6 GUAs; Dynamic Addressing for IPv6 LLAs; IPv6 Multicast Addresses; Subnet an IPv6 Network | `ipv6-addressing` | Objective and topic headings recovered across the objective blocks (source lines 15378–15396, 15914–15930, and 19411 onward); reconcile repeated/continued blocks during detailed review. |
| 13. ICMP | Use various tools to test network connectivity. | ICMP Messages; Ping and Traceroute Testing | `icmp` | Objective and topic list transcribed (source lines 18222–18236). |
| 14. Transport Layer | Compare the operations of transport layer protocols in supporting end-to-end communication. | Transportation of Data; TCP Overview; UDP Overview; Port Numbers; TCP Communication Process; Reliability and Flow Control; UDP Communication | `transport-layer` | Objective and topic list transcribed (source lines 20704–20725). |
| 15. Application Layer | Explain the operation of application layer protocols in providing support to end-user applications. | Application, Presentation, and Session; Peer-to-Peer; Web and Email Protocols; IP Addressing Services; File Sharing Services | `application-layer` | Objective and topic list transcribed (source lines 22673–22689). |
| 16. Network Security Fundamentals | Configure switches and routers with device hardening features to enhance security. | Security Threats and Vulnerabilities; Network Attacks; Network Attack Mitigation; Device Security | `network-security` | Objective and topic list transcribed (source lines 24867–24881). |
| 17. Build a Small Network | Implement a network design for a small network to include a router, a switch, and end devices. | Devices in a Small Network; Small Network Applications and Protocols; Scale to Larger Networks; Verify Connectivity; Host and IOS Commands; Troubleshooting Methodologies; Troubleshooting Scenarios | `small-network` | Objective and topic list transcribed (source lines 26892–26915). |

## First-pass topic-to-question comparison: Module 8

The Module 8 objective list is now compared against the active `network-layer` question records and their concept tags. This is a narrow, explicit mapping pass; it is not yet generalized to the other modules.

| Source topic objective | Evidence in source notes | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Network Layer Characteristics | IP is connectionless, best-effort, and media-independent; the source explains that IP does not guarantee delivery (source lines 7661–7708 and nearby review material). | `ip-characteristics`, `connectionless`, `best-effort`, `media-independent` | Represented, with multiple applied questions. |
| IPv4 Packet | Source lists Version, Differentiated Services, Header Checksum, TTL, Protocol, Source IPv4 Address, and Destination IPv4 Address (source lines 7661–7677). | No dedicated IPv4 packet-header concept tag or active prompt found in the current seed scan. The only `TTL`-tagged prompts are ICMP TTL-expiry questions. | **Likely practice gap:** assess IPv4 header fields directly, including how they are interpreted. |
| IPv6 Packet | Source lists Version, Traffic Class, Flow Label, Payload Length, Next Header, Hop Limit, and 128-bit source/destination addresses (source lines 7565–7583); it also notes the fixed 40-byte header and removed IPv4 fields (source lines 7963–7974). | No dedicated IPv6 packet-header concept tag or active prompt found in the current seed scan. IPv6 address-structure tags do not by themselves assess packet-header fields. | **Likely practice gap:** assess IPv6 header fields and compare the IPv4/IPv6 header structures. |
| How a Host Routes | Source explains local versus remote destinations, default-gateway use, and host routing-table behavior (Module 8 topic block at source lines 7788–7800 and related material). | `default-gateway`, `packet-forwarding`, `routing-table-lookup`, `next-hop` | Represented. Verify that the lesson teaches host route selection distinctly from router route selection. |
| Router Routing Tables | Source covers directly connected, remote, and default routes; route sources, metrics, and forwarding decisions (Module 8 source material around lines 7788–7800 and 7864 onward). | `routing-table`, `ipv4-routing-table`, `connected-routes`, `static-routes`, `default-route`, `routing-metric`, `administrative-distance`, `route-sources`, `longest-prefix-match` | Broadly represented; continue checking route-entry interpretation and route selection with varied output-based scenarios. |

The two packet-header findings are provisional but concrete: the source has explicit assessable objectives and field lists, while the active seed scan contains no dedicated header-field prompts/tags. Add distinct IPv4- and IPv6-header concepts and questions before calling Module 8 coverage complete.

### Module 8 packet-header concept decomposition

The first-pass gap is now decomposed into assessable field-level targets. These are source-derived concepts, not claims that the corresponding questions have already been added.

| Header family | Atomic concept | Source-supported role / distinction | Evidence |
|---|---|---|---|
| IPv4 | `ipv4-version` | Identifies the packet format; the source review question uses the 4-bit value `0100`. | Lines 7661–7677 and IPv4 header review material |
| IPv4 | `ipv4-differentiated-services` | 8-bit field used to indicate packet priority / differentiated treatment. | Lines 7661–7677 and packet-header review slide |
| IPv4 | `ipv4-header-checksum` | Header integrity-check field; distinguish it from transport checksums. | Lines 7661–7677 |
| IPv4 | `ipv4-ttl` | Limits packet lifetime / Layer 3 hop count. | Lines 7661–7677; TTL review prompt |
| IPv4 | `ipv4-protocol` | Identifies the encapsulated next-level protocol (for example, TCP, UDP, or ICMP). | Lines 7661–7677; protocol-identification review prompt |
| IPv4 | `ipv4-source-destination` | Source and destination IPv4 addresses identify the packet endpoints; each address is 32 bits. | Lines 7661–7677 and IPv4 header overview |
| IPv4 | `ipv4-fragmentation-fields` | Identification, Flags, and Fragment Offset support IPv4 fragmentation and fragment reassembly. | Module 8 new-terms list around lines 7661–7677 |
| IPv6 | `ipv6-version` | Identifies IPv6; the source gives the 4-bit value `0110`. | Lines 7565–7583 |
| IPv6 | `ipv6-traffic-class` | QoS-related field corresponding to the IPv4 Differentiated Services field. | Lines 7565–7583 |
| IPv6 | `ipv6-flow-label` | 20-bit value used to identify packets in the same flow for consistent handling. | Lines 7565–7583 |
| IPv6 | `ipv6-payload-length` | 16-bit field describing the payload length. | Lines 7565–7583 |
| IPv6 | `ipv6-next-header` | Identifies the next protocol or extension header, such as TCP, UDP, or ICMPv6. | Lines 7565–7583 |
| IPv6 | `ipv6-hop-limit` | Layer 3 hop limit; replaces the IPv4 TTL function. | Lines 7565–7583 |
| IPv6 | `ipv6-source-destination` | Source and destination addresses are 128 bits each. | Lines 7565–7583 |
| IPv6 | `ipv6-fixed-header` | Base header is a fixed 40 bytes; extension headers carry optional information. | Lines 7963–7974 |
| IPv4 vs IPv6 | `ipv4-vs-ipv6-header` | Compare retained fields (Version, Source Address, Destination Address), renamed/replaced fields (TTL → Hop Limit), and IPv4-only header checksum / fragmentation handling. | Lines 7963–7974 and comparison review question |

**Question-bank follow-up:** add at least one direct identification item and one applied packet-inspection scenario for each protocol, plus a comparison item. Include distractors that separate IPv4 TTL from IPv6 Hop Limit, IPv4 Protocol from IPv6 Next Header, IPv4 Differentiated Services from IPv6 Traffic Class, and IPv6 Flow Label from ordinary addressing. Questions about the IPv6 Flow Label should test flow classification/consistent handling, not promise that the network must use one physical path. The source's OCR labels the IPv6 addresses as “Source IPv4 Address” and “Destination IPV4 Address”; treat those as transcription errors because the same rows explicitly specify 128-bit IPv6 addresses.

**Provenance limitation:** the line references above identify the recovered OCR evidence, but they do not identify the exact image asset IDs for the original header diagrams. Do not attach an `IMG-####` source reference to a new question until the image-to-asset mapping is visually verified. The current inventory therefore records these as source-backed content targets while the precise visual asset linkage remains pending.
## Interpretation rules

1. **Source topic present** means the topic heading/objective was recovered from the lecture-note source. It does not mean every detail, diagram, lab, or embedded question under that topic has been reviewed.
2. **Question-tag match** must be established explicitly. Similar wording is not enough; maintain a mapping from each source topic to the question bank's stable concept identifiers.
3. **Question coverage** must count distinct active question IDs, not the number of tags or the number of times a tag appears in a single question.
4. **One-question coverage** is a fragile signal. It should be reported as low practice depth, not as mastery or adequate coverage.
5. **Pending source verification** is not a zero-question source gap. Module 8 remains pending until its original pages/objectives are located and reviewed.
6. OCR text can locate candidate material, but diagrams, screenshots, tables, and question exhibits require visual inspection before their details are treated as verified.

## Next review work

- Visually verify the Network Layer objective/topic block and attach exact source-page references; the recovered raw text includes duplicated/repeated Module 8 content.
- Complete topic-objective transcription where an excerpt above is explicitly marked partial.
- Split broad source topics into atomic assessable concepts only when the source material supports that split.
- Add an explicit source-topic-to-question-concept mapping and use it to generate a real source coverage matrix.
- Visually inspect source pages for topics whose instruction depends on diagrams, screenshots, or Packet Tracer exhibits.
