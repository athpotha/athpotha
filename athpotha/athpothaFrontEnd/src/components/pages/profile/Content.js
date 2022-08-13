import { Button, Grid, StyledEngineProvider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../../api/authenticationService";
import HomeCard from "../../ui/insight/wall-main/Feeds/HomeCard";
import CoverSection from "./CoverSection";
// import NotiPanel from "./NotiPanel";
const notiCount = 7; // no of new notifications

// let postDetails = [
//   {
//     id: "post-1",
//     personName: "Kumud perera",
//     postDate: "Jan 9, 2014",
//     postContent:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
//     postedImage:
//       "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     personImage:
//       "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     userImage: "/images/tutors/tutor-1.jpg",
//     noOfPostUpvotes: 123,
//     noOfComments: 23,
//   },

//   {
//     id: "post-2",
//     personName: "Kumud perera",
//     postDate: "Jan 9, 2014",
//     postContent:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
//     postedImage:
//       "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     personImage:
//       "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     userImage: "/images/tutors/tutor-1.jpg",
//     noOfPostUpvotes: 123,
//     noOfComments: 23,
//   },

//   {
//     id: "post-3",
//     personName: "Kumud perera",
//     postDate: "Jan 9, 2014",
//     postContent:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
//     postedImage:
//       "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     personImage:
//       "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     userImage: "/images/tutors/tutor-1.jpg",
//     noOfPostUpvotes: 123,
//     noOfComments: 23,
//   },

//   {
//     id: "post-4",
//     personName: "Kumud perera",
//     postDate: "Jan 9, 2014",
//     postContent:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
//     postedImage:
//       "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     personImage:
//       "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     userImage: "/images/tutors/tutor-1.jpg",
//     noOfPostUpvotes: 123,
//     noOfComments: 23,
//   },

//   {
//     id: "post-5",
//     personName: "Kumud perera",
//     postDate: "Jan 9, 2014",
//     postContent:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
//     postedImage:
//       "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     personImage:
//       "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     userImage: "/images/tutors/tutor-1.jpg",
//     noOfPostUpvotes: 123,
//     noOfComments: 23,
//   },

//   {
//     id: "post-6",
//     personName: "Kumud perera",
//     postDate: "Jan 9, 2014",
//     postContent:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
//     postedImage:
//       "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     personImage:
//       "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     userImage: "/images/tutors/tutor-1.jpg",
//     noOfPostUpvotes: 123,
//     noOfComments: 23,
//   },
// ];

// let onlinePost = {
//   id: "post-6",
//   personName: "Kumud perera",
//   postDate: "Jan 9, 2014",
//   postContent:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
//   postedImage:
//     "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//   personImage:
//     "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//   userImage: "/images/tutors/tutor-1.jpg",
//   noOfPostUpvotes: 123,
//   noOfComments: 23,
// }
function Content() {

  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  let onlinePost = {};
  let postDetails = [];
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchUserData({
  //     method: "post",
  //     url: "api/v1/post/get-own-posts",
  //     data: {
  //       userId: localStorage.getItem("USER_ID"),
  //       email: localStorage.getItem("USER_EMAIL"),
  //     }
  //   }).then((response) => {
  //     const posts = response.data;
  //     console.log(posts);

  //     posts.map((post) => {
  //       onlinePost = {
  //         id: post.postId,
  //         personName: `${post.student.first_name} ${post.student.last_name}`,
  //         postDate: post.addedTime,
  //         postContent: post.title,
  //         postedImage: post.image,
  //         personImage: post.student.profile_picture,
  //         userImage: post.student.profile_picture,
  //         noOfPostUpvotes: post.upVotes,
  //         noOfComments: post.numberOfComments,
  //       };
  //       postDetails.push(onlinePost);
  //     })
  //   })
  //   setIsLoading(false);
  // }, [])

  // if (isLoading) {
  //   return <h2>Lodaing ...</h2>;
  // }
  // console.log(postDetails);
  
  useEffect(() => {
    fetchMyPostsHandler();
  }, [])
  
  const fetchMyPostsHandler = async () => {
    setIsLoading(true);
    setError(null)
    try {
      const response = await fetchUserData({
        method: "post",
        url: "api/v1/post/get-own-posts",
        data: {
          userId: localStorage.getItem("USER_ID"),
          email: localStorage.getItem("USER_EMAIL"),
        }
      });
      console.log(response.status === 200);
      const posts = await response.data;
      const transformedPosts = posts.map((post) => {
        // onlinePost = 
        return {
          id: post.postId,
          personName: `${post.student.first_name} ${post.student.last_name}`,
          postDate: post.addedTime,
          postContent: post.title,
          postedImage: post.image,
          personImage: post.student.profile_picture,
          userImage: post.student.profile_picture,
          noOfPostUpvotes: post.upVotes,
          noOfComments: post.numberOfComments,
        };
      })
      setPosts(transformedPosts);
      console.log(transformedPosts);
    }catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }
  return (
    <StyledEngineProvider injectFirst>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* ------------  Cover Section of the profile ---------*/}
          <CoverSection></CoverSection>
          {!isLoading && posts.map((post) => (
            <HomeCard homeCardId={post.id} key={post.id} postItem={post} />
          ))}
          {!isLoading && posts.length === 0 && <p>Found no posts</p>}
          {isLoading && <p>Loading ...</p>}
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
}

export default Content;
