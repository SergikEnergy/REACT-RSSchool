import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import FormPage from './FormPage';

describe('render Form Page test', () => {
  test('should render form page', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const mainFormId = 'form-page';
    const formPage = screen.getByTestId(mainFormId);
    expect(formPage).toBeInTheDocument();
  });

  test('should have heading', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/create new user/i);
  });
});
