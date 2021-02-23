import Typography from 'components/Typography';
import styled from 'styled-components';
import { media } from 'styles/helpers';

export const Wrap = styled.div`
  padding-bottom: 200px;

  ${media.max('mobile')} {
    padding-bottom: 65px;
  }
`;

export const Title = styled(Typography).attrs({
  variant: 'h2',
  color: 'black',
})`
  margin-top: 36px;
  margin-bottom: 25px;

  text-align: center;

  ${media.max('mobile')} {
    margin-top: 19px;
    margin-bottom: 15px;
  }
`;

export const Cases = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-right: -18px;
  margin-bottom: -38px;

  > * {
    margin-right: 18px;
    margin-bottom: 38px;
  }

  ${media.max('mobile')} {
    margin-right: -13px;
    margin-bottom: -13px;

    > * {
      margin-right: 13px;
      margin-bottom: 13px;
    }
  }
`;
