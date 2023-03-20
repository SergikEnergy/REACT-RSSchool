import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, describe } from 'vitest';

import CardList from './CardList';
import fakeData from '../../data/fakeData';

describe('Card list component test', () => {
  const testId = 'cardTest';
  const testIdEmpty = 'emptyCards';
  test('Card list was rendered with data', () => {
    render(<CardList data={fakeData} />);

    expect(screen.queryAllByTestId(testId).length > 0).toBe(true);
  });

  test('Card list was rendered without data (empty array) ', () => {
    render(<CardList data={[]} />);

    expect(screen.queryByTestId(testIdEmpty)).toBeInTheDocument();
    expect(screen.queryByTestId(testId)).toBeNull();
  });
});
