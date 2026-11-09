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

## First-pass topic-to-question comparison: Module 4

The Physical Layer module is now mapped to active question records. This is an initial mapping of the objective list to actual prompts and concepts, not a claim that every diagram, cable type, connector, or lab has been fully audited.

| Source topic objective | Active question-bank evidence | First-pass finding |
|---|---|---|
| Purpose of the Physical Layer | `s4-physical-layer-role-001` assesses accepting a Layer 2 frame, encoding it as signals, and transmitting bits. | Represented at the core-function level; add more receiver-side encoding/decoding scenarios if needed. |
| Physical Layer Characteristics | `s4-bandwidth-throughput-001` distinguishes rated bandwidth from achieved throughput; `s4-signal-attenuation-001` assesses attenuation and signal integrity. | Partially represented. Add practice on latency, jitter, and bandwidth units only where the source teaches them in this module. |
| Copper Cabling | `s4-utp-distance-001`, `s4-utp-twist-001`, `s4-utp-crosstalk-001`, and `s4-signal-medium-match-001` assess copper distance, twisting, interference, and electrical signaling. | Represented at a first-pass level; exact copper cable-type and connector identification still needs review. |
| UTP Cabling | `s4-utp-standard-001` tests TIA/EIA-568 scope; `s4-utp-twist-001` and `s4-utp-crosstalk-001` test UTP construction and interference reduction. | Partially represented; inspect the source's cable termination and pinout exhibits before declaring complete. |
| Fiber-Optic Cabling | `s4-fiber-purpose-001`, `s4-media-scenario-001`, `s4-fiber-modes-001`, and `s4-signal-medium-match-001` assess light signaling, distance, EMI resistance, and single-mode versus multimode. | Broadly represented; connector types and visual identification still need review. |
| Wireless Media | `s4-wireless-medium-001` and `s4-signal-medium-match-001` assess radio/microwave signaling and the wireless medium. | Partially represented; interference sources and practical placement/channel scenarios could use additional questions. |

**Initial practice expansion:** four AI-generated questions were added for physical-layer function, bandwidth versus throughput, medium-to-signal mapping, and TIA/EIA-568 UTP requirements. The new questions cite the recovered text block `block-0073`; they are not verbatim source-origin questions. The lesson now has 12 active questions. Continue visual verification of cable and connector exhibits before adding image-specific references.

## First-pass topic-to-question comparison: Module 8

The Module 8 objective list is now compared against the active `network-layer` question records and their concept tags. This is a narrow, explicit mapping pass; it is not yet generalized to the other modules.

| Source topic objective | Evidence in source notes | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Network Layer Characteristics | IP is connectionless, best-effort, and media-independent; the source explains that IP does not guarantee delivery (source lines 7661–7708 and nearby review material). | `ip-characteristics`, `connectionless`, `best-effort`, `media-independent` | Represented, with multiple applied questions. |
| IPv4 Packet | Source lists Version, Differentiated Services, Header Checksum, TTL, Protocol, Source IPv4 Address, and Destination IPv4 Address (source lines 7661–7677). | `s8-ipv4-header-fields-match-001` explicitly maps all seven listed fields; `s8-ipv4-header-inspection-001` applies Protocol=17, TTL, and header-checksum interpretation. Tags include `ipv4-header-fields`, `ipv4-version`, `ipv4-differentiated-services`, `ipv4-header-checksum`, `ipv4-ttl`, `ipv4-protocol`, and `ipv4-source-destination`. | **Initial practice added:** direct field mapping plus packet-inspection scenario. Fragmentation fields remain a separate practice target. |
| IPv6 Packet | Source lists Version, Traffic Class, Flow Label, Payload Length, Next Header, Hop Limit, and 128-bit source/destination addresses (source lines 7565–7583); it also notes the fixed 40-byte header and removed IPv4 fields (source lines 7963–7974). | `s8-ipv6-header-fields-match-001` explicitly maps all eight base-header fields; `s8-ipv6-flow-label-scenario-001` applies flow-label interpretation; `s8-ipv4-ipv6-header-compare-001` tests fixed-header and extension-header differences. Tags include `ipv6-header-fields`, `ipv6-version`, `ipv6-traffic-class`, `ipv6-flow-label`, `ipv6-payload-length`, `ipv6-next-header`, `ipv6-hop-limit`, and `ipv6-source-destination`. | **Initial practice added:** field mapping, flow-label scenario, and IPv4/IPv6 structural comparison. Further applied packet-capture scenarios and visual review remain useful. |
| How a Host Routes | Source explains local versus remote destinations, default-gateway use, and host routing-table behavior (Module 8 topic block at source lines 7788–7800 and related material). | `default-gateway`, `packet-forwarding`, `routing-table-lookup`, `next-hop` | Represented. Verify that the lesson teaches host route selection distinctly from router route selection. |
| Router Routing Tables | Source covers directly connected, remote, and default routes; route sources, metrics, and forwarding decisions (Module 8 source material around lines 7788–7800 and 7864 onward). | `routing-table`, `ipv4-routing-table`, `connected-routes`, `static-routes`, `default-route`, `routing-metric`, `administrative-distance`, `route-sources`, `longest-prefix-match` | Broadly represented; continue checking route-entry interpretation and route selection with varied output-based scenarios. |

