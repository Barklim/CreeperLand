import IconButton from 'components/IconButton';
import ButtonComponent from 'components/Button/Outlined';
import styled from 'styled-components';
import { media, transition, color } from 'styles/helpers';

// for `${Wrap}` in Navbar Wrap
export const Wrap = styled.div``;

export const Hidden = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.min('$navbar')} {
    display: none;
  }
`;

export const BurgerButton = styled(IconButton)`
  path {
    transition: ${transition('primary')};
  }

  &:hover path {
    stroke: ${color('lime')};
  }
`;

export const Nav = styled.nav`
  display: flex;

  ${media.max('$navbar')} {
    display: none;
  }
`;

export const Button = styled(ButtonComponent)`
  font-weight: 500;

  margin: 20px 0 27px 27px;
  padding: 14px 50px;

  ${media.max('mobile')} {
    margin: 14px 0 23px;
    padding: 9px 55px;
  }
`;
