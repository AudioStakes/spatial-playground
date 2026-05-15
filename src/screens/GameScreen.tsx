import ProgressIndicator from '../components/ProgressIndicator';
import type { RotationDirection, RotationQuestion } from '../data/rotationQuestions';
import GameCanvas from '../game/GameCanvas';

type GameScreenProps = {
  currentQuestion: RotationQuestion;
  currentQuestionNumber: number;
  totalQuestions: number;
  targetRotation: RotationDirection;
  isSuccessVisible: boolean;
  onTargetTap: () => void;
};

export default function GameScreen({
  currentQuestion,
  currentQuestionNumber,
  totalQuestions,
  targetRotation,
  isSuccessVisible,
  onTargetTap,
}: GameScreenProps) {
  return (
    <section className="screen screen--game" aria-label="ゲーム画面">
      <div className="game-panel">
        <div className="game-panel__top">
          <ProgressIndicator current={currentQuestionNumber} total={totalQuestions} />
          <p className="game-panel__instruction">おてほんと おなじ むきに してみよう</p>
        </div>

        <GameCanvas
          question={currentQuestion}
          targetRotation={targetRotation}
          isSuccessVisible={isSuccessVisible}
          onTargetTap={onTargetTap}
        />
      </div>
    </section>
  );
}
