import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the LoginModal container
export const initialState: ContainerState = {
  show: false,
};

const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    showModal(state, action: PayloadAction<any>) {
      state.show = true;
    },
    closeModal(state, action: PayloadAction<any>) {
      state.show = false;
    },
    changeModal(state, action: PayloadAction<any>) {
      state.show = action.payload;
    },
  },
});

export const {
  actions: loginModalActions,
  reducer,
  name: sliceKey,
} = loginModalSlice;
