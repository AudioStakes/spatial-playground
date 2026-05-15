import { memo, useMemo } from 'react';
import type { RotationDirection, ShapeType } from '../data/rotationQuestions';
import { createArrowGeometry } from './arrowGeometry';

type ReferenceShapeProps = {
  shapeType: ShapeType;
  rotation: RotationDirection;
};

function ReferenceShape({ shapeType, rotation }: ReferenceShapeProps) {
  if (shapeType !== 'arrow') {
    return null;
  }

  return <ArrowReferenceShape rotation={rotation} />;
}

function ArrowReferenceShape({ rotation }: { rotation: RotationDirection }) {
  const geometry = useMemo(() => createArrowGeometry(), []);

  return (
    <mesh
      geometry={geometry}
      rotation={[0, 0, (rotation * Math.PI) / 180]}
      position={[0, 0, 0.18]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color="#2d9bf0" roughness={0.35} metalness={0.05} />
    </mesh>
  );
}

export default memo(ReferenceShape);
