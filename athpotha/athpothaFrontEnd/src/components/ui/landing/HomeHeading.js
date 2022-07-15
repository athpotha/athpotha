import { StyledEngineProvider, Typography, Stack, Grid } from "@mui/material";
import React from "react";

function HomeHeading(props) {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container spacing={props.spacing} direction="column">
        <Grid item>
          <Typography
            fontWeight={600}
            align="center"
            noWrap
            color={props.headingColor}
            variant={props.headingVariant}
          >
            {props.heading}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontWeight={500}
            align="center"
            color={props.subtitleColor}
            variant={props.subtitleVariant}
          >
            {props.subtitle}
          </Typography>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
}

export default HomeHeading;
