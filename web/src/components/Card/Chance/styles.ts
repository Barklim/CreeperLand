import Typography from 'components/Typography';
import styled, { css } from 'styled-components';
import { ReactComponent as LinesRaw } from 'assets/svg/chance__lines.svg';
import { color, media, zIndex, rem } from 'styles/helpers';
import { PaletteColor } from 'styles/theme';

export const Wrap = styled.div`
  position: relative;

  width: 220px;

  background-color: ${color('black')};
  border-radius: 5px;

  ${media.max('mobile')} {
    width: 130px;
  }
`;

interface LinesProps {
  color: PaletteColor;
}

export const Lines = styled(LinesRaw)<LinesProps>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  .chance__lines_svg__fill {
    fill: ${p =>
      css`
        ${color(p.color)}
      `};
  }

  .chance__lines_svg__stroke {
    stroke: ${p =>
      css`
        ${color(p.color)}
      `};
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: ${zIndex('card__content')};

  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

export const Title = styled(Typography).attrs({
  variant: 'h4',
  color: 'white',
})`
  margin-top: 18px;

  ${media.max('mobile')} {
    margin-top: 10px;

    font-size: ${rem(9)};
    line-height: ${rem(11)};
  }
`;

export const Icon = styled.img`
  display: block;

  width: 75px;
  height: 75px;

  margin-top: 25px;

  ${media.max('mobile')} {
    width: 44px;
    height: 44px;
    margin-top: 16px;
  }
`;

export const Value = styled(Typography).attrs({
  variant: 'h4',
  color: 'white',
})`
  margin-top: 19px;
  margin-bottom: 19px;

  ${media.max('mobile')} {
    margin-top: 11px;
    margin-bottom: 11px;

    font-size: ${rem(9)};
    line-height: ${rem(11)};
  }
`;
