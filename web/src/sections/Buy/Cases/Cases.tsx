import React from 'react';
import Title from '../Title';
import shopCasesMock from 'mock/shopCases.json';
import Card from 'components/Card/Case';
import { IconType } from 'components/Card/icons';
import { Wrap, CasesWrap } from './styles';
import { Link } from 'react-router-dom';

const Cases: React.FC = () => (
  <Wrap>
    <Title type="case">Кейсы</Title>

    <CasesWrap>
      {shopCasesMock.map(({ icon, ...rest }, i) => (
        <Link to="/case/123" key={i}>
          <Card icon={icon as IconType} {...rest} />
        </Link>
      ))}
    </CasesWrap>
  </Wrap>
);

export default Cases;
