import styled from 'styled-components';
import cardLights from 'assets/img/card_lights.png';
import Typography from 'components/Typography';
import { media, rem, color, transition } from 'styles/helpers';

export const Title = styled(Typography).attrs({
  variant: 'h4',
})`
  padding-top: 19px;
  padding-bottom: 19px;

  ${media.max('mobile')} {
    padding-top: 15px;
    padding-bottom: 10px;

    font-size: ${rem(9)};
    line-height: ${rem(11)};
  }
`;

export const Value = styled(Typography).attrs({
  variant: 'h4',
})`
  padding-top: 19px;
  padding-bottom: 19px;

  ${media.max('mobile')} {
    padding-top: 10px;
    padding-bottom: 11px;

    font-size: ${rem(9)};
    line-height: ${rem(11)};
  }
`;

export const Icon = styled.img`
  display: block;
  width: 75px;
  height: 75px;

  ${media.max('mobile')} {
    width: 44px;
    height: 44px;
  }
`;

export const Wrap = styled.div`
  position: relative;

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 220px;

  color: ${color('black')};

  background-color: ${color('white_3')};
  border-radius: 5px;
  cursor: pointer;

  transition: ${transition('primary')};

  &:hover {
    top: -2px;

    color: ${color('white')};

    background-color: ${color('black')};
    background-image: url('${cardLights}');
    box-shadow: -2px -3px 6px rgba(91, 246, 79, 0.5),
      2px 3px 7px rgba(91, 246, 79, 0.5);

    ${Title},
    ${Value} {
      color: ${color('white')};
    }
  }

  ${media.max('mobile')} {
    width: 130px;
    height: 114px;

    background-size: cover;
  }
`;
