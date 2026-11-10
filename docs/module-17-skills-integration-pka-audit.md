# Module 17 Skills Integration Challenge — PKA source audit

## Source files and version selection

Two copies of the Skills Integration Challenge were present in the Library and were decrypted and inspected locally using the existing headless Packet Tracer reimplementation's documented file format and a native Twofish implementation.

| Source file | Embedded Packet Tracer version | Connectivity hostnames |
|---|---|---|
| `17.8.2-packet-tracer.pka` | **9.0.1.0858** | `www.cisco.srv`, `www.cisco6.srv` |
| `17.8.2-packet-tracer---skills-integration-challenge.pka_en-US_…pka` | **8.0.0.0216** | `www.cisco.pka`, `www.cisco6.pka` |

Use the 9.0.1.0858 file as the primary reference for the current Packet Tracer 9.0.1 curriculum. Do not mix the older file's `.pka` service hostnames with the newer file's `.srv` hostnames.

The 9.0.1 activity contains three embedded network snapshots, an `INITIALSETUP` assessment tree, and a `COMPARISONS` tree. The answer/comparison tree is the source for the assignments below. Its network snapshot contains 14 devices and 12 links: three PCs, three access switches, R1, Central, ISP, an additional switch, DNS and Web servers, an IPv6 Web server, and a power-distribution device.

## Activity scope

The written activity instructions state that Central, the ISP cluster, and the Web server are already configured. The learner must:

1. Divide `192.168.0.0/24` into Staff (100 hosts), Sales (50), IT (25), and future Guest (25) subnets.
2. Configure IPv4 and IPv6 addressing on Staff, Sales, and IT PCs.
3. Complete R1 interface addressing and basic security/SSH settings.
4. Configure the VLAN 1 management SVI and basic security on S1, S2, and S3.
5. Verify that all three PCs can browse to `www.cisco.srv` and `www.cisco6.srv`, and ping all other devices.

The activity does not ask the learner to build or reconfigure the Central router, ISP cluster, or Web server.

## Verified IPv4 VLSM allocation

The PKA 9.0.1 comparison state confirms this allocation:

| Network | Required hosts | Network/prefix | Usable host range | Broadcast |
|---|---:|---|---|---|
| Staff | 100 | `192.168.0.0/25` | `192.168.0.1–192.168.0.126` | `192.168.0.127` |
| Sales | 50 | `192.168.0.128/26` | `192.168.0.129–192.168.0.190` | `192.168.0.191` |
| IT | 25 | `192.168.0.192/27` | `192.168.0.193–192.168.0.222` | `192.168.0.223` |
| Guest (reserved) | 25 | `192.168.0.224/27` | `192.168.0.225–192.168.0.254` | `192.168.0.255` |

The Guest subnet is recorded for future use; the activity does not provide a Guest host or switch to configure.

## Verified IPv4 endpoint and management assignments

| Network | R1 interface/gateway | PC address | Switch SVI | Switch default gateway |
|---|---|---|---|---|
| Staff | G0/0 — `192.168.0.1/25` | Staff — `192.168.0.3/25` | S1 VLAN 1 — `192.168.0.2/25` | `192.168.0.1` |
| Sales | G0/1 — `192.168.0.129/26` | Sales — `192.168.0.131/26` | S2 VLAN 1 — `192.168.0.130/26` | `192.168.0.129` |
| IT | G0/2 — `192.168.0.193/27` | IT — `192.168.0.195/27` | S3 VLAN 1 — `192.168.0.194/27` | `192.168.0.193` |

The three PCs use the corresponding R1 LAN interface as their IPv4 default gateway. All three use DNS server `64.100.0.2`.

## Verified IPv6 and server assignments

| Device/interface | IPv6 global address | Link-local/default gateway |
|---|---|---|
| R1 G0/0 | `2001:DB8:ACAD::1/64` | `FE80::1` |
| Staff PC | `2001:DB8:ACAD::2/64` | PC link-local `FE80::2`; default gateway `FE80::1` |
| R1 G0/1 | `2001:DB8:ACAD:1::1/64` | `FE80::1` |
| Sales PC | `2001:DB8:ACAD:1::2/64` | PC link-local `FE80::2`; default gateway `FE80::1` |
| R1 G0/2 | `2001:DB8:ACAD:2::1/64` | `FE80::1` |
| IT PC | `2001:DB8:ACAD:2::2/64` | PC link-local `FE80::2`; default gateway `FE80::1` |
| R1 S0/0/1 | `2001:DB8:2::1/64` | `FE80::1` |
| Central S0/0/1 | `2001:DB8:2::2/64` | `FE80::2` |
| DNS Server | `2001:DB8:CAFE::2/64` | DNS IPv6 address used by the PCs |
| Web Server | `2001:DB8:CAFE::3/64` | — |

