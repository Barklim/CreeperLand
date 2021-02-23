import React from 'react';
import { PaletteColor } from 'styles/theme';
import { icons, IconType } from '../icons';
import { Lines, Wrap, Icon, Content, Value, Title } from './styles';

export interface ChanceProps {
  icon: IconType;
  title: string;
  value: string;
  lines?: PaletteColor;
}

const Chance: React.FC<ChanceProps> = ({
  icon,
  title,
  value,
  lines = 'lime',
}) => {
  return (
    <Wrap>
      <Lines color={lines} />

      <Content>
        <Title>{title}</Title>
        <Icon {...icons[icon]} />
        <Value>{value}</Value>
      </Content>
    </Wrap>
  );
};

export default Chance;
