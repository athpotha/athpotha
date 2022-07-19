import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import MainHeader from "../../ui/wall-main/MainHeader";
import Content from "./Content";

function Chat() {
  return (
    <StyledEngineProvider injectFirst>
      <MainHeader value={3} />
      <Content />
    </StyledEngineProvider>
  );
}

export default Chat;
