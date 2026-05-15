# TASKS.md

## Current priorities

1. Keep Rotation Play MVP stable.
2. Prepare Rotation Paper Bridge.
3. Keep quality checks fast and reliable.
4. Add tests for pure game logic.
5. Keep new puzzle families deferred until the bridge is stable.

## Ready tasks

### Add or maintain rotation logic tests

Status: ready

Scope:

- Vitest
- `rotationLogic.ts`
- `rotationLogic.test.ts`

### Prepare Rotation Paper Bridge

Status: ready

Scope:

- Predict what happens after one turn
- Allow touch to verify when needed
- Keep the path open for later A/B/C paper-style answering
- Bridge Stage 3-4 after Rotation Play is stable

Notes:

- This is the next issue-sized step after Rotation Play.
- It should stay simple, visual, and paper-problem-adjacent without becoming a full answer-selection game.

### Improve target tap behavior

Status: ready if needed

Scope:

- Ensure one tap rotates exactly 90 degrees
- Avoid double event firing between DOM overlay and R3F scene
- Preserve mobile tap support

### Improve reduced-motion support

Status: ready if visual motion becomes distracting

Scope:

- Respect `prefers-reduced-motion`
- Keep feedback visible without strong animation

## Deferred tasks

### Add audio guidance

Status: deferred

Reason:

- Audio output is intentionally on hold

### Add new puzzle types

Status: deferred

Candidates:

- P0: Rotation
- P0.5: Ferris Wheel / cyclic position tracking
- P1: Mirror, Folding, Layering
- P2: Water reflection, Shadow, Shape construction
- P3: Dice net, Cross-section, Perspective / blocks

Reason:

- Rotation Play and Rotation Paper Bridge should be stabilized first.
- Issue #3 / #4 can then move into the next puzzle-family workstream.

### Add parent dashboard

Status: deferred

Reason:

- Out of MVP scope
