import { memo, useMemo } from 'react';
import type { RotationDirection, ShapeType } from '../data/rotationQuestions';
import { createArrowGeometry } from './arrowGeometry';

type TargetShapeProps = {
  shapeType: ShapeType;
  rotation: RotationDirection;
  onTap: () => void;
  isSuccessVisible: boolean;
};

function TargetShape({ shapeType, rotation, onTap, isSuccessVisible }: TargetShapeProps) {
  const geometry = useMemo(() => createArrowGeometry(), []);

  if (shapeType !== 'arrow') {
    return null;
  }

  return (
    <group rotation={[0, 0, (rotation * Math.PI) / 180]}>
      <mesh
        geometry={geometry}
        position={[0, 0, 0.18]}
        castShadow
        receiveShadow
        onPointerDown={(event) => {
          event.stopPropagation();
          onTap();
        }}
      >
        <meshStandardMaterial color={isSuccessVisible ? '#34c759' : '#ff8b2c'} roughness={0.28} metalness={0.03} />
      </mesh>
      <mesh scale={[1.45, 1.45, 1]} position={[0, 0, 0.11]}>
        <ringGeometry args={[0.9, 1.12, 40]} />
        <meshBasicMaterial color={isSuccessVisible ? '#b4ffd2' : '#ffe0bd'} transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

export default memo(TargetShape);
