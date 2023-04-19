import { describe, test } from 'vitest';
import reducer, { initialState, getAnotherCharacter, getCharacterId } from './characterSlice';
import mockData from '../mocks/mockData';

describe('test slice character', () => {
  test('check of returning the initial state', () => {
    const result = reducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  test('should change character data', () => {
    const action = { type: getAnotherCharacter.type, payload: mockData.results };

    const result = reducer({ character: [], id: 0, error: '' }, action);

    expect(result.character[0]).toBe(mockData.results[0]);
    expect(result.id).toBe(0);
  });

  test('should change getting id', () => {
    const action = { type: getCharacterId.type, payload: 2 };

    const result = reducer({ character: [], id: 0, error: '' }, action);

    expect(result.character.length).toBe(0);
    expect(result.id).toBe(2);
  });
});
