import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import MainHeader from "../../ui/insight/MainHeader";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import UpperBox from "./UpperBox";
import NotiPanel from "./NotiPanel";
const notiCount = 7; // no of new notifications
function Content() {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <UpperBox notiCount={notiCount}></UpperBox>
        </Grid>
        <Grid item xs={12}>
          <NotiPanel></NotiPanel>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
}

export default Content;