The initial packet-header gap has been addressed with five new AI-generated practice questions: two IPv4 items and three IPv6 / comparison items. The matching questions assess the major field roles, while the scenario questions test packet inspection, Flow Label interpretation, and structural differences. This does not make Module 8 complete: IPv4 fragmentation details still need direct practice, and the new items need broader applied variants and visual source-page review.

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

The lesson currently has **24 active questions and 51 distinct concept tags**. Four additional AI-generated questions address goodput, latency, UTP cable wiring conventions, and secure WLAN deployment. They are derived from recovered Module 4 notes and existing source references, not presented as verbatim source questions. Connector diagrams, termination exhibits, cable categories, and patch-cord visuals still need direct image review.

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

Four new AI-generated questions add OUI identification, MAC-address movement between switch ports, forwarding-method trade-offs, and switch memory-buffering comparison. They are derived from recovered Module 7 notes and existing Ethernet Switching image references, not presented as verbatim source questions. Visual verification of the MAC-table and switch-buffer diagrams remains pending.

## Module 9 first-pass topic-to-question mapping

The recovered Module 9 objective is to explain how ARP and Neighbor Discovery enable communication. Its two source topics are MAC/IP addressing and IPv6 Neighbor Discovery. The active `address-resolution` lesson now has 11 questions.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| MAC and IP | IPv4-to-MAC resolution; local versus remote destinations; default-gateway MAC; ARP requests and replies; ARP cache; cache expiration; ARP broadcast/security issues | `arp`, `address-resolution`, `broadcast`, `unicast`, `arp-cache`, `default-gateway`, `remote-network-communication` | Broadly represented; includes broadcast requests, unicast replies, cache use and expiration, IOS/host inspection commands, and a new remote-destination scenario requiring the default-gateway MAC rather than the remote server's MAC. ARP spoofing and cache-poisoning defense remain a practice gap. |
| Neighbor Discovery | ICMPv6 NS/NA address resolution; RS/RA router discovery; Redirect for next-hop selection | `ipv6-neighbor-discovery`, `icmpv6`, `neighbor-solicitation`, `neighbor-advertisement`, `router-solicitation`, `router-advertisement`, `icmpv6-redirect` | Improved; a new matching item distinguishes all five message roles. A deeper DAD and solicited-node multicast scenario would strengthen practical understanding. |

Three new AI-generated questions add remote-network gateway resolution, full ICMPv6 ND message-role matching, and ARP cache-expiration behavior. They are derived from recovered Module 9 notes and existing source references, not presented as verbatim source questions. The source includes topology exhibits for ARP requests and remote destinations; those diagrams still need direct visual verification.

## Module 10 first-pass topic-to-question mapping

