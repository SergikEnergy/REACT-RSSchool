import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import UsersCardList from './UsersCardList';

describe('userlist test', () => {
  const wrapperId = 'TestUserListWrapper';
  test('render cardList', () => {
    const listsCard = render(<UsersCardList />);
    expect(listsCard).toBeTruthy();
  });
  test('render div wrapper', () => {
    render(<UsersCardList />);
    const divWrapper = screen.getByTestId(wrapperId);
    expect(divWrapper).toBeInTheDocument();
  });
});
