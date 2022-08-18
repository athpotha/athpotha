import { createSlice } from "@reduxjs/toolkit";

const initialModalState = { modalTabValue: 0 };
const modalSlice = createSlice({
  name: "modal-tab",
  initialState: initialModalState,
  reducers: {
    // setIsTabhave(state, action) {
    //     state.isTabHave = action.payload
    // },
    // setModalname(state, action) {
    //     state.modalName = action.payload
    // },
    setModalTabValue(state, action) {
      state.modalTabValue = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
