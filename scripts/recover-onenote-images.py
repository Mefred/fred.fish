#!/usr/bin/env python3
"""Recover original OneNote image attachments and verify them by OCR-manifest SHA-256.

Usage:
  python scripts/recover-onenote-images.py source.one ocr-export/image-ocr.jsonl --output recovered-images

The OneNote file is scanned for embedded PNG/JPEG signatures. Candidate byte ranges
are accepted only when their SHA-256 matches a source asset in image-ocr.jsonl.
This avoids trusting signature matches or OCR filenames on their own.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import mmap
import struct
from pathlib import Path


PNG_SIGNATURE = b"\x89PNG\r\n\x1a\n"
JPEG_SIGNATURE = b"\xff\xd8\xff"


def read_expected(path: Path) -> dict[str, list[dict]]:
    expected: dict[str, list[dict]] = {}
    with path.open(encoding="utf-8") as handle:
        for line in handle:
            if not line.strip():
                continue
            record = json.loads(line)
            digest = record.get("sha256")
            if digest and record.get("source_ref"):
                expected.setdefault(digest, []).append(record)
    if not expected:
        raise SystemExit(f"No SHA-256 asset records found in {path}")
    return expected


def png_end(data: mmap.mmap, start: int) -> int | None:
    position = start + len(PNG_SIGNATURE)
    while position + 12 <= len(data):
        length = struct.unpack(">I", data[position : position + 4])[0]
        chunk_type = data[position + 4 : position + 8]
        end = position + 12 + length
        if length > 100_000_000 or end > len(data):
            return None
        position = end
        if chunk_type == b"IEND":
            return position
    return None


def jpeg_end(data: mmap.mmap, start: int) -> int | None:
    end_marker = data.find(b"\xff\xd9", start + len(JPEG_SIGNATURE))
    return end_marker + 2 if end_marker >= 0 else None


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("onenote_file", type=Path)
    parser.add_argument("image_ocr_jsonl", type=Path)
    parser.add_argument("--output", type=Path, default=Path("recovered-images"))
    args = parser.parse_args()
    if not args.onenote_file.is_file():
        raise SystemExit(f"OneNote file not found: {args.onenote_file}")
    if not args.image_ocr_jsonl.is_file():
        raise SystemExit(f"OCR manifest not found: {args.image_ocr_jsonl}")

    expected = read_expected(args.image_ocr_jsonl)
    args.output.mkdir(parents=True, exist_ok=True)
    recovered: dict[str, tuple[int, str, int]] = {}
    signature_count = 0

    with args.onenote_file.open("rb") as handle:
        with mmap.mmap(handle.fileno(), 0, access=mmap.ACCESS_READ) as data:
            candidates: list[tuple[int, str]] = []
            for extension, signature in (("png", PNG_SIGNATURE), ("jpg", JPEG_SIGNATURE)):
                position = 0
                while True:
                    position = data.find(signature, position)
                    if position < 0:
                        break
                    candidates.append((position, extension))
                    position += 1
            candidates.sort()
            signature_count = len(candidates)

            for start, extension in candidates:
                end = png_end(data, start) if extension == "png" else jpeg_end(data, start)
                if end is None or end <= start:
                    continue
                image_bytes = data[start:end]
                digest = hashlib.sha256(image_bytes).hexdigest()
                if digest in expected and digest not in recovered:
                    recovered[digest] = (start, extension, end - start)

    manifest_records = []
    missing = []
    for digest, assets in expected.items():
        recovered_image = recovered.get(digest)
        if recovered_image is None:
            missing.extend(asset.get("source_ref", digest) for asset in assets)
            continue
        offset, extension, size = recovered_image
        for asset in assets:
            source_ref = asset["source_ref"]
            destination = args.output / f"{source_ref}.{extension}"
            with args.onenote_file.open("rb") as handle:
                handle.seek(offset)
                image_bytes = handle.read(size)
            if hashlib.sha256(image_bytes).hexdigest() != digest:
                raise SystemExit(f"SHA-256 changed while extracting {source_ref}")
            destination.write_bytes(image_bytes)
            manifest_records.append({
                "asset_id": asset.get("asset_id"),
                "source_ref": source_ref,
                "file": destination.name,
                "sha256": digest,
                "offset": offset,
                "bytes": size,
            })

    summary = {
        "expected_assets": sum(len(assets) for assets in expected.values()),
        "unique_expected_images": len(expected),
        "recovered_assets": len(manifest_records),
        "recovered_unique_images": len(recovered),
        "scanned_signatures": signature_count,
        "missing_assets": missing,
    }
    manifest_path = args.output / "recovery-manifest.json"
    manifest_path.write_text(json.dumps({"summary": summary, "assets": manifest_records}, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({**summary, "manifest": str(manifest_path)}, indent=2))
    if missing:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
