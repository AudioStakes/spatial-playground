import { useEffect, useMemo, useState } from 'react';
import { rotationQuestions } from './data/rotationQuestions';
import type { RotationDirection } from './data/rotationQuestions';
import {
  SESSION_QUESTION_COUNT,
  getNextQuestionIndex,
  isRotationMatch,
  rotateClockwise,
} from './game/rotationLogic';
import CompletionScreen from './screens/CompletionScreen';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';

type Screen = 'start' | 'playing' | 'complete';

const sessionQuestions = rotationQuestions.slice(0, SESSION_QUESTION_COUNT);

if (sessionQuestions.length < SESSION_QUESTION_COUNT) {
  throw new Error(`Expected at least ${SESSION_QUESTION_COUNT} rotation questions.`);
}

export default function App() {
  const totalQuestions = sessionQuestions.length;
  const [screen, setScreen] = useState<Screen>('start');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [targetRotation, setTargetRotation] = useState<RotationDirection>(
    sessionQuestions[0].initialRotation,
  );
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const currentQuestion = useMemo(() => sessionQuestions[questionIndex], [questionIndex]);

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

    setTargetRotation((rotation) => {
      const nextRotation = rotateClockwise(rotation);

      if (isRotationMatch(nextRotation, currentQuestion.referenceRotation)) {
        setIsSuccessVisible(true);
      }

      return nextRotation;
    });
  };

  const handleReplay = () => {
    resetSession();
    setScreen('playing');
  };

  return (
    <main className="app-shell">
      <div className="app-orb app-orb--one" />
      <div className="app-orb app-orb--two" />

      {screen === 'start' ? <StartScreen onStart={beginSession} /> : null}

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

      {screen === 'complete' ? <CompletionScreen onReplay={handleReplay} /> : null}
    </main>
  );
}
