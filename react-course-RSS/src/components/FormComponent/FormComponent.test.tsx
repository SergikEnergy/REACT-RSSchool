import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { describe, test, vi } from 'vitest';
import FormComponent from './FormComponent';

global.URL.createObjectURL = vi.fn();

describe('test Form Component', () => {
  const foo = vi.fn();
  test('should render form page', () => {
    render(<FormComponent getUserCard={foo} />);
    const formId = 'formTag';
    const formPage = screen.getByTestId(formId);
    expect(formPage).toBeInTheDocument();
  });
  test('should render all Inputs', async () => {
    render(<FormComponent getUserCard={foo} />);
    expect(await screen.findByTestId('firstNameTest')).toBeInTheDocument();
    expect(await screen.findByTestId('lastNameTest')).toBeInTheDocument();
    expect(await screen.findByTestId('birthDayTest')).toBeInTheDocument();
    expect(await screen.findByTestId('fileTest')).toBeInTheDocument();
    expect(await screen.findByTestId('mealSelect')).toBeInTheDocument();
    expect(await screen.findByTestId('switcherTest')).toBeInTheDocument();
  });
  test('should display required error when value is invalid', async () => {
    render(<FormComponent getUserCard={foo} />);
    fireEvent.submit(screen.getByRole('button'));
    expect(await screen.findByTestId('switcherError')).toBeInTheDocument();
  });
  test('submitting form', () => {
    const fileForTest = new File(['test'], 'testImage.jpg', {
      type: 'image/jpg',
    });

    render(<FormComponent getUserCard={foo} />);

    fireEvent.change(screen.getByTestId('firstNameTest'), {
      target: { value: 'userName' },
    });
    fireEvent.change(screen.getByTestId('lastNameTest'), {
      target: { value: 'testUserLastName' },
    });
    fireEvent.change(screen.getByTestId('birthDayTest'), {
      target: { value: '2020-08-05' },
    });
    fireEvent.change(screen.getByTestId('fileTest'), {
      target: { files: [fileForTest] },
    });
    fireEvent.change(screen.getByTestId('mealSelect'), {
      target: { value: 'Vegetables' },
    });
    fireEvent.click(screen.getByTestId('InstagramTest'));
    fireEvent.click(screen.getByTestId('switcherTest'));
    fireEvent.click(screen.getByTestId('buttonTest'));
  });

  waitFor(() => {
    const userName = screen.getByText('userName');
    expect(userName).toBeInTheDocument();
    expect(foo).toHaveBeenCalledTimes(1);
  });
});