The recovered Module 10 objective is to implement initial settings on a router and end devices. Its three source topics are initial router settings, interface configuration, and default-gateway configuration. The active `router-configuration` lesson now has 11 questions.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Configure Initial Router Settings | Router boot/setup behavior; IOS image and configuration files; RAM, ROM, flash, NVRAM; saving running configuration; basic initial settings | `router-boot-process`, `startup-configuration`, `router-memory`, `ram`, `rom`, `flash`, `nvram`, `running-configuration` | Represented through boot/setup diagnosis, memory-role matching, and saving the active configuration. Initial security settings (hostname, privileged EXEC, console/VTY access, password protection, and banner) need more router-specific applied practice; some are covered in Module 2. |
| Configure Interfaces | Configure two active router interfaces; IPv4/IPv6 interface addressing; activate interfaces; verify interface status and statistics | `router-interface-configuration`, `ipv4-interface-configuration`, `no-shutdown`, `interface-status`, `ios-verification-commands`, `show-ip-interface-brief` | Improved; a new ordering item tests interface mode, IPv4 address assignment, and no shutdown; a scenario selects show ip interface brief for fast verification. More complete two-interface lab scenarios remain useful. |
| Configure the Default Gateway | Configure end devices to use the local router interface as the gateway; Layer 2 switch default-gateway for remote management | `default-gateway`, `ip-default-gateway`, `switch-management`, `remote-management` | Improved; new host scenario distinguishes the local router interface from a remote server or ISP address, alongside the existing Layer 2 switch management-gateway question. |

Three new AI-generated questions add router interface command ordering, concise interface verification, and host default-gateway selection. They are derived from recovered Module 10 notes and existing source references, not presented as verbatim source questions. The Packet Tracer interface and default-gateway exhibits still need direct visual verification.

## Module 11 first-pass topic-to-question mapping

The recovered Module 11 objective is to calculate an IPv4 subnetting scheme to efficiently segment a network. Its five source topics are IPv4 address structure, unicast/broadcast/multicast, IPv4 address types, network segmentation, and subnetting a /24. The active `ipv4-addressing` lesson currently has 20 questions.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| IPv4 Address Structure | 32-bit address; network and host portions; subnet mask; prefix length; logical AND; network, broadcast, first/last usable addresses | `ipv4-addressing`, `subnet-mask`, `cidr`, `prefix-length`, `network-address`, `broadcast-address` | Strong calculation coverage for prefix interpretation, network/broadcast addresses, host ranges, and host capacity. Explicit bitwise ANDing and first/last usable-address drills could be added. |
| IPv4 Unicast, Broadcast, and Multicast | One-to-one, one-to-all on a subnet, and one-to-many group delivery | No direct lesson-local tags for unicast, broadcast, or multicast in the current IPv4 Addressing bank | Gap: add explicit delivery-type comparison and destination-scope scenarios. Existing broadcast-address arithmetic does not by itself teach broadcast delivery semantics. |
| Types of IPv4 Addresses | Public, private, reserved; RFC 1918; APIPA/link-local; loopback; classful ranges; IANA/RIR allocation | `private-ipv4`, `rfc1918` | Partial: RFC 1918 private blocks are practiced, but public/reserved classification, APIPA, loopback, and historical classful ranges are not directly assessed in this lesson. |
| Network Segmentation | Subnetting reduces broadcast-domain size; supports policy boundaries and organization by location, group, or device type | No direct lesson-local segmentation/broadcast-domain concepts | Gap: add applied questions explaining why subnetting improves scale, performance, and policy separation, and how routers bound broadcasts. |
| Subnet an IPv4 Network | /24 subnetting; prefix/mask conversion; number of subnets and hosts; VLSM; efficient allocation | `ipv4-subnetting`, `subnet-sizing`, `host-capacity`, `vlsm`, `prefix-length`, `network-address`, `broadcast-address` | Strong calculation coverage from /24-derived /23 through /29 exercises, capacity selection, and sequential VLSM allocation. More mixed address-type and first/last-host practice would round out the topic. |

The 20-question lesson has substantial calculation depth, but it does not yet cover every objective equally. The largest gaps are delivery semantics (unicast/broadcast/multicast), reserved/public IPv4 address categories, and the purpose and effect of network segmentation. These are recorded as explicit expansion targets rather than treating subnetting question volume as proof of complete Module 11 coverage.

