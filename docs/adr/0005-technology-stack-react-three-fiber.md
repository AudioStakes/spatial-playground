# ADR 0005: Use React Three Fiber as the Primary 3D Implementation Layer

## Status

Accepted

## Context

The MVP is a 2D-looking arrow rotation game, but the broader product roadmap includes visual-spatial problems that benefit from 3D:

- Block structures and perspective changes.
- Top and side views.
- Mirror scenes with 3D objects.
- Folding and unfolding paper.
- Object rotation and viewpoint manipulation.

Game Studio supports browser game workflows, including React Three Fiber, Three.js, Phaser, Game UI Frontend, and asset pipelines.

## Decision

Use the following stack:

- Vite
- React
- TypeScript
- React Three Fiber
- Three.js
- `@react-three/drei`

React Three Fiber is the primary scene implementation layer. Three.js can be used directly for low-level 3D APIs when needed.

## Rationale

React Three Fiber provides a strong fit because this app needs both:

1. Rich UI, screen transitions, HUD, and future parent-facing screens.
2. 3D learning scenes for future visual-spatial mini games.

React Three Fiber lets the app keep React's component and state model while still using Three.js rendering power.

## Alternatives Considered

### Phaser + TypeScript

Good for the MVP's 2D arrow game, but weaker as the primary foundation for future 3D problems.

### Three.js only

Powerful for 3D, but more cumbersome for UI-heavy app structure, screen transitions, and future parent-facing interfaces.

### Unity

Strong for 3D but too heavy for this browser-game MVP and less aligned with the intended Game Studio browser workflow.

### React Native / Expo

Useful for native mobile apps, but the MVP should start as a browser game.

## Consequences

Positive:

- Supports the 2D-looking MVP and later 3D mini games.
- Keeps UI and game scenes in one React-based architecture.
- Aligns with Game Studio's React Three Fiber Game workflow.

Negative:

- Slightly heavier than a pure 2D MVP stack.
- Requires care to keep simple 2D interactions from becoming over-engineered.

Mitigation:

- Implement the MVP with a simple 2D-like scene in R3F.
- Avoid complex 3D features until a future mini game requires them.
