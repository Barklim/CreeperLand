import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import {
  Breakpoint,
  Font,
  Opacity,
  PaletteColor,
  Transition,
  ZIndex,
} from './theme';
import { StyledProps } from 'types/props';

export const rem = (px: number) => (p: StyledProps) =>
  `${px / p.theme.ROOT_FS}rem`;

export const media = {
  max: (breakpoint: Breakpoint) => (p: StyledProps) =>
    `@media (max-width: ${p.theme.breakpoints[breakpoint]})`,
  min: (breakpoint: Breakpoint) => (p: StyledProps) =>
    `@media (min-width: ${p.theme.breakpoints[breakpoint]})`,
};

// ---

/* eslint-enable @typescript-eslint/explicit-module-boundary-types */

// i don't know how to create good typing for getter factory function 19.01.21
export const breakpoint = (key: Breakpoint) => (p: StyledProps) =>
  p.theme.breakpoints[key];

export const transition = (key: Transition) => (p: StyledProps) =>
  p.theme.transtions[key];

export const font = (key: Font) => (p: StyledProps) => p.theme.fonts[key];

export const color = (key: PaletteColor) => (p: StyledProps) =>
  p.theme.palette[key];

export const opacity = (key: Opacity) => (p: StyledProps) =>
  p.theme.opacities[key];

export const zIndex = (key: ZIndex) => (p: StyledProps) =>
  p.theme.zIndexes[key];

/* eslint-enable @typescript-eslint/explicit-module-boundary-types */

// ---

interface FontSize {
  fs: number;
  ln: number;
  mfs: number;
  mln: number;

  rem?: boolean;
}

export const fontSize = ({
  fs,
  ln,
  mfs,
  mln,
}: FontSize): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
  font-size: ${rem(fs)};
  line-height: ${rem(ln)};

  ${media.max('mobile')} {
    font-size: ${rem(mfs)};
    line-height: ${rem(mln)};
  }
`;
