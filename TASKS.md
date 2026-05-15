# TASKS.md

## Current priorities

1. Keep Rotation Game MVP stable.
2. Keep quality checks fast and reliable.
3. Add tests for pure game logic.
4. Improve child-friendly interaction only when needed.

## Ready tasks

### Add or maintain rotation logic tests

Status: ready

Scope:

- Vitest
- `rotationLogic.ts`
- `rotationLogic.test.ts`

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

- Mirror
- Folding
- Perspective
- Layering

Reason:

- Rotation MVP should be stabilized first

### Add parent dashboard

Status: deferred

Reason:

- Out of MVP scope
