import { Avatar, Chip, Grid, Typography } from "@mui/material";
import React from "react";

import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import HomeCard from "../../ui/wall-main/Feeds/HomeCard";
import CenteredBox from "../../ui/CenteredBox";

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
        <Grid
          item
          xs={12}
          // style={{ backgroundColor: "#e91e63" }}
          sx={{ bgcolor: "background", p: 1, pl: 0, mb: 2, borderRadius: 2 }}
        >
          <div>
            <HomeCard />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          // style={{ backgroundColor: "#e91e63" }}
          sx={{ bgcolor: "background", p: 1, pl: 0, mb: 2, borderRadius: 2 }}
        >
          <div>
            <HomeCard />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Feeds;
