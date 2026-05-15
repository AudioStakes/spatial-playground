# CONTEXT.md

## Product Summary

`spatial-playground` is a browser-game learning app for children preparing for elementary school entrance exams.

The product does **not** aim to cover every exam topic. It focuses on problems where understanding improves by watching movement, manipulating objects directly, and observing how shapes or spatial relationships change.

## Repository

- Repository name: `spatial-playground`
- App type: browser game
- Initial MVP: rotation game using arrows
- Long-term direction: an interactive playground for visual-spatial entrance-exam style problems

## Core Experience

A collection of short mini games, each playable in about 1-3 minutes.

Each mini game should generally follow this flow:

1. `Demonstration`: the app shows the movement or transformation.
2. `Manipulation`: the child directly touches, rotates, moves, folds, or changes the object.
3. `Challenge`: the child solves a small task using the concept.
4. `Feedback`: the app gives immediate, friendly, visual feedback.

The experience should feel like a game, but the interaction should deepen understanding rather than merely decorate a worksheet.

## Target Users

Primary user:

- Children around 4-6 years old.
- They may not read fluently yet.
- They should be able to play through large touch targets, simple text, and direct visual feedback.

Secondary user:

- Parents or guardians who want practice material for visual-spatial entrance-exam style problems.
- Parent-facing analytics are intentionally out of MVP scope.

## MVP Scope

The MVP implements only the first mini game: `Rotation Game`.

### Rotation Game Summary

The child sees a reference arrow and a target arrow.
The child taps the target arrow to rotate it 90 degrees at a time.
When the target arrow matches the reference arrow, the app automatically marks the question as correct and gives success feedback.

### MVP Session Flow

1. Show `StartScreen`.
2. The child taps `はじめる`.
3. Show `GameScreen`.
4. Present five rotation questions, one at a time.
5. In each question, the child taps the target arrow until it matches the reference arrow.
6. When the target matches, show `SuccessFeedback` and advance to the next question.
7. After five questions, show `CompletionScreen`.
8. The child can tap `もういちど` to restart.

## MVP Screens

### StartScreen

Purpose: Introduce the game and start the session.

Required elements:

- Game title: `くるっと むきを あわせよう`
- Short explanation: `やじるしを タップして、おてほんと おなじ むきにしよう`
- Start button: `はじめる`

### GameScreen

Purpose: Let the child play one rotation question at a time.

Required elements:

- Current progress, such as `1 / 5`
- Reference arrow
- Target arrow
- Short instruction
- Success feedback when matched

### CompletionScreen

Purpose: Celebrate the completed five-question session.

Required elements:

- Positive message, such as `できたね！`
- Star or stamp-style celebration
- Restart button: `もういちど`

MVP should not show detailed scores, elapsed time, rankings, or parent-facing analytics.

## MVP Components

Screen components:

- `StartScreen`
- `GameScreen`
- `CompletionScreen`

Game components:

- `GameCanvas`
- `RotationScene`
- `ReferenceShape`
- `TargetShape`
- `ProgressIndicator`
- `SuccessFeedback`

Suggested directory structure:

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

## Question Data Model

Rotation questions should be stored as TypeScript data.

Suggested file:

- `src/data/rotationQuestions.ts`

Suggested types:

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

MVP should define at least five Level 1 questions.
Level 1 uses arrow shapes and 90-degree rotation steps only.
The structure should make Level 2, Level 3, and additional shape types easy to add later.

## Problem Types Planned for the Product

The product will focus on visual-spatial problems where interaction adds clear learning value.

### Included Long-Term Problem Types

- `Rotation`: shape direction and rotation.
- `Layering`: overlap, front/back relationships, hidden parts.
- `Perspective`: top view, side view, block structures, what is visible from each viewpoint.
- `Mirror`: reflection, symmetry, left/right reversal.
- `Folding`: paper folding, holes, opening folded paper.

### Excluded from MVP

- Quantity and distribution problems.
- Language problems.
- Memory problems.
- General knowledge problems.
- Full elementary entrance exam coverage.
- Parent dashboard.
- Accounts or login.
- Score history.
- Time limits.
- Rankings.

## Technical Direction

Use a browser-game workflow with:

- Vite
- React
- TypeScript
- React Three Fiber
- Three.js
- `@react-three/drei`

React Three Fiber is the primary 3D implementation layer.
Three.js may be used directly for low-level 3D math, geometry, camera, raycasting, or material work.

UI, screen transitions, HUD, completion screens, and future parent-facing interfaces should be implemented in React.
3D learning scenes should be implemented as React Three Fiber scenes/components.

MVP may look 2D, but the structure should not block future 3D mini games such as block perspective, mirror scenes, or folding demonstrations.

## Design Principles

- Use large, friendly text.
- Minimize reading burden.
- Use large touch targets.
- Give immediate positive feedback.
- Avoid punishment, red failure states, or pressure.
- Make the primary action obvious.
- Support both desktop and mobile browser viewports.
- Prefer playful, calm, and visually coherent design.

## Acceptance Criteria for MVP

1. The repository can start from an empty state and be initialized as a Vite + React + TypeScript app.
2. `npm install` works.
3. `npm run dev` starts the app.
4. `npm run build` succeeds.
5. `StartScreen` appears first.
6. Tapping `はじめる` opens `GameScreen`.
7. `GameScreen` shows progress, a reference arrow, and a target arrow.
8. Tapping the target arrow rotates it 90 degrees.
9. When target and reference match, success feedback appears automatically.
10. The app advances through five questions.
11. After five questions, `CompletionScreen` appears.
12. `CompletionScreen` shows `できたね！` and a star or stamp-style celebration.
13. `もういちど` restarts the session.
14. Desktop and mobile viewports both fit the primary UI without clipping.
15. Functional QA and visual QA are completed with the Playwright Interactive Skill.

## Glossary

### Interactive Problem

A learning task where understanding improves when a child moves, transforms, or observes objects directly on screen.

### Mini Game

A short playable unit for one `Interactive Problem`. It includes instruction, interaction, challenge, and feedback.

### Demonstration

The app shows a movement or transformation before or during the child's interaction.

### Manipulation

The child directly manipulates objects through tapping, dragging, rotating, arranging, folding, or switching views.

### Challenge

The task the child solves through the interaction.

### Feedback

Immediate response that tells the child the result and reinforces the concept visually.

### Visual-Spatial Problem

An interactive problem involving shape, direction, position, overlap, perspective, symmetry, or transformation.

### Rotation Game

The first MVP mini game. The child rotates a target arrow until it matches a reference arrow.

### ReferenceShape

The non-interactive target orientation shown as the model answer.

### TargetShape

The interactive shape the child taps or manipulates.

### SuccessFeedback

A friendly visual response shown when a challenge is completed correctly.
