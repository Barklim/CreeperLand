import styled from 'styled-components';
import { color, rem, transition } from 'styles/helpers';
import { Modal } from '../shared';

export const Wrap = styled.div<{ modal?: Modal }>`
  display: flex;

  > *:not(:first-child) {
    margin-left: ${p => (p.modal ? '0' : '31px')};
  }

  ${p =>
    p.modal &&
    `
      flex-flow: column;

      > *:not(:last-child) {
        margin-bottom: 10px;
      }
    `}
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkText = styled.p`
  margin: 0;
  padding: 0;

  color: ${color('white')};
  font-weight: 500;
  font-size: ${rem(16)};
  line-height: ${rem(19)};

  transition: ${transition('primary')};

  &:hover {
    color: ${color('lime')};
  }
`;
