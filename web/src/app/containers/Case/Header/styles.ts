import styled from 'styled-components';
import ButtonComponent from 'components/Button/Contained';
import Typography from 'components/Typography';
import { fontSize, media, rem } from 'styles/helpers';

export const Wrap = styled.div<{ loader?: boolean }>`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  min-height: 405px;
  padding-top: 55px;

  ${p => p.loader && 'justify-content: center; padding-top: 0;'}

  ${media.max('mobile')} {
    min-height: 245px;
    padding-top: 34px;
  }
`;

export const Title = styled(Typography).attrs({
  variant: 'h1',
})`
  ${media.max('mobile')} {
    font-size: ${rem(20)};
    line-height: ${rem(24)};
  }
`;

export const Icon = styled.img`
  width: 159px;
  height: 156px;
  margin-top: 12px;

  ${media.max('mobile')} {
    width: 90px;
    height: 88px;
    margin-top: 10px;
  }
`;

export const Button = styled(ButtonComponent)`
  ${fontSize({ fs: 18, ln: 21, mfs: 14, mln: 17 })}
  font-weight: 500;

  margin: 20px 0 27px;
  padding: 14px 94px;

  ${media.max('mobile')} {
    margin: 14px 0 23px;
    padding: 9px 55px;
  }
`;