## Module 12 first-pass topic-to-question mapping

The recovered Module 12 objective is to implement an IPv6 addressing scheme. Its source topics cover the need for IPv6, address representation and types, static and dynamic GUA/LLA configuration, multicast, and IPv6 subnetting.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| IPv4 Issues / Need for IPv6 | IPv4 address exhaustion; larger 128-bit address space; reduced reliance on NAT; transition methods | `ipv4-ipv6-coexistence`, `dual-stack`, `tunneling`, `translation` | Partial; coexistence methods are tested, but the motivation for IPv6 and the address-space implications need a more explicit applied comparison. |
| IPv6 Address Representation | 128-bit address; eight hextets; hexadecimal notation; leading-zero omission; one longest zero-run compression | `ipv6-address-representation`, `zero-compression`, `zero-suppression`, `hextets` | Strong; multiple compression exercises include both leading-zero removal and longest-run compression. More expansion from compressed notation would add useful variety. |
| IPv6 Address Types | GUA, LLA, multicast, anycast, loopback; prefix ranges; link-local scope | `ipv6-address-types`, `global-unicast-address`, `link-local-address`, `ipv6-multicast`, `multicast-address`, `loopback-address` | Broadly represented for GUA, LLA, multicast, and loopback. Anycast behavior and assigned multicast group scope (all-nodes/all-routers) remain gaps. |
| GUA and LLA Static Configuration | Configure IPv6 address and prefix on interfaces; automatic LLA creation; EUI-64 or random interface IDs; interface verification | `ipv6-address-configuration`, `ipv6-interface-configuration`, `eui-64`, `ipv6-interface-id`, `show-ipv6-interface`, `no-shutdown` | Strong; includes interface configuration, EUI-64, link-local behavior, and verification commands. Random interface-ID generation could use a direct comparison question. |
| Dynamic Addressing for IPv6 GUAs and LLAs | Router Solicitation/Advertisement; SLAAC; stateful and stateless DHCPv6; M/O flags; DAD | `slaac`, `ipv6-router-solicitation`, `ipv6-router-advertisement`, `dhcpv6`, `stateless-dhcpv6`, `stateful-dhcpv6`, `duplicate-address-detection` | Improved; new matching item distinguishes SLAAC-only, SLAAC with stateless DHCPv6, and stateful DHCPv6. A DAD scenario tests Neighbor Solicitation for address uniqueness. |
| IPv6 Multicast Addresses | FF00::/8; all-nodes and all-routers groups; multicast group membership | `ipv6-multicast`, `multicast-address` | Partial; prefix recognition is covered, but assigned multicast group addresses and their scope should be added. |
| Subnet an IPv6 Network | Global routing prefix; subnet ID; interface ID; hexadecimal subnet increments; /48-to-/64 planning | `ipv6-network-prefix`, `ipv6-prefix-length`, `ipv6-subnetting`, `ipv6-subnet-id` | Improved; a new scenario explains the 16-bit subnet ID between a /48 global routing prefix and /64 LAN prefixes. More hexadecimal subnet-allocation drills remain useful. |

Three new AI-generated questions add RA M/O flag interpretation, IPv6 subnet-ID planning, and Duplicate Address Detection. They are based on recovered Module 12 notes and existing source references, not presented as verbatim source questions. Address-type, multicast, and subnetting exhibits still require direct visual verification.

## Module 13 first-pass topic-to-question mapping

