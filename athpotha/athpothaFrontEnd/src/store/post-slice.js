
import { createSlice } from "@reduxjs/toolkit";

const initaialPost = { isDeleted: 0, }

const postSlice = createSlice({
    name: "post",
    initialState: initaialPost,
    reducers: {
        setPostDelete(state, action) {
            if(state.isDeleted === 0) {
                state.isDeleted = 1;
            } else if(state.isDeleted === 1) {
                state.isDeleted = 0;
            }
        }
    }
})

export const postActions = postSlice.actions;

export default postSlice;


