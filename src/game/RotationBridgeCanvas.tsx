import type { RotationBridgeQuestion } from '../data/rotationBridgeQuestions';
import type { RotationDirection } from '../data/rotationQuestions';
import { getRotationAfterTurns } from './rotationBridgeLogic';

type RotationBridgeCanvasProps = {
  question: RotationBridgeQuestion;
  predictionRotation: RotationDirection;
  previewRotation: RotationDirection | null;
  isCommitted: boolean;
  isCorrect: boolean | null;
  isFinalQuestion: boolean;
  onPredictionTap: () => void;
  onPreviewTap: () => void;
  onCommit: () => void;
  onAdvanceQuestion: () => void;
};

export default function RotationBridgeCanvas({
  question,
  predictionRotation,
  previewRotation,
  isCommitted,
  isCorrect,
  isFinalQuestion,
  onPredictionTap,
  onPreviewTap,
  onCommit,
  onAdvanceQuestion,
}: RotationBridgeCanvasProps) {
  const previewTargetRotation = previewRotation ?? question.startRotation;
  const canPreview = question.supportsTouchPreview && !isCommitted;
  const advanceLabel = isFinalQuestion ? 'おしまい' : 'つぎへ';
  const revealLabel =
    isCommitted && isCorrect === false
      ? 'こうなるよ'
      : isCommitted && isCorrect
        ? 'ぴったり！'
        : 'こたえ';

  return (
    <div className={`bridge-canvas-shell${isCommitted ? ' bridge-canvas-shell--committed' : ''}`}>
      <div className="bridge-canvas-shell__top">
        <button
          className={`bridge-card bridge-card--source${previewRotation !== null ? ' bridge-card--preview' : ''}`}
          type="button"
          onClick={canPreview ? onPreviewTap : undefined}
          disabled={!canPreview}
          aria-label="はじめの やじるしを さわって たしかめる"
        >
          <div className="bridge-card__label">はじめ</div>
          <div className="bridge-card__hint">
            {question.supportsTouchPreview ? 'さわって たしかめる' : '1かい まわすと？'}
          </div>
          <div
            className="game-arrow bridge-arrow bridge-arrow--source"
            style={{ transform: `rotate(${previewTargetRotation}deg)` }}
          />
        </button>

        <button
          className={`bridge-card bridge-card--prediction${isCommitted ? ' bridge-card--locked' : ''}`}
          type="button"
          onClick={onPredictionTap}
          disabled={isCommitted}
          aria-label="よそうの やじるしを タップして かえる"
        >
          <div className="bridge-card__label">よそう</div>
          <div className="bridge-card__hint">タップで かえる</div>
          <div
            className="game-arrow bridge-arrow bridge-arrow--prediction"
            style={{ transform: `rotate(${predictionRotation}deg)` }}
          />
        </button>
      </div>

      {!isCommitted ? (
        <div
          className={`bridge-canvas-shell__actions${question.supportsTouchPreview ? '' : ' bridge-canvas-shell__actions--single'}`}
        >
          {question.supportsTouchPreview ? (
            <button
              className="secondary-button secondary-button--wide"
              type="button"
              onClick={onPreviewTap}
            >
              <span className="secondary-button__icon" aria-hidden="true">
                👀
              </span>
              <span className="secondary-button__text">
                <span className="secondary-button__label">たしかめる</span>
                <span className="secondary-button__subtext">1かい まわすと？</span>
              </span>
            </button>
          ) : null}

          <button className="primary-button primary-button--wide" type="button" onClick={onCommit}>
            これでいい
          </button>
        </div>
      ) : (
        <div className="bridge-canvas-shell__actions bridge-canvas-shell__actions--single">
          <button
            className="primary-button primary-button--wide"
            type="button"
            onClick={onAdvanceQuestion}
          >
            {advanceLabel}
          </button>
        </div>
      )}

      <div className="bridge-result" aria-live="polite" aria-atomic="true">
        {isCommitted ? (
          <div className={`bridge-result__card${isCorrect ? ' bridge-result__card--success' : ''}`}>
            <div className="bridge-result__label">{revealLabel}</div>
            <div className="bridge-result__copy">
              {isCorrect
                ? 'そのとおり！ 1かい まわすと こうなるね。'
                : 'よく みよう。 1かい まわすと こうなるよ。'}
            </div>
            <div className="bridge-result__arrow-wrap">
              <div
                className="game-arrow bridge-arrow bridge-arrow--result"
                style={{
                  transform: `rotate(${getRotationAfterTurns(question.startRotation, question.turnCount)}deg)`,
                }}
              />
            </div>
          </div>
        ) : (
          <div className="bridge-result__card bridge-result__card--idle">
            <div className="bridge-result__label">みてみよう</div>
            <div className="bridge-result__copy">
              ここに こたえが でるよ。 さわって たしかめても いいよ。
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
