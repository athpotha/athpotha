import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import MainHeader from "../../ui/wall-main/MainHeader";
import { Box, Container } from '@mui/system';
import { Button } from "@mui/material";
import UpperBox from "./UpperBox"
import NotiPanel from "./NotiPanel"
const notiCount=7; // no of new notifications
function Content() {
  return (
    <StyledEngineProvider injectFirst>
    <div>
        <UpperBox notiCount={notiCount}></UpperBox>
        <NotiPanel></NotiPanel>
    </div>
    </StyledEngineProvider>
  );
}

export default Content;