The recovered Module 13 objective is to use tools to test network connectivity. Its two source topics are ICMP messages and ping/traceroute testing. The active `icmp` lesson now has 13 questions.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| ICMP Messages | Echo Request/Reply; Destination Unreachable codes; Time Exceeded; ICMPv4 and ICMPv6; IPv6 Neighbor Discovery messages | `icmp`, `icmp-echo`, `icmp-destination-unreachable`, `icmp-time-exceeded`, `icmpv6`, `neighbor-solicitation`, `neighbor-advertisement` | Improved; new matching question tests common ICMPv4 Destination Unreachable codes, and a new scenario tests IPv6 Hop Limit expiration. Existing questions cover Echo, Time Exceeded, unreachable conditions, and ICMPv6 NS/NA. More IPv6 Destination Unreachable code practice remains useful. |
| Ping and Traceroute Testing | Ping success/round-trip time; loopback and default-gateway checks; traceroute hop discovery; TTL/Hop Limit; timeout/asterisk interpretation; source address selection | `ping`, `connectivity-testing`, `host-reachability`, `traceroute`, `ttl`, `ipv4-ttl`, `source-ip-selection`, `icmp-filtering` | Improved; new scenarios test loopback as a local-stack check and the default gateway as a local-network check. Existing scenarios cover traceroute asterisks, source address selection, and ICMP filtering. A complete multi-hop traceroute-output diagnosis exercise remains a gap. |

Four new AI-generated questions add ICMPv4 unreachable-code matching, loopback testing, default-gateway testing, and IPv6 Hop Limit expiration. They are derived from recovered Module 13 notes and existing source references, not presented as verbatim source questions. The Packet Tracer ping/traceroute topology exhibits still need direct visual verification.

## Module 14 first-pass topic-to-question mapping

The recovered Module 14 material covers transport-layer responsibilities, TCP and UDP behavior, port numbers/socket pairs, and TCP reliability and flow control. The active `transport-layer` lesson now has 17 questions.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Transportation of Data | Track application conversations; segment/reassemble data; multiplex conversations; identify applications with ports; select TCP or UDP based on application needs | `transport-layer`, `multiplexing`, `port-numbers`, `tcp`, `udp` | Represented through protocol comparison, socket pairs, port use, and application selection. More direct segmentation/reassembly and conversation-multiplexing scenarios would improve depth. |
| TCP Overview and Communication Process | Connection-oriented setup; three-way handshake; sequence and acknowledgment numbers; TCP header fields; connection termination and control flags | `tcp`, `tcp-connection-establishment`, `tcp-header`, `tcp-sequence-numbers`, `tcp-acknowledgments` | Strong for handshake, header fields, sequence/ACK arithmetic, and next-byte semantics. TCP termination/FIN/RST behavior remains under-practiced. |
| UDP Overview and Communication | Connectionless datagrams; small header; low overhead; no TCP-style sequencing, acknowledgment, retransmission, or flow control; application use cases | `udp`, `udp-header`, `connectionless-transport`, `real-time-applications` | Represented with protocol characteristics and real-time application selection. UDP header-field interpretation and datagram reordering limitations could use more direct practice. |
| Port Numbers and Socket Pairs | Well-known, registered, dynamic/private ranges; source/destination ports; IP-plus-port sockets; IANA allocation; netstat | `port-numbers`, `well-known-ports`, `iana`, `socket-pairs`, `dns`, `ssh`, `http`, `https` | Represented with port-range identification, common service matching, and socket endpoint identification. More ports and a netstat troubleshooting scenario remain useful. |
| Reliability and Flow Control | Ordered delivery; sequence/ACK behavior; retransmission; duplicate ACK; sliding window; receiver window; SACK; MSS/MTU; congestion avoidance | `reliability`, `reliability-and-flow-control`, `tcp-windowing`, `flow-control`, `selective-acknowledgment`, `sack`, `maximum-segment-size`, `mtu`, `congestion-control` | Improved; new scenarios cover duplicate ACK behavior, SACK information, MSS versus MTU, and flow versus congestion control. Detailed sliding-window calculations and TCP termination still need more practice. |

Four new AI-generated questions add duplicate-ACK loss recovery, SACK, MSS/MTU comparison, and flow-versus-congestion-control distinctions. They are derived from recovered Module 14 notes and existing source references, not presented as verbatim source questions. TCP header and sliding-window diagrams still need direct visual verification.

## Module 15 first-pass topic-to-question mapping

The recovered Module 15 objective is to explain how application-layer protocols support end-user applications. Its source topics cover the application/presentation/session layers, peer-to-peer, web/email protocols, IP addressing services, and file sharing. The active `application-layer` lesson now has 14 questions.

