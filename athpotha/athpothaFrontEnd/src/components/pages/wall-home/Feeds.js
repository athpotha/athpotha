import { Avatar, Chip, Grid, Typography } from "@mui/material";
import React from "react";

import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import HomeCard from "../../ui/wall-main/Feeds/HomeCard";
import CenteredBox from "../../ui/CenteredBox";

const postDetails = [
  {
    id: "post-1",
    personName: "Kumud perera",
    postDate: "Jan 9, 2014",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    postedImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    personImage:
      "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    userImage: "/images/tutors/tutor-1.jpg",
    noOfPostUpvotes: 123,
    noOfComments: 23,
  },

  {
    id: "post-2",
    personName: "Kumud perera",
    postDate: "Jan 9, 2014",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    postedImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    personImage:
      "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    userImage: "/images/tutors/tutor-1.jpg",
    noOfPostUpvotes: 123,
    noOfComments: 23,
  },
];

function Feeds() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ backgroundColor: "#FFF" }}
          sx={{ bgcolor: "background", p: 2, mb: 2, borderRadius: 2 }}
        >
          <div>
            <Grid container sx={{ mb: 2 }}>
              <Grid item xs={1}>
                <Avatar src="/images/tutors/tutor-1.jpg" />
              </Grid>
              <Grid item xs={11}>
                <Chip
                  label="Are you in a problem? Share with us"
                  //   component="a"
                  //   href="#basic-chip"
                  variant="outlined"
                  clickable
                  sx={{ width: "90%", textAlign: "left" }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <CenteredBox align="center">
                  <Chip
                    variant="outlined"
                    clickable
                    icon={<QuestionMarkIcon />}
                    label="Ask Question"
                  />
                </CenteredBox>
              </Grid>
              <Grid item xs={4}>
                <CenteredBox align="center">
                  <Chip
                    variant="outlined"
                    clickable
                    icon={<ModeEditIcon />}
                    label="Answer"
                  />
                </CenteredBox>
              </Grid>
              <Grid item xs={4} alignSelf="right">
                <CenteredBox align="center">
                  <Chip
                    variant="outlined"
                    clickable
                    icon={<MarkAsUnreadIcon />}
                    label="Post"
                  />
                </CenteredBox>
              </Grid>
            </Grid>
          </div>
        </Grid>

        {postDetails.map((post) => (
          <HomeCard key={post.id} postItem={post} />
        ))}
      </Grid>
    </div>
  );
}

export default Feeds;
