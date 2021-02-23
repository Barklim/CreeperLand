import styled from 'styled-components';
import logo from 'assets/img/logo.png';
import { media } from 'styles/helpers';

const Logo = styled.img.attrs({
  src: logo,
  alt: 'creeper land',
})`
  display: block;
  width: 34px;
  height: 34px;

  ${media.max('mobile')} {
    width: 24px;
    height: 24px;
  }
`;

export default Logo;
