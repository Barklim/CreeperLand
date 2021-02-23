import styled from 'styled-components';
import bg from 'assets/img/buys__bg.png';
import Typography from 'components/Typography';
import { media } from 'styles/helpers';

export const Wrap = styled.div`
  overflow: hidden;

  background-image: url('${bg}');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled(Typography).attrs({
  variant: 'h2',
  weight: '500',
  color: 'white',
})`
  padding-top: 36px;
  padding-bottom: 17px;

  ${media.max('mobile')} {
    padding-top: 17px;
    padding-bottom: 8px;
  }
`;

export const CardsWrap = styled.div`
  position: relative;

  width: 100%;
  padding-bottom: 17px;

  ${media.max('mobile')} {
    padding-bottom: 27px;
  }
`;

export const Cards = styled.div`
  width: 3200px;

  margin-right: -10px;

  & > * {
    margin-right: 10px;
  }

  ${media.max('mobile')} {
    margin-right: -5px;

    & > * {
      margin-right: 5px;
    }
  }
`;
