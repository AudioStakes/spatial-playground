# ADR 0004: Use Five-Question Sessions with Positive Completion Feedback

## Status

Accepted

## Context

The app should be short enough for preschool-aged children to complete, while still feeling like a meaningful practice session.

Potential session lengths included three questions, five questions, ten questions, or endless play.

## Decision

Use five questions per session for the MVP.

After five questions, show a child-friendly completion screen with:

- A positive message such as `できたね！`
- A star or stamp-style celebration
- A `もういちど` button

Do not show detailed scores, elapsed time, rankings, or parent analytics in the MVP.

## Rationale

Five questions fit the intended 1-3 minute mini-game experience. This length is short enough for young children but long enough to create a completed session and meaningful celebration.

Positive completion feedback is more appropriate than score-heavy feedback for the MVP because the product should build confidence and encourage exploration.

## Consequences

Positive:

- Clear end state.
- Easy to test.
- Supports replay.
- Keeps emotional tone friendly.

Negative:

- Parents do not receive performance details in the MVP.

Mitigation:

- Parent-facing progress and analytics can be added later after the child-facing experience is validated.
