import { Canvas } from '@react-three/fiber';
import type { RotationDirection, RotationQuestion } from '../data/rotationQuestions';
import RotationScene from './RotationScene';
import SuccessFeedback from './SuccessFeedback';

type GameCanvasProps = {
  question: RotationQuestion;
  targetRotation: RotationDirection;
  isSuccessVisible: boolean;
  onTargetTap: () => void;
};

export default function GameCanvas({
  question,
  targetRotation,
  isSuccessVisible,
  onTargetTap,
}: GameCanvasProps) {
  return (
    <div className="game-canvas-shell">
      <div className="game-canvas-shell__canvas">
        <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 8.2], zoom: 90 }}>
          <RotationScene
            question={question}
            targetRotation={targetRotation}
            onTargetTap={onTargetTap}
            isSuccessVisible={isSuccessVisible}
          />
        </Canvas>

        <div className="game-canvas-shell__overlay">
          <div className="game-card game-card--reference">
            <div className="game-card__title game-card__title--reference">おてほん</div>
            <div
              className="game-arrow game-arrow--reference"
              style={{ transform: `rotate(${question.referenceRotation}deg)` }}
            />
          </div>

          <button
            className={`game-card game-card--target${isSuccessVisible ? ' game-card--success' : ''}`}
            type="button"
            onPointerDown={onTargetTap}
            aria-label="ターゲットのやじるしをタップする"
          >
            <div className="game-card__title game-card__title--target">ここを タップ</div>
            <div
              className="game-arrow game-arrow--target"
              style={{ transform: `rotate(${targetRotation}deg)` }}
            />
          </button>
        </div>
      </div>

      <SuccessFeedback visible={isSuccessVisible} />
    </div>
  );
}
