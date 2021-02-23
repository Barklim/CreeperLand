import React from 'react';
import styled, { css } from 'styled-components';
import { fontSize } from 'styles/helpers';
import { PaletteColor } from 'styles/theme';

// h === header; p === paragraph
const sizes = {
  h1: fontSize({ fs: 36, ln: 43, mfs: 22, mln: 26 }),
  h2: fontSize({ fs: 28, ln: 33, mfs: 16, mln: 19 }),
  h3: fontSize({ fs: 24, ln: 28, mfs: 14, mln: 17 }),
  h4: fontSize({ fs: 16, ln: 19, mfs: 14, mln: 17 }),

  p1: fontSize({ fs: 18, ln: 21, mfs: 14, mln: 17 }),
  p2: fontSize({ fs: 16, ln: 19, mfs: 14, mln: 17 }),
  p3: fontSize({ fs: 14, ln: 17, mfs: 11, mln: 14 }),
};

const weights = {
  normal: '400',
  '400': '400',
  '500': '500',
  bold: '700',
  '700': '700',
  inherit: 'inherit',
};

const header = (content: ReturnType<typeof fontSize>) => css`
  font-weight: 500;
  ${content}
`;

const variants = {
  ...sizes,
  h1: header(sizes.h1),
  h2: header(sizes.h2),
  h3: header(sizes.h3),
  h4: header(sizes.h4),
};

interface TypoProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  color?: PaletteColor;
  weight?: keyof typeof weights;
}

const Typo = styled.p<TypoProps>`
  margin: 0;
  padding: 0;

  font-family: inherit;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  font-style: normal;
  line-height: inherit;

  ${p => p.variant && variants[p.variant]}
  ${p => p.size && sizes[p.size]}
  ${p => p.color && `color: ${p.theme.palette[p.color]};`}
  ${p => p.weight && `font-weight: ${weights[p.weight]};`}
`;

export interface TypographyProps extends TypoProps {
  component?: React.ElementType;
}

const Typography: React.FC<TypographyProps> = ({
  component = 'p',
  ...rest
}) => <Typo as={component} {...rest} />;

export default Typography;
