import {
  Button,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import React from "react";
import CenteredBox from "../CenteredBox";
import ProfileImage from "./ProfileImage";

import CollectionsIcon from "@mui/icons-material/Collections";

function Addpost(props) {
  return (
    <div style={{ marginTop: "20px" }}>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ height: "300px", overflowY: "auto" }}>
            <div style={{ marginRight: "30px" }}>
              <ProfileImage size="small" />
              <TextField
                sx={{ my: 2 }}
                placeholder="Say something..."
                fullWidth
                variant="standard"
                multiline
              />
              {/* <CardMedia
                component="img"
                // image="/images/tutors/tutor-1.jpg"
                alt="green iguana"
              /> */}
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginRight: "30px" }}>
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
        </Grid>
      </Grid>
    </div>
  );
}

export default Addpost;
