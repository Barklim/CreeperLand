import * as React from 'react';
import styled from 'styled-components/macro';

export function Logo() {
  return (
    <Wrapper>
      <Title>CREEPER LAND</Title>
      <Description>mc.creeperland.ru</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  /* font-size: 1.25rem; */
  font-size: 16px;

  font-weight: 500;
  margin-right: 1rem;
`;

const Description = styled.div`
  /* font-size: 0.875rem; */
  font-size: 14px;

  font-weight: normal;
`;
