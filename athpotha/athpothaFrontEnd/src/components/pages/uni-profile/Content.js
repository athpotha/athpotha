import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import CoverSection from "./CoverSection";
import NavRow from "./NavRow";
// import NotiPanel from "./NotiPanel";
const notiCount = 7; // no of new notifications
function Content() {
  return (
    <StyledEngineProvider injectFirst>

      <Grid container spacing={3}>

        <Grid item xs={12}>
        {/* ------------  Cover Section of the profile ---------*/}
          <CoverSection></CoverSection>
        </Grid>

        <Grid item xs={12}>
          <NavRow></NavRow>
        </Grid>

      </Grid>

    </StyledEngineProvider>
  );
}

export default Content;
