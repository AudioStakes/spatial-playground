import { useEffect, useMemo, useState } from 'react';
import CompletionScreen from './screens/CompletionScreen';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';
import { rotationQuestions } from './data/rotationQuestions';
import type { RotationDirection } from './data/rotationQuestions';

type Screen = 'start' | 'playing' | 'complete';

const rotateClockwise = (rotation: RotationDirection): RotationDirection => {
  switch (rotation) {
    case 0:
      return 90;
    case 90:
      return 180;
    case 180:
      return 270;
    case 270:
      return 0;
    default:
      return 0;
  }
};

export default function App() {
  const totalQuestions = rotationQuestions.length;
  const [screen, setScreen] = useState<Screen>('start');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [targetRotation, setTargetRotation] = useState<RotationDirection>(
    rotationQuestions[0].initialRotation,
  );
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const currentQuestion = useMemo(
    () => rotationQuestions[questionIndex],
    [questionIndex],
  );

  const resetSession = () => {
    setQuestionIndex(0);
    setTargetRotation(rotationQuestions[0].initialRotation);
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

      if (questionIndex === totalQuestions - 1) {
        setScreen('complete');
        return;
      }

      const nextIndex = questionIndex + 1;
      setQuestionIndex(nextIndex);
      setTargetRotation(rotationQuestions[nextIndex].initialRotation);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [
    isSuccessVisible,
    questionIndex,
    screen,
    totalQuestions,
  ]);

  const handleTargetTap = () => {
    if (screen !== 'playing' || isSuccessVisible) {
      return;
    }

    setTargetRotation((rotation) => {
      const nextRotation = rotateClockwise(rotation);

      if (nextRotation === currentQuestion.referenceRotation) {
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

      {screen === 'start' ? (
        <StartScreen onStart={beginSession} />
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

      {screen === 'complete' ? <CompletionScreen onReplay={handleReplay} /> : null}
    </main>
  );
}
