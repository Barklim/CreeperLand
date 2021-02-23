import React from 'react';
import Typography from 'components/Typography';
import joystick from 'assets/img/joystick.png';
import {
  Wrap,
  Text,
  Wellcome,
  Description,
  Data,
  Ip,
  Button,
  Joystick,
} from './styles';

const Content: React.FC = () => (
  <Wrap>
    <Text>
      <Wellcome component="h1">
        Добро пожаловать на
        <Typography color="lime">CreeperLand!</Typography>
      </Wellcome>

      <Description>Сервер Minecraft, который всегда обновляется!</Description>

      <Data>
        <Ip>IP: mc.creeperland.ru</Ip>

        <Typography variant="p1" color="lime_2">
          Версия: 1.16.2
        </Typography>
      </Data>

      <Button>Начать играть!</Button>
    </Text>
    <div>
      <Joystick src={joystick} alt="joystick" />
    </div>
  </Wrap>
);

export default Content;