The server-side IPv4 values in the activity's addressing table are DNS Server `64.100.0.2/29` and Web Server `64.100.0.3/29`, both using `64.100.0.1` as their gateway. R1's preconfigured serial uplink is `172.16.1.2/30`; Central's corresponding interface is `172.16.1.1/30`.

The R1 answer configuration contains the IPv4 default route `ip route 0.0.0.0 0.0.0.0 172.16.1.1` and IPv6 default route `ipv6 route ::/0 2001:DB8:2::2`.

## Security and management requirements

### R1

The written instructions require:

- Hostname `R1` and `no ip domain-lookup`.
- An encrypted privileged EXEC secret and `service password-encryption`.
- `security passwords min-length 10`.
- A warning MOTD banner.
- Console password authentication and a five-minute idle timeout.
- Login blocking for 180 seconds after four failed attempts within 120 seconds.
- Domain name `CCNA-lab.com`.
- Local user `Admin1`, privilege level **15**, with a secret.
- A **1024-bit RSA key** and VTY access restricted to SSH with local authentication.
- Five-minute VTY idle timeout.

The comparison configuration confirms the password-encryption/minimum-length settings, login-blocking command, domain name, local Admin1 secret, console login/timeout, and SSH-only VTY configuration.

**Assessment-tree discrepancy and security caveat:** the written instructions explicitly require Admin1 privilege level 15 and a 1024-bit RSA key. The visible comparison tree records the Admin1 username/secret and SSH transport configuration, but does not expose a separate privilege-15 or RSA-modulus comparison. The lesson therefore follows the written requirement and teaches `username Admin1 privilege 15 secret …` plus generation of a 1024-bit key. Do not omit either requirement in this Packet Tracer 9.0.1 lab merely because the comparator does not expose a separate check. A 1024-bit RSA key is a legacy lab compatibility requirement, not modern production guidance; use a currently appropriate key size (commonly at least 2048 bits where supported). Also note that IOS `service password-encryption` applies weak reversible Type 7 obfuscation and does not provide strong cryptographic protection for line passwords.

### S1, S2, and S3

Each switch requires its hostname, disabled DNS lookup, encrypted privileged EXEC secret, plaintext password encryption, the VLAN 1 management address/default gateway in the table above, console password/login, and five-minute console and VTY idle timeouts. The written task does not require SSH configuration on the switches.

## Source-backed QA notes and remaining validation

- The VLSM allocation and endpoint/SVI assignments in the Module 17 lesson now match the 9.0.1 PKA comparison state.
- The Guest network is explicitly marked reserved rather than presented as a configured subnet.
- The lesson preserves the activity boundary: Central, ISP, and Web server are already configured.
- The activity's final verification targets are `www.cisco.srv`, `www.cisco6.srv`, and successful ping reachability from Staff, Sales, and IT.
- The older 8.0.0.0216 file has different web-service hostnames. It must not be used as the hostname source for the Packet Tracer 9.0.1 lesson.
- The PKA files have been decrypted and their XML/comparison data inspected. This is a structural/source audit, not a live Packet Tracer execution. The original activity still needs to be opened in Packet Tracer 9.0.1 and its browser/ping tasks run to verify simulation behavior end-to-end.
- The source lecture notes document **two distinct Module 17 connectivity activities**: the Packet Tracer lab **Troubleshoot Connectivity Issues** (resolve faults where possible; otherwise document and escalate them) and the Packet Tracer **Troubleshooting Challenge** (resolve multiple issues in an existing LAN). Do not conflate either with the separately audited Skills Integration Challenge.
- **Library file search completed:** the recursive `.pka` inventory contains 13 files. The two named `17.8.2` files are the 9.0.1 and 8.0.0 Skills Integration Challenge versions described above. The generic `activity_solved`/`test2` variants and the named Newport Practice Skills Assessment identify as **ITN Practice Skills Assessment** files, not either of the two connectivity labs. One `activity_solved_test2.pka` variant has malformed decoded XML, but its decoded PAGE title still identifies the same practice assessment; it was not used as evidence about a Module 17 activity. The source ZIP bundles also contain no additional `.pka` or `.pkt` files. The original **Troubleshoot Connectivity Issues** and **Troubleshooting Challenge** activity files remain unavailable; their topologies, seeded faults, comparison trees, and solution states are unverified. The separate **Interpret show Command Output** activity also has no matching `.pka` in the Library inventory, so its output set cannot be reproduced or executed from the available files. The lesson's troubleshooting instruction is source-grounded, but no activity-specific answer key should be inferred.
