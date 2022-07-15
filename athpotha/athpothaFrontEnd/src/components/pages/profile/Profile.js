import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import MainHeader from "../../ui/wall-main/MainHeader";

function Profile() {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container direction="column" spacing={1550}>
        <Grid item>
          <MainHeader />
        </Grid>
        <Grid item>
          <Typography variant="h1">Main Wall</Typography>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
}

export default Profile;
