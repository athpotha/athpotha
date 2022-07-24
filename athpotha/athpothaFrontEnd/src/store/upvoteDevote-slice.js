import { createSlice } from "@reduxjs/toolkit";

// var removeByAttr = function(arr, attr, value) {
//   var i = arr.length;
//   while (i--) {
//     if (
//       arr[i] &&
//       arr[i].hasOwnProperty(attr) &&
//       arguments.length > 2 &&
//       arr[i][attr] === value
//     ) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// };

const initialUpvoteDevoteState = { posts: [] };
const upvoteDevoteSlice = createSlice({
  name: "snackbar",
  initialState: initialSnackbarState,
  reducers: {
    createPost(state, action) {
      const newPost = action.payload;
      const existingPost = state.posts.find((post) => post.id === newPost.id);
      if (!existingPost) {
        state.posts.push({
          id: newPost.id,
          upvotes: 0,
          upvotedUserIds: [],
          devotes: 0,
          devotedUserIds: [],
          comments: 0,
        });
      }
    },
    increaseUpvotes(state, action) {
      const postId = action.payload.id;
      const post = state.posts.find((post) => post.id === postId);

      const upvotedUserId = action.payload.userId;
      const existingUpvotedUser = post.upvotedUserIds.find(upvotedUserId);
      if (!existingUpvotedUser) {
        post.upvotes++;
        post.upvotedUserIds.push(upvotedUserId);
      } else {
        post.upvotes--;
        const index = post.upvotedUserIds.indexOf(upvotedUserId);
        post.upvotedUserIds.splice(index);
      }
    },
    increaseDevotes(state, action) {
        const postId = action.payload.id;
        const post = state.posts.find((post) => post.id === postId);
  
        const devotedUserId = action.payload.userId;
        const existingUpvotedUser = post.devotedUserIds.find(devotedUserId);
        if (!existingUpvotedUser) {
          post.devotes++;
          post.devotedUserIds.push(devotedUserId);
        } else {
          post.devotes--;
          const index = post.devotedUserIds.indexOf(devotedUserId);
          post.devotedUserIds.splice(index);
        }
    },
  },
});

export const upvoteDevoteActions = upvoteDevoteSlice.actions;

export default upvoteDevoteSlice;
