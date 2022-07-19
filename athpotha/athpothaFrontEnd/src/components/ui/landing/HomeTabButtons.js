import React from "react";
import { StyledEngineProvider, Stack, Button } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
function HomeTabButtons() {
  return (
    <StyledEngineProvider injectFirst>
      <Stack direction="row" spacing={3} alignSelf="center">
        <Button sx={{size:{sm: "small",md:"medium" ,lg: "large"}}} color="background" variant="contained">
          Learn More
        </Button>
        <Button sx={{size:{sm: "small",md:"medium" ,lg: "large"}}} variant="contained" endIcon={<SendOutlinedIcon />}>
          Get Started
        </Button>
      </Stack>
    </StyledEngineProvider>
  );
}

export default HomeTabButtons;
