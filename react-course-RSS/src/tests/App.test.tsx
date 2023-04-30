import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../store';

import App from '../App';

const store = setupStore();

describe('test App router', () => {
  test('check rendering main page', async () => {
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

  test('check rendering about page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/some information about/)).toBeInTheDocument();
  });

  test('check rendering not-found page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/some-route']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/page not found/)).toBeInTheDocument();
  });
});
