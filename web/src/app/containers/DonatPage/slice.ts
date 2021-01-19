import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the DonatPage container
export const initialState: ContainerState = {};

const donatPageSlice = createSlice({
  name: 'donatPage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions: donatPageActions,
  reducer,
  name: sliceKey,
} = donatPageSlice;
