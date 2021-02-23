import React from 'react';
import descriptionPrivilege from 'mock/descriptionPrivilege.json';
import { DropdownList } from '../styles';
import { Wrap, Title } from './styles';

const Privilege: React.FC = () => (
  <Wrap>
    <Title>Описание привилегий</Title>
    {descriptionPrivilege.map(({ title, items }, i) => (
      <DropdownList key={i} title={title} items={items} />
    ))}
  </Wrap>
);

export default Privilege;
