import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./Login.module.css";

function EnterEmail(props) {
  return (
    <form
      action="index.html"
      autoComplete="off"
      className={classes[props.className]}
    >
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
        <div className={classes["input-wrap"]}>
          <TextField type="email" label="Email address" variant="standard" required fullWidth />
        </div>
        <p className={classes.text}>
          By signing up, I agree to the
          <a href="#"> Terms of Services </a> and <a href="#">Privacy Policy</a>
        </p>
        <Button className={classes["sign-btn"]} variant="contained">
          Sign Up
        </Button>
      </div>
    </form>
  );
}

export default EnterEmail;
