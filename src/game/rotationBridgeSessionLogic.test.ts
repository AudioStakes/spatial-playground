import { describe, expect, it } from 'vitest';
import { rotationBridgeQuestions } from '../data/rotationBridgeQuestions';
import {
  type RotationBridgeSessionState,
  advanceRotationBridgeSession,
  commitRotationBridgeQuestion,
  createRotationBridgeSessionState,
  getRotationBridgeCurrentQuestion,
  isRotationBridgeFinalQuestion,
  resetRotationBridgeSession,
  rotateRotationBridgePrediction,
  setRotationBridgePreview,
} from './rotationBridgeSessionLogic';

describe('rotationBridgeSessionLogic', () => {
  it('creates the initial bridge session state', () => {
    const session = createRotationBridgeSessionState(rotationBridgeQuestions);

    expect(session).toEqual({
      currentQuestionIndex: 0,
      predictionRotation: 0,
      previewRotation: null,
      result: { committed: false, correct: null },
      completed: false,
    });
  });

  it('rotates the prediction by one turn at a time', () => {
    const session = createRotationBridgeSessionState(rotationBridgeQuestions);
    const rotated = rotateRotationBridgePrediction(session);

    expect(rotated.predictionRotation).toBe(90);
  });

  it('shows the one-turn preview for the current question', () => {
    const session = createRotationBridgeSessionState(rotationBridgeQuestions);
    const previewed = setRotationBridgePreview(
      session,
      getRotationBridgeCurrentQuestion(rotationBridgeQuestions, session),
    );

    expect(previewed.previewRotation).toBe(90);
  });

  it('commits a correct prediction', () => {
    const session = createRotationBridgeSessionState(rotationBridgeQuestions);
    const committed = commitRotationBridgeQuestion(
      rotateRotationBridgePrediction(session),
      getRotationBridgeCurrentQuestion(rotationBridgeQuestions, session),
    );

    expect(committed.result).toEqual({ committed: true, correct: true });
  });

  it('commits an incorrect prediction', () => {
    const session = createRotationBridgeSessionState(rotationBridgeQuestions);
    const committed = commitRotationBridgeQuestion(
      session,
      getRotationBridgeCurrentQuestion(rotationBridgeQuestions, session),
    );

    expect(committed.result).toEqual({ committed: true, correct: false });
  });

  it('advances to the next question and resets per-question state', () => {
    const session = createRotationBridgeSessionState(rotationBridgeQuestions);
    const committed = commitRotationBridgeQuestion(
      rotateRotationBridgePrediction(session),
      getRotationBridgeCurrentQuestion(rotationBridgeQuestions, session),
    );
    const advanced = advanceRotationBridgeSession(committed, rotationBridgeQuestions);

    expect(advanced.currentQuestionIndex).toBe(1);
    expect(advanced.predictionRotation).toBe(90);
    expect(advanced.previewRotation).toBe(null);
    expect(advanced.result).toEqual({ committed: false, correct: null });
    expect(advanced.completed).toBe(false);
  });

  it('detects the final question', () => {
    const session = createRotationBridgeSessionState(rotationBridgeQuestions);
    const finalSession = {
      ...session,
      currentQuestionIndex: rotationBridgeQuestions.length - 1,
    };

    expect(isRotationBridgeFinalQuestion(rotationBridgeQuestions, finalSession)).toBe(true);
  });

  it('completes after the final question advances', () => {
    const session = createRotationBridgeSessionState(rotationBridgeQuestions);
    const finalSession: RotationBridgeSessionState = {
      ...session,
      currentQuestionIndex: rotationBridgeQuestions.length - 1,
      predictionRotation: 90,
    };
    const committed = commitRotationBridgeQuestion(
      finalSession,
      getRotationBridgeCurrentQuestion(rotationBridgeQuestions, finalSession),
    );
    const completed = advanceRotationBridgeSession(committed, rotationBridgeQuestions);

    expect(completed.completed).toBe(true);
    expect(completed.currentQuestionIndex).toBe(rotationBridgeQuestions.length - 1);
    expect(completed.result).toEqual({ committed: true, correct: true });
  });

  it('resets back to the initial state for replay', () => {
    const session = createRotationBridgeSessionState(rotationBridgeQuestions);
    const committed = commitRotationBridgeQuestion(
      rotateRotationBridgePrediction(session),
      getRotationBridgeCurrentQuestion(rotationBridgeQuestions, session),
    );
    const advanced = advanceRotationBridgeSession(committed, rotationBridgeQuestions);

    expect(resetRotationBridgeSession(rotationBridgeQuestions)).toEqual(session);
    expect(advanced).not.toEqual(session);
  });
});
