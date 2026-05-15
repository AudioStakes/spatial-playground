export type RotationDirection = 0 | 90 | 180 | 270;

export type ShapeType = 'arrow' | 'animal' | 'vehicle' | 'abstract';

export type RotationQuestion = {
  id: string;
  level: number;
  shapeType: ShapeType;
  referenceRotation: RotationDirection;
  initialRotation: RotationDirection;
};

export const rotationQuestions = [
  {
    id: 'rotation-1',
    level: 1,
    shapeType: 'arrow',
    referenceRotation: 0,
    initialRotation: 270,
  },
  {
    id: 'rotation-2',
    level: 1,
    shapeType: 'arrow',
    referenceRotation: 90,
    initialRotation: 180,
  },
  {
    id: 'rotation-3',
    level: 1,
    shapeType: 'arrow',
    referenceRotation: 180,
    initialRotation: 0,
  },
  {
    id: 'rotation-4',
    level: 1,
    shapeType: 'arrow',
    referenceRotation: 270,
    initialRotation: 90,
  },
  {
    id: 'rotation-5',
    level: 1,
    shapeType: 'arrow',
    referenceRotation: 180,
    initialRotation: 270,
  },
] satisfies readonly RotationQuestion[];
