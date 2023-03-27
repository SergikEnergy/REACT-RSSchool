import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import FormComponent from './FormComponent';

describe('test Form Component', () => {
  test('should render form page', () => {
    const foo = vi.fn();
    render(<FormComponent getUserCard={foo} />);
    const formId = 'formTag';
    const formPage = screen.getByTestId(formId);
    expect(formPage).toBeInTheDocument();
  });
});
