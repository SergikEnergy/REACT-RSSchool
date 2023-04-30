import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

import AboutPage from '../../pages/about/AboutPage';

describe('render not-found', () => {
  test('renders section with About Page', () => {
    render(<AboutPage />);
    const idTestPage = 'about-page';
    const linkElement = screen.getByTestId(idTestPage);
    expect(linkElement).toBeInTheDocument();
  });

  test('have content text heading', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent(/about page/i);
  });
});
