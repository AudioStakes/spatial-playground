import type { RotationDirection } from './rotationQuestions';

export type RotationBridgeQuestion = {
  id: string;
  level: number;
  shapeType: 'arrow';
  startRotation: RotationDirection;
  turnCount: 1;
  responseMode: 'prediction';
  supportsTouchPreview: boolean;
};

export const rotationBridgeQuestions = [
  {
    id: 'rotation-bridge-1',
    level: 1,
    shapeType: 'arrow',
    startRotation: 0,
    turnCount: 1,
    responseMode: 'prediction',
    supportsTouchPreview: true,
  },
  {
    id: 'rotation-bridge-2',
    level: 1,
    shapeType: 'arrow',
    startRotation: 90,
    turnCount: 1,
    responseMode: 'prediction',
    supportsTouchPreview: true,
  },
  {
    id: 'rotation-bridge-3',
    level: 1,
    shapeType: 'arrow',
    startRotation: 180,
    turnCount: 1,
    responseMode: 'prediction',
    supportsTouchPreview: true,
  },
  {
    id: 'rotation-bridge-4',
    level: 1,
    shapeType: 'arrow',
    startRotation: 270,
    turnCount: 1,
    responseMode: 'prediction',
    supportsTouchPreview: true,
  },
  {
    id: 'rotation-bridge-5',
    level: 1,
    shapeType: 'arrow',
    startRotation: 0,
    turnCount: 1,
    responseMode: 'prediction',
    supportsTouchPreview: true,
  },
] satisfies readonly RotationBridgeQuestion[];
