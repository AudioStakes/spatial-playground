# Implementation Plan

## Phase 1: Rotation Play

Status: current / merged foundation.

Goals:

- Keep the Rotation Play MVP stable.
- Help children understand 90-degree rotation through touch.
- Do not add A/B/C answer UI or submit buttons yet.
- Treat this as the Stage 1-2 foundation for later paper-style reasoning.
- Add lightweight tests.
- Add CI.
- Add repository guidance for Codex/Game Studio.
- Improve interaction quality only when needed.

## Phase 2: Rotation Paper Bridge

Status: next.

Goals:

- Let children predict what happens after one turn.
- Allow touch to confirm the result when needed.
- Bridge Stage 3-4 toward paper-style answering.
- Prepare the app for later A/B/C-style paper answering.
- Keep the interaction simple and visual.
- Stay a transition mode, not a full new puzzle family.
- See [Rotation Paper Bridge design spec](./design/rotation-paper-bridge.md).

## Phase 3: Interaction quality

Status: ongoing / as needed.

Potential tasks:

- Ensure target tap fires exactly once.
- Improve mobile tap feel.
- Add reduced-motion support.
- Improve visual affordance for tappable target.

## Phase 4: Next puzzle families

Status: deferred until Rotation Play and Rotation Paper Bridge are stable.

Priority order:

- P0: Rotation
- P0.5: Ferris Wheel / cyclic position tracking
- P1: Mirror, Folding, Layering
- P2: Water reflection, Shadow, Shape construction
- P3: Dice net, Cross-section, Perspective / blocks

Do not start a new puzzle type until Rotation Play and Rotation Paper Bridge are stable.

## Phase 5: Audio guidance

Status: deferred.

Notes:

- Children may not be able to read yet.
- Audio guidance is important later.
- Prefer fixed audio files in `public/audio/`.
- Do not add audio now.
