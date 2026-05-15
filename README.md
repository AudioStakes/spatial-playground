# spatial-playground

## Overview

`spatial-playground` is a browser game for visual-spatial practice. The current MVP is a
rotation game for children who match a target arrow to a reference arrow by rotating the
target 90 degrees at a time.

See [AGENTS.md](./AGENTS.md) for the coding-agent work rules that apply to this repository.

## MVP

- Start screen
- 5-question rotation session
- Automatic success when the target matches the reference
- Completion screen with a restart flow

## Tech Stack

- Vite
- React
- TypeScript
- React Three Fiber
- Three.js
- `@react-three/drei`
- Biome

## Development

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run test`
- `npm run test:watch`
- `npm run check:all`

## Quality Checks

- `npm run format`
- `npm run format:check`
- `npm run lint`
- `npm run lint:fix`
- `npm run check`
- `npm run check:fix`

CI runs `npm run check:all` on pull requests and pushes to `main`.

Biome is the primary formatting and linting tool. ESLint is intentionally not part of this
MVP anymore.

## Playwright Interactive QA

Use the Playwright Interactive Skill for browser QA after implementation.

- Write a QA inventory before testing
- Cover functional QA and visual QA separately
- Check desktop and mobile viewports
- Capture screenshot evidence
- Include a short exploratory pass before signoff

## Project guidance

- `AGENTS.md` - instructions for Codex and coding agents
- `CONTEXT.md` - product and MVP context
- `docs/testing.md` - testing strategy
- `docs/non-goals.md` - explicit non-goals
- `docs/qa-checklist.md` - functional and visual QA checklist
- `docs/commands.md` - validation commands
- `docs/implementation-plan.md` - near-term implementation plan
- `TASKS.md` - ready and deferred tasks

## Scope Exclusions

- Scores
- Timers
- Rankings
- Accounts
- Parent dashboards
- Non-rotation puzzle types
- Production analytics

## Notes

R3F and Three.js are the primary scene stack, so the bundle is intentionally larger than a
pure DOM UI. That tradeoff is acceptable for the MVP.
