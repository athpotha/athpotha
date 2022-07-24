import { createSlice, configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmark-slice";


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

//
const initialLandingState = { clickedButton: "" };
const landingSlice = createSlice({
  name: "landing",
  initialState: initialLandingState,
  reducers: {
    setClickedButton(state, action) {
      state.clickedButton = action.payload;
    },
  },
});

//



const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    landing: landingSlice.reducer,
    bookmarks: bookmarkSlice.reducer,
  },
});

export const modalActions = modalSlice.actions;
export const landingActions = landingSlice.actions;

export default store;
