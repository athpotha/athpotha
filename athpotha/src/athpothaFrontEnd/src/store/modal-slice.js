import { createSlice } from "@reduxjs/toolkit";

const initialModalState = { modalTabValue: 0, modalSubimtClicked: false };
const modalSlice = createSlice({
  name: "modal-tab",
  initialState: initialModalState,
  reducers: {
    setModalTabValue(state, action) {
      state.modalTabValue = action.payload;
    },

    setModalSubimtClicked(state, action) {
      state.modalSubimtClicked = action.payload;
    }
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
