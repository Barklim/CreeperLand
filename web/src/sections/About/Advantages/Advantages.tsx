import React from 'react';
import Typography from 'components/Typography';
import advantagesMockData from 'mock/advantages.json';
import Card, { IconType } from 'components/Card/About';
import { Wrap, Cards } from './styles';

const Advantages: React.FC = () => (
  <Wrap>
    <Typography variant="h2" color="white" weight="500">
      Преимущества
    </Typography>

    <Cards>
      {advantagesMockData.map(({ icon, ...rest }, i) => (
        <Card key={i} icon={icon as IconType} {...rest} />
      ))}
    </Cards>
  </Wrap>
);

export default Advantages;
