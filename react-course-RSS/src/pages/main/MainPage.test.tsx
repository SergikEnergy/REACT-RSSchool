import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

import MainPage from './MainPage';

describe('render mainPage', () => {
  test('renders section main page', () => {
    render(<MainPage />);
    const idTestPage = 'main-page';
    const mainPage = screen.getByTestId(idTestPage);
    expect(mainPage).toBeInTheDocument();
  });

  test('have content text heading', () => {
    render(<MainPage />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/general page/i);
  });
});
