import { describe, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import UsersCardList from './UsersCardList';

import store from '../../store';
import fakeUsers from '../../data/fakeUsers';

vi.mock('react-redux');

describe('user list test', () => {
  const wrapperTestId = 'testUserList';
  const userTestId = 'singleUser';
  const mockedUseSelector = vi.spyOn(reduxHooks, 'useSelector');

  test('render cardList', () => {
    const listsCard = render(
      <reduxHooks.Provider store={store}>
        <UsersCardList />
      </reduxHooks.Provider>
    );
    screen.debug();
    expect(listsCard).toBeTruthy();
  });

  test('render div wrapper', async () => {
    render(
      <reduxHooks.Provider store={store}>
        <UsersCardList />
      </reduxHooks.Provider>
    );
    const divWrapper = screen.queryByTestId(wrapperTestId) as HTMLDivElement;
    screen.debug();
    expect(divWrapper).toBeNull();
    expect(await screen.findByTestId(wrapperTestId)).toBeInTheDocument();
  });

  test('render all users', async () => {
    mockedUseSelector.mockReturnValue(fakeUsers);
    render(
      <reduxHooks.Provider store={store}>
        <UsersCardList />
      </reduxHooks.Provider>
    );
    const users = await screen.findAllByTestId(userTestId);
    expect(users.length).toBe(fakeUsers.length);
  });
});
