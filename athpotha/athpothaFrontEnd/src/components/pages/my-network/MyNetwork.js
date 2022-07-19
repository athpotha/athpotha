import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Content from "./Content";
import MainHeader from "../../ui/wall-main/MainHeader";
import { Grid } from "@mui/material";
import Leftbar from "../wall-home/Leftbar";
import Rightbar from "../wall-home/Rightbar";

function MyNetwork() {
  return (
    <StyledEngineProvider injectFirst>
      <MainHeader value={1} />
      <Grid
        container
        spacing={2}
        style={{
          boxSizing: "initial",
          width: "1500px",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "stretch",
          backgroundColor: "rgb(242, 250, 255)",
        }}
      >
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
          <Content></Content>
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

export default MyNetwork;
