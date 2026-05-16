import type { RotationBridgeQuestion } from '../data/rotationBridgeQuestions';
import type { RotationDirection } from '../data/rotationQuestions';
import { getRotationAfterTurns, isRotationBridgePredictionCorrect } from './rotationBridgeLogic';
import { rotateClockwise } from './rotationLogic';

export type RotationBridgeQuestionResult = {
  committed: boolean;
  correct: boolean | null;
};

export type RotationBridgeSessionState = {
  currentQuestionIndex: number;
  predictionRotation: RotationDirection;
  previewRotation: RotationDirection | null;
  result: RotationBridgeQuestionResult;
  completed: boolean;
};

const createIdleQuestionResult = (): RotationBridgeQuestionResult => ({
  committed: false,
  correct: null,
});

const createQuestionState = (
  question: RotationBridgeQuestion,
): Pick<RotationBridgeSessionState, 'predictionRotation' | 'previewRotation' | 'result'> => ({
  predictionRotation: question.startRotation,
  previewRotation: null,
  result: createIdleQuestionResult(),
});

export const createRotationBridgeSessionState = (
  questions: readonly RotationBridgeQuestion[],
): RotationBridgeSessionState => {
  if (questions.length === 0) {
    throw new Error('Expected at least one rotation bridge question.');
  }

  return {
    currentQuestionIndex: 0,
    ...createQuestionState(questions[0]),
    completed: false,
  };
};

export const getRotationBridgeCurrentQuestion = (
  questions: readonly RotationBridgeQuestion[],
  session: RotationBridgeSessionState,
) => questions[session.currentQuestionIndex];

export const isRotationBridgeFinalQuestion = (
  questions: readonly RotationBridgeQuestion[],
  session: RotationBridgeSessionState,
) => session.currentQuestionIndex >= questions.length - 1;

export const rotateRotationBridgePrediction = (
  session: RotationBridgeSessionState,
): RotationBridgeSessionState => ({
  ...session,
  predictionRotation: rotateClockwise(session.predictionRotation),
});

export const setRotationBridgePreview = (
  session: RotationBridgeSessionState,
  question: RotationBridgeQuestion,
): RotationBridgeSessionState => ({
  ...session,
  previewRotation: getRotationAfterTurns(question.startRotation, question.turnCount),
});

export const clearRotationBridgePreview = (
  session: RotationBridgeSessionState,
): RotationBridgeSessionState => ({
  ...session,
  previewRotation: null,
});

export const commitRotationBridgeQuestion = (
  session: RotationBridgeSessionState,
  question: RotationBridgeQuestion,
): RotationBridgeSessionState => {
  if (session.result.committed) {
    return session;
  }

  const correctRotation = getRotationAfterTurns(question.startRotation, question.turnCount);

  return {
    ...session,
    previewRotation: null,
    result: {
      committed: true,
      correct: isRotationBridgePredictionCorrect(session.predictionRotation, correctRotation),
    },
  };
};

export const advanceRotationBridgeSession = (
  session: RotationBridgeSessionState,
  questions: readonly RotationBridgeQuestion[],
): RotationBridgeSessionState => {
  if (!session.result.committed || session.completed) {
    return session;
  }

  if (isRotationBridgeFinalQuestion(questions, session)) {
    return {
      ...session,
      completed: true,
    };
  }

  const nextQuestionIndex = session.currentQuestionIndex + 1;
  const nextQuestion = questions[nextQuestionIndex];

  return {
    currentQuestionIndex: nextQuestionIndex,
    ...createQuestionState(nextQuestion),
    completed: false,
  };
};

export const resetRotationBridgeSession = (
  questions: readonly RotationBridgeQuestion[],
): RotationBridgeSessionState => createRotationBridgeSessionState(questions);
