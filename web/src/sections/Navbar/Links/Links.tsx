import React from 'react';
import { Link } from 'react-router-dom';
import { LinksType, Modal } from '../shared';
import { Wrap, LinkWrap, LinkText } from './styles';

interface NavLinksProps {
  links: LinksType;
  modal?: Modal;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, modal }) => (
  <Wrap modal={modal}>
    {links.map(({ to, text }, i) => (
      <LinkWrap key={i}>
        <Link to={to}>
          <LinkText>{text}</LinkText>
        </Link>
      </LinkWrap>
    ))}
  </Wrap>
);

export default NavLinks;
