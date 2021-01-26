/**
 *
 * DonatPage
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectDonatPage } from './selectors';
import { donatPageSaga } from './saga';
// import { messages } from './messages';
import { NavBar } from '../NavBar';

interface Props {}

export function DonatPage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: donatPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const donatPage = useSelector(selectDonatPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Купить кейс</title>
        <meta name="description" content="Description of DonatPage" />
      </Helmet>
      <Div>
        {t('')}
        <NavBar />
        {/*  {t(...messages.someThing)}  */}
        <div>Donat page</div>
      </Div>
    </>
  );
}

const Div = styled.div``;
