import type { RotationDirection } from '../data/rotationQuestions';

export const SESSION_QUESTION_COUNT = 5;

export const rotateClockwise = (rotation: RotationDirection): RotationDirection => {
  switch (rotation) {
    case 0:
      return 90;
    case 90:
      return 180;
    case 180:
      return 270;
    case 270:
      return 0;
  }

  return rotation;
};

export const isRotationMatch = (
  rotation: RotationDirection,
  referenceRotation: RotationDirection,
) => rotation === referenceRotation;

export const getNextQuestionIndex = (currentIndex: number, totalQuestions: number) => {
  if (currentIndex + 1 >= totalQuestions) {
    return null;
  }

  return currentIndex + 1;
};
