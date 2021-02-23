import styled from 'styled-components';
import { color } from 'styles/helpers';
import { Button } from '../styles';

const Contained = styled(Button)`
  color: ${color('white')};

  background-color: ${color('lime_3')};

  &:hover {
    color: ${color('black')};
  }
`;

export default Contained;
