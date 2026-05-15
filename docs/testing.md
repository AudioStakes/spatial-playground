# Testing Strategy

## Current policy

Use lightweight automated tests first.

The goal is to help Codex and contributors detect broken game logic cheaply and early.

## Test stack

- Vitest for pure game logic
- Playwright Interactive QA for browser functional and visual verification

## Unit tests

Use Vitest for pure logic.

Good targets:

- rotation direction helpers
- match checking
- session question selection
- next question calculation
- small deterministic state transitions

## UI tests

Do not add React Testing Library yet unless explicitly requested.

Reason:

- The current MVP is small.
- React Three Fiber and Canvas can make UI tests heavier than needed.
- The highest-value tests right now are pure logic tests.

## E2E tests

Do not add automated Playwright E2E yet unless explicitly requested.

Use Playwright Interactive Skill for manual functional and visual QA when UI or layout changes.

## When to add tests

Add or update tests when changing:

- rotation logic
- session progression
- question selection
- success condition
- replay/reset behavior

## Required commands

Before final signoff:

```bash
npm run test
npm run check
npm run build
```

Prefer `npm run check:all` when available.
