import { describe, expect, it } from 'vitest';
import { getRotationAfterTurns, isRotationBridgePredictionCorrect } from './rotationBridgeLogic';

describe('rotationBridgeLogic', () => {
  it('rotates once from each starting direction', () => {
    expect(getRotationAfterTurns(0, 1)).toBe(90);
    expect(getRotationAfterTurns(90, 1)).toBe(180);
    expect(getRotationAfterTurns(180, 1)).toBe(270);
    expect(getRotationAfterTurns(270, 1)).toBe(0);
  });

  it('recognizes a correct prediction', () => {
    expect(isRotationBridgePredictionCorrect(0, 0)).toBe(true);
  });

  it('recognizes an incorrect prediction', () => {
    expect(isRotationBridgePredictionCorrect(90, 0)).toBe(false);
  });
});
