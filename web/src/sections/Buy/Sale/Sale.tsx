import React from 'react';
import Typography from 'components/Typography';
import { Wrap, Price } from './styles';

const Sale: React.FC = () => (
  <Wrap>
    <Typography variant="h3" color="white" weight="500">
      Статус Dragon со скидкой 20%
    </Typography>

    <Price>ВСЕГО за 999 руб.</Price>
  </Wrap>
);

export default Sale;
