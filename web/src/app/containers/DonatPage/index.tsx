/**
 *
 * DonatPage
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectDonatPage } from './selectors';

interface Props {}

export const DonatPage = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const donatPage = useSelector(selectDonatPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>DonatPage</title>
        <meta name="description" content="Description of DonatPage" />
      </Helmet>
      <Div>DonatPage</Div>
    </>
  );
});

const Div = styled.div``;
