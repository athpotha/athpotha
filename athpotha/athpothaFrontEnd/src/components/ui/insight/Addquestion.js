import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import CenteredBox from "../CenteredBox";
import ProfileImage from "./ProfileImage";

function Addquestion(props) {
  return (
    <div style={{ marginTop: "20px" }}>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ height: "300px", overflowY: "auto" }}>
            <div style={{ marginRight: "30px" }}>
              <ProfileImage size="small" />
              <TextField
                sx={{ my: 2 }}
                placeholder="Enter your question"
                fullWidth
                variant="standard"
                multiline
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginRight: "30px" }}>
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
