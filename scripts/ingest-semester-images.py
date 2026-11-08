#!/usr/bin/env python3
"""Resumable OCR + coverage audit for the Semester 1 OneNote image package.

Usage:
  python scripts/ingest-semester-images.py /path/to/extracted-package --output /path/to/output --workers 4

Requires Tesseract OCR. Each image is processed independently so interrupted runs
can resume from the JSONL checkpoint without repeating completed assets.
"""
from __future__ import annotations

import argparse
import csv
import json
import os
import shutil
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path


def read_manifest(path: Path) -> list[dict[str, str]]:
    with path.open(encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle))


def ocr_one(row: dict[str, str], package: Path) -> dict:
    image_path = package / row["relative_path"]
    if not image_path.is_file():
        return {"asset_id": row["asset_id"], "filename": row["filename"], "status": "missing", "text": "", "confidence": None}
    env = dict(os.environ)
    env["OMP_THREAD_LIMIT"] = "1"
    try:
        result = subprocess.run(
            ["tesseract", str(image_path), "stdout", "--psm", "6", "tsv"],
            check=False, capture_output=True, text=True, timeout=120, env=env,
        )
        if result.returncode != 0:
            return {"asset_id": row["asset_id"], "filename": row["filename"], "status": "ocr_error", "text": "", "confidence": None, "error": result.stderr[-500:]}
        words, confidences = [], []
        for line in result.stdout.splitlines()[1:]:
            columns = line.split("\t")
            if len(columns) < 12:
                continue
            word = columns[11].strip()
            try:
                confidence = float(columns[10])
            except ValueError:
                confidence = -1
            if word and confidence >= 0:
                words.append(word)
                confidences.append(confidence)
        text = " ".join(words)
        confidence = round(sum(confidences) / len(confidences), 1) if confidences else None
        status = "processed" if text else "unreadable_or_nontext"
        return {"asset_id": row["asset_id"], "filename": row["filename"], "relative_path": row["relative_path"], "status": status, "text": text, "confidence": confidence}
    except subprocess.TimeoutExpired:
        return {"asset_id": row["asset_id"], "filename": row["filename"], "relative_path": row["relative_path"], "status": "timeout", "text": "", "confidence": None}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("package", type=Path, help="Directory containing Semester_1_Image_Manifest.csv and images/")
    parser.add_argument("--output", type=Path, default=Path("semester-1-image-ocr"))
    parser.add_argument("--workers", type=int, default=4)
    args = parser.parse_args()
    manifest_path = args.package / "Semester_1_Image_Manifest.csv"
    if not manifest_path.is_file():
        raise SystemExit(f"Missing manifest: {manifest_path}")
    if not shutil.which("tesseract"):
        raise SystemExit("Tesseract is required. Install it and retry.")
    args.output.mkdir(parents=True, exist_ok=True)
    jsonl_path = args.output / "image-ocr.jsonl"
    audit_path = args.output / "image-audit.csv"
    manifest = read_manifest(manifest_path)

    completed: dict[str, dict] = {}
    if jsonl_path.exists():
        with jsonl_path.open(encoding="utf-8") as handle:
            for line in handle:
                try:
                    record = json.loads(line)
                    completed[record["asset_id"]] = record
                except (json.JSONDecodeError, KeyError):
                    continue

    pending = [row for row in manifest if row["asset_id"] not in completed]
    print(f"Image coverage: {len(completed)}/{len(manifest)} already processed; {len(pending)} remaining.", flush=True)
    with jsonl_path.open("a", encoding="utf-8") as output:
        with ThreadPoolExecutor(max_workers=max(1, args.workers)) as executor:
            futures = [executor.submit(ocr_one, row, args.package) for row in pending]
            for number, future in enumerate(as_completed(futures), 1):
                record = future.result()
                completed[record["asset_id"]] = record
                output.write(json.dumps(record, ensure_ascii=False) + "\n")
                output.flush()
                if number % 25 == 0 or number == len(futures):
                    print(f"Processed this run: {number}/{len(futures)}; total accounted: {len(completed)}/{len(manifest)}", flush=True)

    with audit_path.open("w", encoding="utf-8", newline="") as handle:
        fields = ["asset_id", "filename", "relative_path", "status", "confidence", "text_characters"]
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        for row in manifest:
            record = completed.get(row["asset_id"], {})
            writer.writerow({
                "asset_id": row["asset_id"], "filename": row["filename"], "relative_path": row["relative_path"],
                "status": record.get("status", "pending"), "confidence": record.get("confidence"),
                "text_characters": len(record.get("text", "")),
            })
    counts: dict[str, int] = {}
    for record in completed.values():
        counts[record.get("status", "unknown")] = counts.get(record.get("status", "unknown"), 0) + 1
    print(json.dumps({"accounted": len(completed), "total": len(manifest), "statuses": counts, "ocr_jsonl": str(jsonl_path), "audit_csv": str(audit_path)}, indent=2))


if __name__ == "__main__":
    main()
