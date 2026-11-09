# Semester 1 source-concept inventory

**Status:** all 17 module objectives transcribed; first-pass objective-to-question map complete; page-by-page source verification remains incomplete  
**Primary evidence:** `Sem1_Lecture_Notes_Raw_Text.txt` in the Semester 1 source package  
**Method:** transcribe module objectives and topic objectives from the recovered lecture-note text. The line numbers below refer to that source text as indexed in the Library. Repeated objective blocks are treated as one module objective, not as additional concepts.

This inventory is deliberately kept separate from the active question bank. The objective-to-question map later in this document is a first-pass navigation aid. A source topic is not considered fully verified merely because a similarly named question tag exists; the remaining audit must check actual prompts, answers, diagrams, and Packet Tracer activity evidence against the source pages.

## Module inventory

| Source module | Source objective | Topic objectives recovered from source | Related Fred.fish lesson IDs | Inventory status |
|---|---|---|---|---|
| 1. Networking Today | Explain the advances in modern technologies. | Networks Affect our Lives; Network Components; Network Representations and Topologies; Common Types of Networks; Internet Connections; Reliable Networks; Network Trends; Network Security; The IT Professional | `network-components`, `network-topologies`, `network-types`, `internet-connections`, `reliable-networks`, `network-trends`, `network-security` | Objective and topic list transcribed (source lines 343–363). |
| 2. Basic Switch and End Device Configuration | Implement initial settings including passwords, IP addressing, and default gateway parameters on a network switch and end devices. | Cisco IOS Access; IOS Navigation; The Command Structure; Basic Device Configuration; Save Configurations; Ports and Addresses; Configure IP Addressing; Verify Connectivity | `basic-device-configuration` | All eight topic objectives transcribed (source lines 1114–1140). |
| 3. Protocols and Models | Explain how network protocols enable devices to access local and remote network resources. | The Rules; Protocols; Protocol Suites; Standards Organizations; Reference Models; Data Encapsulation; Data Access | `protocols-and-models` | All seven topic objectives transcribed (source lines 2625–2644). |
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

## First-pass topic-to-question comparison: Module 4

The Physical Layer module is now mapped to active question records. This is an initial mapping of the objective list to actual prompts and concepts, not a claim that every diagram, cable type, connector, or lab has been fully audited.

| Source topic objective | Active question-bank evidence | First-pass finding |
|---|---|---|
| Purpose of the Physical Layer | `s4-physical-layer-role-001` assesses accepting a Layer 2 frame, encoding it as signals, and transmitting bits. | Represented at the core-function level; add more receiver-side encoding/decoding scenarios if needed. |
| Physical Layer Characteristics | `s4-bandwidth-throughput-001` distinguishes rated bandwidth from achieved throughput; `s4-signal-attenuation-001` assesses attenuation and signal integrity. | Partially represented. Add practice on latency, jitter, and bandwidth units only where the source teaches them in this module. |
| Copper Cabling | `s4-utp-distance-001`, `s4-utp-twist-001`, `s4-utp-crosstalk-001`, `s4-signal-medium-match-001`, and `s4-utp-cable-selection-exhibit-applied-001` assess copper distance, twisting, interference, electrical signaling, and console/straight-through/crossover cable selection. | Represented at a first-pass level; the source exhibit is visually screened, but connector appearance and termination details still need full-size review. |
| UTP Cabling | `s4-utp-standard-001` tests TIA/EIA-568 scope; `s4-utp-twist-001` and `s4-utp-crosstalk-001` test UTP construction and interference reduction. | Partially represented; inspect the source's cable termination and pinout exhibits before declaring complete. |
| Fiber-Optic Cabling | `s4-fiber-purpose-001`, `s4-media-scenario-001`, `s4-fiber-modes-001`, and `s4-signal-medium-match-001` assess light signaling, distance, EMI resistance, and single-mode versus multimode. | Broadly represented; connector types and visual identification still need review. |
| Wireless Media | `s4-wireless-medium-001` and `s4-signal-medium-match-001` assess radio/microwave signaling and the wireless medium. | Partially represented; interference sources and practical placement/channel scenarios could use additional questions. |

**Initial practice expansion:** four AI-generated questions were added for physical-layer function, bandwidth versus throughput, medium-to-signal mapping, and TIA/EIA-568 UTP requirements. The new questions cite the recovered text block `block-0073`; they are not verbatim source-origin questions. The lesson now has 12 active questions. Continue visual verification of cable and connector exhibits before adding image-specific references.

## First-pass topic-to-question comparison: Module 8

The Module 8 objective list is mapped to active `network-layer` questions and concept tags. A first-pass objective-to-question map now exists for all 17 modules; this detailed section records the Module 8 evidence.

| Source topic objective | Evidence in source notes | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Network Layer Characteristics | IP is connectionless, best-effort, and media-independent; the source explains that IP does not guarantee delivery (source lines 7661–7708 and nearby review material). | `ip-characteristics`, `connectionless`, `best-effort`, `media-independent` | Represented, with multiple applied questions. |
| IPv4 Packet | Source lists Version, Differentiated Services, Header Checksum, TTL, Protocol, Source IPv4 Address, and Destination IPv4 Address (source lines 7661–7677). | `s8-ipv4-header-fields-match-001` explicitly maps all seven listed fields; `s8-ipv4-header-inspection-001` applies Protocol=17, TTL, and header-checksum interpretation. Tags include `ipv4-header-fields`, `ipv4-version`, `ipv4-differentiated-services`, `ipv4-header-checksum`, `ipv4-ttl`, `ipv4-protocol`, and `ipv4-source-destination`. | **Initial practice added:** direct field mapping plus packet-inspection scenario. Fragmentation fields remain a separate practice target. |
| IPv6 Packet | Source lists Version, Traffic Class, Flow Label, Payload Length, Next Header, Hop Limit, and 128-bit source/destination addresses (source lines 7565–7583); it also notes the fixed 40-byte header and removed IPv4 fields (source lines 7963–7974). | `s8-ipv6-header-fields-match-001` explicitly maps all eight base-header fields; `s8-ipv6-flow-label-scenario-001` applies flow-label interpretation; `s8-ipv4-ipv6-header-compare-001` tests fixed-header and extension-header differences. Tags include `ipv6-header-fields`, `ipv6-version`, `ipv6-traffic-class`, `ipv6-flow-label`, `ipv6-payload-length`, `ipv6-next-header`, `ipv6-hop-limit`, and `ipv6-source-destination`. | **Initial practice added:** field mapping, flow-label scenario, and IPv4/IPv6 structural comparison. Further applied packet-capture scenarios and visual review remain useful. |
| How a Host Routes | Source explains local versus remote destinations, default-gateway use, and host routing-table behavior (Module 8 topic block at source lines 7788–7800 and related material). | `default-gateway`, `packet-forwarding`, `routing-table-lookup`, `next-hop`; `s8-host-to-router-layer2-layer3-addresses-image-applied-001` applies host-to-gateway MAC addressing while preserving end-to-end IP addresses. | Represented. Verify that the lesson teaches host route selection distinctly from router route selection. |
| Router Routing Tables | Source covers directly connected, remote, and default routes; route sources, metrics, and forwarding decisions (Module 8 source material around lines 7788–7800 and 7864 onward). | `routing-table`, `ipv4-routing-table`, `connected-routes`, `static-routes`, `default-route`, `routing-metric`, `administrative-distance`, `route-sources`, `longest-prefix-match` | Broadly represented; continue checking route-entry interpretation and route selection with varied output-based scenarios. |

The packet-header gap now has direct matching and applied questions for IPv4 and IPv6 field roles, packet inspection, Flow Label interpretation, and structural differences. Two additional IPv4 fragmentation questions now match Identification/Flags/Fragment Offset to their roles and test MF=1 versus MF=0 during reassembly. Further packet-capture calculations and full-size source-diagram review remain useful depth work.

### Module 8 packet-header concept decomposition

The first-pass gap is decomposed into assessable field-level targets. Every listed header family now has active question-bank evidence; the IPv4 fragmentation fields have dedicated matching and reassembly questions.

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

**Question-bank status:** direct identification, applied packet-inspection, and IPv4/IPv6 comparison items are now active. Additional advanced capture interpretation can deepen the material. Include distractors that separate IPv4 TTL from IPv6 Hop Limit, IPv4 Protocol from IPv6 Next Header, IPv4 Differentiated Services from IPv6 Traffic Class, and IPv6 Flow Label from ordinary addressing. Questions about the IPv6 Flow Label should test flow classification/consistent handling, not promise that the network must use one physical path. The source's OCR labels the IPv6 addresses as “Source IPv4 Address” and “Destination IPV4 Address”; treat those as transcription errors because the same rows explicitly specify 128-bit IPv6 addresses.

**Provenance limitation:** the line references above identify the recovered OCR evidence, but they do not identify the exact image asset IDs for the original header diagrams. Do not attach an `IMG-####` source reference to a new question until the image-to-asset mapping is visually verified. The current inventory therefore records these as source-backed content targets while the precise visual asset linkage remains pending.
## Module 4 first-pass topic-to-question mapping

