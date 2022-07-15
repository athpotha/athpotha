import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Hidden,
  Button,
  Stack,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined"; // import { makeStyles } from '@mui/material';
import classes from "./StudentLogin.module.css";
import HomeHeading from "../../ui/landing/HomeHeading";
import HomeTabButtons from "../../ui/landing/HomeTabButtons";

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: 'red'
//   }
// })

function StudentLogin() {
  // const classes = useStyles();
  return (
    <StyledEngineProvider injectFirst>
      <Paper className={classes.paper}>
        <img src="images/home/landingpage-cover.jpg"></img>
        <Stack
          direction="column"
          spacing={3}
          className={classes["student-login-content"]}
        >
          <HomeHeading
            spacing={1}
            headingColor="primary.contrastText"
            headingVariant="h3"
            heading="Enhance Your Future With AthPotha"
            subtitleColor="primary.contrastText"
            subtitleVariant="h5"
            subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit. consectetur
            adipiscing elit."
          />
          <HomeTabButtons />
        </Stack>
      </Paper>
    </StyledEngineProvider>
  );
}

export default StudentLogin;
