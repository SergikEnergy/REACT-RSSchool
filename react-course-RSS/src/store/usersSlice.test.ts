import { describe, test } from 'vitest';
import reducer, { initialState, addNewUser } from './usersSlice';
import fakeUsers from '../data/fakeUsers';

describe('test slice searchParams', () => {
  test('check of returning the initial state', () => {
    const result = reducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  test('should change search input value', () => {
    const action = { type: addNewUser.type, payload: fakeUsers[0] };

    const result = reducer({ users: [] }, action);

    expect(result.users.length).toBeTruthy();
    expect(result.users[0]).toBe(fakeUsers[0]);
  });
});
