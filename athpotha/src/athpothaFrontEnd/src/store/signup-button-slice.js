import { createSlice } from "@reduxjs/toolkit";

const initialSignUpButton = {clickedSignupButton: "student", selectedSignupButton: "", beforeClickBackButton: ""}
const SignupButtonSlice = createSlice({
    name: "signup-button",
    initialState: initialSignUpButton,
    reducers: {
        setClickedSignupButton(state, action) {
            state.clickedSignupButton = action.payload;
        },
        setSelectedSignupButton(state, action) {
            state.selectedSignupButton = action.payload;
        },
        setBeforeClickBackButton(state, action) {
            state.beforeClickBackButton = action.payload;
        }
    }
});

export const signupButtonActions = SignupButtonSlice.actions;

export default SignupButtonSlice;

