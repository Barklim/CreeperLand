import React from 'react';
import { icons } from '../icons';
import { CommonCardProps } from '../shared';
import { Wrap, Title, Icon, Value } from './styles';

const Case: React.FC<CommonCardProps> = ({ title, icon, value, ...rest }) => (
  <Wrap>
    {/* <Wrap {...rest}></Wrap> */}
    <Title>{title}</Title>
    <Icon {...icons[icon]} />
    <Value>{value}</Value>
  </Wrap>
);

export default Case;
