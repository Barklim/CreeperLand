import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { Formik } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLoginMutation } from 'generated/graphql';
import { toErrorMap } from 'utils/toErrorMap';

interface Props {}

export function LoginModal(props: Props) {
  const [, login] = useLoginMutation();

  const schema = yup.object({
    username: yup.string().required('Login is a required field'),
    email: yup.string().required(),
    password: yup.string(),
    repPas: yup.string(),
  });

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  return (
    <Div>
      <Modal show={show} onHide={handleClose} animation={true} centered>
        <Row className="justify-content-md-center">
          <Col md={{ span: 3, offset: 4 }}>
            <HeaderLabel>Авторизация</HeaderLabel>
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
            console.log(values);
            const response = await login({
              // username: values.username,
              // password: values.password,

              // options: values,

              options: {
                username: values.username,
                password: values.password,
              },
            });
            console.log('TEST');
            console.log(response?.data?.login?.errors);

            if (response.data?.login.errors) {
              setErrors(toErrorMap(response.data.login.errors));
            } else if (response.data?.login.user) {
              // router.push("/");
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
                  <Form.Label>Логин:</Form.Label>
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
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md={{ span: 8, offset: 2 }}
                  controlId="validationFormik03"
                >
                  <Form.Label>Пароль:</Form.Label>
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
                  <Form.Label>Повторите пароль:</Form.Label>
                  <Form.Control
                    type="password"
                    name="repPas"
                    value={values.repPas}
                    onChange={handleChange}
                    placeholder="Повторите пароль"
                    isValid={touched.repPas && !errors.repPas}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Row className="justify-content-md-center">
                  <Button
                    type="submit"
                    variant="success"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Загрузка…' : 'Войти'}
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
