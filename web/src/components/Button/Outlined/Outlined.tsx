import styled from 'styled-components';
import { color } from 'styles/helpers';
import { Button } from '../styles';

const Outlined = styled(Button)`
  color: ${color('white')};

  background-color: transparent;
  border: 2px solid ${color('lime')};

  &:hover {
    color: ${color('lime')};
  }
`;

export default Outlined;
