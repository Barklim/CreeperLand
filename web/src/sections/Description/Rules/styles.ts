import Typography from 'components/Typography';
import styled from 'styled-components';
import { media } from 'styles/helpers';

export const Wrap = styled.div`
  padding-top: 41px;

  ${media.max('mobile')} {
    padding-top: 25px;
  }
`;

export const Title = styled(Typography).attrs({
  variant: 'h2',
  color: 'black',
})`
  padding-bottom: 17px;
`;
