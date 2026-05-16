# Rotation Paper Bridge Design Spec

## Overview

Rotation Paper Bridge is the bridge mode between Rotation Play and paper-style rotation problems.

- Rotation Play covers Stage 1 and Stage 2:
  - `さわって理解`
  - `お手本に合わせる`
- Rotation Paper Bridge covers the handoff to Stage 3 and Stage 4:
  - `変化後を予想する`
  - `ペーパー形式で選ぶ`

The key change is not a new shape family. It is the question style.

- Rotation Play asks the child to rotate until it matches a reference.
- Rotation Paper Bridge asks the child to predict the result of one rotation before checking it.

This mode should stay visually close to the current rotation flow, so the child feels a natural next step instead of a new game.

## Goals

- Help children predict what happens after one turn.
- Let children touch to confirm when they need support.
- Keep the path open for later A/B/C-style paper answering.
- Stay small enough that the first implementation can be a short mini-session.

## Non-goals

- Do not introduce a new puzzle family.
- Do not implement Ferris Wheel, Mirror, Folding, or Layering yet.
- Do not add audio, scores, timers, rankings, or parent-facing screens.
- Do not copy PDF images, workbook figures, or textbook wording.
- Do not add React Testing Library or automated Playwright E2E tests for this docs slice.

## Mini-Session Flow

The first implementation should be understandable as a short session from start to completion.

### What the child sees first

- A large, simple rotation scene with one arrow as the source.
- A paper-like answer area that is visually separate from the source.
- A short visual prompt, ideally supported by a tiny amount of text such as `1回まわしたら？`, but never relying on text alone.
- Large touch targets only.
- A short progress indicator so the child can sense the session is moving forward.

### What the child thinks about

- The child is asked to imagine the arrow after one 90-degree turn.
- The important mental step is prediction, not just repeating taps until it matches.
- The child can inspect the source arrow as many times as needed before answering.

### How the child answers

- The child makes one prediction with a simple visual interaction.
- The answer should be commit-like, so the child clearly decides before the reveal.
- For the first version, the interaction should be simpler than full A/B/C paper selection.

### How touch-confirmation works

- If the child is unsure, they can touch the arrow to replay or preview the one-turn change.
- That preview is a check, not a punishment.
- The child should be able to confirm their thinking without losing progress.

### What happens when the answer is wrong

- Wrong intermediate states are not treated as failures.
- The app should not flash red error states or penalize the child.
- If the child predicts incorrectly, the app reveals the correct result with a calm, visual correction.

### What happens when the answer is correct

- Correct prediction triggers immediate positive feedback.
- Feedback should feel encouraging and obvious, such as a star, stamp, sparkle, or success motion.
- The app should advance cleanly to the next step or the next question.
- The session should end with a simple completion state and replay options.

## First Implementation Recommendation

Use a simpler prediction interaction first, not full A/B/C answer buttons.

### Recommendation

The first bridge version should use a direct visual prediction interaction that fits the current touch-first motion.

Suggested shape of the interaction:

- show the starting arrow
- ask the child to predict the one-turn result
- let the child touch to preview or confirm if needed
- reveal the actual transformed arrow after the child commits
- repeat this flow for a short set of questions before showing completion

### Why this is the better first step

- Children are 4 to 6 years old and may not read yet.
- The current Rotation Play already teaches with touch and direct motion, so this is the most natural next step.
- A/B/C labels add paper-like structure, but they also add another abstraction layer before the child has fully learned prediction.
- The bridge should stay small and easy to implement first, then grow into paper-style selection later.

### What this means for later A/B/C support

- The question data should still be structured so it can later render as choices.
- The first implementation does not need visible A/B/C labels.
- Later work can map the same question data into paper-style selection without redesigning the content.

## Data Model Sketch

This is a lightweight sketch for future implementation, not a required current schema.

```ts
export type RotationDirection = 0 | 90 | 180 | 270;

export type RotationBridgeQuestion = {
  id: string;
  level: number;
  shapeType: 'arrow';
  startRotation: RotationDirection;
  turnCount: 1;
  responseMode: 'prediction';
  supportsTouchPreview: boolean;
};
```

Notes:

- `turnCount` starts at `1` for the bridge.
- `correctRotation` should stay derived from `startRotation` and `turnCount` rather than stored in the question data.
- `responseMode` can stay narrow at first, but the shape should leave room for future choice-based rendering.
- `supportsTouchPreview` marks the ability to replay or confirm the turn before answering.

## Relation To Sample Deck

This spec corresponds to the Rotation sample slide in `docs/problem-examples/problem-examples-deck.pptx`.

- The deck is the canonical design reference for paper-style examples.
- The deck should guide structure and difficulty.
- It must not be copied, traced, or turned into app assets.
- The local PDFs are reference-only material, not source material for repo content.

## Acceptance Criteria For Current Bridge Mini-Session

Issue #7 should satisfy the following before the bridge is considered implemented:

- The bridge session can be played end to end as a short mini-session.
- The child first sees the source arrow and a clear prediction prompt.
- The child can make a single prediction without needing to read letters.
- The child can touch to preview or confirm the transformation if needed.
- Correct predictions trigger immediate positive feedback.
- Incorrect predictions are corrected gently without punishment.
- The flow is clearly different from Rotation Play, because it asks for prediction rather than repeated matching taps.
- Progress is visible during the session.
- The session advances to the next question after commit and ends in a completion state.
- Replay restarts the bridge from the first question.
- The bridge remains a transition mode, not a new puzzle family.
- No audio, score, timer, ranking, or parent dashboard is added.
- The design remains compatible with later paper-style A/B/C rendering.
