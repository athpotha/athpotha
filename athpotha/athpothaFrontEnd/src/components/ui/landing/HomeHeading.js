import { StyledEngineProvider, Typography, Grid } from "@mui/material";
import React from "react";

function HomeHeading(props) {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container spacing={props.spacing} direction="column">
        <Grid item>
          <Typography
            sx={{fontWeight: {md: 600}, fontSize:{sm: 30, md: 40} }}
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
            sx={{fontWeight: {sm: 400, md: 500}, fontSize:{xs:15 , sm: 15, md: 23} }}
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
