# fred.fish

Personal website, project index, and Cisco networking learning reference.

## Stack

- Astro 7 static-site generation
- TypeScript checks through `@astrojs/check`
- HTML, CSS, and small client-side scripts for interactions
- GitHub Pages deployment; no server or database required

Node.js 22.12.0 or newer is required.

## Development

```sh
npm install
npm run dev
```

Useful commands:

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run check` | Run Astro and TypeScript diagnostics |
| `npm run build` | Check and build the static site into `dist/` |
| `npm run preview` | Preview the generated production build |
| `npm run validate:links` | Check generated local links and in-page fragment targets (after building) |
| `npm run test:learning` | Run adaptive-engine regression tests |
| `npm run test:browser` | Run desktop/mobile Chromium, practice-session, persistence, and axe accessibility smoke tests (requires Playwright and axe-core) |

## Project structure

- `src/pages/` contains Astro routes and page composition.
- `src/layouts/` contains shared site layouts.
- `src/components/` contains reusable navigation and Cisco lesson components.
- `src/styles/` contains the site-wide design system.
- `assets/` contains shared client-side scripts and legacy lesson styles.
- `cisco/learning/modules/` contains the original instructional lesson sources.
- `reef/` contains the preserved Reef project pages and assets.

The 30 Cisco lesson URLs are generated through Astro. Their existing instructional source remains intact while repeated structures such as sections, figures, definition grids, tables, command blocks, quizzes, and code examples are rendered through reusable components. Browser-local completion keys and quiz hooks are preserved.

The IOS XE reference is available at `/cisco/reference/` with category filtering, search, and copy controls. Cisco Labs are temporarily unpublished; their source remains in the repository.

## Validation and deployment

Pull requests and pushes to the redesign branches run GitHub Actions checks for:

- Astro diagnostics and static build
- npm audit, with high and critical findings blocking CI
- Local links, generated assets, and in-page fragment targets across every generated HTML page
- Chromium browser checks at desktop and mobile viewport sizes across all generated HTML routes
- A complete ten-question practice-session interaction, keyboard selection, answer feedback, local-storage persistence, and progress-dashboard update
- Automated axe accessibility checks against WCAG 2.1 A/AA and best-practice rules, failing on serious or critical violations
- 30 Cisco lesson routes and all 95 quiz questions
- Quiz prompts, correct answers, options, radio names, and explanations
- Lesson component/source parity and required published routes
- GitHub Pages output and custom-domain file preservation

Pushing to `main` builds and deploys `dist/` to GitHub Pages. The custom domain is configured through `public/CNAME`.

## Semester 1 source recovery

The source-processing audit and repeatable OneNote image-recovery procedure are documented in `docs/semester-1-image-audit.md`, `docs/semester-1-ocr-candidate-triage.md`, and `docs/semester-1-image-recovery.md`. The recovery script verifies extracted image bytes against the OCR export's SHA-256 manifest before accepting them.

## Cisco Semester 1 learning system

The Cisco learning area includes a reconstructed 17-module Semester 1 course at `/cisco/learning/semester-1/`, adaptive practice at `/cisco/practice/`, and a learner dashboard at `/cisco/progress/`.

The current practice bank contains 643 questions across 22 lesson IDs and 614 concept tags. Questions include single-choice, multiple-select, true/false, fill-in, matching, ordering, and scenario/troubleshooting formats. Source-origin questions are reserved for prompts and answers supported by recovered source text or visually checked source material. New questions whose answers are derived rather than explicitly supplied by the source are marked AI-generated.

Adaptive practice uses concept-level performance, recent accuracy, review due dates, difficulty fit, and question-history avoidance to select sessions. Progress, mastery, XP, streaks, and session history are stored in the current browser's local storage. There is no account system, backend, or cross-device synchronization in this release.

The source and verification limits are documented in:

- `docs/semester-1-coverage-report.md` — question counts and concept exposure by lesson.
- `docs/semester-1-question-bank-audit.md` — question provenance, formats, and quality checks.
- `docs/semester-1-source-concept-inventory.md` — first-pass source objective mapping.
- `docs/semester-1-image-audit.md` — recovered source image inventory and visual-review status.

Run `npm run validate:learning` to validate question structure and concept exposure, and `npm run test:learning` to run adaptive-engine and learner-storage regression tests.
