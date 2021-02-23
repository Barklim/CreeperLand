import Typography from 'components/Typography';
import styled from 'styled-components';
import { media } from 'styles/helpers';

export const Wrap = styled.div`
  margin-top: 26px;
`;

export const Title = styled(Typography).attrs({
  variant: 'h2',
  color: 'black',
})`
  margin-bottom: 14px;

  ${media.max('mobile')} {
    margin-bottom: 17px;
  }
`;

export const DropDown = styled;
