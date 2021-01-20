import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
// import { messages } from './messages';
import { Formik } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface Props {}

export function RegisterModal(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const schema = yup.object({
    firstName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    repPas: yup.string().required(),
  });

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing)}  */}
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: '',
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
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Modal show={show} onHide={handleClose} animation={true} centered>
              <Row className="justify-content-md-center">
                <Col md={{ span: 3, offset: 4 }}>
                  <HeaderLabel>Регистрация</HeaderLabel>
                </Col>
                <Col md={{ span: 1, offset: 3 }}>
                  <Button variant="link" onClick={handleClose}>
                    X
                  </Button>
                </Col>
              </Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md={{ span: 8, offset: 2 }}
                  controlId="validationFormik01"
                >
                  <Form.Label>Логин:</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    placeholder="Ваш ник"
                    isValid={touched.firstName && !errors.firstName}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                  <Button type="submit" variant="success">
                    Зарегистрироваться
                  </Button>
                </Row>
              </Form.Group>
            </Modal>
          </Form>
        )}
      </Formik>
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
