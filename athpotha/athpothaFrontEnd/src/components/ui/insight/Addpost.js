import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import CenteredBox from "../CenteredBox";
import ProfileImage from "./ProfileImage";

import CollectionsIcon from "@mui/icons-material/Collections";
import CloseIcon from "@mui/icons-material/Close";

function Addpost(props) {
  return (
    <div>
      <ProfileImage size="small" />
      <Grid container>
        <div style={{ height: "255px" }}>
          <TextField
            sx={{ my: 2 }}
            placeholder="Say something..."
            fullWidth
            variant="standard"
            multiline
          />
          <Card sx={{ maxWidth: "100%", height: "190px", overflowY: "auto" }}>
            {/* <CardHeader
              action={
                <IconButton aria-label="settings">
                  <CloseIcon />
                </IconButton>
              }
            /> */}
            <CardMedia
              component="img"
              image="/images/tutors/tutor-1.jpg"
              alt="green iguana"
            />
          </Card>
        </div>
        <Grid item xs={12}></Grid>
        {/* <Grid item xs={12}></Grid> */}
      </Grid>

      <div>
        <Grid container>
          <Grid item xs={10}>
            <CenteredBox align="left">
              <IconButton>
                <CollectionsIcon />
              </IconButton>
            </CenteredBox>
          </Grid>
          <Grid item xs={2}>
            <CenteredBox align="right">
              <Button
                variant="contained"
                style={{ borderRadius: 20, textTransform: "none" }}
              >
                Post
              </Button>
            </CenteredBox>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Addpost;
