import { describe, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import ModalWindow from './ModalWindow';

describe('test Modal Window', () => {
  test('render Modal with isOpen props', () => {
    render(
      <ModalWindow isOpen closeWindow={vi.fn()}>
        Some Text
      </ModalWindow>
    );
    const modalWrapper = screen.getByTestId('testModalWindow') as HTMLDivElement;
    expect(modalWrapper).toBeInTheDocument();
    expect(modalWrapper).toHaveClass('active');
  });

  test('render Modal without isOpen props', () => {
    render(
      <ModalWindow isOpen={false} closeWindow={vi.fn()}>
        Some Text
      </ModalWindow>
    );
    const modalWrapper = screen.getByTestId('testModalWindow') as HTMLDivElement;
    expect(modalWrapper).toBeInTheDocument();
    expect(modalWrapper.classList.contains('active')).toBe(false);
  });

  test('click for close window', () => {
    const cb = vi.fn();
    render(
      <ModalWindow isOpen closeWindow={cb}>
        Some Text
      </ModalWindow>
    );
    const closeButton = screen.getByTestId('testCloseEvent') as HTMLDivElement;
    fireEvent.click(closeButton);

    expect(cb).toHaveBeenCalled();
  });
});
