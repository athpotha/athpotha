import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import MainHeader from "../../ui/wall-main/MainHeader";
import { Box, Container } from '@mui/system';
import { Button } from "@mui/material";
import UpperBox from "./UpperBox"
function Content() {
  return (
    <StyledEngineProvider injectFirst>
    <div>
        <UpperBox></UpperBox>
    </div>
    </StyledEngineProvider>
  );
}

export default Content;
