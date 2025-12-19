# GitHub Copilot Agent Instructions (Web)

This repository contains the Loopwish web app.

## Stack

- Next.js 14 (App Router)
- React + TypeScript
- Tailwind CSS
- Lint/format: ESLint + Prettier
- Tests: Vitest

## Goals

- Keep `npm run lint`, `npm run format:check`, `npm test`, and `npm run build` green.
- Prefer small, well-scoped PRs.
- Avoid unnecessary dependencies.

## Coding conventions

- Use the `src/` layout: `src/app`, `src/components`, `src/lib`, `src/styles`.
- Prefer server components by default (Next.js App Router) and client components only when needed.
- Keep code ESM-compatible (repo uses `"type": "module"`).

## Validation

Before opening a PR, run:

```bash
npm install
npm run lint
npm run format:check
npm test
npm run build
```

## Safety

- Never commit `.env` or any secrets.
- Avoid introducing PII logging.
