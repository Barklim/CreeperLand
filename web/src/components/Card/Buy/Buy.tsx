import React from 'react';
import { icons, IconType } from 'components/Card/icons';
import { Wrap, Icon } from './styles';

export interface BuyProps {
  icon: IconType | 'loader';
  roulette?: boolean;
  width?: number;
}

const Buy: React.FC<BuyProps> = ({ icon, ...props }) => (
  <Wrap {...props}>
    {icon !== 'loader' ? <Icon {...icons[icon]} /> : <Icon as="div" />}
  </Wrap>
);

export default Buy;
