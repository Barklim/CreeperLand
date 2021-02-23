import React from 'react';
import { IconsType, Modal } from '../shared';
import { Wrap, Icon } from './styles';

interface IconLinksProps {
  icons: IconsType;
  modal?: Modal;
  className?: string;
}

const IconLinks: React.FC<IconLinksProps> = ({ icons, modal, className }) => (
  <Wrap className={className} modal={modal}>
    {icons.map(({ href, icon }, i) => (
      <Icon key={i} href={href}>
        {icon}
      </Icon>
    ))}
  </Wrap>
);

export default IconLinks;
