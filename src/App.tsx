import { useEffect, useState } from 'react';
import { rotationQuestions } from './data/rotationQuestions';
import type { RotationDirection } from './data/rotationQuestions';
import {
  SESSION_QUESTION_COUNT,
  getNextQuestionIndex,
  getSessionQuestions,
  isRotationMatch,
  rotateClockwise,
} from './game/rotationLogic';
import CompletionScreen from './screens/CompletionScreen';
import GameScreen from './screens/GameScreen';
import RotationBridgeScreen from './screens/RotationBridgeScreen';
import StartScreen from './screens/StartScreen';

type Screen = 'start' | 'playing' | 'bridge' | 'complete';

const sessionQuestions = getSessionQuestions(rotationQuestions, SESSION_QUESTION_COUNT);

export default function App() {
  const totalQuestions = sessionQuestions.length;
  const [screen, setScreen] = useState<Screen>('start');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [targetRotation, setTargetRotation] = useState<RotationDirection>(
    sessionQuestions[0].initialRotation,
  );
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const currentQuestion = sessionQuestions[questionIndex];

  const resetSession = () => {
    setQuestionIndex(0);
    setTargetRotation(sessionQuestions[0].initialRotation);
    setIsSuccessVisible(false);
  };

  const beginSession = () => {
    resetSession();
    setScreen('playing');
  };

  useEffect(() => {
    if (screen !== 'playing') {
      return;
    }

    if (!isSuccessVisible) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsSuccessVisible(false);

      const nextQuestionIndex = getNextQuestionIndex(questionIndex, totalQuestions);

      if (nextQuestionIndex === null) {
        setScreen('complete');
        return;
      }

      setQuestionIndex(nextQuestionIndex);
      setTargetRotation(sessionQuestions[nextQuestionIndex].initialRotation);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [isSuccessVisible, questionIndex, screen, totalQuestions]);

  const handleTargetTap = () => {
    if (screen !== 'playing' || isSuccessVisible) {
      return;
    }

    const nextRotation = rotateClockwise(targetRotation);

    setTargetRotation(nextRotation);

    if (isRotationMatch(nextRotation, currentQuestion.referenceRotation)) {
      setIsSuccessVisible(true);
    }
  };

  const handleReplay = () => {
    resetSession();
    setScreen('playing');
  };

  return (
    <main className="app-shell">
      <div className="app-orb app-orb--one" />
      <div className="app-orb app-orb--two" />

      {screen === 'start' ? (
        <StartScreen onStart={beginSession} onBridgeStart={() => setScreen('bridge')} />
      ) : null}

      {screen === 'playing' ? (
        <GameScreen
          currentQuestion={currentQuestion}
          currentQuestionNumber={questionIndex + 1}
          totalQuestions={totalQuestions}
          isSuccessVisible={isSuccessVisible}
          targetRotation={targetRotation}
          onTargetTap={handleTargetTap}
        />
      ) : null}

      {screen === 'bridge' ? (
        <RotationBridgeScreen onBackToStart={() => setScreen('start')} />
      ) : null}

      {screen === 'complete' ? <CompletionScreen onReplay={handleReplay} /> : null}
    </main>
  );
}
