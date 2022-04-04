import React, { ReactNode } from 'react';

import './index.scss';

interface ModalProps {
  children: ReactNode;
  isVisible: boolean;
  handleclickOutside?: () => void;
}

const Modal = (props: ModalProps): JSX.Element => {
  const { children, isVisible, handleclickOutside } = props;

  return (
    <>
      {isVisible && (
        <div
          onClick={(e: any) =>
            e.target.classList.contains('modal') &&
            handleclickOutside &&
            handleclickOutside()
          }
          className="modal"
        >
          {children}
        </div>
      )}
    </>
  );
};

export { Modal };
