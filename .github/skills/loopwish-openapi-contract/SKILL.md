---
name: loopwish-openapi-contract
description: Keep web expectations and the shared OpenAPI spec in sync. Use when frontend work implies new/changed backend endpoints so the contract in the shared repo stays accurate.
---

# Loopwish OpenAPI Contract (Web Pointer) Skill

Use this skill when working in the Loopwish **web repository** and you need API capabilities that don’t exist yet, or you changed assumptions about existing endpoints.

## Source of truth

- The OpenAPI spec lives in the **shared repo** at `shared/api-spec/openapi.yaml`.

## When to use

- You’re adding a new UI feature that requires a new backend endpoint.
- You discover the API response shape differs from what the UI expects.
- You need to document a required query param/header/auth rule.

## Workflow

1. Describe the API need precisely (path, method, request/response JSON shapes, status codes).
2. Implement/update the backend behavior in the **backend repo**.
3. Update the shared OpenAPI spec (`shared/api-spec/openapi.yaml`) to match real behavior.
4. Keep changes backwards-compatible when possible.

## Quick review checklist

- Are required fields truly required in practice?
- Are error responses documented (4xx/5xx) where relevant?
- Are pagination/filtering params documented if used by UI?

## Example prompts

- “This page needs `GET /v1/wishes` with pagination; propose endpoint + update shared OpenAPI.”
- “The UI expects `createdAt` but backend returns `created_at`—pick a standard, align backend + spec.”
