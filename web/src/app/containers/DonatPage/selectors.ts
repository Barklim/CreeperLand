import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.donatPage || initialState;

export const selectDonatPage = createSelector(
  [selectDomain],
  donatPageState => donatPageState,
);
