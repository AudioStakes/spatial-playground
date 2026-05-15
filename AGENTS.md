# AGENTS.md

## Project overview

`spatial-playground` is a browser game for visual-spatial learning.

The current MVP is a rotation game for children around 4-6 years old. The child taps a target arrow to rotate it 90 degrees at a time and match a reference arrow.

## Core product rules

- Keep interactions simple, visual, and forgiving.
- Children may not be able to read yet, so do not rely on text alone.
- Do not punish incorrect intermediate states.
- Matching the reference arrow should trigger immediate positive feedback.
- One MVP session is 5 questions.
- Do not add scores, timers, rankings, accounts, parent dashboards, or analytics unless explicitly requested.

## Project guidance files

Before starting work, read:

- `CONTEXT.md`
- `docs/non-goals.md`
- `docs/testing.md`
- `docs/commands.md`
- `docs/qa-checklist.md`
- `docs/implementation-plan.md`
- `docs/problem-references/README.md`
- `docs/problem-references/target-problem-types.md`
- `docs/problem-references/source-file-classification.md`
- `docs/problem-examples/README.md`
- `docs/problem-examples/problem-examples-deck.pptx`
- `docs/design/`
- `TASKS.md`

Use these files to avoid re-deciding project scope, testing strategy, QA coverage, and validation commands.
When designing a new game type, check `docs/problem-references/` and `docs/problem-examples/` first so the design stays aligned with the project taxonomy and avoids copying reference PDFs.

## Tech stack

- Vite
- React
- TypeScript
- React Three Fiber
- Three.js
- @react-three/drei
- Biome
- Vitest

React Three Fiber is the primary scene implementation layer.
Three.js may be used directly for low-level geometry, math, or scene operations.

## Project commands

Use these commands for validation:

- `npm run format:check` - verify formatting
- `npm run lint` - run Biome lint
- `npm run check` - run Biome check
- `npm run test` - run automated tests
- `npm run build` - run TypeScript and Vite production build
- `npm run check:all` - run the full validation suite

## Incremental validation policy

Run the cheapest relevant validation after each meaningful change.

After dependency or config changes:

```bash
npm install
npm run check
npm run build
```

After Biome or formatting changes:

```bash
npm run format:check
npm run lint
npm run check
```

After game logic changes:

```bash
npm run test
npm run check
```

After React component or state changes:

```bash
npm run test
npm run check
npm run build
```

After CSS or layout changes:

```bash
npm run check
npm run build
```

Before final signoff:

```bash
npm run check:all
```

## Failure policy

If any command fails:

1. Stop further feature work.
2. Summarize the failure briefly.
3. Fix the smallest likely cause.
4. Re-run the same command.
5. Continue only after it passes.

Do not ignore failing checks.
Do not claim completion unless final validation passes.

## Testing policy

Prefer lightweight tests first.

- Game logic changes should include or update Vitest tests.
- UI behavior changes may use React Testing Library later, but do not add it unless needed.
- Visual changes should be checked with Playwright Interactive QA.
- Playwright Interactive QA is for functional/visual browser verification, not a replacement for fast unit tests.

## Playwright Interactive QA

When UI or layout changes are made:

- Write a QA inventory before testing.
- Run functional QA and visual QA separately.
- Check desktop and mobile viewports.
- Capture screenshot evidence when useful.
- Include exploratory testing for repeated taps, restart flow, and mobile tap behavior.

## Handoff

- When your changes are complete and validation passes, create a git commit before handing the work back unless the user explicitly asks you not to.
