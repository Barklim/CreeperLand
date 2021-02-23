import styled from 'styled-components';
import caseLights from 'assets/img/case_lights.png';
import Typography from 'components/Typography';
import { color, media, transition } from 'styles/helpers';

export const Wrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 218px;
  height: 194px;

  background-color: ${color('white_3')};
  background-image: url('${caseLights}');
  border-radius: 5px;
  cursor: pointer;

  transition: ${transition('primary')};

  &:hover {
    background-color: ${color('white')};
  }

  ${media.max('mobile')} {
    width: 130px;
    height: 114px;

    background-size: cover;
  }
`;

export const Title = styled(Typography).attrs({
  variant: 'h4',
  color: 'black',
})`
  padding-top: 22px;
  padding-bottom: 13px;

  ${media.max('mobile')} {
    padding-top: 12px;
    padding-bottom: 10px;
  }
`;

export const Value = styled(Typography).attrs({
  variant: 'h4',
  color: 'black',
})`
  padding-top: 9px;
  padding-bottom: 15px;

  ${media.max('mobile')} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const Icon = styled.img`
  width: 94px;
  height: 94px;

  ${media.max('mobile')} {
    width: 38px;
    height: 38px;
  }
`;
