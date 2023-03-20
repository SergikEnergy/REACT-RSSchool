import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import InputSearchByName from './InputSearchByName';

describe('test input panel', () => {
  test('renderInputElement', () => {
    render(<InputSearchByName />);

    expect(screen.getByTestId('searchName')).toBeInTheDocument();
  });

  describe('Testing Base property', () => {
    const inputValue = localStorage.getItem('searchParameters');
    let input: HTMLInputElement;
    beforeEach(() => {
      render(<InputSearchByName />);
      input = screen.getByPlaceholderText(/name of/i);
    });

    test('test the default value empty localStorage', () => {
      expect(input.value === '').toBe(true);
    });

    test('test the default value with localStorage', () => {
      if (inputValue && inputValue.length > 0) {
        expect(input.value === inputValue).toBe(true);
      }
    });
  });
});
