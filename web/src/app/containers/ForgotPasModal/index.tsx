import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Col, Row, Button, Modal } from 'react-bootstrap';
import { useForgotPasswordMutation } from 'generated/graphql';

import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, forgotPasModalActions } from './slice';
import { selectForgotPasModal } from './selectors';
import { forgotPasModalSaga } from './saga';

interface Props {}

export function ForgotPasModal(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: forgotPasModalSaga });

  const forgotPasModal = useSelector(selectForgotPasModal);
  const dispatch = useDispatch();

  const { changeModal } = forgotPasModalActions;

  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();

  const schema = yup.object({
    email: yup.string().email().required(),
  });

  const [show, setShow] = useState(forgotPasModal.show);

  const closeChangePasModal = function () {
    setShow(false);
    dispatch(changeModal(false));
  };
  const handleClose = () => closeChangePasModal();

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  useEffect(() => {
    forgotPasModal.show ? setShow(true) : setShow(false);
  }, [forgotPasModal.show]);

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
          onSubmit={async values => {
            await sleep(700);
            await forgotPassword(values);
            setComplete(true);
          }}
          initialValues={{ email: '' }}
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
          }) =>
            complete ? (
              <div>
                if an account with that email exists, we sent you can email
              </div>
            ) : (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    md={{ span: 8, offset: 2 }}
                    controlId="validationFormik01"
                  >
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="email"
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.email}
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
                      {isSubmitting ? 'Загрузка...' : 'Изменить пароль'}
                    </Button>
                  </Row>
                </Form.Group>
              </Form>
            )
          }
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