The Module 4 objectives recovered from the lecture notes are mapped against the active `physical-layer` bank. This is a question-tag mapping pass, not a claim that every visual exhibit or lab has been independently verified.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Purpose of the Physical Layer | Physical connection; wired/wireless connectivity; NIC; frame-to-signal encoding; bit transmission | `physical-layer-purpose`, `physical-layer-encoding`, `physical-layer-media` | Represented; includes a Layer 2-to-Layer 1 handoff scenario. |
| Physical Layer Characteristics | Bandwidth, throughput, goodput, latency, signaling, attenuation, dispersion, EMI/RFI, crosstalk | `bandwidth`, `throughput`, `goodput`, `latency`, `physical-layer-characteristics`, `physical-layer-signaling`, `attenuation`, `fiber-dispersion`, `signal-integrity` | Improved; direct goodput and latency questions now distinguish useful delivered data, achieved throughput, rated capacity, and delay. |
| Copper Cabling | UTP, STP, coaxial construction and use; attenuation; EMI/RFI; crosstalk; shielding, grounding, and twisting | `copper-cabling`, `utp-cabling`, `shielded-twisted-pair`, `coaxial-cable`, `attenuation`, `electromagnetic-interference`, `radio-frequency-interference`, `crosstalk` | Broadly represented; matching and selection scenarios cover copper limitations, STP trade-offs, and coax applications. |
| UTP Cabling | RJ-45; TIA/EIA-568; cable types/lengths; termination/testing; straight-through, crossover, rollover; categories | `utp-cabling`, `tia-eia-568`, `cabling-standards`, `straight-through-cable`, `crossover-cable`, `rollover-cable` | Improved; a matching item tests T568A/T568B conventions and the common use of straight-through, crossover, and rollover cables. RJ-45 termination exhibits and cable-category identification still need visual review and more practice. |
| Fiber-Optic Cabling | SMF/MMF, core size, laser/LED, dispersion, distance/bandwidth, EMI immunity, ST/SC/LC connectors, patch cords | `single-mode-fiber`, `multimode-fiber`, `fiber-optic-cabling`, `fiber-dispersion`, `fiber-optic-connectors` | Broadly represented; mode comparison, dispersion, and connector-name recognition are practiced. Exact connector appearance and patch-cord visual identification remain pending image review. |
| Wireless Media | Radio/microwave signaling; Wi-Fi, Bluetooth, WiMAX, Zigbee; AP/NIC; coverage, interference, security, shared half-duplex medium | `wireless-media`, `radio-frequency`, `wireless-standards`, `wifi`, `bluetooth`, `wimax`, `zigbee`, `wlan`, `wireless-access-point`, `wireless-nic`, `wireless-security`, `shared-medium`, `half-duplex` | Improved; a deployment scenario now tests AP/NIC requirements, compatibility, and the need for WLAN security policies. Standards matching and WLAN contention are also covered. |

The lesson currently has **43 active questions**. The source exhibit IMG-2104 is now linked to an AI-generated cable-selection scenario; the answer is derived from the visible device/link types rather than marked on the slide. Four additional AI-generated questions address goodput, latency, UTP cable wiring conventions, and secure WLAN deployment. They are derived from recovered Module 4 notes and existing source references, not presented as verbatim source questions. Connector diagrams, termination exhibits, cable categories, and patch-cord visuals still need direct image review.

## Module 5 first-pass topic-to-question mapping

The Module 5 objectives recovered from the lecture notes are mapped against the active `number-systems` question bank.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Binary Number System | Base-2 digits; positional notation; bit values; 8-bit octets; IPv4 dotted-decimal notation; decimal/binary conversion | `binary`, `binary-to-decimal`, `decimal-to-binary`, `binary-positional-notation`, `octet`, `dotted-decimal-notation` | Represented with direct conversions and IPv4 octet interpretation. More mixed multi-octet conversion drills would improve fluency. |
| Hexadecimal Number System | Base-16 digits 0–9/A–F; 4-bit nibbles; binary/hex conversion; decimal/hex conversion; IPv6 128-bit addresses and hextets | `hexadecimal`, `hexadecimal-to-decimal`, `decimal-to-hexadecimal`, `hexadecimal-to-binary`, `binary-to-hexadecimal`, `hextet`, `ipv6-address-structure` | Represented with conversions in both directions, hextet structure, and IPv6 digit counts. More long-form IPv6 address conversion practice remains useful. |

The lesson now contains 16 active questions and 21 distinct concept tags. Eight new AI-generated questions add decimal/hexadecimal and hexadecimal/binary conversions, positional-notation matching, hextet identification/counting, binary-octet arithmetic, and IPv4 dotted-decimal reasoning. They are derived from the recovered Module 5 notes, not verbatim source questions.


## Module 6 first-pass topic-to-question mapping

The recovered Module 6 source identifies three main areas: the purpose of the Data Link Layer, LAN/WAN topologies and media-access methods, and the structure and functions of the data-link frame. The active `data-link-layer` lesson now has 13 questions after this expansion.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Purpose of the Data Link Layer | NIC-to-NIC communication; preparation of network data for the physical network; LLC and MAC sublayers | `llc-sublayer`, `mac-sublayer`, `frame-encapsulation`, `media-access-control` | Represented through LLC/MAC role questions and practical re-encapsulation across router links. The broader NIC-to-NIC role could use another applied troubleshooting item. |
| Topologies | Point-to-point, multi-access, point-to-multipoint, hub-and-spoke, mesh; contention-based and controlled access; half/full duplex; CSMA/CD and CSMA/CA | `point-to-point-topology`, `multiaccess-topology`, `wan-topologies`, `hub-and-spoke-topology`, `mesh-topology`, `contention-based-access`, `controlled-access`, `csma-cd`, `csma-ca`, `half-duplex`, `full-duplex` | Improved; matching now covers the three common physical WAN topologies and duplex modes, while scenarios distinguish deterministic controlled access from contention-based methods. |
| Data Link Frame | Frame header, data and trailer; start/stop boundaries; source/destination MAC addressing; type, control, payload, error detection and FCS | `data-link-frame`, `frame-fields`, `frame-structure`, `mac-addressing`, `frame-type-field`, `frame-control-field`, `frame-payload`, `fcs`, `error-detection` | Improved; matching directly assesses six frame-field roles, alongside existing frame structure, MAC addressing, FCS purpose, and corrupted-frame handling. |

Four new AI-generated questions add frame-field matching, WAN topology matching, controlled-access application, and duplex-mode matching. They are based on recovered Module 6 notes and existing Data Link Layer source references, not presented as verbatim source questions. Diagram-dependent topology and frame exhibits still require direct visual verification.

## Module 7 first-pass topic-to-question mapping

The recovered Module 7 material focuses on Ethernet frame structure and MAC addressing, switch MAC-table learning/forwarding, and switch forwarding methods and buffering. The active `ethernet-switching` lesson now has 16 questions after this expansion.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Ethernet Frames and MAC Addressing | Ethernet frame fields; source/destination MAC addresses; 48-bit address format; OUI; unicast, broadcast, and multicast | `ethernet-frame`, `mac-addressing`, `frame-size`, `oui`, `vendor-identification`, `broadcast` | Represented for frame sizing, MAC length, broadcast, and NIC frame filtering. New OUI practice distinguishes the 24-bit vendor identifier from the remaining vendor-assigned bits. Multicast recognition and full frame-field decomposition can be expanded further. |
| MAC Address Table | Learning source MAC addresses and ingress ports; refreshing aging timers; moving learned addresses; known and unknown unicast forwarding; broadcast/multicast flooding | `mac-address-table`, `switch-learning`, `aging-timer`, `unknown-unicast-flooding`, `mac-move` | Improved; includes source learning, aging refresh, unknown-unicast flooding, and a new scenario where a learned MAC appears on a different switch port. A full Packet Tracer MAC-table investigation exercise remains useful. |
| Switch Speeds and Forwarding Methods | Store-and-forward; cut-through; fast-forward; fragment-free; port-based and shared-memory buffering; latency and frame integrity | `store-and-forward-switching`, `cut-through-switching`, `fast-forward-switching`, `fragment-free-switching`, `switch-memory-buffering`, `port-based-memory`, `shared-memory-buffering` | Improved; new matching questions test the latency/integrity trade-offs between switching methods and compare the two buffering approaches. |
| Duplex and Auto-MDIX | Full/half duplex; autonegotiation; duplex mismatch; automatic cable-pair crossover | `full-duplex`, `duplex`, `duplex-mismatch`, `auto-mdix`, `ethernet-troubleshooting` | Represented through full-duplex behavior, CSMA/CD relevance, duplex-mismatch troubleshooting, and Auto-MDIX. Further autonegotiation troubleshooting would improve depth. |

Four new AI-generated questions add OUI identification, MAC-address movement between switch ports, forwarding-method trade-offs, and switch memory-buffering comparison. They are derived from recovered Module 7 notes and existing Ethernet Switching image references, not presented as verbatim source questions. The MAC-table and switch-buffer candidate diagrams were screened in the image contact sheets; no marked answer key was visible. Full-size diagram interpretation remains pending.

## Module 9 first-pass topic-to-question mapping

