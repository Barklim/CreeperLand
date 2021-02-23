import Typography from 'components/Typography';
import ButtonComponent from 'components/Button/Contained';
import styled from 'styled-components';
import { media, rem } from 'styles/helpers';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.max('laptop')} {
    flex-flow: column wrap;
  }
`;

export const Wellcome = styled(Typography).attrs({
  variant: 'h1',
  color: 'white',
})`
  margin-bottom: 21px;

  ${media.max('mobile')} {
    margin-bottom: 10px;
  }
`;

export const Description = styled(Typography).attrs({
  variant: 'p1',
  color: 'white',
})`
  margin-bottom: 16px;

  ${media.max('mobile')} {
    width: 100%;
    max-width: 203px;
    margin-right: auto;
    margin-bottom: 14px;
    margin-left: auto;
  }
`;

export const Text = styled.div`
  max-width: 430px;
  padding-top: 77px;
  padding-bottom: 100px;

  ${media.max('laptop')} {
    margin-right: auto;
    margin-left: auto;
    padding-top: 50px;
    padding-bottom: 0;

    text-align: center;
  }

  ${media.max('mobile')} {
    padding-top: 28px;
  }
`;

export const Joystick = styled.img`
  display: block;
  width: 394px;
  height: 398px;

  ${media.max('laptop')} {
    margin-right: auto;
    margin-left: auto;
  }

  ${media.max('mobile')} {
    width: 100%;
    max-width: 200px;
    height: auto;
    max-height: 200px;
  }
`;

export const Button = styled(ButtonComponent)`
  font-weight: 500;
  font-size: ${rem(16)};
  line-height: ${rem(19)};

  ${media.max('laptop')} {
    margin-right: auto;
    margin-left: auto;
  }

  ${media.max('mobile')} {
    width: 100%;
  }
`;

export const Ip = styled(Typography).attrs({
  variant: 'p1',
  color: 'lime_2',
})`
  margin-right: 50px;

  ${media.max('laptop')} {
    margin-right: 0;
  }
`;

export const Data = styled.div`
  display: flex;
  margin-bottom: 23px;

  ${media.max('laptop')} {
    justify-content: space-between;
    margin-bottom: 18px;
  }
`;
