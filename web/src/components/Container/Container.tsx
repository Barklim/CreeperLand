import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 934px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 958px) {
    width: 100%;
    max-width: 100%;
    padding-right: 24px;
    padding-left: 24px;
  }
`;

export default Container;
