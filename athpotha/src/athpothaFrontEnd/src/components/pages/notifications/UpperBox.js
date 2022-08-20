import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
function UpperBox(props) {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Box
          sx={{
            bgcolor: "#ffffff",
            height: "12vh",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            // border: "1px solid",
            // borderColor: "grey.300",
          }}
        >
          <Typography align="center">
            <Box sx={{ fontWeight: "medium" }}>
              <p>Notifications</p>
            </Box>
            <Box sx={{ fontWeight: "light" }}>
              {props.notiCount != 0 ? (
                <p>You have new notifications</p>
              ) : (
                <p>No notifications to display</p>
              )}
            </Box>
          </Typography>
        </Box>
      </div>
    </StyledEngineProvider>
  );
}

export default UpperBox;
