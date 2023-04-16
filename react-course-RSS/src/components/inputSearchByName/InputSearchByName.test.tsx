import { describe, test, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import InputSearchByName from './InputSearchByName';

describe('test input panel', () => {
  test('renderInputElement', () => {
    render(<InputSearchByName />);

    expect(screen.getByTestId('searchName')).toBeInTheDocument();
  });
  const testInputValue = 'test';

  describe('Testing Base property', () => {
    localStorage.setItem('searchParameters', testInputValue);
    const inputValue = localStorage.getItem('searchParameters') || '';
    let input: HTMLInputElement;
    beforeEach(() => {
      render(<InputSearchByName />);
      input = screen.getByTestId('searchName');
    });

    test('test the value from localStorage', () => {
      expect(input.type).toBe('text');

      expect(input.value === inputValue).toBe(true);
    });

    test('change inputValue on searchPanel', () => {
      fireEvent.change(input, {
        target: {
          value: testInputValue,
        },
      });
      waitFor(() => {
        const cb = vi.fn();
        expect(input).toHaveValue(testInputValue);
        expect(cb).toHaveBeenCalledTimes(testInputValue.length);
      });
    });

    test('test submit button render', () => {
      const button = screen.getByTestId('submitButton');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('type', 'submit');
    });
    test('test submit function on submit with save to localStorage', () => {
      const formName = screen.getByTestId('formNameTest');
      fireEvent.change(input, {
        target: {
          value: testInputValue,
        },
      });
      fireEvent.submit(formName);
      expect(window.localStorage.getItem('searchParameters')).toBe(testInputValue);
    });
  });
});
