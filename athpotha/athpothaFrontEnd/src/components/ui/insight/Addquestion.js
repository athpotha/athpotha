import { Avatar, Button, ButtonGroup, Grid, TextField } from "@mui/material";
import React from "react";
import CenteredBox from "../CenteredBox";
import ProfileImage from "./ProfileImage";

function Addquestion(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <ProfileImage size="small" />
          <TextField
            sx={{ my: 2 }}
            placeholder="Enter your question"
            fullWidth
            variant="standard"
            multiline
            style={{height: "225px"}}
          />
        </Grid>
        <Grid item xs={12}>
          <div>
            <CenteredBox align="right">
              <Button
                variant="contained"
                style={{ borderRadius: 20, textTransform: "none" }}
              >
                Add question
              </Button>
            </CenteredBox>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Addquestion;
