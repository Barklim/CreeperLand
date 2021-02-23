import styled, { css } from 'styled-components';
import { ReactComponent as PeopleRounded } from 'assets/svg/people-rounded.svg';
import { color, media, rem } from 'styles/helpers';

export const Wrap = styled.div`
  ${media.max('mobile')} {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
`;

interface Variant {
  variant: 'white' | 'green';
}

export const Icon = styled(PeopleRounded)<Variant>`
  width: 81px;
  height: 81px;

  ${p =>
    p.variant === 'white' &&
    css`
      path {
        fill: ${color('white')};
      }

      circle {
        fill: ${color('gray')};
        stroke: ${color('white')};
      }
    `}

  ${p =>
    p.variant === 'green' &&
    css`
      path {
        fill: ${color('lime_3')};
      }

      circle {
        fill: ${color('green')};
        stroke: ${color('lime_3')};
      }
    `}

  ${media.max('mobile')} {
    width: 54px;
    height: 54px;
  }
`;

export const Text = styled.p<Variant>`
  margin: 0;
  padding: 9px 0 0;

  color: ${color('lime_3')};
  font-weight: 500;
  font-size: ${rem(20)};
  line-height: ${rem(24)};

  ${p =>
    p.variant === 'white' &&
    css`
      color: ${color('white')};
    `}
`;
