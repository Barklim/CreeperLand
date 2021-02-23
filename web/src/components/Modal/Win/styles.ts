import Typography from 'components/Typography';
import ContainedButton from 'components/Button/Contained';
import styled, { css } from 'styled-components';
import { color, media, rem } from 'styles/helpers';
import { PaletteColor } from 'styles/theme';
import { TopBackdrop, X, TopWrap } from '../styles';

interface Color {
  color: PaletteColor;
}

export const Wrap = styled(TopWrap)`
  width: 552px;
  height: 545px;

  padding: 33px 72px 46px 71px;

  background-color: ${color('gray')};

  ${media.max('mobile')} {
    padding: 60px 19px 100px;

    background-color: ${color('black')};
  }
`;

export const Content = styled.div<Color>`
  background: radial-gradient(
    50% 50% at 50% 50%,
    ${p =>
        css`
          ${color(p.color)}
        `}
      0%,
    rgba(249, 64, 64, 0.02) 100%
  );
`;

export const Congratulations = styled(Typography).attrs({
  variant: 'h1',
})`
  padding-top: 43px;

  text-align: center;

  ${media.max('mobile')} {
    padding-top: 32px;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 33px;

  ${media.max('mobile')} {
    padding-top: 23px;
  }
`;

export const Value = styled(Typography).attrs({
  variant: 'h1',
})<Color>`
  padding-top: 33px;
  padding-bottom: 26px;

  color: ${color('white')};
  text-align: center;

  ${media.max('mobile')} {
    padding-top: 27px;
    padding-bottom: 16px;

    color: ${p =>
      css`
        ${color(p.color)}
      `};
  }
`;

export const Button = styled(ContainedButton)`
  margin: 7px auto 0;
  padding: 14px 95px;

  font-weight: 500;
  font-size: ${rem(18)};
  line-height: ${rem(21)};

  ${media.max('mobile')} {
    padding: 9px 60px;

    font-size: ${rem(14)};
    line-height: ${rem(17)};
  }
`;

export const XButton = styled(X)`
  position: absolute;
  top: 34px;
  right: 29px;
`;

export const Backdrop = styled(TopBackdrop)`
  background-color: ${color('black')};
`;
