import React from 'react';
import Chance from 'components/Card/Chance';
import Container from 'components/Container';
import Loader from 'components/Loader';
import { Wrap, Title, Cases } from './styles';
import { Status, Item } from '../shared';

interface ContentProps {
  status: Status;
  item: Item;
}

const Content: React.FC<ContentProps> = ({ status, item }) => {
  const content =
    status === 'loading' ? (
      <Loader color="black" />
    ) : (
      item?.items.map((chance, i) => <Chance key={i} {...chance} />)
    );

  return (
    <Wrap>
      <Container>
        <Title>Содержимое кейса</Title>

        <Cases>{content}</Cases>
      </Container>
    </Wrap>
  );
};

export default Content;
