# GitHub Copilot Agent Instructions (Web)

This repository contains the Loopwish web app.

## Organization-wide standards (Loopwish)

- Keep PRs small and reviewable; avoid drive-by refactors.
- Do not commit secrets (API keys, tokens, credentials) or `.env` files.
- Prefer secure-by-default changes; avoid logging sensitive data.
- Update docs and tests when behavior changes.
- Keep CI green and run the repo’s validation commands before opening a PR.
- Follow the existing code style and architecture; copy patterns already used in the repo.

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

## Git & GitHub procedure

- `main` is protected: create a feature branch, push, and open a PR.
- If updating shared vendored assets:
  - Update `.loopwish/shared.ref` to the desired shared tag (example: `v0.1.1`).
  - Ensure `vendor/shared/...` matches `shared@<tag>` exactly.
  - Update `scripts/verify_shared_vendor.sh` if new files are added to the vendoring contract.
  - Run `./scripts/verify_shared_vendor.sh` locally (or in CI) to confirm the vendor tree matches the pinned tag.
- Prefer merging shared changes/tag first, then updating this repo to pin/vendor that tag.
- After merge, clean up local branches safely:

```bash
git fetch --prune
git branch --merged origin/main
```

## Safety

- Never commit `.env` or any secrets.
- Avoid introducing PII logging.
