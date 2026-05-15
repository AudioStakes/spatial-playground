# ADR 0002: Build Rotation Game First

## Status

Accepted

## Context

The product will eventually include multiple mini games, but the first implementation should be small enough to build, test, and iterate quickly.

Candidate starting points included rotation, mirror, folding, layering, and perspective problems.

## Decision

Build `Rotation Game` first.

The MVP asks the child to rotate a target arrow until it matches a reference arrow.

## Rationale

Rotation is the smallest useful interactive problem:

- It is easy to understand visually.
- It supports direct manipulation.
- It needs only simple state and 90-degree rotation.
- It exercises the core app flow: instruction, manipulation, correctness check, feedback, and session completion.
- It provides patterns that later games can reuse.

## Consequences

Positive:

- Fastest path to a playable MVP.
- Establishes reusable game and UI structure.
- Easy to test functionally and visually.

Negative:

- It does not yet demonstrate the full value of 3D spatial reasoning.

Mitigation:

- Implement it inside a React Three Fiber-friendly structure so later 3D scenes can be added without rewriting the app architecture.
