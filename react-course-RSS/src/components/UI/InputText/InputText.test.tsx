import React, { createRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import InputText from './InputText';

describe('test input field', () => {
  const refTest: React.RefObject<HTMLInputElement> = createRef();
  const foo = vi.fn();
  const testIdInput = 'testInputText';
  const testIdError = 'errorInputId';
  beforeEach(() => {
    render(
      <InputText
        type="text"
        name="testText"
        refTo={refTest}
        id="textInput"
        onChange={foo}
        error
        label="someLabel"
        placeholder="placeholder text"
      />
    );
  });

  test('should be rendered on Page', () => {
    expect(screen.getByTestId(testIdInput)).toBeInTheDocument();
  });

  describe('test input type=text', () => {
    test('have attribute type text', () => {
      expect(screen.getByTestId(testIdInput)).toHaveAttribute('type', 'text');
    });
    test('custom placeholder works', () => {
      expect(screen.getByPlaceholderText(/placeholder/i)).toBeInTheDocument();
    });

    test('imitation input value onchange should work', async () => {
      const input = screen.getByRole('textbox') as HTMLInputElement;
      await userEvent.type(input, `testWord`);
      expect(foo).toHaveBeenCalledTimes('testWord'.length);
    });

    test('imitation error render', () => {
      expect(screen.getByTestId(testIdError)).toBeInTheDocument();
    });
  });
});
