import React from 'react';
import Links from '../Links';
import Icons from '../Icons';
import { ToggleModal } from 'types/props';
import { ReactComponent as Burger } from 'assets/svg/burger.svg';
import { IconsType, LinksType } from '../shared';
import { Hidden, BurgerButton, Nav, Wrap, Button } from './styles';

// import { useDispatch } from 'react-redux';
// import { loginModalActions } from '../LoginModal/slice';
// import { loginModalActions } from 'app/containers/LoginModal/slice';

interface ContentProps {
  links: LinksType;
  icons: IconsType;
  openModal: ToggleModal;
  footer?: boolean;
  className?: string;
}

// const dispatch = useDispatch();
// const { changeModal } = loginModalActions;
// const openLoginModal = () => dispatch(changeModal(true));

const Content: React.FC<ContentProps> = ({
  links,
  icons,
  openModal,
  footer,
  className,
}) => (
  <Wrap className={className}>
    <Nav>
      <Links links={links} />
      <Icons icons={icons} />
      {!footer ? <Button>Войти</Button> : null}
    </Nav>

    <Hidden>
      {footer ? (
        <Icons modal icons={icons} />
      ) : (
        <BurgerButton onClick={openModal}>
          <Burger />
        </BurgerButton>
      )}
    </Hidden>
  </Wrap>
);

export default Content;
