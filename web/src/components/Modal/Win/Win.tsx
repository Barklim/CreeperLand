import React from 'react';
import Card from 'components/Card/Chance';
import { IconType } from 'components/Card/icons';
import { PaletteColor } from 'styles/theme';
import {
  Wrap,
  Content,
  Congratulations,
  CardWrap,
  Value,
  Button,
  XButton,
  Backdrop,
} from './styles';

export interface WinProps {
  onClose: () => void;
  show: boolean;
  color: PaletteColor;
  description: string;
  className?: string;
  card: {
    title: string;
    icon: IconType;
    value: string;
  };
}

const Win: React.FC<WinProps> = ({
  show,
  onClose,
  color,
  className,
  card,
  description,
}) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose} />

      <Wrap show={show} className={className}>
        <XButton onClick={onClose} />

        <Content color={color}>
          <Congratulations>ВЫ ВЫИГРАЛИ!</Congratulations>

          <CardWrap>
            <Card {...card} lines={color} />
          </CardWrap>

          <Value color={color}>{description}</Value>
        </Content>

        <Button onClick={onClose}>Продолжить</Button>
      </Wrap>
    </>
  );
};

export default Win;
