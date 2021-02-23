import styled from 'styled-components';
import cardLights from 'assets/img/card_lights.png';
import Typography from 'components/Typography';
import { color, media, rem } from 'styles/helpers';

export const Wrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 218px;
  height: 194px;

  background-color: ${color('gray')};
  background-image: url('${cardLights}');
  border-radius: 5px;

  ${media.max('mobile')} {
    width: 130px;
    height: 116px;

    background-size: cover;
  }
`;

export const IconWrap = styled.div`
  margin-top: auto;

  ${media.max('mobile')} {
    transform: scale(0.6);
  }
`;

export const Title = styled(Typography).attrs({
  variant: 'h4',
  weight: '500',
  color: 'white',
})`
  max-width: 129px;
  margin-top: 18px;
  margin-bottom: 22px;

  text-align: center;

  ${media.max('mobile')} {
    max-width: 70px;
    margin-top: 11px;
    margin-bottom: 14px;

    font-size: ${rem(10)};
    line-height: ${rem(11)};
  }
`;
