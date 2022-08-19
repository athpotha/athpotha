import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./Login.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { Grid, IconButton } from "@mui/material";
import CenteredBox from "../../ui/CenteredBox";
import { useDispatch } from "react-redux";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { signupButtonActions } from "../../../store/signup-button-slice";
import { registrationActions } from "../../../store/registration-slice";


function EmailSent(props) {
  const EMAIL_RESEND_URL = "http://localhost:8080/user/email-resend";
  const email = useSelector((state) => state.registration.enteredEmail);
  const emailResend = () => {
    axios
      .post(EMAIL_RESEND_URL, {
        email: email,
      })
      .then((response) => console.log(response));
  };

  const dispatch = useDispatch();
  const backButtonClicked = () => {
    dispatch(registrationActions.setEmailSent(false));
    // dispatch(signupButtonActions.setSelectedSignupButton(""));
    
  }

  return (
    <form
      //   action="index.html"
      autoComplete="off"
      className={classes[props.className]}
    >
      <Grid container>
        <Grid item xs={6}>
          <IconButton onClick={backButtonClicked} color="primary">
            <NavigateBeforeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          {/* {isEmailSent ? (
            <CenteredBox align="right">
              <IconButton color="primary">
                <NavigateNextIcon />
              </IconButton>
            </CenteredBox>
          ) : (
            ""
          )} */}
        </Grid>
      </Grid>
      <div className={classes.logo}>
        <img
          style={{ width: "200px" }}
          src="/images/athpotha_v3.png"
          alt="easyclassName"
        />
      </div>

      <div className={classes.heading}>
        {/* <h2>Get Started</h2> */}
        <h6>Already have a student account? </h6>
        <span className={classes.toggle} onClick={props.onClick}>
          Sign in
        </span>
      </div>
      <div className={classes.heading}>
        <h4 style={{ textAlign: "left" }}>
          Your email is sent to email. Please check the Email inbox
        </h4>
        <h6>Did not recive email yet? </h6>
        <span className={classes.toggle} onClick={emailResend}>
          Resend
        </span>
      </div>
      {/* <div className={classes["actual-form"]}>
        
      </div> */}
    </form>
  );
}

export default EmailSent;
