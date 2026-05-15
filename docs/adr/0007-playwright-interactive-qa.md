# ADR 0007: Require Playwright Interactive QA for Visual and Functional Signoff

## Status

Accepted

## Context

The app is interactive and visual. A code-only review or build success is not enough to prove the MVP works for children.

The user provided a Playwright Interactive Skill that describes a persistent `js_repl` workflow for functional QA, visual QA, viewport fit checks, screenshot evidence, exploratory testing, and signoff.

## Decision

After implementation, use the Playwright Interactive Skill for QA.

Required QA work:

1. Write a QA inventory before testing.
2. Start the dev server in a persistent TTY session.
3. Use `js_repl` Playwright handles for browser interaction.
4. Test normal user flows with real click/tap input.
5. Run a separate visual QA pass.
6. Test desktop and mobile viewports.
7. Run viewport fit checks using scroll metrics and `getBoundingClientRect()` for key regions.
8. Capture screenshot evidence.
9. Perform a short exploratory pass.
10. Report functional QA, visual QA, viewport fit, screenshots, exclusions, and remaining issues.

## Rationale

The product's success depends on visible behavior: large touch targets, readable UI, no clipping, clear arrow relationship, and understandable success feedback.

Playwright Interactive QA provides better confidence than checking only state or unit tests.

## Consequences

Positive:

- Verifies the MVP actually works in the browser.
- Catches visual defects early.
- Supports mobile viewport validation.
- Produces concrete signoff evidence.

Negative:

- QA takes longer than build-only validation.

Mitigation:

- Keep the MVP small and the QA inventory explicit.
