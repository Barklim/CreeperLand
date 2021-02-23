import React from 'react';
import Typography from 'components/Typography';
import { Wrap, Left, LeftTitle, Ip, Right, RightCard } from './styles';

const Top: React.FC = () => (
  <Wrap>
    <Left>
      <LeftTitle>О сервере</LeftTitle>

      <Typography variant="p2" color="white">
        Сервер Minecraft на всегда новой версии, на данный момент - 1.16.2 Всё
        сделано для комфортной игры и без имбалансных донатов, которые ломают
        всю систему. Стоит на отличном выделенном сервере. Много игровых режимов
        на любой вкус.
      </Typography>

      <Ip>
        <Typography variant="p1" color="lime_3">
          Версия: 1.16.2
        </Typography>
        <Typography variant="p1" color="lime_3">
          IP: mc.creeperland.ru
        </Typography>
      </Ip>
    </Left>

    <Right>
      <RightCard variant="white" text="Рекорд: 345" />
      <RightCard variant="green" text="Онлайн: 234" />
    </Right>
  </Wrap>
);

export default Top;
