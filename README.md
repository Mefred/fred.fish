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
- 30 Cisco lesson routes and all 95 quiz questions
- Quiz prompts, correct answers, options, radio names, and explanations
- Lesson component/source parity and required published routes
- GitHub Pages output and custom-domain file preservation

Pushing to `main` builds and deploys `dist/` to GitHub Pages. The custom domain is configured through `public/CNAME`.
