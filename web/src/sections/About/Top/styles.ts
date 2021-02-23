import PeopleCard from 'components/PeopleCard';
import Typography from 'components/Typography';
import styled from 'styled-components';
import { media } from 'styles/helpers';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.max('tablet')} {
    flex-flow: column wrap;
    align-items: center;
  }
`;

export const Left = styled.div`
  max-width: 411px;
  padding-top: 45px;

  ${media.max('tablet')} {
    padding-top: 24px;
  }
`;

export const LeftTitle = styled(Typography).attrs({
  variant: 'h2',
  color: 'white',
  weight: '500',
})`
  padding-bottom: 12px;
`;

export const Ip = styled.div`
  display: flex;
  padding-top: 15px;

  > *:first-child {
    margin-right: 37px;
  }

  ${media.max('tablet')} {
    justify-content: center;
  }
`;

export const Right = styled.div`
  display: flex;
  margin-right: -26px;

  padding-top: 90px;

  ${media.max('tablet')} {
    justify-content: space-around;

    width: 100%;
    margin-right: 0;
    padding-top: 25px;
  }
`;

export const RightCard = styled(PeopleCard)`
  margin-right: 26px;

  &:last-child {
    padding-right: 19px;
  }

  ${media.max('tablet')} {
    margin-right: 0;
  }
`;
