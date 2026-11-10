# Semester 1 learning content ingestion

## Source package

The primary source is `Semester_1_FredFish_AI_Ingestion_Package.zip`. Its ingestion README identifies:

- 73 recovered OneNote text blocks in `Semester_1_AI_Corpus.jsonl`.
- 2,646 image assets in `images/` (1,891 PNG and 755 JPEG).
- `Semester_1_Image_Manifest.csv`, which maps stable asset IDs to image paths.
- `Sem1_Lecture_Notes_Complete_Extraction.md`, a source-order text extraction with known limitations.

The image assets are instructional source material, not decorative media. OCR has now been run across all 2,646 assets; see `docs/semester-1-image-audit.md` for counts, duplicate handling, visual-review status, and question-candidate discovery. OCR does not guarantee that handwritten notes, diagrams, labels, questions, answers, tables, or annotations have been recovered.

## OCR workflow

Extract the ZIP without changing the `images/` directory structure. Then run:

```sh
python scripts/ingest-semester-images.py /path/to/extracted-package \
  --output /path/to/semester-1-image-ocr \
  --workers 4
```

Tesseract OCR must be installed. The script:

1. Reads every row in the image manifest.
2. OCRs each image independently.
3. Writes resumable `image-ocr.jsonl` records.
4. Writes an `image-audit.csv` with one status per manifest asset.
5. Skips IDs already present in the JSONL checkpoint, allowing interrupted runs to resume.

The statuses distinguish processed text, unreadable/non-text images, missing assets, OCR errors, and timeouts. OCR is not a substitute for visual review: diagrams, handwriting, layout relationships, and low-confidence text still require human/vision inspection.

## Provenance rules

- Keep original source text distinct from expanded teaching explanations.
- Every sourced fact, diagram description, question, answer, and worked example must retain its `block-XXXX` and/or `IMG-XXXX` reference.
- Preserve original questions and answer keys as source questions. Mark newly written or materially transformed questions as `ai-generated`.
- Never guess an unreadable answer. Record uncertainty and revisit the source image.
- Do not mark the corpus complete until all 73 text blocks and all 2,646 images have an explicit audit status.

## Current implementation

The Semester 1 course index is `/cisco/learning/semester-1/`. Source-based lessons for all 17 modules are available under `/cisco/learning/semester-1/modules/`, with a dedicated route for each module. Lessons cite recovered text blocks and OCR-identified image assets. The module index links directly to the rebuilt Semester 1 lessons. The adaptive practice bank is in `src/data/learning/semester-1-seed.ts`; the shared question and progress types are in `src/lib/learning/types.ts`.

The practice interface uses approximately ten questions per session. The selection engine prioritizes unseen, weak, and due concepts, avoids recently used question IDs when the bank is large enough, and biases question difficulty toward the learner's estimated level. Mastery requires repeated evidence rather than being awarded after one correct response.

Progress is stored in browser local storage. This first release is intentionally static-site compatible and does not yet provide cross-device synchronization or account-backed progress.
