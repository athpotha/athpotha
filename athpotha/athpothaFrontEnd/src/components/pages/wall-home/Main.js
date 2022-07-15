import { StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import MainHeader from "../../ui/wall-main/MainHeader";

function Main() {
  return (
    <StyledEngineProvider injectFirst>
      <MainHeader />
      <Typography variant="h1">Main Wall</Typography>
    </StyledEngineProvider>
  );
}

export default Main;
