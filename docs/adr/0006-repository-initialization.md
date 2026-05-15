# ADR 0006: Start from an Empty Vite React TypeScript Repository

## Status

Accepted

## Context

The repository `spatial-playground` will start empty.

Codex should be able to initialize the project from scratch and leave the repository in a state where the app can be installed, run, built, and tested.

## Decision

Initialize the project as a Vite + React + TypeScript application.

Add dependencies for:

- React Three Fiber
- Three.js
- `@react-three/drei`
- Playwright for QA

Provide npm scripts for at least:

- `dev`
- `build`
- `preview`
- `lint`
- `test`

The `test` script may be a placeholder in the initial MVP if no automated tests are implemented yet.

## Rationale

Vite provides a fast and simple browser app foundation. React and TypeScript support clear UI and data modeling. React Three Fiber and Three.js support the long-term 3D learning roadmap.

## Consequences

Positive:

- The repo can be bootstrapped from nothing.
- The stack is familiar and Codex-friendly.
- Browser QA is straightforward with Playwright.

Negative:

- Some project setup time is spent before game implementation begins.

Mitigation:

- Keep setup minimal and avoid unnecessary framework complexity.
