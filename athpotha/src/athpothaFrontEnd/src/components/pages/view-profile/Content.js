import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import TutorFeedSection from "../actors/tutor/profile/TutorFeedSection";
import UniversityFeedSection from "../actors/university/view-profile/UniversityFeedSection";

import CoverSection from "./CoverSection";
import FeedsSection from "./FeedsSection";
// import NotiPanel from "./NotiPanel";
const notiCount = 7; // no of new notifications

function Content(props) {

  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // var parts = window.location.pathname.split( '/' );
  const viewingUserType = props.user.userType;
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CoverSection user={props.user}></CoverSection>
      </Grid>
      <Grid item xs={12}>
        {(viewingUserType === "student" || viewingUserType === "community" || viewingUserType === "user") &&
          <FeedsSection user={props.user} />
        }
        {/* {viewingUserType === "community"  &&
          <CommunityFeedsSection posts={posts} isLoading={isLoading} />
        } */}
        {viewingUserType === "university" &&
          <UniversityFeedSection />
        }
      </Grid>
    </Grid>
  );
}

export default Content;
