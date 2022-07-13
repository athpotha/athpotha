import React from "react";
import AppBar from "@mui/material/AppBar";
// import { Box, ThemeProvider, createTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { StyledEngineProvider } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import CenteredBox from "./CenteredBox";

// const useStyles = makeStyles({
//   appBar: {
//     backgroundColor: 'red',
//     color: 'rede'
//   },
// });

export default function Footer() {
  // const classes = useStyles();
  return (
    <StyledEngineProvider injectFirst>
      <AppBar style={{ padding: "10px", backgroundColor: "#000" }} position="static">
        <CenteredBox align="center">
          <Grid container direction="row" spacing={8}>
            <Grid item><Typography style={{cursor: "pointer"}}>Services</Typography></Grid>
            <Grid item><Typography style={{cursor: "pointer"}}>Contact Us</Typography></Grid>
            <Grid item><Typography style={{cursor: "pointer"}}>About</Typography></Grid>
            <Grid item><Typography style={{cursor: "pointer"}}>Privacy Policy</Typography></Grid>
          </Grid>
        </CenteredBox>
        <CenteredBox align="center">
          <Typography>Copyright ©2022. All rights reserved</Typography>
        </CenteredBox>
      </AppBar>
    </StyledEngineProvider>
  );
}
