import { createSlice, configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmark-slice";
import modalSlice from "./modal-slice";
import upvoteDevoteSlice from "./upvoteDevote-slice";

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


const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    landing: landingSlice.reducer,
    bookmarks: bookmarkSlice.reducer,
  },
});

export const landingActions = landingSlice.actions;

export default store;
