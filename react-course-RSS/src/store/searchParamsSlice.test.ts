import { describe, test } from 'vitest';
import reducer, { initialState, setSearchParams } from './searchParamsSlice';

describe('test slice searchParams', () => {
  test('check of returning the initial state', () => {
    const result = reducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  test('should change search input value', () => {
    const action = { type: setSearchParams.type, payload: 'testPhrase' };

    const result = reducer({ searchValue: '' }, action);

    expect(result.searchValue).toBe('testPhrase');
  });
});
