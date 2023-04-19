import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IUserCard } from '../../types';

import User from './User';

const fakeUser: IUserCard = {
  social: 'Instagram',
  id: 'id1',
  name: 'Ivan',
  lastName: 'Ivanov',
  birthDay: '12-03-1990',
  meal: 'pie',
  image: 'https://loremflickr.com/640/360',
};

describe('test single user component', () => {
  const testUserId = 'singleUser';
  const imgId = 'userImg';
  beforeEach(() => {
    render(<User key={fakeUser.id} data={fakeUser} />);
  });

  test('to be render', () => {
    expect(screen.getByTestId(testUserId)).toBeInTheDocument();
  });

  test('has at least one img', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
    const imgElem = screen.getByTestId(imgId) as HTMLImageElement;
    expect(imgElem.src).toContain(fakeUser.image);
  });
});
