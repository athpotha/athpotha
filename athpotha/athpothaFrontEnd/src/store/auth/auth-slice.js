import { createSlice } from "@reduxjs/toolkit";
import {AUTH_REQ,AUTH_SUCCESS,AUTH_FAILURE} from './types';

const initialAuthState = {
  user: {},
  error: "",
  loading: false,
  isLoggedIn: false,
  isLoggOut: false
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    changeAction(state = initialAuthState, action) {
      switch (action) {
        case AUTH_REQ:
          return { ...state, error: "", loading: true };

        case AUTH_SUCCESS:
          const data = action.payload;
          return { ...state, error: "", loading: false, user: data };

        case AUTH_FAILURE:
          const error = action.payload;
          return { ...state, loading: false, error: error };

        default:
          return state;
      }
    },
  },
});

export default authSlice;
