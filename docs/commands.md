# Commands

## Daily checks

```bash
npm run test
npm run check
```

## Full validation

```bash
npm run check:all
```

## Formatting

```bash
npm run format
npm run format:check
```

## Linting

```bash
npm run lint
npm run check
```

## Build

```bash
npm run build
```

## When dependencies change

```bash
npm install
npm run check:all
```

## When game logic changes

```bash
npm run test
npm run check
```

## When UI or CSS changes

```bash
npm run check
npm run build
```

Then run Playwright Interactive QA for the affected screen.

## Failure policy

If a command fails:

1. Stop feature work.
2. Read the error.
3. Fix the smallest likely cause.
4. Re-run the same command.
5. Continue only after it passes.
