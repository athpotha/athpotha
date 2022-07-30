import { createSlice } from "@reduxjs/toolkit";

const initialRegistrationState = {isEmailSent: false, enteredEmail: ""}

const registrationSlice = createSlice({
    name: "registration",
    initialState: initialRegistrationState,
    reducers: {
        setIsEmailSent(state, action) {
            state.isEmailSent = action.payload.emailSent;
            state.enteredEmail = action.payload.email;
        },
        setEmailSent(state, action) {
            state.isEmailSent = action.payload;
        }
    }
});

export const registrationActions = registrationSlice.actions;

export default registrationSlice;


