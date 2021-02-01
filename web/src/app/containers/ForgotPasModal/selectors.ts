import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.forgotPasModal || initialState;

export const selectForgotPasModal = createSelector(
  [selectDomain],
  forgotPasModalState => forgotPasModalState,
);
