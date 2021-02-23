import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as VkIcon } from './assets/vk-icon.svg';
import { ReactComponent as DiscIcon } from './assets/disc-icon.svg';
import { Button } from 'react-bootstrap';
import { LoginModal } from '../../containers/LoginModal';
import { RegisterModal } from '../../containers/RegisterModal';
import { ChangePasModal } from '../../containers/ChangePasModal';
import { ForgotPasModal } from '../../containers/ForgotPasModal';
import { useMeQuery, useLogoutMutation } from 'generated/graphql';
import { isServer } from 'utils/isServer';

import { useDispatch } from 'react-redux';
import { loginModalActions } from '../LoginModal/slice';

export function Nav() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const loginModal = useSelector(selectLoginModal);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { changeModal } = loginModalActions;

  const showModal = () => dispatch(changeModal(true));

  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });

  let body: any = null;

  // data is loading
  if (fetching) {
    // user not logged in
  } else if (!data?.me) {
    body = (
      <div>
        <Button variant="outline-success" onClick={showModal}>
          Войти
        </Button>
      </div>
    );
  } else {
    body = (
      <div>
        {data.me.username}
        <Button
          onClick={() => {
            logout();
          }}
          // isLoading={logoutFetching}
          // disabled={isSubmitting}
          disabled={logoutFetching}
          variant="success"
        >
          logout1
        </Button>
      </div>
    );
  }

  return (
    <Wrapper>
      <Item target="_blank" title="Donat" rel="noopener noreferrer">
        Донат
      </Item>
      <Item target="_blank" title="Donat rules" rel="noopener noreferrer">
        Правила
      </Item>
      <Item target="_blank" title="Contacts" rel="noopener noreferrer">
        Контакты
      </Item>
      <Item>
        <VkIcon />
      </Item>
      <Item>
        <DiscIcon />
      </Item>
      <Item>{body}</Item>
      <LoginModal />
      <RegisterModal />
      <RegisterModal />
      <ChangePasModal />
      <ForgotPasModal />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
