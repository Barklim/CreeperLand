import React from 'react';
import { icons } from '../icons';
import { CommonCardProps } from '../shared';
import { Wrap, Title, Icon, Value } from './styles';

const Shop: React.FC<CommonCardProps> = ({
  title,
  icon,
  value,
  onClick,
  ...props
}) => (
  <Wrap onClick={onClick}>
    {/* <Wrap {...props}></Wrap> */}
    <Title>{title}</Title>
    <Icon {...icons[icon]} />
    <Value>{value}</Value>
  </Wrap>
);

export default Shop;
