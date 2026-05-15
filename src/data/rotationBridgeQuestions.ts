import type { RotationDirection } from './rotationQuestions';

export type RotationBridgeQuestion = {
  id: string;
  level: number;
  shapeType: 'arrow';
  startRotation: RotationDirection;
  turnCount: 1;
  correctRotation: RotationDirection;
  responseMode: 'prediction';
  supportsTouchPreview: boolean;
};

export const rotationBridgeQuestions = [
  {
    id: 'rotation-bridge-1',
    level: 1,
    shapeType: 'arrow',
    startRotation: 270,
    turnCount: 1,
    correctRotation: 0,
    responseMode: 'prediction',
    supportsTouchPreview: true,
  },
] satisfies readonly RotationBridgeQuestion[];
