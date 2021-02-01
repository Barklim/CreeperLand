import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { Formik } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useChangePasswordMutation } from 'generated/graphql';
import { toErrorMap } from 'utils/toErrorMap';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, changePasModalActions } from './slice';
import { selectChangePasModal } from './selectors';
import { changePasModalSaga } from './saga';

interface Props {}

export function ChangePasModal(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: changePasModalSaga });

  const changePasModal = useSelector(selectChangePasModal);
  const dispatch = useDispatch();

  const { changeModal } = changePasModalActions;

  const [, changePassword] = useChangePasswordMutation();

  const schema = yup.object({
    newPassword: yup.string(),
  });

  const [show, setShow] = useState(changePasModal.show);

  const closeChangePasModal = function () {
    setShow(false);
    dispatch(changeModal(false));
  };
  const handleClose = () => closeChangePasModal();

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const [tokenError, setTokenError] = useState('');
  // Define url param if it have
  let token: any = useParams();
  if (Object.keys(useParams()).length === 0) {
    token = '';
  } else {
    token = token.token;
  }

  useEffect(() => {
    changePasModal.show || token ? setShow(true) : setShow(false);
  }, [changePasModal.show, token]);

  return (
    <Div>
      <Modal show={show} onHide={handleClose} animation={true} centered>
        <Row className="justify-content-md-center">
          <Col md={{ span: 4, offset: 3 }}>
            {/* <HeaderLabel>Новый пароль</HeaderLabel> */}
          </Col>
          <Col md={{ span: 1, offset: 3 }}>
            <Button variant="link" onClick={handleClose}>
              X
            </Button>
          </Col>
        </Row>
        <Formik
          validationSchema={schema}
          onSubmit={async (values, { setErrors }) => {
            await sleep(700);
            const response = await changePassword({
              newPassword: values.newPassword,
              token,
            });
            if (response.data?.changePassword.errors) {
              const errorMap = toErrorMap(response.data.changePassword.errors);
              if ('token' in errorMap) {
                setTokenError(errorMap.token);
              }
              setErrors(errorMap);
            } else if (response.data?.changePassword.user) {
              handleClose();
            }
          }}
          initialValues={{ newPassword: '' }}
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
                  <Form.Label>Новый пароль:</Form.Label>
                  <Form.Control
                    type="password"
                    name="newPassword"
                    value={values.newPassword}
                    onChange={handleChange}
                    placeholder="Новый пароль"
                    isValid={touched.newPassword && !errors.newPassword}
                    isInvalid={!!errors.newPassword}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.newPassword}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              {tokenError ? (
                <div>
                  <div style={{ color: 'red' }}>{tokenError}</div>
                  <div>
                    <div>click here to get a new one</div>
                  </div>
                </div>
              ) : null}

              <Form.Group>
                <Row className="justify-content-md-center">
                  <Button
                    type="submit"
                    variant="success"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Загрузка...' : 'Изменить пароль'}
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
