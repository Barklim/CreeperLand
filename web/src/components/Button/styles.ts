import styled from 'styled-components';
import { rem, transition } from 'styles/helpers';

export const Button = styled.button`
  padding: 14px 52px;

  font-size: ${rem(16)};
  line-height: ${rem(19)};

  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  transition: ${transition('primary')};
`;
