import type { RotationDirection } from '../data/rotationQuestions';
import { rotateClockwise } from './rotationLogic';

export const getRotationAfterTurns = (
  startRotation: RotationDirection,
  turnCount: number,
): RotationDirection => {
  let rotation = startRotation;

  for (let index = 0; index < turnCount; index += 1) {
    rotation = rotateClockwise(rotation);
  }

  return rotation;
};

export const isRotationBridgePredictionCorrect = (
  predictedRotation: RotationDirection,
  correctRotation: RotationDirection,
) => predictedRotation === correctRotation;