The recovered Module 9 objective is to explain how ARP and Neighbor Discovery enable communication. Its two source topics are MAC/IP addressing and IPv6 Neighbor Discovery. The active `address-resolution` lesson now has 11 questions.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| MAC and IP | IPv4-to-MAC resolution; local versus remote destinations; default-gateway MAC; ARP requests and replies; ARP cache; cache expiration; ARP broadcast/security issues | `arp`, `address-resolution`, `broadcast`, `unicast`, `arp-cache`, `default-gateway`, `remote-network-communication` | Broadly represented; includes broadcast requests, unicast replies, cache use and expiration, IOS/host inspection commands, and a new remote-destination scenario requiring the default-gateway MAC rather than the remote server's MAC. ARP spoofing and cache-poisoning defense remain a practice gap. |
| Neighbor Discovery | ICMPv6 NS/NA address resolution; RS/RA router discovery; Redirect for next-hop selection | `ipv6-neighbor-discovery`, `icmpv6`, `neighbor-solicitation`, `neighbor-advertisement`, `router-solicitation`, `router-advertisement`, `icmpv6-redirect` | Improved; a new matching item distinguishes all five message roles. A deeper DAD and solicited-node multicast scenario would strengthen practical understanding. |

Three new AI-generated questions add remote-network gateway resolution, full ICMPv6 ND message-role matching, and ARP cache-expiration behavior. They are derived from recovered Module 9 notes and existing source references, not presented as verbatim source questions. The source includes topology exhibits for ARP requests and remote destinations; these were screened in the exhibit contact sheets and showed no marked answer key. Full-size diagram interpretation remains pending.

## Module 10 first-pass topic-to-question mapping

The recovered Module 10 objective is to implement initial settings on a router and end devices. Its three source topics are initial router settings, interface configuration, and default-gateway configuration. The active `router-configuration` lesson now has 11 questions.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Configure Initial Router Settings | Router boot/setup behavior; IOS image and configuration files; RAM, ROM, flash, NVRAM; saving running configuration; basic initial settings | `router-boot-process`, `startup-configuration`, `router-memory`, `ram`, `rom`, `flash`, `nvram`, `running-configuration` | Represented through boot/setup diagnosis, memory-role matching, and saving the active configuration. Initial security settings (hostname, privileged EXEC, console/VTY access, password protection, and banner) need more router-specific applied practice; some are covered in Module 2. |
| Configure Interfaces | Configure two active router interfaces; IPv4/IPv6 interface addressing; activate interfaces; verify interface status and statistics | `router-interface-configuration`, `ipv4-interface-configuration`, `no-shutdown`, `interface-status`, `ios-verification-commands`, `show-ip-interface-brief` | Improved; a new ordering item tests interface mode, IPv4 address assignment, and no shutdown; a scenario selects show ip interface brief for fast verification. More complete two-interface lab scenarios remain useful. |
| Configure the Default Gateway | Configure end devices to use the local router interface as the gateway; Layer 2 switch default-gateway for remote management | `default-gateway`, `ip-default-gateway`, `switch-management`, `remote-management` | Improved; new host scenario distinguishes the local router interface from a remote server or ISP address, alongside the existing Layer 2 switch management-gateway question. |

Three new AI-generated questions add router interface command ordering, concise interface verification, and host default-gateway selection. They are derived from recovered Module 10 notes and existing source references, not presented as verbatim source questions. The Packet Tracer interface and default-gateway exhibits were screened in the exhibit contact sheets; no answer marks were visible. Full-size command-output verification remains pending.

## Module 11 first-pass topic-to-question mapping

The recovered Module 11 objective is to calculate an IPv4 subnetting scheme to efficiently segment a network. Its five source topics are IPv4 address structure, unicast/broadcast/multicast, IPv4 address types, network segmentation, and subnetting a /24. The active `ipv4-addressing` lesson now has 25 questions after five additional items.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| IPv4 Address Structure | 32-bit address; network and host portions; subnet mask; prefix length; logical AND; network, broadcast, first/last usable addresses | `ipv4-addressing`, `subnet-mask`, `cidr`, `prefix-length`, `network-address`, `broadcast-address` | Strong calculation coverage for prefix interpretation, network/broadcast addresses, host ranges, and host capacity. Explicit bitwise ANDing and first/last usable-address drills could be added. |
| IPv4 Unicast, Broadcast, and Multicast | One-to-one, one-to-all on a subnet, and one-to-many group delivery | `ipv4-unicast-broadcast-multicast`, `unicast`, `broadcast`, `multicast`, `multicast-group`, `broadcast-domains` | Improved; three new questions directly test unicast, broadcast-domain delivery, and multicast-group delivery. Two source-origin questions are traced to Q194 and Q201; Q189 is used as a prompt only because its extracted answer is incorrect. |
| Types of IPv4 Addresses | Public, private, reserved; RFC 1918; shared address space; APIPA/link-local; loopback; IANA/RIR allocation | `private-ipv4`, `rfc1918`, `public-ipv4`, `shared-address-space`, `link-local-address` | Improved; a new matching item distinguishes RFC 1918 private, public, shared CGNAT, and link-local/APIPA ranges. Loopback and other reserved ranges could use more direct classification. |
| Network Segmentation | Subnetting reduces broadcast-domain size; supports policy boundaries and organization by location, group, or device type | `network-segmentation`, `broadcast-domains`, `network-scalability`, `routing` | Improved; a new scenario applies subnetting to reduce broadcast scope and create separate routed department networks. |
| Subnet an IPv4 Network | /24 subnetting; prefix/mask conversion; number of subnets and hosts; VLSM; efficient allocation | `ipv4-subnetting`, `subnet-sizing`, `host-capacity`, `vlsm`, `prefix-length`, `network-address`, `broadcast-address` | Strong calculation coverage from /24-derived /23 through /29 exercises, capacity selection, and sequential VLSM allocation. More mixed address-type and first/last-host practice would round out the topic. |

The 25-question lesson now covers subnet calculations, address categories, network segmentation, and unicast/broadcast/multicast delivery semantics. Additional reserved/loopback address classification and more mixed troubleshooting scenarios remain useful. OCR answer conflicts are documented in `docs/semester-1-source-question-index.md` rather than silently copied.

## Module 12 first-pass topic-to-question mapping

The recovered Module 12 objective is to implement an IPv6 addressing scheme. Its source topics cover the need for IPv6, address representation and types, static and dynamic GUA/LLA configuration, multicast, and IPv6 subnetting.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| IPv4 Issues / Need for IPv6 | IPv4 address exhaustion; larger 128-bit address space; reduced reliance on NAT; transition methods | `ipv4-ipv6-coexistence`, `dual-stack`, `tunneling`, `translation` | Partial; coexistence methods are tested, but the motivation for IPv6 and the address-space implications need a more explicit applied comparison. |
| IPv6 Address Representation | 128-bit address; eight hextets; hexadecimal notation; leading-zero omission; one longest zero-run compression | `ipv6-address-representation`, `zero-compression`, `zero-suppression`, `hextets` | Strong; multiple compression exercises include both leading-zero removal and longest-run compression. More expansion from compressed notation would add useful variety. |
| IPv6 Address Types | GUA, LLA, multicast, anycast, loopback; prefix ranges; link-local scope | `ipv6-address-types`, `global-unicast-address`, `link-local-address`, `ipv6-multicast`, `multicast-address`, `loopback-address`, `anycast` | Improved; new questions cover anycast delivery to the nearest/best-matching instance and the ff02::1 all-nodes and ff02::2 all-routers groups. |
| GUA and LLA Static Configuration | Configure IPv6 address and prefix on interfaces; automatic LLA creation; EUI-64 or random interface IDs; interface verification | `ipv6-address-configuration`, `ipv6-interface-configuration`, `eui-64`, `ipv6-interface-id`, `show-ipv6-interface`, `no-shutdown` | Strong; includes interface configuration, EUI-64, link-local behavior, and verification commands. Random interface-ID generation could use a direct comparison question. |
| Dynamic Addressing for IPv6 GUAs and LLAs | Router Solicitation/Advertisement; SLAAC; stateful and stateless DHCPv6; M/O flags; DAD | `slaac`, `ipv6-router-solicitation`, `ipv6-router-advertisement`, `dhcpv6`, `stateless-dhcpv6`, `stateful-dhcpv6`, `duplicate-address-detection` | Improved; new matching item distinguishes SLAAC-only, SLAAC with stateless DHCPv6, and stateful DHCPv6. A DAD scenario tests Neighbor Solicitation for address uniqueness. |
| IPv6 Multicast Addresses | FF00::/8; all-nodes and all-routers groups; multicast group membership | `ipv6-multicast`, `multicast-address`, `all-nodes-multicast`, `all-routers-multicast` | Improved; matching now distinguishes ff02::1 and ff02::2 and their link-local scope. More multicast group membership and scope scenarios could be added. |
| Subnet an IPv6 Network | Global routing prefix; subnet ID; interface ID; hexadecimal subnet increments; /48-to-/64 planning | `ipv6-network-prefix`, `ipv6-prefix-length`, `ipv6-subnetting`, `ipv6-subnet-id` | Improved; a new scenario explains the 16-bit subnet ID between a /48 global routing prefix and /64 LAN prefixes. More hexadecimal subnet-allocation drills remain useful. |

Five new AI-generated questions add RA M/O flag interpretation, IPv6 subnet-ID planning, Duplicate Address Detection, anycast routing behavior, and assigned multicast group scope. They are based on recovered Module 12 notes and existing source references, not presented as verbatim source questions. Address-type, multicast, and subnetting exhibits still require direct visual verification.

## Module 13 first-pass topic-to-question mapping

