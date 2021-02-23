import styled from 'styled-components';
import { media } from 'styles/helpers';

export const Wrap = styled.div`
  margin-top: 47px;

  ${media.max('mobile')} {
    margin-top: 29px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -20px;
  margin-bottom: -20px;

  transform: translateY(30px);

  > * {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  ${media.max('mobile')} {
    margin-top: 20px;
    margin-right: -12px;
    margin-bottom: -12px;

    transform: translateY(0);

    > * {
      margin-right: 12px;
      margin-bottom: 12px;
    }
  }
`;
