# Codex Prompt for `spatial-playground`

You are working in the `spatial-playground` repository.

The repository already contains product context and ADR files. Before writing code, read these files carefully:

- `CONTEXT.md`
- `docs/adr/README.md`
- `docs/adr/0001-focus-on-visual-spatial-problems.md`
- `docs/adr/0002-build-rotation-game-first.md`
- `docs/adr/0003-rotation-game-play-pattern.md`
- `docs/adr/0004-session-length-and-feedback.md`
- `docs/adr/0005-technology-stack-react-three-fiber.md`
- `docs/adr/0006-repository-initialization.md`
- `docs/adr/0007-playwright-interactive-qa.md`

Treat those files as the source of truth for product direction, scope, technical decisions, and QA requirements.

## Your Task

Implement the MVP for `spatial-playground` from an otherwise empty repository.

This is a browser-game learning app for children preparing for elementary school entrance exams. The MVP is a rotation game where a child taps a target arrow until it matches a reference arrow.

## Required Stack

Use:

- Vite
- React
- TypeScript
- React Three Fiber
- Three.js
- `@react-three/drei`

React Three Fiber is the primary 3D implementation layer. Use Three.js directly only when low-level APIs are useful.

## Initial Repository Setup

If the repository has no application code yet:

1. Initialize a Vite + React + TypeScript app.
2. Install React Three Fiber, Three.js, and `@react-three/drei`.
3. Add Playwright for QA.
4. Add or verify npm scripts:
   - `dev`
   - `build`
   - `preview`
   - `lint`
   - `test`
5. Keep setup minimal. Do not add unnecessary frameworks.

## MVP Requirements

Build three screens:

1. `StartScreen`
2. `GameScreen`
3. `CompletionScreen`

### StartScreen

Show:

- Title: `くるっと むきを あわせよう`
- Explanation: `やじるしを タップして、おてほんと おなじ むきにしよう`
- Button: `はじめる`

Clicking `はじめる` starts the game.

### GameScreen

Show:

- Progress, such as `1 / 5`
- A reference arrow
- A target arrow
- A short instruction
- Success feedback when matched

Behavior:

- The target arrow rotates 90 degrees on each tap.
- When target rotation equals reference rotation, show success feedback automatically.
- Do not mark non-matching taps as wrong.
- After success feedback, advance to the next question.
- After five questions, show `CompletionScreen`.

### CompletionScreen

Show:

- `できたね！`
- Star or stamp-style celebration
- Button: `もういちど`

Clicking `もういちど` restarts the five-question session.

## Suggested Structure

Use this structure unless there is a good reason to change it:

```txt
src/
  App.tsx
  main.tsx
  data/
    rotationQuestions.ts
  screens/
    StartScreen.tsx
    GameScreen.tsx
    CompletionScreen.tsx
  game/
    GameCanvas.tsx
    RotationScene.tsx
    ReferenceShape.tsx
    TargetShape.tsx
    SuccessFeedback.tsx
  components/
    ProgressIndicator.tsx
  styles/
    app.css
```

## Question Data

Create `src/data/rotationQuestions.ts` with types similar to:

```ts
export type RotationDirection = 0 | 90 | 180 | 270;

export type ShapeType = 'arrow' | 'animal' | 'vehicle' | 'abstract';

export type RotationQuestion = {
  id: string;
  level: number;
  shapeType: ShapeType;
  referenceRotation: RotationDirection;
  initialRotation: RotationDirection;
};
```

Define at least five Level 1 questions using `shapeType: 'arrow'`.

## Visual and UX Requirements

The app is for children around 4-6 years old.

- Use large readable text.
- Use large touch targets.
- Keep instructions short.
- Use bright, friendly, calm visuals.
- Avoid negative feedback and penalties.
- Make the reference arrow and target arrow relationship obvious.
- Ensure desktop and mobile viewports both work.

## MVP Exclusions

Do not implement:

- Level 2 or higher.
- 45-degree rotation.
- Multiple-choice answers.
- A `できた` submit button.
- Wrong attempt tracking.
- Timer.
- Score ranking.
- Parent dashboard.
- Login.
- Score persistence.
- Block, mirror, or folding mini games.
- App Store distribution.

## Build and Basic Checks

Run and report:

- `npm install`
- `npm run build`
- `npm run lint` if available
- `npm run test` if available

Fix any TypeScript or build errors before signoff.

## Playwright Interactive QA Requirement

Use the provided Playwright Interactive Skill after implementation.

Before testing, write a QA inventory that includes:

- User requirements.
- Implemented user-visible features.
- Claims you intend to make in the final report.
- All major controls.
- State changes caused by each control.
- Functional QA checks.
- Visual QA checks.
- Screenshot states to capture.
- At least two off-happy-path exploratory scenarios.

Use `js_repl` Playwright workflow with a persistent browser session.

Functional QA must verify with normal user click/tap input:

- Start screen opens the game.
- Target arrow rotates by 90 degrees on tap.
- Matching target/reference shows success feedback.
- Non-matching taps do not count as wrong.
- Five questions lead to completion.
- Restart works.

Visual QA must be separate from functional QA and must inspect:

- Start screen desktop.
- Game screen desktop.
- Success feedback state desktop.
- Completion screen desktop.
- Game screen mobile.
- Completion screen mobile.

Viewport checks:

- Desktop: 1600x900.
- Mobile: 390x844 with touch enabled.
- Use both document scroll metrics and `getBoundingClientRect()` checks for required visible regions.

Capture screenshot evidence using CSS-normalized screenshots as described by the Playwright Interactive Skill.

Also perform a 30-90 second exploratory pass checking:

- Rapid tapping does not break the game.
- Replaying multiple times does not corrupt state.
- Mobile tapping works.
- Tapping during success feedback does not visually break the UI.

## Final Report

In your final report, include:

- What you implemented.
- Stack used.
- Files created.
- QA inventory summary.
- Build/lint/test results.
- Functional QA results.
- Visual QA results.
- Viewport fit results.
- Screenshot list.
- Exploratory QA notes.
- Intentional MVP exclusions.
- Remaining issues or follow-up recommendations.

Do not claim the app is visually correct unless you actually completed the visual QA pass.
