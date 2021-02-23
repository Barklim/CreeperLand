import React from 'react';
import descriptionRulest from 'mock/descriptionRules.json';
import { Title, Wrap } from './styles';
import { DropdownList } from '../styles';

const Rules: React.FC = () => (
  <Wrap>
    <Title>Правила</Title>

    {descriptionRulest.map(({ title, items }, i) => (
      <DropdownList key={i} beforeTitleIndex={i} title={title} items={items} />
    ))}
  </Wrap>
);

export default Rules;
