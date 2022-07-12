import React from "react";
import HomeAppBar from "./HomeAppBar";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import StudentLogin from "./StudentLogin";
import TopRatedTutors from "./TopRatedTutors";
import { Stack } from "@mui/material";
import UniversityDegrees from "./UniversityDegrees";
import CommiunityExperts from "./CommiunityExperts";

function Home() {
  return (
    <StyledEngineProvider injectFirst>
      <HomeAppBar />
      <Stack direction="column" spacing={8}>
        <StudentLogin />
        <TopRatedTutors />
        <UniversityDegrees />
        <CommiunityExperts />
      </Stack>
    </StyledEngineProvider>
  );
}

export default Home;
