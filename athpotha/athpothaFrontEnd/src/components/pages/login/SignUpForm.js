import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputField from "./InputField";
import classes from "./Login.module.css";
import { registrationActions } from "../../../store/registration-slice";
import { signupButtonActions } from "../../../store/signup-button-slice";
import { useDispatch, useSelector } from "react-redux";
import { Grid, IconButton } from "@mui/material";
import CenteredBox from "../../ui/CenteredBox";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import axios from "axios";
function SignUpForm(props) {
  const dispatch = useDispatch();
  const USER_REST_API_URL = "user/register";

  const [first_name, setFrist_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const user_type = useSelector(
    (state) => state.signupButton.selectedSignupButton
  );
  const enteredEmail = useSelector((state) => state.registration.enteredEmail);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(first_name, last_name, email, password, confirm_password);
    dispatch(
      registrationActions.setIsEmailSent({
        email: email,
        emailSent: true,
      })
    );
    axios
      .post(USER_REST_API_URL, {
        first_name: first_name,
        last_name: last_name,
        user_type: user_type,
        email: email,
        password: password,
        profile_picture: "images/Profile/default_profile.jpg",
      })
      .then((response) => {
        console.log(response);
      });
  };


  const backButtonClicked = () => {
    dispatch(signupButtonActions.setBeforeClickBackButton(user_type));
    dispatch(signupButtonActions.setSelectedSignupButton(""));
  }

  const forwardButtonClicked = () => {
    dispatch(registrationActions.setEmailSent(true));
  }
  
  return (
    <form
      // action="index.html"
      // autoComplete="off"
      className={classes[props.className]}
      onSubmit={submitHandler}
      // method="POST"
    >
      <Grid container>
        <Grid item xs={6}>
          <IconButton onClick={backButtonClicked} color="primary">
            <NavigateBeforeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          {(enteredEmail !== "") ? (
            <CenteredBox align="right">
              <IconButton onClick={forwardButtonClicked} color="primary">
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
        <h2>Sign Up As {user_type}</h2>
        <h6>Already have a student account? </h6>
        <span className={classes.toggle} onClick={props.onClick}>
          Sign in
        </span>
      </div>

      <div className={classes["actual-form"]}>
        <div className={classes["input-wrap"]} style={{ marginTop: "10px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                name="first_name"
                variant="standard"
                value={first_name}
                onChange={(e) => setFrist_name(e.target.value)}
                required
                type="text"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                name="last_name"
                variant="standard"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
                required
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes["input-wrap"]}>
          <TextField
            type="email"
            label="Email"
            name="email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
        </div>
        <div className={classes["input-wrap"]}>
          <InputField
            label="Password"
            id="standard-adornment-sign-up-password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={classes["input-wrap"]}>
          <InputField
            label="Confirm Password"
            name="confirm_password"
            id="standard-adornment-sign-up-confirm-password"
            value={confirm_password}
            onChange={(e) => setConfirm_password(e.target.value)}
          />
        </div>
        <p className={classes.text}>
          By signing up, I agree to the
          <a href="#"> Terms of Services </a> and <a href="#">Privacy Policy</a>
        </p>
        <Button
          type="submit"
          className={classes["sign-btn"]}
          variant="contained"
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
}

export default SignUpForm;
