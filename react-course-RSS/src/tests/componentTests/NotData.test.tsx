import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import NotData from '../../components/NotData/NotData';

describe('test not data component on render', () => {
  test('should render', () => {
    render(<NotData />);
    const notDataComponent = screen.getByTestId('emptyApi') as HTMLDivElement;
    expect(notDataComponent).toBeInTheDocument();
    expect(notDataComponent).toHaveClass('api_not-found');
  });

  test('should have an image', () => {
    render(<NotData />);
    const displayedImage = document.querySelector('img') as HTMLImageElement;
    expect(displayedImage.src).toContain('notFoundAPI_img.jpeg');
  });
});
