import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../store';

import App from '../App';

const store = setupStore();

describe('test App router', () => {
  test('renders main page', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
        </Provider>
      );
    });
    expect(screen.getByTestId('mainTitle')).toBeInTheDocument();
  });
});
