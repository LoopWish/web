---
name: loopwish-web-nextjs
description: Workflows for the Loopwish web app (Next.js 14 App Router): run dev server, implement pages/components, and validate with lint/format/tests/build.
---

# Loopwish Web (Next.js) Skill

Use this skill when working in the Loopwish **web repository**.

## When to use

- Building or modifying Next.js routes/pages (App Router).
- Adding React components or utilities.
- Fixing failing web CI checks (lint/format/test/build).

## Key conventions (project-specific)

- Source layout: `src/app`, `src/components`, `src/lib`, `src/styles`.
- Prefer server components by default; add client components only when needed.
- Repo is ESM (`"type": "module"`), keep code compatible.

## Run locally

From the repo root:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation (matches CI)

From the repo root:

```bash
npm install
npm run lint
npm run format:check
npm test
npm run build
```

## Typical workflow for a UI change

1. Identify the right area (`src/app` for routes, `src/components` for reusable UI).
2. Make the smallest change that satisfies the request.
3. Add/adjust unit tests (Vitest) when behavior changes.
4. Run the validation commands above.

## Example prompts

- “Create a new page under `src/app/settings` using Tailwind; keep it server-first.”
- “Add a small `src/lib/api.ts` wrapper and unit tests for it.”
- “Fix the failing `npm run build` error without introducing new dependencies.”
