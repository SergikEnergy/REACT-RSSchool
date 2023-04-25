import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import closeImg from '../../assets/img/close_icon.jpg';

interface ModalWindowProps {
  children?: ReactNode;
  isOpen: boolean;
  closeWindow: () => void;
}

export default function ModalWindow(props: ModalWindowProps) {
  const { isOpen, closeWindow, children } = props;

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      closeWindow();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);
    return function cleanUp() {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  });

  return createPortal(
    <div data-testid="testModalWindow" className={`modal__overlay ${isOpen ? 'active' : ''}`} role="presentation" onClick={closeWindow}>
      <div
        role="presentation"
        className={`modal__content ${isOpen ? 'active' : ''}`}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
          event.stopPropagation();
        }}
      >
        <div className="modal__header">
          <div data-testid="testCloseEvent" role="presentation" className="modal__close" onClick={closeWindow}>
            <img src={closeImg} alt="close" />
          </div>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>,
    document.querySelector('.body') as HTMLElement
  );
}
