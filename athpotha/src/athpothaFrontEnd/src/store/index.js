import { createSlice, configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmark-slice";
import modalSlice from "./modal-slice";
import upvoteDevoteSlice from "./upvoteDevote-slice";
import registrationSlice from "./registration-slice";
import SignupButtonSlice from "./signup-button-slice";
import authSlice from "./auth/auth-slice";

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
    registration: registrationSlice.reducer,
    signupButton: SignupButtonSlice.reducer,
    loginAuth: authSlice.reducer
  },
});

export const landingActions = landingSlice.actions;

export default store;
