import { createSlice } from "@reduxjs/toolkit";

const initialCommentState = { commentAdded: false, replyAdded: false };
const commentSlice = createSlice({
  name: "modal-tab",
  initialState: initialCommentState,
  reducers: {
    setCommentAdded(state, action) {
        state.commentAdded = action.payload;
    },
    setReplyAdded(state, action) {
      state.replyAdded = action.payload;
  }
  },
});

export const commentActions = commentSlice.actions;

export default commentSlice;
