import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.loginModal || initialState;

export const selectLoginModal = createSelector(
  [selectDomain],
  loginModalState => loginModalState,
);
