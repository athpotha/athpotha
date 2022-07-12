import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputField from "./InputField";
import classes from './Login.module.css';


function SignInForm() {
  return (
    <div className={classes["actual-form"]}>
      <div className={classes["input-wrap"]}>
        <TextField label="Name" variant="standard" required fullWidth />
        {/* <span className={classes.textFieldError}>hello</span> */}
      </div>
      <div className={classes["input-wrap"]}>
        <InputField label="Password" id="standard-adornment-sign-in-password" />
      </div>
      <Button className={classes["sign-btn"]} variant="contained">
        Sign In
      </Button>

      <p className={classes.text}>
        <a href="#">Foget Password?</a>
      </p>
    </div>
  )
}

export default SignInForm