| Source topic objective | Source concepts recovered | Active question-bank evidence | First-pass finding |
|---|---|---|---|
| Application, Presentation, and Session | Application interface to services; data formatting, compression, encryption; session dialog establishment/maintenance | `application-layer`, `presentation-layer`, `session-layer`, `osi-model` | Improved; new matching item distinguishes presentation data handling from session dialog management. More applied examples of encryption/compression and session state remain useful. |
| Peer-to-Peer | Decentralized resource sharing; peers acting as both clients and servers; hybrid P2P designs | `peer-to-peer`, `hybrid-p2p`, `client-server-model` | Represented through pure/hybrid architecture and practical resource-sharing scenarios. |
| Web and Email Protocols | HTTP/HTTPS request-response; GET/POST/PUT; SMTP sending; POP3/IMAP retrieval and mailbox synchronization | `http`, `web-protocols`, `smtp`, `pop3`, `imap`, `email-protocols` | Improved; new matching item tests GET/POST/PUT roles. Existing questions cover SMTP sending, POP3/IMAP retrieval, and email ports. HTTPS security behavior and HTTP status codes remain gaps. |
| IP Addressing Services | DNS name resolution and hierarchy; A/AAAA/MX/NS records; nslookup; DHCPv4 DORA; DHCPv6 message flow | `dns`, `dns-resource-records`, `a-record`, `aaaa-record`, `mx-record`, `ns-record`, `dhcp`, `ip-addressing-services` | Strong for DNS purpose/records and DHCPv4 DORA/ports; new nslookup scenario adds name-resolution troubleshooting. DHCPv6 SOLICIT/ADVERTISE/REQUEST/REPLY remains untested in this lesson. |
| File Sharing Services | FTP control/data connections; TFTP; SMB session, authentication, file/printer sharing; client/server transfer | `file-sharing-services`, `ftp`, `tftp`, `smb`, `client-server-model` | Improved; new matching item contrasts FTP, TFTP, and SMB. A direct FTP control/data port scenario and SMB permissions/session troubleshooting would add depth. |

Four new AI-generated questions add HTTP method matching, presentation/session layer roles, nslookup troubleshooting, and FTP/TFTP/SMB comparison. They are based on recovered Module 15 notes and existing source references, not presented as verbatim source questions. The HTTP exchange, DNS hierarchy, and file-sharing diagrams still need direct visual verification.

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
| The IT Professional | No dedicated active question currently tests the Module 1 career/CCNA objective. | **Gap:** add source-aligned practice on networking career pathways and the role/purpose of foundational certification only after reviewing the exact lesson material. Avoid adding unsupported career claims. |

**Module 1 result:** seven of nine topic objectives have related active practice, while “Networks Affect our Lives” and “The IT Professional” need direct question coverage. The seven related mappings are preliminary, not a completeness claim: the next pass must inspect the full lesson content and relevant diagrams, and should check that questions are placed in the intended lesson rather than merely sharing a broad concept tag. The network-types question set also needs a source check for dial-up and cellular access, and the Network Trends lesson needs a check for smart-home examples.



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
| The Rules | `s3-communication-rules-match-001`, `s3-segmentation-benefits-001` | Improved. Matching tests encoding, formatting/encapsulation, size, timing, and delivery options. Access methods and collision handling still need a separate focused scenario. |
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
4. **One-question coverage** is a fragile signal. It should be reported as low practice depth, not as mastery or adequate coverage.
5. **Pending source verification** is not a zero-question source gap. Module 8 remains pending until its original pages/objectives are located and reviewed.
6. OCR text can locate candidate material, but diagrams, screenshots, tables, and question exhibits require visual inspection before their details are treated as verified.

## Next review work

- Visually verify the Network Layer objective/topic block and attach exact source-page references; the recovered raw text includes duplicated/repeated Module 8 content.
- Complete topic-objective transcription where an excerpt above is explicitly marked partial.
- Split broad source topics into atomic assessable concepts only when the source material supports that split.
- Add an explicit source-topic-to-question-concept mapping and use it to generate a real source coverage matrix.
- Visually inspect source pages for topics whose instruction depends on diagrams, screenshots, or Packet Tracer exhibits.
