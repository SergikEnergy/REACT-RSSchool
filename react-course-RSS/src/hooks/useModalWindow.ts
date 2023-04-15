import { useState } from 'react';

const useModalWindow = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    toggle,
  };
};

export default useModalWindow;
