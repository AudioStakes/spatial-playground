import { RoundedBox } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type * as THREE from 'three';
import type { RotationDirection, RotationQuestion } from '../data/rotationQuestions';
import ReferenceShape from './ReferenceShape';
import TargetShape from './TargetShape';

type RotationSceneProps = {
  question: RotationQuestion;
  targetRotation: RotationDirection;
  isSuccessVisible: boolean;
};

export default function RotationScene({
  question,
  targetRotation,
  isSuccessVisible,
}: RotationSceneProps) {
  const targetGroup = useRef<THREE.Group>(null);
  const referencePulse = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const wobble = Math.sin(clock.elapsedTime * 2.3) * 0.05;
    if (targetGroup.current) {
      targetGroup.current.position.y = wobble;
      targetGroup.current.rotation.z = 0;
    }

    if (referencePulse.current) {
      referencePulse.current.scale.setScalar(1 + Math.sin(clock.elapsedTime * 2) * 0.02);
    }
  });

  return (
    <group>
      <ambientLight intensity={1.7} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} castShadow />
      <directionalLight position={[-5, 3, 4]} intensity={1.4} />

      <mesh position={[0, -2.7, -0.25]}>
        <planeGeometry args={[8.4, 6]} />
        <meshStandardMaterial color="#edf9ff" roughness={1} />
      </mesh>

      <group position={[-2.3, 0.1, 0]}>
        <RoundedBox args={[2.9, 3.8, 0.18]} radius={0.28} smoothness={6} castShadow receiveShadow>
          <meshStandardMaterial color="#e5f4ff" roughness={0.42} />
        </RoundedBox>
        <mesh ref={referencePulse} position={[0, 0, 0.13]}>
          <ringGeometry args={[1.08, 1.44, 48]} />
          <meshBasicMaterial color="#b8e4ff" transparent opacity={0.5} />
        </mesh>
        <ReferenceShape shapeType={question.shapeType} rotation={question.referenceRotation} />
      </group>

      <group position={[2.3, 0.1, 0]} ref={targetGroup}>
        <RoundedBox args={[2.9, 3.8, 0.18]} radius={0.28} smoothness={6} castShadow receiveShadow>
          <meshStandardMaterial color={isSuccessVisible ? '#fff4dc' : '#fff0c6'} roughness={0.35} />
        </RoundedBox>
        <TargetShape
          shapeType={question.shapeType}
          rotation={targetRotation}
          isSuccessVisible={isSuccessVisible}
        />
      </group>
    </group>
  );
}
