import React, { useState } from 'react';
import Brand from '../Brand';
import Content from './Content';
import Menu from './Menu';
import { ReactComponent as Discord } from 'assets/svg/discord.svg';
import { ReactComponent as Vk } from 'assets/svg/vk.svg';
import { Div } from 'types/props';
import { IconsType, LinksType } from './shared';
import { Wrap } from './styles';

const links: LinksType = [
  {
    to: '/',
    text: 'Донат',
  },
  {
    to: '/',
    text: 'Правила',
  },
  {
    to: '/',
    text: 'Контакты',
  },
];

const icons: IconsType = [
  {
    href: 'https://vk.com',
    icon: <Vk />,
  },
  {
    href: 'https://discord.com',
    icon: <Discord />,
  },
];

interface NavbarProps extends Div {
  footer?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ className, footer, ...rest }) => {
  const [show, setShow] = useState(false);

  const openMenu = () => setShow(true);
  const closeMenu = () => setShow(false);

  return (
    <>
      <Wrap footer={footer}>
        {/* <Wrap footer={footer} {...rest}> */}
        <Brand />

        <Content
          footer={footer}
          openModal={openMenu}
          links={links}
          icons={icons}
        />
      </Wrap>

      {!footer && (
        <Menu show={show} closeMenu={closeMenu} links={links} icons={icons} />
      )}
    </>
  );
};

export default Navbar;