The recovered Module 13 objective is to use tools to test network connectivity. Its two source topics are ICMP messages and ping/traceroute testing. The active `icmp` lesson now has 13 questions.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| ICMP Messages | Echo Request/Reply; Destination Unreachable codes; Time Exceeded; ICMPv4 and ICMPv6; IPv6 Neighbor Discovery messages | `icmp`, `icmp-echo`, `icmp-destination-unreachable`, `icmp-time-exceeded`, `icmpv6`, `neighbor-solicitation`, `neighbor-advertisement` | Improved; new matching question tests common ICMPv4 Destination Unreachable codes, and a new scenario tests IPv6 Hop Limit expiration. Existing questions cover Echo, Time Exceeded, unreachable conditions, and ICMPv6 NS/NA. More IPv6 Destination Unreachable code practice remains useful. |
| Ping and Traceroute Testing | Ping success/round-trip time; loopback and default-gateway checks; traceroute hop discovery; TTL/Hop Limit; timeout/asterisk interpretation; source address selection | `ping`, `connectivity-testing`, `host-reachability`, `traceroute`, `ttl`, `ipv4-ttl`, `source-ip-selection`, `icmp-filtering` | Improved; new scenarios test loopback as a local-stack check and the default gateway as a local-network check. Existing scenarios cover traceroute asterisks, source address selection, and ICMP filtering. A complete multi-hop traceroute-output diagnosis exercise remains a gap. |

Four new AI-generated questions add ICMPv4 unreachable-code matching, loopback testing, default-gateway testing, and IPv6 Hop Limit expiration. They are derived from recovered Module 13 notes and existing source references, not presented as verbatim source questions. The Packet Tracer ping/traceroute topology exhibits were screened in the exhibit contact sheets; no marked answer keys were visible. Full-size command-output interpretation remains pending.

## Module 14 first-pass topic-to-question mapping

The recovered Module 14 material covers transport-layer responsibilities, TCP and UDP behavior, port numbers/socket pairs, and TCP reliability and flow control. The active `transport-layer` lesson now has 17 questions.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Transportation of Data | Track application conversations; segment/reassemble data; multiplex conversations; identify applications with ports; select TCP or UDP based on application needs | `transport-layer`, `multiplexing`, `port-numbers`, `tcp`, `udp` | Represented through protocol comparison, socket pairs, port use, and application selection. More direct segmentation/reassembly and conversation-multiplexing scenarios would improve depth. |
| TCP Overview and Communication Process | Connection-oriented setup; three-way handshake; sequence and acknowledgment numbers; TCP header fields; connection termination and control flags | `tcp`, `tcp-connection-establishment`, `tcp-header`, `tcp-sequence-numbers`, `tcp-acknowledgments` | Strong for handshake, header fields, sequence/ACK arithmetic, and next-byte semantics. TCP termination/FIN/RST behavior remains under-practiced. |
| UDP Overview and Communication | Connectionless datagrams; small header; low overhead; no TCP-style sequencing, acknowledgment, retransmission, or flow control; application use cases | `udp`, `udp-header`, `connectionless-transport`, `real-time-applications` | Represented with protocol characteristics and real-time application selection. UDP header-field interpretation and datagram reordering limitations could use more direct practice. |
| Port Numbers and Socket Pairs | Well-known, registered, dynamic/private ranges; source/destination ports; IP-plus-port sockets; IANA allocation; netstat | `port-numbers`, `well-known-ports`, `iana`, `socket-pairs`, `dns`, `ssh`, `http`, `https` | Represented with port-range identification, common service matching, and socket endpoint identification. More ports and a netstat troubleshooting scenario remain useful. |
| Reliability and Flow Control | Ordered delivery; sequence/ACK behavior; retransmission; duplicate ACK; sliding window; receiver window; SACK; MSS/MTU; congestion avoidance | `reliability`, `reliability-and-flow-control`, `tcp-windowing`, `flow-control`, `selective-acknowledgment`, `sack`, `maximum-segment-size`, `mtu`, `congestion-control` | Improved; new scenarios cover duplicate ACK behavior, SACK information, MSS versus MTU, and flow versus congestion control. Advertised-window capacity and remaining-window arithmetic now have dedicated applied scenarios. TCP termination remains an optional extension because the recovered source material does not include a direct termination sequence. |

Four new AI-generated questions add duplicate-ACK loss recovery, SACK, MSS/MTU comparison, and flow-versus-congestion-control distinctions. They are derived from recovered Module 14 notes and existing source references, not presented as verbatim source questions. TCP header and sliding-window diagrams were screened in the candidate exhibit pass; no marked answer key was visible. Full-size packet-capture interpretation remains pending.

## Module 15 first-pass topic-to-question mapping

The recovered Module 15 objective is to explain how application-layer protocols support end-user applications. Its source topics cover the application/presentation/session layers, peer-to-peer, web/email protocols, IP addressing services, and file sharing. The active `application-layer` lesson now has 14 questions.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Application, Presentation, and Session | Application interface to services; data formatting, compression, encryption; session dialog establishment/maintenance | `application-layer`, `presentation-layer`, `session-layer`, `osi-model` | Improved; new matching item distinguishes presentation data handling from session dialog management. More applied examples of encryption/compression and session state remain useful. |
| Peer-to-Peer | Decentralized resource sharing; peers acting as both clients and servers; hybrid P2P designs | `peer-to-peer`, `hybrid-p2p`, `client-server-model` | Represented through pure/hybrid architecture and practical resource-sharing scenarios. |
| Web and Email Protocols | HTTP/HTTPS request-response; GET/POST/PUT; SMTP sending; POP3/IMAP retrieval and mailbox synchronization | `http`, `web-protocols`, `smtp`, `pop3`, `imap`, `email-protocols` | Improved; new matching item tests GET/POST/PUT roles. Existing questions cover SMTP sending, POP3/IMAP retrieval, and email ports. HTTPS security behavior and HTTP status codes remain gaps. |
| IP Addressing Services | DNS name resolution and hierarchy; A/AAAA/MX/NS records; nslookup; DHCPv4 DORA; DHCPv6 message flow | `dns`, `dns-resource-records`, `a-record`, `aaaa-record`, `mx-record`, `ns-record`, `dhcp`, `ip-addressing-services` | Strong for DNS purpose/records and DHCPv4 DORA/ports; new nslookup scenario adds name-resolution troubleshooting. DHCPv6 SOLICIT/ADVERTISE/REQUEST/REPLY remains untested in this lesson. |
| File Sharing Services | FTP control/data connections; TFTP; SMB session, authentication, file/printer sharing; client/server transfer | `file-sharing-services`, `ftp`, `tftp`, `smb`, `client-server-model` | Improved; new matching item contrasts FTP, TFTP, and SMB. A direct FTP control/data port scenario and SMB permissions/session troubleshooting would add depth. |

Four new AI-generated questions add HTTP method matching, presentation/session layer roles, nslookup troubleshooting, and FTP/TFTP/SMB comparison. They are based on recovered Module 15 notes and existing source references, not presented as verbatim source questions. The HTTP exchange, DNS hierarchy, and file-sharing diagrams were screened in the candidate contact sheets; no marked answer key was visible. Full-size diagram interpretation remains pending.

## Module 16 first-pass topic-to-question mapping

The recovered Module 16 objective is to configure switches and routers with device-hardening features. Its source topics cover security threats and vulnerabilities, network attacks, attack mitigation, and device security. The active `network-security` lesson now has 16 questions.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Security Threats and Vulnerabilities | Internal/external threat actors; technological, configuration, and policy vulnerabilities; physical hardware, environmental, electrical, and maintenance threats | `security-threat-vectors`, `insider-threat`, `vulnerabilities`, `technological-vulnerability`, `configuration-vulnerability`, `security-policy-vulnerability`, `physical-security` | Improved; matching distinguishes all three vulnerability classes and all four physical threat categories. Specific threat outcomes and incident response remain possible additions. |
| Network Attacks | Malware (virus, worm, Trojan); reconnaissance, access, and DoS; password, trust exploitation, port redirection, and man-in-the-middle attacks | `malware`, `virus`, `worm`, `trojan-horse`, `network-attacks`, `reconnaissance-attacks`, `access-attacks`, `denial-of-service` | Improved; new matching items cover malware behavior and the three major attack categories. Specific access-attack techniques and DoS examples remain under-practiced. |
| Network Attack Mitigation | Defense in depth; firewalls and filtering; VPN; IPS; endpoint protection; AAA; physical controls | `defense-in-depth`, `firewall-filtering`, `endpoint-security`, `network-security-controls`, `aaa`, `vpn`, `ips`, `packet-filtering`, `application-filtering`, `url-filtering`, `stateful-packet-inspection` | Improved; new matching questions compare packet, application, URL, and stateful filtering and distinguish VPN, IPS, and AAA roles. |
| Device Security | Strong passwords/passphrases; disable unused services; secure management with SSH; local user database; RSA keys; VTY access; password protection, login blocking, exec timeout | `authentication`, `authorization`, `accounting`, `aaa`, `device-hardening`, `ios-security-commands`, `ssh`, `rsa-keys` | Improved; new matching and ordering items test password protection, minimum length, login blocking, exec timeout, SSH-only VTY access, local user setup, RSA key generation, and SSH configuration order. |

Five new AI-generated questions add malware-type matching, attack-category matching, vulnerability-category matching, IOS hardening-command matching, and SSH configuration ordering. They are derived from recovered Module 16 notes and existing source references, not presented as verbatim source questions. The SSH configuration Packet Tracer exhibit and device-hardening command examples still require direct visual review and a practical configuration question.

## Module 17 first-pass topic-to-question mapping

