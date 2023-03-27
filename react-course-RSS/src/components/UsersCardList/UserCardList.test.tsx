import React from 'react';

import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IUserCard } from '../../types';
import UsersCardList from './UsersCardList';

const fakeUserList: IUserCard[] = [
  {
    id: 'id1',
    name: 'Ivan',
    lastName: 'Ivanov',
    birthDay: '12-03-1990',
    meal: 'pie',
    image: 'some_url',
  },
  {
    id: 'id2',
    name: 'Petr',
    lastName: 'Petrov',
    birthDay: '12-03-1990',
    meal: 'pie',
    image: 'some_url2',
  },
  {
    id: 'id3',
    name: 'Serg',
    lastName: 'Sergeev',
    birthDay: '12-03-1990',
    meal: 'pie',
    image: 'some_url',
  },
];

describe('userlist', () => {
  const wrapperId = 'TestUserListWrapper';
  test('render cardList', () => {
    const listsCard = render(<UsersCardList cards={fakeUserList} />);
    expect(listsCard).toBeTruthy();
  });
  test('render div wrapper', () => {
    render(<UsersCardList cards={fakeUserList} />);
    const divWrapper = screen.getByTestId(wrapperId);
    expect(divWrapper).toBeInTheDocument();
  });
});
