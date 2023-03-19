import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, describe } from 'vitest';

import Card from './Card';
import { IData } from '../../types';

const fakeCard: IData = {
  id: 4,
  title: 'fake goods',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
  price: 25,
  rating: 5,
};

describe('render card item', () => {
  test('to be render', () => {
    render(<Card products={fakeCard} />);

    expect(screen.getByText(fakeCard.title)).toBeInTheDocument();
  });
});
