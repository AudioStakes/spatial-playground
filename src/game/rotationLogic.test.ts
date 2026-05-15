import { describe, expect, it } from 'vitest';
import { rotationQuestions } from '../data/rotationQuestions';
import {
  SESSION_QUESTION_COUNT,
  getNextQuestionIndex,
  getSessionQuestions,
  isRotationMatch,
  rotateClockwise,
} from './rotationLogic';

describe('rotationLogic', () => {
  it('rotates clockwise in 90 degree steps', () => {
    expect(rotateClockwise(0)).toBe(90);
    expect(rotateClockwise(90)).toBe(180);
    expect(rotateClockwise(180)).toBe(270);
    expect(rotateClockwise(270)).toBe(0);
  });

  it('matches only identical rotations', () => {
    expect(isRotationMatch(90, 90)).toBe(true);
    expect(isRotationMatch(0, 90)).toBe(false);
  });

  it('returns a 5-question session when more than 5 questions exist', () => {
    const questions = [...rotationQuestions, { ...rotationQuestions[0], id: 'rotation-6' }];

    const sessionQuestions = getSessionQuestions(questions);

    expect(sessionQuestions).toHaveLength(SESSION_QUESTION_COUNT);
    expect(sessionQuestions).toEqual(questions.slice(0, SESSION_QUESTION_COUNT));
  });

  it('returns exactly 5 questions when the source data has 5 questions', () => {
    const sessionQuestions = getSessionQuestions(rotationQuestions);

    expect(sessionQuestions).toHaveLength(SESSION_QUESTION_COUNT);
    expect(sessionQuestions).toEqual(rotationQuestions.slice(0, SESSION_QUESTION_COUNT));
  });

  it('throws when there are fewer than 5 questions available', () => {
    expect(() => getSessionQuestions(rotationQuestions.slice(0, 4))).toThrow(
      'Expected at least 5 rotation questions.',
    );
  });

  it('advances to the next question until the last question', () => {
    expect(getNextQuestionIndex(0, 5)).toBe(1);
    expect(getNextQuestionIndex(3, 5)).toBe(4);
  });

  it('returns null after the final question', () => {
    expect(getNextQuestionIndex(4, 5)).toBeNull();
  });
});
