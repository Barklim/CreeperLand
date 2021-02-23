import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 27px;
`;

export const CasesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -20px;
  margin-bottom: -20px;

  > * {
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;
