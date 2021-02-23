import Typography from 'components/Typography';
import styled from 'styled-components';
import { media } from 'styles/helpers';

export const Point = styled.div`
  margin-bottom: 27px;

  ${media.max('mobile')} {
    margin-bottom: 14px;
  }
`;

export const PointTitle = styled(Typography).attrs({
  variant: 'h3',
  color: 'black',
})`
  margin-bottom: 7px;

  ${media.max('mobile')} {
    margin-bottom: 5px;
  }
`;

export const Points = styled.div`
  margin-top: 31px;
  margin-bottom: -27px;

  ${media.max('mobile')} {
    margin-top: 14px;
    margin-bottom: -14px;
  }
`;
