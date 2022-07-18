import { StyledEngineProvider, Typography, Grid } from "@mui/material";
import React from "react";
import MainHeader from "../../ui/wall-main/MainHeader";
import Feeds from "./Feeds";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import classes from "./Main.module.css";

function Main() {
  return (
    <StyledEngineProvider injectFirst>
      <MainHeader value={0} />
      <Grid container spacing={2} className={classes["wall-container"]}>
        <Grid
          item
          xs={2}
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            paddingTop: 100,
          }}
        >
          <Leftbar></Leftbar>
        </Grid>
        <Grid item xs={7} style={{ paddingTop: 120 }}>
          <Feeds></Feeds>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            paddingTop: 100,
          }}
        >
          <Rightbar></Rightbar>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
}

export default Main;
