import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputField from "./InputField";
import classes from "./Login.module.css";

function SignUpForm() {
  return (
    <div className={classes["actual-form"]}>
      <div className={classes["input-wrap"]}>
        <TextField label="Name" variant="standard" required fullWidth />
        {/* <span className={classes.textFieldError}>hello</span> */}
      </div>
      <div className={classes["input-wrap"]}>
        <InputField label="Password" id="standard-adornment-sign-up-password" />
      </div>
      <div className={classes["input-wrap"]}>
        <InputField
          label="Confirm Password"
          id="standard-adornment-sign-up-confirm-password"
        />
      </div>
      <Button className={classes["sign-btn"]} variant="contained">
        Sign Up
      </Button>
      <p className={classes.text}>
        By signing up, I agree to the
        <a href="#"> Terms of Services </a> and <a href="#">Privacy Policy</a>
      </p>
    </div>
  );
}

export default SignUpForm;
