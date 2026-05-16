import { useEffect, useRef, useState } from 'react';
import { rotationBridgeQuestions } from '../data/rotationBridgeQuestions';
import type { RotationDirection } from '../data/rotationQuestions';
import RotationBridgeCanvas from '../game/RotationBridgeCanvas';
import {
  getRotationAfterTurns,
  isRotationBridgePredictionCorrect,
} from '../game/rotationBridgeLogic';
import { rotateClockwise } from '../game/rotationLogic';

type RotationBridgeScreenProps = {
  onBackToStart: () => void;
};

type ResultState = {
  committed: boolean;
  correct: boolean | null;
};

const bridgeQuestion = rotationBridgeQuestions[0];

export default function RotationBridgeScreen({ onBackToStart }: RotationBridgeScreenProps) {
  const question = bridgeQuestion;
  const correctRotation = getRotationAfterTurns(question.startRotation, question.turnCount);
  const [predictionRotation, setPredictionRotation] = useState<RotationDirection>(
    question.startRotation,
  );
  const [previewRotation, setPreviewRotation] = useState<RotationDirection | null>(null);
  const [result, setResult] = useState<ResultState>({ committed: false, correct: null });
  const previewTimerRef = useRef<number | null>(null);

  const clearPreviewTimer = () => {
    if (previewTimerRef.current !== null) {
      window.clearTimeout(previewTimerRef.current);
      previewTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (previewTimerRef.current !== null) {
        window.clearTimeout(previewTimerRef.current);
        previewTimerRef.current = null;
      }
    };
  }, []);

  const resetQuestion = () => {
    clearPreviewTimer();
    setPredictionRotation(question.startRotation);
    setPreviewRotation(null);
    setResult({ committed: false, correct: null });
  };

  const handlePredictionTap = () => {
    if (result.committed) {
      return;
    }

    setPredictionRotation((currentRotation) => rotateClockwise(currentRotation));
  };

  const handlePreviewTap = () => {
    if (!question.supportsTouchPreview || result.committed) {
      return;
    }

    clearPreviewTimer();
    setPreviewRotation(correctRotation);
    previewTimerRef.current = window.setTimeout(() => {
      setPreviewRotation(null);
      previewTimerRef.current = null;
    }, 1200);
  };

  const handleCommit = () => {
    if (result.committed) {
      return;
    }

    clearPreviewTimer();
    setPreviewRotation(null);

    setResult({
      committed: true,
      correct: isRotationBridgePredictionCorrect(predictionRotation, correctRotation),
    });
  };

  return (
    <section className="screen screen--bridge" aria-label="Rotation Paper Bridge 画面">
      <div className="bridge-panel">
        <div className="bridge-panel__top">
          <p className="bridge-panel__eyebrow">ためしてみる 1もん</p>
          <h1 className="bridge-panel__title">1かい まわしたら？</h1>
          <p className="bridge-panel__copy">さわって たしかめて、こたえを きめよう</p>
        </div>

        <RotationBridgeCanvas
          startRotation={question.startRotation}
          predictionRotation={predictionRotation}
          correctRotation={correctRotation}
          previewRotation={previewRotation}
          isCommitted={result.committed}
          isCorrect={result.correct}
          supportsTouchPreview={question.supportsTouchPreview}
          onPredictionTap={handlePredictionTap}
          onPreviewTap={handlePreviewTap}
          onCommit={handleCommit}
        />

        <div className="bridge-panel__footer">
          {!result.committed ? (
            <div className="bridge-status">
              <span className="bridge-status__icon" aria-hidden="true">
                ↻
              </span>
              <span className="bridge-status__text">1かい まわしたら？</span>
            </div>
          ) : null}

          <div className="bridge-panel__actions">
            <button className="secondary-button" type="button" onClick={resetQuestion}>
              もういちど
            </button>
            <button className="ghost-button" type="button" onClick={onBackToStart}>
              はじめにもどる
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
