import { StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import MainHeader from "../../ui/wall-main/MainHeader";

function Main() {
  return (
    <StyledEngineProvider injectFirst>
      <MainHeader value={0} />
      <p>Main Wall</p>
    </StyledEngineProvider>
  );
}

export default Main;
