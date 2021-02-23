import React from 'react';
import Logo from 'components/Logo';
import { Link } from 'react-router-dom';
import { Wrap, Data, Title, Ip } from './styles';

const Brand: React.FC = () => (
  <Link to="/">
    <Wrap>
      <Logo />

      <Data>
        <Title>CREEPER LAND</Title>
        <Ip>mc.creeperland.ru</Ip>
      </Data>
    </Wrap>
  </Link>
);

export default Brand;
