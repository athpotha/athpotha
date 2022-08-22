import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./Login.module.css";
import { signupButtonActions } from "../../../store/signup-button-slice";
import { useSelector, useDispatch } from "react-redux";
import { Grid, IconButton } from "@mui/material";
import CenteredBox from "../../ui/CenteredBox";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function UserTypeSelector(props) {
  const clickedSignupButton = useSelector(
    (state) => state.signupButton.clickedSignupButton
  );
  const selectedSignupButton = useSelector(
    (state) => state.signupButton.selectedSignupButton
  );

  const savedUserType = useSelector(
    (state) => state.signupButton.beforeClickBackButton
  );
  const dispatch = useDispatch();

  const studentSignupClicked = () => {
    dispatch(signupButtonActions.setSelectedSignupButton("student"));
    dispatch(signupButtonActions.setClickedSignupButton("student"));
  };

  const tutorSignupClicked = () => {
    dispatch(signupButtonActions.setSelectedSignupButton("tutor"));
    dispatch(signupButtonActions.setClickedSignupButton("tutor"));
  };

  const universitySignupClicked = () => {
    dispatch(signupButtonActions.setSelectedSignupButton("university"));
    dispatch(signupButtonActions.setClickedSignupButton("university"));
  };

  const communitySignupClicked = () => {
    dispatch(signupButtonActions.setSelectedSignupButton("community"));
    dispatch(signupButtonActions.setClickedSignupButton("community"));
  };

  const forwordButtonclicked = () => {
    dispatch(signupButtonActions.setSelectedSignupButton(savedUserType));
  };
  return (
    <form
      action="index.html"
      autoComplete="off"
      className={classes[props.className]}
    >
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          {savedUserType !== "" ? (
            <CenteredBox align="right">
              <IconButton onClick={forwordButtonclicked} color="primary">
                <NavigateNextIcon />
              </IconButton>
            </CenteredBox>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
      <div className={classes.logo}>
        <img src="/images/athpotha_v3.png" alt="easyclassName" />
      </div>

      <div className={classes.heading}>
        <h2>Get Started</h2>
        <h6>Already have a student account? </h6>
        <span className={classes.toggle} onClick={props.onClick}>
          Sign in
        </span>
      </div>

      <div className={classes["actual-form"]}>
        <Button
          sx={{
            height: "50px",
            borderRadius: "10px",
            marginBottom: "20px",
            textTransform: "none",
          }}
          fullWidth
          variant={clickedSignupButton === "student" ? "contained" : "outlined"}
          onClick={studentSignupClicked}
          endIcon={clickedSignupButton === "student" ? <SendOutlinedIcon /> : ""}
        >
          Sign Up As a Student
        </Button>
        <Button
          sx={{
            height: "50px",
            borderRadius: "10px",
            marginBottom: "20px",
            textTransform: "none",
          }}
          fullWidth
          variant={clickedSignupButton === "tutor" ? "contained" : "outlined"}
          onClick={tutorSignupClicked}
          endIcon={clickedSignupButton === "tutor" ? <SendOutlinedIcon /> : ""}
        >
          Sign Up As a Tutor
        </Button>
        <Button
          sx={{
            height: "50px",
            borderRadius: "10px",
            marginBottom: "20px",
            textTransform: "none",
          }}
          fullWidth
          variant={
            clickedSignupButton === "university" ? "contained" : "outlined"
          }
          onClick={universitySignupClicked}
          endIcon={clickedSignupButton === "university" ? <SendOutlinedIcon /> : ""}
        >
          Sign Up As an University
        </Button>
        <Button
          sx={{
            height: "50px",
            borderRadius: "10px",
            marginBottom: "20px",
            textTransform: "none",
          }}
          fullWidth
          variant={
            clickedSignupButton === "community" ? "contained" : "outlined"
          }
          onClick={communitySignupClicked}
          endIcon={clickedSignupButton === "community" ? <SendOutlinedIcon /> : ""}
        >
          Sign Up As a community
        </Button>
      </div>
    </form>
  );
}

export default UserTypeSelector;
