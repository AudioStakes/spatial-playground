# QA Checklist

Use this when UI, layout, or interaction behavior changes.

## Functional QA

- [ ] Start button enters the game screen
- [ ] Game screen shows progress, reference arrow, and target arrow
- [ ] One target tap rotates exactly 90 degrees
- [ ] Non-matching orientations do not count as wrong
- [ ] Matching orientation shows success feedback
- [ ] Success feedback prevents broken double-advance behavior
- [ ] Five questions lead to the completion screen
- [ ] Replay starts from question 1
- [ ] Mobile tap works
- [ ] Bridge start enters the mini-session
- [ ] Bridge shows 3-5 question progress
- [ ] Bridge prediction tap rotates exactly 90 degrees
- [ ] Bridge preview works without committing
- [ ] Bridge commit reveals correct or incorrect result calmly
- [ ] Bridge advances to the next question after commit
- [ ] Bridge completion appears after the final question
- [ ] Bridge replay restarts from question 1
- [ ] Bridge back button returns to StartScreen

## Visual QA

- [ ] Desktop 1600x900 fits without clipping
- [ ] Mobile 390x844 fits without clipping
- [ ] Start screen is readable
- [ ] Reference and target are visually distinct
- [ ] Target is clearly tappable
- [ ] Progress indicator is visible
- [ ] Success feedback is visible and positive
- [ ] Completion screen is readable
- [ ] No important UI is hidden by overflow
- [ ] No text or control overlaps
- [ ] Bridge progress dots are visible and legible
- [ ] Bridge completion screen shows both replay and start buttons
- [ ] Bridge result screen shows the next-step button clearly

## Exploratory QA

- [ ] Tap repeatedly on target
- [ ] Tap during success feedback
- [ ] Complete multiple sessions in a row
- [ ] Resize viewport if relevant
- [ ] Try keyboard activation for buttons
