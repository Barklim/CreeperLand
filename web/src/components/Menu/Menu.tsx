import React from 'react';
import { ReactComponent as XIcon } from 'assets/svg/x.svg';
import { Content, Inner, XButton, Backdrop } from './styles';

export interface ModalProps {
  onClose?: () => void;
  show: boolean;
  className?: string;
}

const Menu: React.FC<ModalProps> = ({ onClose, children, className, show }) => {
  document.documentElement.style.overflow = show ? 'hidden' : '';

  return (
    <div className={className}>
      <Backdrop show={show} onClick={onClose} />

      <Inner show={show}>
        <div>
          <XButton onClick={onClose}>
            <XIcon />
          </XButton>
        </div>

        <Content>{children}</Content>
      </Inner>
    </div>
  );
};

export default Menu;
