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
        {/* For the Rotation MVP, the HTML overlay button is the primary input surface.
            The R3F scene stays visual-only here to avoid duplicate pointer events and keep accessibility simple. */}
        <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 8.2], zoom: 90 }}>
          <RotationScene
            question={question}
            targetRotation={targetRotation}
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
            onClick={onTargetTap}
            disabled={isSuccessVisible}
            aria-label="やじるしを 90ど まわす"
          >
            <div className="game-card__title game-card__title--target">90ど まわす</div>
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
