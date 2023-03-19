import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from '@remix-run/router';

import App from './App';

describe('App', () => {
  test('Should have App part', () => {
    const container = render(<App />);
    expect(container).toBeTruthy();
  });

  // it('Should render the home page', () => {
  //   const history = createMemoryHistory();
  //   const { container, getByTestId } = render();
  // });
});
