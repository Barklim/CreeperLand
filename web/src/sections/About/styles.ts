import styled from 'styled-components';
import ComponentContainer from 'components/Container';
import aboutLines from 'assets/img/about__lines.svg';
import { color, media } from 'styles/helpers';

export const Wrap = styled.div`
  position: relative;

  margin-bottom: 20px;

  background-color: ${color('black')};
  box-shadow: 0 4px 4px ${color('$aboutShadow')};

  ${media.max('laptop')} {
    margin-bottom: 0;
  }
`;

export const Container = styled(ComponentContainer)`
  background-image: url('${aboutLines}');
  background-repeat: repeat;

  ${media.max('laptop')} {
    background-image: none;
  }
`;
