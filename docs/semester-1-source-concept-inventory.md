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
| 8. Network Layer | Source module objective/topic block not located in the recovered raw-text search used for this pass. | Do not infer a canonical topic list from the lesson title or current question tags. Locate the original module pages and verify the objective block before marking this inventory complete. | `network-layer` | **Pending source verification.** |
| 9. Address Resolution | Explain how ARP and ND enable communication on a network. | MAC and IP; Neighbor Discovery | `address-resolution` | Objective and topic list transcribed (source lines 8545–8558). |
| 10. Basic Router Configuration | Implement initial settings on a router and end devices. | Configure Initial Router Settings; Configure Interfaces; Configure the Default Gateway | `router-configuration` | Objective and topic list transcribed (source lines 9391–9406). |
| 11. IPv4 Addressing | Calculate an IPv4 subnetting scheme to efficiently segment your network. | IPv4 Address Structure; IPv4 Unicast, Broadcast, and Multicast; Types of IPv4 Addresses; Network Segmentation; Subnet an IPv4 Network | `ipv4-addressing` | Objective and topic list transcribed (source lines 11828–11849). |
| 12. IPv6 Addressing | Implement an IPv6 addressing scheme. | IPv4 Issues; IPv6 Address Representation; IPv6 Address Types; GUA and LLA Static Configuration; Dynamic Addressing for IPv6 GUAs; Dynamic Addressing for IPv6 LLAs; IPv6 Multicast Addresses; Subnet an IPv6 Network | `ipv6-addressing` | Objective and topic headings recovered across the objective blocks (source lines 15378–15396, 15914–15930, and 19411 onward); reconcile repeated/continued blocks during detailed review. |
| 13. ICMP | Use various tools to test network connectivity. | ICMP Messages; Ping and Traceroute Testing | `icmp` | Objective and topic list transcribed (source lines 18222–18236). |
| 14. Transport Layer | Compare the operations of transport layer protocols in supporting end-to-end communication. | Transportation of Data; TCP Overview; UDP Overview; Port Numbers; TCP Communication Process; Reliability and Flow Control; UDP Communication | `transport-layer` | Objective and topic list transcribed (source lines 20704–20725). |
| 15. Application Layer | Explain the operation of application layer protocols in providing support to end-user applications. | Application, Presentation, and Session; Peer-to-Peer; Web and Email Protocols; IP Addressing Services; File Sharing Services | `application-layer` | Objective and topic list transcribed (source lines 22673–22689). |
| 16. Network Security Fundamentals | Configure switches and routers with device hardening features to enhance security. | Security Threats and Vulnerabilities; Network Attacks; Network Attack Mitigation; Device Security | `network-security` | Objective and topic list transcribed (source lines 24867–24881). |
| 17. Build a Small Network | Implement a network design for a small network to include a router, a switch, and end devices. | Devices in a Small Network; Small Network Applications and Protocols; Scale to Larger Networks; Verify Connectivity; Host and IOS Commands; Troubleshooting Methodologies; Troubleshooting Scenarios | `small-network` | Objective and topic list transcribed (source lines 26892–26915). |

## Interpretation rules

1. **Source topic present** means the topic heading/objective was recovered from the lecture-note source. It does not mean every detail, diagram, lab, or embedded question under that topic has been reviewed.
2. **Question-tag match** must be established explicitly. Similar wording is not enough; maintain a mapping from each source topic to the question bank's stable concept identifiers.
3. **Question coverage** must count distinct active question IDs, not the number of tags or the number of times a tag appears in a single question.
4. **One-question coverage** is a fragile signal. It should be reported as low practice depth, not as mastery or adequate coverage.
5. **Pending source verification** is not a zero-question source gap. Module 8 remains pending until its original pages/objectives are located and reviewed.
6. OCR text can locate candidate material, but diagrams, screenshots, tables, and question exhibits require visual inspection before their details are treated as verified.

## Next review work

- Recover and verify the Network Layer module objective/topic block (Module 8).
- Complete topic-objective transcription where an excerpt above is explicitly marked partial.
- Split broad source topics into atomic assessable concepts only when the source material supports that split.
- Add an explicit source-topic-to-question-concept mapping and use it to generate a real source coverage matrix.
- Visually inspect source pages for topics whose instruction depends on diagrams, screenshots, or Packet Tracer exhibits.
