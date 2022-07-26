import { createSlice } from "@reduxjs/toolkit";

var removeByAttr = function(arr, attr, value) {
  var i = arr.length;
  while (i--) {
    if (
      arr[i] &&
      arr[i].hasOwnProperty(attr) &&
      arguments.length > 2 &&
      arr[i][attr] === value
    ) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

const initialSnackbarState = { bookmarkedPosts: [], totalBookMarks: 0, bookmarkAdded: false, bookmarkRemoved: false };
const bookmarkSlice = createSlice({
  name: "snackbar",
  initialState: initialSnackbarState,
  reducers: {
    addPostToBookmarks(state, action) {
      const newBookmark = action.payload;
      const existingBookmark = state.bookmarkedPosts.find(
        (post) => post.id === newBookmark.id
      );
      state.totalBookMarks++;
      if (!existingBookmark) {
        state.bookmarkedPosts.push({
          id: newBookmark.id,
          isBookmarkAdded: true,
          isBookmarkRemoved: false
        });
      } else {
        const index = state.bookmarkedPosts.findIndex(bookmark => bookmark.id === newBookmark.id);
        state.bookmarkedPosts[index].isBookmarkAdded = false;
        state.bookmarkedPosts[index].isBookmarkRemoved = true;
      }
    },
  },
});

export const bookmarkActions = bookmarkSlice.actions;

export default bookmarkSlice;
