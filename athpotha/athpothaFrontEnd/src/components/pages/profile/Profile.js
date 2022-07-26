import { StyledEngineProvider } from "@mui/material";
import React from "react";
import MainHeader from "../../ui/wall-main/MainHeader";

function Profile() {
  return (
    <StyledEngineProvider injectFirst>
      <MainHeader value={4} />
      <p>Profile Page</p>
    </StyledEngineProvider>
  );
}

export default Profile;
