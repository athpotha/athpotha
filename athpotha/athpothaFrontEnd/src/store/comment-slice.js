import { createSlice } from "@reduxjs/toolkit";

const initialCommentState = { commentAdded: -1, replyAdded: false };
const commentSlice = createSlice({
  name: "modal-tab",
  initialState: initialCommentState,
  reducers: {
    setCommentAdded(state, payload) {
      if (state.commentAdded === -1) {
        state.commentAdded = 0;
      } else if (state.commentAdded === 0) {
        state.commentAdded = 1;
      }
    },
    setCommentAddedLoading(state) {
      state.commentAdded = -1;
    },
    setReplyAdded(state, action) {
      state.replyAdded = action.payload;
    }
  },
});

export const commentActions = commentSlice.actions;

export default commentSlice;
