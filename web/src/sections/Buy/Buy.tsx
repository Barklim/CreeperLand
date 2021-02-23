import React from 'react';
import Shop from './Shop';
import Sale from './Sale';
import Cases from './Cases';
import { Wrap, Background } from './styles';

const Buy: React.FC = () => (
  <Background>
    <Wrap>
      <Shop />
      <Sale />
      <Cases />
    </Wrap>
  </Background>
);

export default Buy;
