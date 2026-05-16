import { useCallback, useEffect, useRef, useState } from 'react';
import { rotationBridgeQuestions } from '../data/rotationBridgeQuestions';
import RotationBridgeCanvas from '../game/RotationBridgeCanvas';
import {
  type RotationBridgeSessionState,
  advanceRotationBridgeSession,
  clearRotationBridgePreview,
  commitRotationBridgeQuestion,
  createRotationBridgeSessionState,
  getRotationBridgeCurrentQuestion,
  isRotationBridgeFinalQuestion,
  resetRotationBridgeSession,
  rotateRotationBridgePrediction,
  setRotationBridgePreview,
} from '../game/rotationBridgeSessionLogic';
import RotationBridgeCompletionScreen from './RotationBridgeCompletionScreen';

type RotationBridgeScreenProps = {
  onBackToStart: () => void;
};

export default function RotationBridgeScreen({ onBackToStart }: RotationBridgeScreenProps) {
  const [session, setSession] = useState<RotationBridgeSessionState>(() =>
    createRotationBridgeSessionState(rotationBridgeQuestions),
  );
  const previewTimerRef = useRef<number | null>(null);

  const clearPreviewTimer = useCallback(() => {
    if (previewTimerRef.current !== null) {
      window.clearTimeout(previewTimerRef.current);
      previewTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      clearPreviewTimer();
    };
  }, [clearPreviewTimer]);

  const resetQuestion = () => {
    clearPreviewTimer();
    setSession(resetRotationBridgeSession(rotationBridgeQuestions));
  };

  const handlePredictionTap = () => {
    setSession((currentSession) =>
      currentSession.result.committed
        ? currentSession
        : rotateRotationBridgePrediction(clearRotationBridgePreview(currentSession)),
    );
  };

  const handlePreviewTap = () => {
    const currentQuestion = getRotationBridgeCurrentQuestion(rotationBridgeQuestions, session);

    if (!currentQuestion.supportsTouchPreview || session.result.committed) {
      return;
    }

    clearPreviewTimer();
    setSession((currentSession) => setRotationBridgePreview(currentSession, currentQuestion));
    previewTimerRef.current = window.setTimeout(() => {
      setSession((currentSession) => clearRotationBridgePreview(currentSession));
      previewTimerRef.current = null;
    }, 1200);
  };

  const handleCommit = () => {
    const currentQuestion = getRotationBridgeCurrentQuestion(rotationBridgeQuestions, session);

    setSession((currentSession) => commitRotationBridgeQuestion(currentSession, currentQuestion));
    clearPreviewTimer();
  };

  const handleAdvanceQuestion = () => {
    clearPreviewTimer();
    setSession((currentSession) =>
      advanceRotationBridgeSession(currentSession, rotationBridgeQuestions),
    );
  };

  const currentQuestion = getRotationBridgeCurrentQuestion(rotationBridgeQuestions, session);
  const isFinalQuestion = isRotationBridgeFinalQuestion(rotationBridgeQuestions, session);

  if (session.completed) {
    return (
      <RotationBridgeCompletionScreen onReplay={resetQuestion} onBackToStart={onBackToStart} />
    );
  }

  return (
    <section className="screen screen--bridge" aria-label="Rotation Paper Bridge 画面">
      <div className="bridge-panel">
        <div className="bridge-panel__top">
          <p className="bridge-panel__eyebrow">
            ためしてみる {session.currentQuestionIndex + 1}もんめ
          </p>
          <h1 className="bridge-panel__title">1かい まわしたら？</h1>
          <p className="bridge-panel__copy">さわって たしかめて、こたえを きめよう</p>
          <div
            className="bridge-progress"
            aria-label={`進みぐあい ${session.currentQuestionIndex + 1} / ${rotationBridgeQuestions.length}`}
          >
            <span className="bridge-progress__value">
              {session.currentQuestionIndex + 1} / {rotationBridgeQuestions.length}
            </span>
            <div className="bridge-progress__dots" aria-hidden="true">
              {rotationBridgeQuestions.map((question, index) => (
                <span
                  key={question.id}
                  className={`bridge-progress__dot${index === session.currentQuestionIndex ? ' bridge-progress__dot--active' : index < session.currentQuestionIndex ? ' bridge-progress__dot--done' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

        <RotationBridgeCanvas
          question={currentQuestion}
          predictionRotation={session.predictionRotation}
          previewRotation={session.previewRotation}
          isCommitted={session.result.committed}
          isCorrect={session.result.correct}
          isFinalQuestion={isFinalQuestion}
          onPredictionTap={handlePredictionTap}
          onPreviewTap={handlePreviewTap}
          onCommit={handleCommit}
          onAdvanceQuestion={handleAdvanceQuestion}
        />

        <div className="bridge-panel__footer">
          {!session.result.committed ? (
            <div className="bridge-status">
              <span className="bridge-status__icon" aria-hidden="true">
                ↻
              </span>
              <span className="bridge-status__text">1かい まわしたら？</span>
            </div>
          ) : null}

          {session.result.committed ? (
            <div className="bridge-panel__actions">
              <button className="secondary-button" type="button" onClick={resetQuestion}>
                もういちど
              </button>
              <button className="ghost-button" type="button" onClick={onBackToStart}>
                はじめにもどる
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
