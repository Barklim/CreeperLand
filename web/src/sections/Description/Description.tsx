import React from 'react';
import Container from 'components/Container';
import HowToStart from './HowToStart';
import Privilege from './Privilege';
import Rules from './Rules';
import { Wrap } from './styles';

const Description: React.FC = () => (
  <Wrap>
    <Container>
      <HowToStart />
      <Rules />
      <Privilege />
    </Container>
  </Wrap>
);

export default Description;