The recovered Module 17 objective is to build and troubleshoot a small network. Its source topics cover small-network devices and applications, scaling, connectivity verification, host/IOS commands, troubleshooting methodology, and troubleshooting scenarios. The active `small-network` lesson now has 46 questions. A three-stage Packet Tracer-style challenge now practices DHCP relay, DHCP-provided DNS settings, and default-route configuration, with validation steps after each correction.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Devices in a Small Network | Router, switch, AP, endpoint, and server roles; device selection by cost, port speed/type, expandability, and OS features; redundancy | `redundancy`, `fault-tolerance`, `network-reliability` | Improved; device-selection criteria and small-network role trade-offs now have direct practice, with deeper design/capacity cases still useful. |
| Small Network Applications and Protocols | DHCP, DNS, common server roles and application services | `dns-troubleshooting`, `nslookup`, `name-resolution` | Represented at a first-pass level; DNS, DHCP/APIPA, ARP-cache, and resolver-cache commands are practiced. Multi-role server identification can be expanded. |
| Scale to Larger Networks | Network baseline, growth planning, redundancy, modular expansion, and fault tolerance | `redundancy`, `fault-tolerance`, `network-reliability` | Partial; redundancy is assessed, but baseline collection, expansion planning, and capacity constraints need more practice. |
| Verify Connectivity | Ping and traceroute; IOS ping indicators; extended ping/traceroute; relative path performance | `ping`, `traceroute`, `network-troubleshooting` | Represented for choosing tools and identifying a failing routed hop. IOS ping indicators, extended command source selection, and round-trip-time anomaly interpretation now have active applied questions. Additional comparisons across multiple paths remain useful depth work. |
| Host and IOS Commands | ipconfig/ipconfig /all; ifconfig/ip; arp -a; show running-config, interfaces, ip route, protocols, version, CDP; debug/terminal monitor | `ios-verification-commands`, `show-ip-interface-brief`, `show-running-config`, `show-interfaces`, `show-ip-route`, `show-arp`, `show-protocols`, `show-version`, `show-cdp-neighbors`, `cdp`, `ios-debug` | Improved; a new matching item maps seven show commands to their diagnostic purpose, alongside interface verification, CDP, and safe debug use. Host-side command selection now includes ipconfig /all, ipconfig /displaydns, and arp -a; additional Linux/macOS command-selection practice can be added. |
| Troubleshooting Methodologies | Identify problem; establish probable cause; test; plan; implement/escalate; verify and document | `troubleshooting-methodology`, `problem-identification`, `root-cause-analysis`, `verification` | Strong; ordering questions cover both the high-level and detailed troubleshooting sequences. |
| Troubleshooting Scenarios | DNS failure; incorrect IP settings; DHCP issues; gateway problems; route/path failures; show-command diagnosis | `dns-troubleshooting`, `default-gateway`, `ipv4-troubleshooting`, `traceroute`, `interface-errors`, `routing-table-troubleshooting`, `root-cause-analysis` | Improved; in addition to DNS, DHCP, gateway, interface, and traceroute cases, new scenarios distinguish CRC/input-error physical faults from duplex mismatch and use routing-table evidence to identify a missing remote route. A three-stage Packet Tracer-style challenge now covers DHCP relay, DHCP-provided DNS correction, and default-route repair; a separate multi-device VLAN/default-route case is also active. A new multi-device case now combines router-on-a-stick VLANs, switch trunk allowed-VLAN output, host gateway tests, and routing-table evidence to distinguish a missing VLAN on a trunk from a missing default route. A new staged DNS fault-isolation case now combines ipconfig /all, ping, nslookup, and ipconfig /displaydns evidence to separate name-resolution service failure from routing, link, and cached-record symptoms. |

This completes the first-pass topic mapping for all 17 Semester 1 modules. Module 17 now has 46 active questions. The bank includes device-selection criteria, Windows APIPA/DHCP diagnosis, host ARP-cache inspection, extended ping/traceroute source selection, local-link fault isolation, nslookup-based DNS testing, DHCP release/renew, traceroute intermediate-hop timeouts, baseline traffic anomalies, duplex mismatch evidence, a CRC/input-error counter diagnosis, and a route-table-based missing-route diagnosis, and a multi-stage DNS fault-isolation case using ipconfig /displaydns alongside direct DNS queries. Remaining work includes deeper comparative analysis of realistic command output, Linux/macOS host command selection, and broader device-capacity design scenarios. These are recorded as follow-up work rather than assuming that a mapped topic is fully mastered.

## Module 1 first-pass topic-to-question comparison

The Module 1 objective list is now compared against the active question records for the seven lesson IDs associated with Networking Today. This mapping uses actual question IDs and concept tags from the seed bank. It distinguishes a topic that has some related questions from one that has been adequately taught and practiced.

| Source topic objective | Active question-bank evidence | First-pass finding |
|---|---|---|
| Networks Affect our Lives | No dedicated question currently tests the module's central idea that networks change how people communicate, learn, work, and access services. Some adjacent context appears in network-trends. | **Gap:** add direct application questions about everyday communication, remote work/learning, and access to information/services, grounded in the source examples. |
| Network Components | s1-components-001, s1-components-002, s1-client-server-001, s1-end-device-001, s1-server-client-001, s1-router-fill-001, and s1-media-selection-001 / s1-media-matching-001. | Represented across end devices, intermediary devices, client/server roles, routers, and media selection. Add practical NIC/interface and physical-port distinction questions if those source details are confirmed in the lesson. |
| Network Representations and Topologies | s1-topology-001, s1-topology-002, s1-topology-star-003, s1-topology-mesh-001, s1-topology-bus-failure-001, s1-topology-ring-001, and s1-topology-extended-star-001. | Represented for physical/logical diagrams and common physical layouts. Review the source exhibits for any additional logical topology details or diagram-specific labels. |
| Common Types of Networks | s1-network-types-001, s1-lan-wan-scenario-002, s1-intranet-extranet-001, s1-extranet-scenario-001, s1-internet-architecture-001, s1-network-scope-multiple-001, s1-internet-governance-001, and s1-internet-governance-002. | Represented for LAN/WAN scope, Internet, intranet/extranet, and Internet governance. Check whether the lesson separately teaches PAN/MAN or other network categories before considering this complete. |
| Internet Connections | s1-internet-001, s1-wisp-scenario-001, s1-business-connectivity-001, s1-ethernet-wan-001, s1-satellite-use-001, s1-internet-cable-shared-001, s1-internet-dsl-001, and s1-internet-fiber-001. | Broadly represented for ISP role, residential cable/DSL/fiber, satellite/WISP, leased lines, and Ethernet WAN. Compare against the source table of home/small-office connection types for any missing dial-up or cellular distinctions. |
| Reliable Networks | s1-reliability-001, s1-qos-001, s1-packet-switching-order-001, s1-qos-congestion-001, s1-reliability-four-001, s1-scalability-001, s1-fault-tolerance-paths-001, s1-packet-v-circuit-001, s1-network-characteristics-order-001, and s1-qos-not-bandwidth-001. | Represented for fault tolerance, scalability, QoS, packet switching, and the four architecture characteristics. Add direct security-versus-reliability distinctions only if the source lesson needs more than the existing security mapping. |
| Network Trends | s1-trends-001, s1-trends-002, s1-powerline-fill-001, s1-cloud-fill-001, s1-cloud-types-001, s1-byo-device-001, s1-cloud-computing-001, s1-collaboration-001, s1-video-communications-001, and s1-powerline-limits-001. | Represented for BYOD, cloud computing/deployment types, collaboration, video, and powerline networking. Verify smart-home and WISP-related trend examples in the source; do not assume the current Internet Connections questions fully cover the trends objective. |
| Network Security | s1-security-001, s1-security-clinic-001, s16-defense-depth-001, s1-security-threat-vectors-001, s1-security-defense-layers-001, s1-security-mapping-001, and s16-acl-scenario-001. | Represented for baseline endpoint/firewall controls, confidentiality, insider threats, defense in depth, and ACL filtering. Some question IDs originate from later security material; confirm that the Module 1 lesson only assesses its introductory scope. |
| The IT Professional | `s1-ccna-foundation-career-applied-001` and `s1-networking-career-resource-applied-001` assess the CCNA foundation objective and the source-described Networking Academy job-matching resource. | **Covered at a first-pass level.** Both questions are AI-generated from explicit source statements and are linked to `block-0002`; the historical Talent Bridge service is described as source-era material, not claimed to be currently available. |

**Module 1 result:** eight of nine topic objectives have related active practice after adding two questions for “The IT Professional.” “Networks Affect our Lives” remains a source-evidence gap: the recovered slide `IMG-0051` is only a section title, with no explanatory content in the supplied extraction. Do not invent a detailed lesson or quiz answer from that title alone. The seven related mappings are preliminary, not a completeness claim: the next pass must inspect the full lesson content and relevant diagrams, and should check that questions are placed in the intended lesson rather than merely sharing a broad concept tag. The network-types question set also needs a source check for dial-up and cellular access, and the Network Trends lesson needs a check for smart-home examples.



## Module 2 first-pass topic-to-question comparison

The Module 2 source objectives are mapped against the active basic-device-configuration question records. The source objective list contains eight topics. Several active questions are useful but currently live in other lesson IDs; this mapping records those cross-lesson links rather than treating them as lesson-local coverage.

