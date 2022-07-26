import React from "react";
import AppBar from "@mui/material/AppBar";
// import { Box, ThemeProvider, createTheme } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { StyledEngineProvider } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import classes from "./HomeAppBar.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


import { landingActions } from "../../../store";

export default function HomeAppBar() {
  const dispatch = useDispatch();

  const clickButtonHandler = () => {
    dispatch(landingActions.setClickedButton("sign-up")); //{ type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  }
  // const classes = useStyles();
  return (
    <StyledEngineProvider injectFirst>
      <AppBar position="static" className={classes["app-bar"]}>
        <Toolbar>
          <Paper elevation={0} sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item>
                <Typography variant="h4" className={classes["logo-typography"]}>
                  AthPotha
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src="/images/athpotha_v2.png"
                  className={classes["logo-image"]}
                ></img>
              </Grid>
            </Grid>
          </Paper>
          <Link to="/login" style={{ textDecoration: "none", marginRight: 10 }}>
            <Button variant="outlined">
              Sign In
            </Button>
          </Link>
          <Link to="/registration" style={{ textDecoration: "none" }}>
            <Button variant="contained" onClick={clickButtonHandler}>
              Sign Up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </StyledEngineProvider>
  );
}
