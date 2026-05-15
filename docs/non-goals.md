# Non-goals

Do not add the following unless explicitly requested.

## Product non-goals

- Scores
- Timers
- Rankings
- Accounts
- Parent dashboards
- Production analytics
- New puzzle types
- Level 2+ implementation
- App Store packaging

## Interaction non-goals

- Penalties for incorrect intermediate rotations
- Red error states
- Forced speed or pressure
- Complex menus
- Multiple-choice answer UI for the current MVP
- Submit buttons for the current MVP

## Technical non-goals

- Runtime AI calls
- Runtime TTS API calls
- Backend services
- Databases
- CMS
- User accounts
- Automated Playwright E2E tests, unless explicitly requested

## Audio status

Audio guidance is intentionally deferred.

Future direction:

- Prefer pre-generated or pre-recorded audio files in `public/audio/`
- Free generation options may include AivisSpeech or VOICEVOX
- Web Speech API may be used only as a fallback
- Do not call OpenAI API or other cloud TTS APIs at app runtime
