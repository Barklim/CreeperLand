import React from 'react';
import latestBuysMock from 'mock/latestBuys.json';
import Container from 'components/Container';
import Card from 'components/Card/Buy';
import { IconType } from 'components/Card/icons';
import { Wrap, Title, Cards, CardsWrap } from './styles';

const LatestBuys: React.FC = () => (
  <Wrap>
    <Container>
      <Title>Последние покупки</Title>

      <CardsWrap>
        <Cards>
          {latestBuysMock.map(({ icon }, i) => (
            <Card key={i} icon={icon as IconType} />
          ))}
        </Cards>
      </CardsWrap>
    </Container>
  </Wrap>
);

export default LatestBuys;