| Source topic objective | Active question-bank evidence | First-pass finding |
|---|---|---|
| Cisco IOS Access | s2-console-connection-001 tests console cabling and out-of-band CLI access. | Partial. The source covers console, SSH, and Telnet access; add direct secure-versus-insecure remote-access practice and verify the VTY/console login configuration material. |
| IOS Navigation | s2-mode-order-001 and s2-ios-modes-order-001 test mode transitions and privilege ordering. | Represented for user EXEC, privileged EXEC, global configuration, and interface configuration. Add command-prompt recognition and exit/end/CTRL-Z navigation if these are emphasized in the lesson. |
| The Command Structure | s2-config-keyword-001 and s2-ios-keyword-001 both test keyword identification in show running-config. | Partial and somewhat repetitive. The source also distinguishes keywords from user-supplied arguments and documents Tab completion, help, and editing shortcuts; add applied syntax/argument interpretation rather than another duplicate keyword question. |
| Basic Device Configuration | s2-password-encryption-001, s2-enable-secret-001, s2-admin-down-001, and s2-svi-management-ip-001 test password encryption, privileged-mode protection, interface activation, and management SVI configuration. | Represented at a first-pass level. Verify hostname, MOTD banner, line passwords/login, and service password-encryption behavior against the source and add any uncovered configuration tasks. |
| Save Configurations | s2-save-config-001 and s2-config-save-troubleshoot-001 test copying running-config to startup-config and diagnosing unsaved changes. | Represented for persistence and reload behavior. Add a question that distinguishes RAM/running-config from NVRAM/startup-config if the lesson explanation does not already make that distinction clear. |
| Ports and Addresses | s2-console-connection-001 and s2-svi-management-ip-001 provide adjacent coverage; the source explains physical switch ports versus software SVIs and the role of network media. | Partial. Add direct physical port versus SVI comparison, and connect host/device interfaces, media, and MAC/IP addressing without conflating a Layer 2 physical switchport with a Layer 3 management SVI. |
| Configure IP Addressing | s2-dhcp-purpose-002 and s2-ipv6-auto-config-001 test DHCP-provided IPv4 settings and SLAAC/DHCPv6 mechanisms. s2-svi-management-ip-001 tests static IPv4 management addressing. | Partial. Add host-side static IPv4 configuration and mask/default-gateway interpretation if taught here; verify whether the lesson covers IPv6 host configuration or whether that material belongs to a later module. |
| Verify Connectivity | s2-interface-status-001 and s2-interface-verify-loop-001 test interface verification and an up/down fault-isolation step. s17-default-gateway-troubleshoot-001 tests local-versus-remote reachability but is assigned to the Small Network lesson. | Partial. Add an end-device-to-end-device verification scenario using the source's ping workflow, and keep interface-state checks distinct from end-to-end connectivity tests. |

**Module 2 result:** all eight source topics now have an explicit first-pass mapping. Cisco IOS Access, Command Structure, Ports and Addresses, Configure IP Addressing, and Verify Connectivity have clear depth gaps; Basic Device Configuration and Save Configurations also need a source-level check for the full set of taught commands and file semantics. The two keyword questions are near-duplicates and should be consolidated or differentiated during question-quality review. Cross-lesson references are not counted as proof that the corresponding Module 2 lesson itself teaches the concept.


## Module 3 first-pass topic-to-question comparison

The Module 3 source objectives are compared with 23 active questions assigned to `protocols-and-models`. All seven source topics have direct question-bank evidence after this expansion.

| Source topic objective | Active question-bank evidence | First-pass finding |
|---|---|---|
| The Rules | `s3-communication-rules-match-001`, `s3-segmentation-benefits-001` | Improved. Matching tests encoding, formatting/encapsulation, size, timing, and delivery options. Media-access and collision handling are practiced in the Data Link Layer and Ethernet Switching lessons; an additional Module 3-specific scenario would be optional reinforcement. |
| Protocols | `s3-protocol-stack-roles-001`, `s3-message-delivery-types-001`, `s3-protocol-suite-purpose-001` | Represented for protocol roles, delivery scope, and why inter-related protocols cooperate. More varied applied protocol-selection scenarios would improve depth. |
| Protocol Suites | `s3-protocol-suite-purpose-001`, `s3-encapsulation-order-001`, `s3-pdu-sequence-001`, `s3-decode-stack-001`, `s3-telnet-encapsulation-001` | Improved. Includes a direct definition/application scenario and stack interaction. |
| Standards Organizations | `s3-standards-orgs-match-001`, `s3-open-standards-001` | Improved. Direct matching covers ISOC, IAB, IETF, and IRTF roles, plus interoperability. These role definitions follow the recovered course notes. |
| Reference Models | `s3-tcpip-model-roles-001`, `s3-osi-layer-match-001`, `s3-decode-stack-001` | Improved. TCP/IP four-layer responsibilities and OSI layer roles are directly assessed. Explicit OSI-to-TCP/IP layer mapping and benefits of layered models remain opportunities. |
| Data Encapsulation | `s3-encapsulation-order-001`, `s3-pdu-sequence-001`, `s3-telnet-encapsulation-001`, `s3-decapsulation-explain-001`, `s3-segmentation-benefits-001`, `s3-source-mac-001`, `s3-destination-mac-layer-002`, `s3-source-port-layer-002` | Improved. Adds explicit receiving-side decapsulation to the existing encapsulation, PDU, segmentation, and header-placement coverage. The two PDU-sequence questions still overlap and should be differentiated in a later quality pass. |
| Data Access | `s3-same-lan-frame-001`, `s3-remote-lan-gateway-001`, `s3-ip-mac-hop-change-001`, `s3-ip-address-roles-001` | Represented for local/remote delivery, gateway MAC addressing, and per-hop Layer 2 versus end-to-end Layer 3 addressing. Multi-router visual packet-walk practice remains a useful next addition. |

**Module 3 result:** all seven source topics now have direct question-bank coverage. The five new AI-generated questions address the prior gaps in communication-rule categories, protocol-suite purpose, standards-organization roles, TCP/IP layer responsibilities, and decapsulation. This is a stronger first-pass mapping, not a final quality/completeness claim: question ambiguity, lesson teaching alignment, source diagrams, and further practice depth still require review.

## Interpretation rules

1. **Source topic present** means the topic heading/objective was recovered from the lecture-note source. It does not mean every detail, diagram, lab, or embedded question under that topic has been reviewed.
2. **Question-tag match** must be established explicitly. Similar wording is not enough; maintain a mapping from each source topic to the question bank's stable concept identifiers.
3. **Question coverage** must count distinct active question IDs, not the number of tags or the number of times a tag appears in a single question.
4. **One-question coverage** is a fragile signal. The current bank has eliminated singleton tags by bringing every existing concept identifier to at least two questions; this is an exposure floor, not mastery or proof of source completeness.
5. **Pending source verification** is not a zero-question source gap. Module 8 now has a first-pass objective map and direct packet-header questions; full-size verification of original diagrams and exact header-image asset linkage remains.
6. OCR text can locate candidate material, but diagrams, screenshots, tables, and question exhibits require visual inspection before their details are treated as verified.

## Next review work

- Perform a page-by-page source review to validate that each mapped question tests what the lesson actually teaches, not merely a related concept tag.
- Inspect the remaining 744 unique question-like image candidates for answer marks, diagram-dependent facts, and Packet Tracer instructions; do not promote inferred answers as source-origin.
- Review cross-lesson placements and distinguish repeated source material from true objective coverage.
- Add targeted questions only where the source text or a verified visual provides evidence for a missing objective or under-practiced detail.
- Revisit the title-only Module 1 “Networks Affect our Lives” slide if a fuller source page or instructor notes become available.


## Latest question-depth completion

The active bank now contains 585 questions across 22 lesson IDs and 605 concept identifiers. A per-concept exposure audit found no remaining singleton tags: every existing identifier is represented by at least two distinct question records. The latest 178 AI-generated additions reinforce existing tags across IOS configuration, switching, IPv4/IPv6, routing, physical media, transport/application protocols, security, and troubleshooting. The current per-lesson counts and per-tag exposure histogram are maintained in `semester-1-coverage-report.md`. This closes the question-count floor for under-practiced tags, but it does not replace source-page verification, lesson-objective alignment, or learner-session testing.


## Additional source-verified question mappings from recovered images

The original OneNote image assets were recovered and hash-matched against all 2,646 OCR manifest records. Seventeen additional image candidates have now been inspected visually across the follow-up passes. The latest 11-image pass adds six new source-origin questions and links four more images to existing questions, avoiding duplicate prompts.

