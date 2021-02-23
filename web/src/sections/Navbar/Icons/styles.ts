import styled from 'styled-components';
import { color, transition } from 'styles/helpers';
import { Modal } from '../shared';

export const Wrap = styled.div<{ modal?: Modal }>`
  display: flex;
  align-items: center;
  margin-left: ${p => (p.modal ? '0' : '27px')};
`;

export const Icon = styled.a`
  display: flex;

  path {
    transition: ${transition('primary')};

    fill: ${color('lime')};
  }

  &:hover path {
    fill: ${color('white')};
  }

  &:not(:first-child) {
    margin-left: 17px;
  }
`;
