import React from 'react';
import Brand from '../../Brand';
import IconLinks from '../Icons';
import NavLinks from '../Links';
import { ToggleModal } from 'types/props';
import { IconsType, LinksType, Modal as ShowType } from '../shared';
import { Menu as StyledMenu, ListTitle, Top, Bottom } from './styles';

interface ModalProps {
  show: ShowType;
  closeMenu: ToggleModal;
  links: LinksType;
  icons: IconsType;
}

const Menu: React.FC<ModalProps> = ({ show, closeMenu, links, icons }) => (
  <StyledMenu show={show} onClose={closeMenu}>
    <Top>
      <ListTitle>Меню</ListTitle>
      <NavLinks links={links} modal />
    </Top>

    <Bottom>
      <Brand />
      <IconLinks icons={icons} modal />
    </Bottom>
  </StyledMenu>
);

export default Menu;