| Module | Source image | Active question | Source fact / verified answer |
|---|---|---|---|
| 1. Networking Today | `IMG-0063` | `s1-media-selection-001` | Select media using required signal distance and installation environment |
| 3. Protocols and Models | `IMG-0256` | `s3-destination-port-001` | Destination port numbers are added at the transport layer |
| 3. Protocols and Models | `IMG-0271` | `s3-decode-protocol-stack-source-001` | Receive-side decapsulation proceeds Ethernet → IP → TCP → HTTP |
| 3. Protocols and Models | `IMG-0292` | `s3-open-standards-source-001` | Open standards enable interoperability between different operating systems |
| 14. Transport Layer | `IMG-1315` | `s14-transport-multiplexing-source-001` | Transport ports deliver data to the correct browser/application process |
| 11. IPv4 Addressing | `IMG-1756` | `s11-subnet-mask-40-hosts-source-001` | 40 hosts require at least a /26; 255.255.255.192 provides 62 usable addresses |
| 9. Address Resolution | `IMG-0816` | `s9-arp-cache-aging-source-001` | Dynamic ARP mappings age out after an OS-dependent timer |
| 4. Physical Layer | `IMG-0348` | `s4-utp-identification-source-001` | Image shows four unshielded twisted copper pairs |
| 4. Physical Layer | `IMG-1725`, `IMG-1872` | `s4-rj45-connector-source-001` | RJ-45/8P8C connector is used for twisted-pair Ethernet |
| 3. Protocols and Models | `IMG-0306` | `s3-destination-ip-layer-source-001` | Destination IP address is added at the Network layer |
| 3. Protocols and Models | `IMG-0314` | `s3-source-ip-layer-source-001` | Source IP address is added at the Network layer |
| 3. Protocols and Models | `IMG-0279` | `s3-application-data-layer-source-001` | Application data enters encapsulation at the Application layer |
| 3. Protocols and Models | `IMG-0270` | `s3-source-mac-001` | Source MAC address is added at the Data Link layer |
| 3. Protocols and Models | `IMG-0282` | `s3-destination-mac-layer-002` | Destination MAC address is added at the Data Link layer |
| 3. Protocols and Models | `IMG-0287` | `s3-destination-port-001` | Destination port number is added at the Transport layer |
| 3. Protocols and Models | `IMG-0322` | `s3-source-port-layer-002` | Source port number is added at the Transport layer |
| 8. Network Layer | `IMG-0779`, `IMG-0624` | `s8-diffserv-priority-source-001` | Differentiated Services is the 8-bit IPv4 field for QoS classification and ECN |
| 8. Network Layer | `IMG-0599` | `s8-ipv4-source-address-field-source-001` | Source IPv4 Address field contains the sending interface address |
| 8. Network Layer | `IMG-0607` | `s8-ipv4-ttl-field-source-001` | TTL limits packet lifetime across routers |
| 8. Network Layer | `IMG-0615` | `s8-ipv4-destination-address-field-source-001` | Destination IPv4 Address field contains the unicast/multicast/broadcast destination |
| 8. Network Layer | `IMG-0640` | `s8-ipv4-version-field-source-001` | IPv4 Version field is 4 (binary 0100) |
| 8. Network Layer | `IMG-0647` | `s8-ipv4-header-checksum-field-source-001` | Header Checksum detects corruption in the IPv4 header |

There are 34 source-origin image-question associations plus four reviewed image references used by AI-generated applied questions (38 total). The question bank contains 585 records across 605 concept tags, with a minimum of two questions per tag. Of 766 unique unresolved question-like images, 744 still await visual review; do not infer complete source coverage from this verified subset.


## Additional source-verified Module 8 questions

Two source slides contain explicit, directly usable answer evidence and have been promoted to source-origin questions:

| Source image | Question ID | Verified evidence |
|---|---|---|
| `IMG-0598` | `s8-host-routing-table-source-001` | The slide states that hosts maintain a local routing table containing loopback, local-network, and default routes. |
| `IMG-0639` | `s8-router-forwarding-steps-source-001` | The slide explicitly orders router forwarding: remove incoming Layer 2 framing, inspect the destination IPv4 address and select the best route, then create new Layer 2 framing for the next hop. |

The source-origin audit also corrected two earlier records whose images showed a question prompt but no answer key: `s3-llc-functions-001` and `s3-telnet-encapsulation-001` are now correctly labeled `ai-generated`. The final bank contains 587 questions, 40 source-origin questions, and 547 AI-generated questions.


## Module 1 career-objective expansion

Two AI-generated questions were added to the active `network-components` lesson to assess the explicit source statements under “The IT Professional”:

- `s1-ccna-foundation-career-applied-001` checks what the source says the CCNA certification demonstrates: knowledge of foundational technologies.
- `s1-networking-career-resource-applied-001` checks the source-era description of the Networking Academy Talent Bridge Matching Engine. Its explanation explicitly avoids claiming that the historical service is still available today.

Both use existing source block `block-0002` and share the new `networking-careers` and `ccna-certification` concept tags, so each new concept has two questions. The separate “Networks Affect our Lives” slide (`IMG-0051`) contains only its title; further content for that objective cannot be reconstructed reliably from the supplied slide.

## First-pass objective-to-question evidence map: Modules 5–17

This matrix maps recovered topic objectives to representative active question IDs in the corresponding lesson. It is a direct evidence index, not a claim that every paragraph, visual, Packet Tracer activity, or source assessment item has been exhaustively checked. The coverage report contains the complete per-tag and per-lesson bank inventory.

