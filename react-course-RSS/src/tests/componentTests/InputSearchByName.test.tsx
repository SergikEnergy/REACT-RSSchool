import { describe, test, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import * as reduxTools from 'react-redux';
import { setupStore } from '../../store';

import InputSearchByName from '../../components/inputSearchByName/InputSearchByName';

const store = setupStore();

describe('test input panel', () => {
  test('renderInputElement', () => {
    render(
      <reduxTools.Provider store={store}>
        <InputSearchByName />
      </reduxTools.Provider>
    );

    expect(screen.getByTestId('searchName')).toBeInTheDocument();
  });
  const testInputValue = 'test';

  describe('Testing Base property', () => {
    let input: HTMLInputElement;
    beforeEach(() => {
      render(
        <reduxTools.Provider store={store}>
          <InputSearchByName />
        </reduxTools.Provider>
      );
      input = screen.getByTestId('searchName');
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

    test('test submit function on submit with saving value', async () => {
      const formName = await screen.findByTestId('formNameTest');
      fireEvent.change(input, {
        target: {
          value: testInputValue,
        },
      });
      fireEvent.submit(formName);

      expect(input.value).toBe(testInputValue);
    });
  });
});
