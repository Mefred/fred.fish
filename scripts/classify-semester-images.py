#!/usr/bin/env python3
"""Heuristic module hints for Semester 1 OCR assets; never treat these as final review."""
import argparse, csv, json, re
from pathlib import Path

MODULES = {
1:[r"networking today",r"network representations",r"network topolog",r"network component",r"internet connection",r"common types of networks",r"network trends",r"reliable network",r"network security",r"it professional",r"powerline networking",r"converged network"],
2:[r"cisco ios access",r"ios navigation",r"command structure",r"basic device configuration",r"ports and addresses",r"verify connectivity",r"save configurations",r"running-config",r"startup-config",r"service password-encryption",r"line console",r"configure terminal"],
3:[r"protocols and models",r"the rules",r"protocol suites",r"standards organizations",r"reference models",r"data encapsulation",r"data access",r"osi model",r"tcp/ip model",r"pdu"],
4:[r"physical layer",r"copper cabling",r"utp cabling",r"fiber-optic cabling",r"wireless media",r"physical media",r"bandwidth"],
5:[r"number systems",r"binary number system",r"hexadecimal number system",r"convert binary",r"convert decimal",r"binary to decimal",r"hexadecimal"],
6:[r"data link layer",r"purpose of the data link",r"data link frame",r"llc sublayer",r"mac sublayer",r"logical link control",r"media access control"],
7:[r"ethernet switching",r"ethernet frames",r"ethernet mac address",r"mac address table",r"switch speeds",r"forwarding methods",r"store-and-forward",r"cut-through"],
8:[r"network layer",r"ipv4 packet",r"ipv6 packets",r"how a host routes",r"router routing tables",r"routing table"],
9:[r"address resolution",r"arp table",r"neighbor discovery",r"neighbor solicitation",r"neighbor advertisement",r"router solicitation",r"router advertisement"],
10:[r"basic router configuration",r"configure initial router settings",r"configure interfaces",r"configure the default gateway",r"router interface",r"router configuration"],
11:[r"ipv4 addressing",r"ipv4 address structure",r"ipv4 unicast",r"private and public ipv4",r"rfc 1918",r"subnet an ipv4",r"vlsm",r"subnetting",r"network segmentation"],
12:[r"ipv6 addressing",r"ipv6 address representation",r"ipv6 address types",r"dynamic addressing for ipv6",r"global unicast",r"link-local address",r"slaac",r"eui-64",r"subnet an ipv6"],
13:[r"icmp messages",r"ping and traceroute",r"traceroute tests",r"icmpv6"],
14:[r"transport layer",r"tcp overview",r"udp overview",r"tcp communication",r"udp communication",r"port numbers",r"reliability and flow control"],
15:[r"application layer",r"web and email protocols",r"ip addressing services",r"file sharing services",r"dns\b",r"dhcp\b",r"http\b",r"ftp\b"],
16:[r"network security fundamentals",r"security threats",r"network attacks",r"device security",r"defense-in-depth",r"threat actor",r"malware",r"access control list",r"intrusion prevention",r"vpn\b"],
17:[r"build a small network",r"small network applications",r"scale to larger networks",r"host and ios commands",r"troubleshooting methodologies",r"troubleshooting scenarios"],
}

def classify(text):
    lowered=text.lower()
    explicit=re.search(r"module\s+(\d{1,2})\s*:",lowered)
    if explicit and int(explicit.group(1)) in MODULES:
        return [int(explicit.group(1))],"high","explicit module heading"
    scores={}
    for module,patterns in MODULES.items():
        hits=[pattern for pattern in patterns if re.search(pattern,lowered)]
        if hits: scores[module]=hits
    if not scores: return [],"unclassified","no module-specific heading or terms"
    ranked=sorted(scores.items(),key=lambda item:len(item[1]),reverse=True)
    best,hits=ranked[0]
    if len(ranked)>1 and len(ranked[1][1])==len(hits):
        return [m for m,h in ranked if len(h)==len(hits)],"medium","; ".join(hits)
    return [best],"high" if len(hits)>=2 else "medium","; ".join(hits)

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument("ocr_jsonl",type=Path)
    parser.add_argument("output_csv",type=Path)
    args=parser.parse_args()
    rows=[]
    with args.ocr_jsonl.open(encoding="utf-8") as handle:
        for line in handle:
            item=json.loads(line)
            modules,confidence,evidence=classify(item.get("text",""))
            rows.append({"asset_id":item["asset_id"],"source_ref":item["source_ref"],"status":item["status"],"module_ids":";".join(map(str,modules)),"confidence":confidence,"evidence":evidence,"canonical_asset_id":item.get("canonical_asset_id","")})
    args.output_csv.parent.mkdir(parents=True,exist_ok=True)
    with args.output_csv.open("w",encoding="utf-8",newline="") as handle:
        writer=csv.DictWriter(handle,fieldnames=list(rows[0]))
        writer.writeheader();writer.writerows(rows)
    print(f"Classified {sum(bool(r['module_ids']) for r in rows)}/{len(rows)} assets; remaining assets require visual/topic review.")

if __name__=="__main__": main()