| Module / lesson | Source topic objective | Representative active question evidence | First-pass status |
|---|---|---|---|
| 5. Number Systems | Binary Number System | s5-binary-decimal-001, s5-binary-octet-001, s5-decimal-binary-001, s5-binary-applied-002 | Represented: positional notation, octet conversion, and IPv4 binary practice. |
| 5. Number Systems | Hexadecimal Number System | s5-hex-decimal-001, s5-decimal-hex-convert-001, s5-hex-binary-convert-001, s5-hex-byte-inspect-001 | Represented: decimal/hex/binary conversion and byte interpretation. |
| 6. Data Link Layer | Purpose of the Data Link Layer | s6-mac-sublayer-001, s6-llc-role-001, s6-fcs-purpose-001, s6-llc-protocol-demux-002 | Represented: LLC/MAC roles, upper-layer handoff, and frame integrity. |
| 6. Data Link Layer | Topologies | s6-topology-types-001, s6-wan-topologies-match-001, s6-controlled-access-scenario-001, s6-multiaccess-topology-applied-002 | Represented: point-to-point, multiaccess, WAN/LAN, contention, and controlled access. |
| 6. Data Link Layer | Data Link Frame | s6-frame-fields-match-001, s6-frame-fields-applied-002, s6-fcs-troubleshoot-001, s6-frame-processing-order-002 | Represented: frame fields, encapsulation, FCS, and receive processing. |
| 7. Ethernet Switching | Ethernet Frame | s7-nic-frame-processing-applied-002, s7-frame-size-standards-applied-002, s7-frame-size-001 | Represented: frame processing, size, and Ethernet standards. |
| 7. Ethernet Switching | Ethernet MAC Address | s7-broadcast-mac-001, s7-mac-length-001, s7-oui-purpose-001, s7-oui-vendor-identification-005 | Represented: address format, broadcast, and OUI/vendor identification. |
| 7. Ethernet Switching | The MAC Address Table | s7-mac-learning-001, s7-unknown-unicast-001, s7-mac-flapping-troubleshoot-003, s7-mac-aging-timer-troubleshoot-005 | Represented: learning, flooding, aging, and MAC movement. |
| 7. Ethernet Switching | Switch Speeds and Forwarding Methods | s7-switching-methods-001, s7-cut-through-variants-match-001, s7-buffering-match-001, s7-duplex-mismatch-001 | Represented: store-and-forward/cut-through, buffering, duplex, and port settings. |
| 9. Address Resolution | MAC and IP | s9-arp-request-001, s9-arp-vs-nd-001, s9-remote-destination-arp-001, s9-arp-cache-aging-source-001 | Represented: local ARP, remote-gateway resolution, cache behavior, and L2/L3 roles. |
| 9. Address Resolution | Neighbor Discovery | s9-ipv6-nd-001, s9-nd-message-roles-match-001, s9-nd-router-messages-applied-002 | Represented: Neighbor Solicitation/Advertisement and router discovery messages. |
| 10. Basic Router Configuration | Configure Initial Router Settings | s10-router-boot-setup-001, s10-router-memory-match-001, s10-ssh-management-hardening-003, s10-router-boot-process-applied-002 | Represented: boot, memory, initial security, and remote management. |
| 10. Basic Router Configuration | Configure Interfaces | s10-router-no-shutdown-001, s10-router-interface-config-order-001, s10-interface-verification-scenario-001 | Represented: interface addressing, activation, and verification. |
| 10. Basic Router Configuration | Configure the Default Gateway | s10-host-default-gateway-001, s10-switch-default-gateway-001, s10-ip-default-gateway-applied-002 | Represented: host gateway and Layer 2 switch management gateway are distinguished. |
| 11. IPv4 Addressing | IPv4 Address Structure | s11-subnet-network-001, s11-prefix-length-001, s11-prefix-hosts-001, s11-subnet-mask-40-hosts-source-001 | Represented: network/host portions, prefix length, masks, and host capacity. |
| 11. IPv4 Addressing | IPv4 Unicast, Broadcast, and Multicast | s11-source-broadcast-delivery-001, s11-source-multicast-delivery-001, s11-unicast-delivery-001, s11-multicast-group-applied-002 | Represented: destination scope and delivery behavior. |
| 11. IPv4 Addressing | Types of IPv4 Addresses | s11-private-ranges-001, s11-ipv4-special-ranges-match-001, s11-ipv4-address-categories-applied-002 | Represented: private, public, and special-use ranges. |
| 11. IPv4 Addressing | Network Segmentation | s11-subnet-broadcast-domain-scenario-001, s11-network-segmentation-applied-002, s11-subnet-overlap-applied-002 | Represented: broadcast-domain segmentation, overlap, and allocation constraints. |
| 11. IPv4 Addressing | Subnet an IPv4 Network | s11-vlsm-planning-001, s11-vlsm-allocation-001, s11-vlsm-two-stage-allocation-001, s11-subnet-host-membership-matching-applied-001, s11-subnet-table-membership-image-applied-001, s11-equal-size-subnet-mask-exhibit-applied-001 | Represented: /24 subnetting, VLSM, host ranges, and membership. |
| 12. IPv6 Addressing | IPv4 Issues | s12-ipv6-coexistence-001, s12-ipv4-ipv6-coexistence-applied-002, s12-ipv6-prefix-identification-001 | Represented: coexistence and transition mechanisms; check source lesson emphasis for each transition method. |
| 12. IPv6 Addressing | IPv6 Address Representation | s12-ipv6-compress-001, s12-ipv6-compress-002, s12-zero-compression-applied-002, s12-zero-suppression-applied-002 | Represented: hextets, leading-zero suppression, and zero compression. |
| 12. IPv6 Addressing | IPv6 Address Types | s12-link-local-001, s12-gua-prefix-001, s12-ipv6-address-types-match-001, s12-anycast-scenario-001 | Represented: GUA, LLA, multicast, and anycast. |
| 12. IPv6 Addressing | GUA and LLA Static Configuration | s12-ipv6-interface-config-001, s12-ipv6-verify-001, s12-interface-id-applied-002 | Represented: static interface configuration and verification. |
| 12. IPv6 Addressing | Dynamic Addressing for IPv6 GUAs | s12-slaac-scenario-001, s12-ra-dhcpv6-modes-match-001, s12-dhcpv6-mode-applied-002 | Represented: SLAAC, RA flags, and DHCPv6 modes. |
| 12. IPv6 Addressing | Dynamic Addressing for IPv6 LLAs | s12-link-local-001, s12-eui64-001, s12-eui64-applied-002 | Represented: link-local addressing and interface-ID construction; operating-system random IDs are also addressed in lesson text. |
| 12. IPv6 Addressing | IPv6 Multicast Addresses | s12-ipv6-multicast-prefix-001, s12-ipv6-assigned-multicast-match-001, s12-ipv6-multicast-groups-applied-002 | Represented: multicast prefix and common all-nodes/all-routers groups. |
| 12. IPv6 Addressing | Subnet an IPv6 Network | s12-ipv6-subnet-id-scenario-001, s12-ipv6-subnet-id-applied-002, s12-hierarchical-subnet-id-image-applied-001 | Represented: /48-to-/64 subnet ID selection. |
| 13. ICMP | ICMP Messages | s13-icmp-echo-001, s13-ttl-expired-001, s13-icmp-unreachable-001, s13-icmpv4-unreachable-codes-match-001 | Represented: Echo, Time Exceeded, Destination Unreachable, and ICMPv6-related behavior. |
| 13. ICMP | Ping and Traceroute Testing | s13-ping-loopback-scenario-001, s13-ping-default-gateway-scenario-001, s13-traceroute-ttl-sequence-002, s13-traceroute-asterisk-001 | Represented: local-stack tests, gateway reachability, TTL progression, and timeout interpretation. |
| 14. Transport Layer | Transportation of Data | s14-socket-pair-001, s14-multiplexing-applied-002, s14-transport-multiplexing-source-001 | Represented: process delivery, sockets, and multiplexing. |
| 14. Transport Layer | TCP Overview | s14-tcp-udp-001, s14-tcp-header-fields-001, s14-tcp-http-reliability-001 | Represented: TCP service characteristics and header functions. |
| 14. Transport Layer | UDP Overview | s14-udp-characteristics-001, s14-udp-applications-001, s14-udp-voice-traffic-002 | Represented: connectionless transport and real-time application selection. |
| 14. Transport Layer | Port Numbers | s14-port-matching-001, s14-port-ranges-001, s14-well-known-ports-applied-002 | Represented: port ranges, common services, and IANA assignments. |
| 14. Transport Layer | TCP Communication Process | s14-tcp-handshake-001, s14-tcp-handshake-applied-002, s14-sequence-numbers-applied-002 | Represented: connection establishment and sequence/acknowledgment behavior; explicit termination-state practice can be expanded. |
| 14. Transport Layer | Reliability and Flow Control | s14-tcp-ack-001, s14-tcp-window-001, s14-sack-purpose-001, s14-flow-congestion-control-001, s14-tcp-windowing-capacity-scenario-001, s14-tcp-window-remaining-capacity-scenario-001 | Represented: acknowledgments, receive windows, SACK, retransmission, and congestion control. |
| 14. Transport Layer | UDP Communication | s14-udp-applications-001, s14-connectionless-transport-applied-002, s14-realtime-apps-applied-002 | Represented: UDP behavior and application suitability. |
| 15. Application Layer | Application, Presentation, and Session | s15-tcpip-app-layer-001, s15-presentation-session-match-001 | Represented: application/presentation/session roles. |
| 15. Application Layer | Peer-to-Peer | s15-p2p-hybrid-001, s15-hybrid-p2p-applied-002 | Represented: pure and hybrid peer-to-peer models. |
| 15. Application Layer | Web and Email Protocols | s15-http-request-001, s15-email-protocols-001, s15-pop-imap-compare-001, s15-email-port-matching-001 | Represented: HTTP and common mail protocols/ports. |
| 15. Application Layer | IP Addressing Services | s15-dns-purpose-001, s15-dns-record-types-001, s15-dhcp-dora-001, s15-dns-nslookup-scenario-001 | Represented: DNS resolution/records and DHCP addressing. |
| 15. Application Layer | File Sharing Services | s15-file-sharing-match-001, s15-file-sharing-protocols-applied-002 | Represented: FTP, TFTP, and SMB. |
| 16. Network Security Fundamentals | Security Threats and Vulnerabilities | s1-security-threat-vectors-001, s16-vulnerability-types-match-001, s16-physical-threats-match-001 | Represented: threat sources, vulnerability categories, and physical/environmental threats. |
| 16. Network Security Fundamentals | Network Attacks | s16-malware-types-match-001, s16-attack-categories-match-001, s16-insider-threat-applied-002 | Represented: malware, reconnaissance, access, DoS, and insider threats. |
| 16. Network Security Fundamentals | Network Attack Mitigation | s16-defense-depth-001, s16-firewall-types-match-001, s16-vpn-ips-match-001, s16-acl-applied-002 | Represented: defense in depth, filtering, VPN, IPS, and ACL mitigation. |
| 16. Network Security Fundamentals | Device Security | s16-device-hardening-commands-match-001, s16-ssh-config-order-001, s16-ios-ssh-hardening-applied-002 | Represented: IOS hardening, authentication, SSH-only management, and secure credentials. |
| 17. Build a Small Network | Devices in a Small Network | s17-device-selection-criteria-match-001, s17-device-selection-applied-002 | Represented: device selection based on requirements and scale. |
| 17. Build a Small Network | Small Network Applications and Protocols | s17-dns-troubleshooting-001, s17-host-dhcp-apipa-diagnosis-001, s17-host-dns-query-troubleshooting-001 | Represented: DHCP, DNS, ARP, and common host services. |
| 17. Build a Small Network | Scale to Larger Networks | s17-redundancy-001, s17-device-selection-applied-002, s17-network-baseline-anomaly-001 | Represented: redundancy, scalability, capacity, and monitoring. |
| 17. Build a Small Network | Verify Connectivity | s17-traceroute-001, s17-ip-interface-verify-001, s17-verification-applied-002, s17-trace-interpretation-applied-002 | Represented: ping/traceroute and IOS verification. |
| 17. Build a Small Network | Host and IOS Commands | s17-ios-show-commands-match-001, s17-host-arp-cache-command-001, s17-windows-ipconfig-all-command-scenario-001, s17-windows-dns-cache-command-scenario-001, s17-source-ipv6-interface-show-001, s17-source-extended-ping-001 | Represented: host-side and IOS show/diagnostic commands. |
| 17. Build a Small Network | Troubleshooting Methodologies | s17-troubleshooting-order-001, s17-troubleshooting-sequence-001, s17-problem-identification-applied-002 | Represented: evidence, hypothesis, remediation, and verification sequence. |
| 17. Build a Small Network | Troubleshooting Scenarios | s17-multidevice-vlan-routing-fault-isolation-001, s17-packet-tracer-dhcp-relay-challenge-001, s17-multistage-dns-fault-isolation-001, s17-interface-crc-counter-diagnosis-001 | Represented: multi-device and staged Packet Tracer-style fault isolation. |

### Scope and remaining source-verification limits

- The objective headings for Modules 1–17 are transcribed from the recovered raw text. Module 8 uses its explicit “Module 8: Topics” block rather than a duplicated module-objectives block.
- This matrix provides a first-pass objective-to-question map for every module. It is not a source-page-by-source-page verification of every active question.
- Module 1's “Networks Affect our Lives” slide (IMG-0051) is only a title slide in the recovered notebook; the available source does not provide enough explanatory content to author a source-grounded assessment for that objective.
- Module 2 and Module 3 contain cross-lesson and repeated source material; their existing topic-specific mapping sections above identify known partial and near-duplicate areas.
- Remaining candidate image slides often contain unmarked questions, activities, or diagrams without answer keys. Do not convert those into source-origin questions unless the prompt and answer are directly supported by visible source evidence.
- The 77-image visual triage described in the image audit is a screening pass only. The 744 remaining unique question-like images still require page-level review if the project requires a complete answer-key audit.
