# CONTEXT.md

## Product Summary

`spatial-playground` is a browser-game learning app for children preparing for elementary
school entrance exams.

## Repository Direction

- MVP is the rotation game
- The product focuses on visual-spatial problems
- React Three Fiber is the primary 3D implementation layer
- Three.js is used for low-level geometry and scene control when needed
- Playwright Interactive QA is required for functional and visual signoff

## MVP Rules

- One play session is always 5 questions
- The child rotates the target arrow 90 degrees at a time
- Matching the reference arrow triggers automatic success
- Incorrect intermediate orientations are not treated as wrong answers
- After 5 questions, the completion screen appears
- Restart returns the child to question 1

## Core Experience

1. Start screen introduces the game.
2. Game screen shows the reference and target arrows.
3. The child taps the target to rotate it.
4. The app celebrates each correct match immediately.
5. The session ends with a completion screen.

## Target Users

- Children around 4-6 years old
- Parents or guardians who want simple visual-spatial practice

## Technical Direction

- Vite
- React
- TypeScript
- React Three Fiber
- Three.js
- `@react-three/drei`
- Biome for linting, formatting, import organization, and checks

## Acceptance Criteria

- `npm install` works
- `npm run check` passes
- `npm run build` passes
- Desktop and mobile layouts fit without clipping
- Playwright Interactive QA is completed before signoff
