# ADR 0003: Use Reference-Matching Rotation Play Pattern

## Status

Accepted

## Context

Several play patterns were considered for the rotation game:

1. Watch a demonstration and choose an answer.
2. Rotate an object and choose a matching answer.
3. Rotate a target object until it matches a reference object.

The target users are 4-6-year-old children who may not yet read fluently.

## Decision

Use the reference-matching pattern.

The screen shows:

- `ReferenceShape`: the model orientation.
- `TargetShape`: the object the child taps to rotate.

The child taps `TargetShape` to rotate it 90 degrees at a time. When `TargetShape` matches `ReferenceShape`, the app marks the question correct automatically.

## Rationale

This pattern:

- Reduces reading burden.
- Avoids multiple-choice UI complexity.
- Makes the primary action obvious.
- Gives immediate cause-and-effect feedback.
- Is suitable for touch devices.

## Consequences

Positive:

- Very simple MVP interaction.
- Clear visual comparison between reference and target.
- Easy to implement and test.

Negative:

- A child can sometimes rotate by trial and error.

Mitigation:

- For MVP, prioritize low-friction play and confidence.
- Later levels can introduce confirmation buttons, more complex shapes, or delayed feedback if needed.
