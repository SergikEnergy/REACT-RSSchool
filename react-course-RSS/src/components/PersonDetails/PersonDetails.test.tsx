import { describe, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

import PersonDetails from './PersonDetails';

describe('test person details to render', () => {
  test('should return correct answer', async () => {
    render(<PersonDetails id={1} />);

    await waitFor(() => {
      const nameBlock = screen.getByTestId('testNameSingle') as HTMLDivElement;
      expect(nameBlock).toBeInTheDocument();
      expect(nameBlock).toHaveTextContent('Rick Sanchez');
    });
  });

  test('should return incorrect answer', async () => {
    render(<PersonDetails id={14789} />);

    await waitFor(() => {
      const notFoundBlock = screen.getByTestId('emptyApi') as HTMLDivElement;
      expect(notFoundBlock).toBeInTheDocument();
    });
  });
});
