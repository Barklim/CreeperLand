import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the RegisterModal container
export const initialState: ContainerState = {
  show: false,
};

const forgotPasModalSlice = createSlice({
  name: 'forgotPasModal',
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
  actions: forgotPasModalActions,
  reducer,
  name: sliceKey,
} = forgotPasModalSlice;
