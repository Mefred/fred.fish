# Recovering the original Semester 1 OneNote images

The OCR export contains the image manifest and SHA-256 hashes, but not the original image bytes. The original `.one` notebook does contain the embedded image payloads. Use the recovery script to extract them and verify every file against the OCR manifest:

```sh
python scripts/recover-onenote-images.py \
  "/path/to/Sem 1 Lecture Notes.one" \
  "/path/to/ocr-export/image-ocr.jsonl" \
  --output "/path/to/recovered-images"
```

The script scans embedded PNG/JPEG signatures, parses image boundaries, and accepts an extracted image only when its SHA-256 exactly matches a manifest record. It writes one file per `IMG-XXXX` source reference plus `recovery-manifest.json`. It exits non-zero if any manifest asset cannot be recovered.

## Recovery result for the supplied notebook

- Original OneNote file: 407,524,192 bytes.
- Embedded image signatures found: 2,727.
- Valid PNG/JPEG payloads extracted by signature parsing: 2,682.
- Unique extracted image hashes: 2,379.
- OCR manifest assets: 2,646.
- Manifest assets matched exactly by SHA-256: **2,646 / 2,646**.
- Unique manifest image hashes matched: **2,376 / 2,376**.
- Additional unique image payloads not referenced by the OCR manifest: 3.

The extra signatures and malformed candidates are not treated as source assets. The SHA-256 match is the authoritative recovery check.

The recovered image set makes source-image inspection possible; it does not mean every image has been visually reviewed. Question candidates and diagram-dependent explanations still require manual visual answer verification. See `semester-1-image-audit.md` and `semester-1-ocr-candidate-triage.md`.
