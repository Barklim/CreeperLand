import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.registerModal || initialState;

export const selectRegisterModal = createSelector(
  [selectDomain],
  registerModalState => registerModalState,
);
