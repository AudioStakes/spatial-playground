# TASKS.md

## Current priorities

1. Keep Rotation Play MVP stable.
2. Prepare Rotation Paper Bridge.
3. Keep quality checks fast and reliable.
4. Add tests for pure game logic.
5. Improve child-friendly interaction only when needed.

## Ready tasks

### Add or maintain rotation logic tests

Status: ready

Scope:

- Vitest
- `rotationLogic.ts`
- `rotationLogic.test.ts`

### Prepare Rotation Paper Bridge

Status: next

Scope:

- Predict what happens after one turn
- Allow touch to verify when needed
- Keep the path open for later A/B/C paper-style answering

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

- Ferris Wheel / cyclic position tracking
- Mirror
- Folding
- Layering
- Water reflection
- Shadow
- Shape construction
- Dice net
- Cross-section
- Perspective / blocks

Reason:

- Rotation Play and Rotation Paper Bridge should be stabilized first

### Add parent dashboard

Status: deferred

Reason:

- Out of MVP scope
