import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { fetchUserData } from "../../../api/authenticationService";
import BeforeDisplay from "../../ui/BeforeDisplay";
import FeedsStart from "../../ui/insight/wall-main/Feeds/FeedsStart";
import HomeCard from "../../ui/insight/wall-main/Feeds/HomeCard";
import TutorFeedSection from "../actors/tutor/profile/TutorFeedSection";
import UniversityFeedSection from "../actors/university/profile/UniversityFeedSection";

import CoverSection from "./CoverSection";
import FeedsSection from "./FeedsSection";
// import NotiPanel from "./NotiPanel";
const notiCount = 7; // no of new notifications

function Content() {

  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const fetchMyPostsHandler = useCallback(async () => {
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
      const posts = await response.data;

      const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const transformedPosts = posts.map((post) => {
        let d = new Date(post.addedTime);
        let addedDate = `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        return {
          id: post.postId,
          personName: `${post.user.first_name} ${post.user.last_name}`,
          postDate: addedDate,
          postType: post.type,
          postContent: post.type === "post" ? post.title : post.question,
          postedImage: post.image,
          personImage: post.user.profile_picture,
          userImage: post.user.profile_picture,
          noOfPostUpvotes: post.upVotes,
          noOfComments: post.numberOfComments,
        };
      })
      setPosts(transformedPosts);
      // console.log(transformedPosts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [])

  useEffect(() => {
    fetchMyPostsHandler();
  }, [])

  let content = <p>Found no posts</p>

  if (posts.length > 0) {
    content = posts.map((post) => (
      <HomeCard homeCardId={post.id} key={post.id} postItem={post} />
    ))
  }
  if (isLoading) {
    content = <BeforeDisplay />;
  }
  const userType = localStorage.getItem("USER_TYPE");
  return (
    <StyledEngineProvider injectFirst>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CoverSection></CoverSection>
        </Grid>
        <Grid item xs={12}
        >
          <FeedsStart />
        </Grid>
        <Grid item xs={12}>
          {(userType === "student" || userType === "community") &&
            <FeedsSection posts={posts} isLoading={isLoading} />
          }
          {userType === "university" &&
            <UniversityFeedSection posts={posts} isLoading={isLoading} />
          }
          {userType === "tutor" &&
            <TutorFeedSection posts={posts} isLoading={isLoading} />}
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
}

export default Content;
