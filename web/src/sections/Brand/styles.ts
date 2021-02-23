import Typography from 'components/Typography';
import styled from 'styled-components';
import { media, rem } from 'styles/helpers';

export const Wrap = styled.div`
  display: flex;
`;

export const Data = styled.div`
  margin-left: 10px;
`;

export const Title = styled(Typography).attrs({
  variant: 'p2',
  weight: '500',
  color: 'white',
})`
  ${media.max('mobile')} {
    font-size: ${rem(12)};
    line-height: ${rem(13)};
  }
`;

export const Ip = styled(Typography).attrs({
  variant: 'p3',
  color: 'lime',
})`
  ${media.max('mobile')} {
    font-size: ${rem(10)};
    line-height: ${rem(12)};
  }
`;
