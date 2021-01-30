import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Formik } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRegisterMutation } from 'generated/graphql';
import { toErrorMap } from 'utils/toErrorMap';

import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, registerModalActions } from './slice';
import {
  reducer as reducerLogin,
  sliceKey as sliceKeyLogin,
  loginModalActions,
} from '../LoginModal/slice';
import { selectRegisterModal } from './selectors';
import { registerModalSaga } from './saga';
import { loginModalSaga } from '../LoginModal/saga';

interface Props {}

export function RegisterModal(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectReducer({ key: sliceKeyLogin, reducer: reducerLogin });
  useInjectSaga({ key: sliceKey, saga: registerModalSaga });
  useInjectSaga({ key: sliceKeyLogin, saga: loginModalSaga });

  const registerModal = useSelector(selectRegisterModal);
  const dispatch = useDispatch();

  const { changeModal } = registerModalActions;
  const changeModalLogin = loginModalActions.changeModal;

  const { t } = useTranslation();
  const btnText = t(messages.btnText);
  const btnOnLoad = t(messages.btnOnLoad);
  const headerLabel = t(messages.headerLabel);
  const labelLogin = t(messages.labelLogin);
  const labelPas = t(messages.labelPas);
  const labelRepPas = t(messages.labelRepPas);

  const [, register] = useRegisterMutation();

  const schema = yup.object({
    username: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
    repPas: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const [show, setShow] = useState(registerModal.show);

  const closeRegnModal = function () {
    setShow(false);
    dispatch(changeModal(false));
  };
  const handleShowLogin = function () {
    setShow(false);
    dispatch(changeModal(false));
    dispatch(changeModalLogin(true));
  };
  const handleClose = () => closeRegnModal();

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  useEffect(() => {
    registerModal.show ? setShow(true) : setShow(false);
  }, [registerModal.show]);

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing)}  */}
      <Modal show={show} onHide={handleClose} animation={true} centered>
        <Row className="justify-content-md-center">
          <Col md={{ span: 3, offset: 4 }}>
            <HeaderLabel>{headerLabel}</HeaderLabel>
          </Col>
          <Col md={{ span: 1, offset: 3 }}>
            <Button variant="link" onClick={handleClose}>
              X
            </Button>
          </Col>
        </Row>
        <Formik
          validationSchema={schema}
          // onSubmit={console.log}
          onSubmit={async (values, { setErrors }) => {
            await sleep(700);
            const response = await register({
              options: {
                username: values.username,
                email: values.email,
                password: values.password,
              },
            });

            if (response.data?.register.errors) {
              setErrors(toErrorMap(response.data.register.errors));
            } else if (response.data?.register.user) {
              handleClose();
            }
          }}
          initialValues={{
            username: '',
            email: '',
            password: '',
            repPas: '',
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
            isSubmitting,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md={{ span: 8, offset: 2 }}
                  controlId="validationFormik01"
                >
                  <Form.Label>{labelLogin}:</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="Ваш ник"
                    isValid={touched.username && !errors.username}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md={{ span: 8, offset: 2 }}
                  controlId="validationFormik02"
                >
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Промокод"
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md={{ span: 8, offset: 2 }}
                  controlId="validationFormik03"
                >
                  <Form.Label>{labelPas}:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Пароль"
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md={{ span: 8, offset: 2 }}
                  controlId="validationFormik04"
                >
                  <Form.Label>{labelRepPas}:</Form.Label>
                  <Form.Control
                    type="password"
                    name="repPas"
                    value={values.repPas}
                    onChange={handleChange}
                    placeholder="Повторите пароль"
                    isValid={touched.repPas && !errors.repPas}
                    isInvalid={!!errors.repPas}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.repPas}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Row className="justify-content-md-center">
                  <Button
                    type="submit"
                    variant="success"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? btnOnLoad : btnText}
                  </Button>
                </Row>
                <Row className="justify-content-md-center">
                  <Button variant="light" onClick={handleShowLogin}>
                    Авторизация
                  </Button>
                </Row>
              </Form.Group>
            </Form>
          )}
        </Formik>
      </Modal>
    </Div>
  );
}

const Div = styled.div`
  /* padding-top: 120px; */
  /* padding-top: calc(12vh - 10px); */

  form {
    width: 552px;
    background-color: blue;
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeaderLabel = styled.div`
  padding-top: 20px;
`;
