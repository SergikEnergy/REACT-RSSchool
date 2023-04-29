import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { setupStore } from '../../store';

import MainPage from './MainPage';

const store = setupStore();
describe('render mainPage', () => {
  test('renders section main page', () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    const idTestPage = 'main-page';
    const mainPage = screen.getByTestId(idTestPage);
    expect(mainPage).toBeInTheDocument();
  });

  test('have content text heading', () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/general page/i);
  });
});
