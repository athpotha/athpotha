import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputField from "./InputField";
import classes from "./Login.module.css";

function SignInForm(props) {
  return (
    <form
      action="index.html"
      autoComplete="off"
      className={classes[props.className]}
    >
      <div className={classes.logo}>
        <img src="/images/athpotha_v3.png" alt="අත්පොත" />
      </div>

      <div className={classes.heading}>
        <h2>Welcome Back</h2>
        <h6>Not registred as a student yet? </h6>
        <span className={classes.toggle} onClick={props.onClick} >
          Sign up
        </span>
        <div style={{marginTop: "20px"}}>
          <div className={classes["input-wrap"]}>
            <TextField label="Name" variant="standard" required fullWidth />
            {/* <span className={classes.textFieldError}>hello</span> */}
          </div>
          <div className={classes["input-wrap"]}>
            <InputField
              label="Password"
              id="standard-adornment-sign-in-password"
            />
          </div>
          <Button className={classes["sign-btn"]} variant="contained">
            Sign In
          </Button>

          <p className={classes.text}>
            <a href="#">Foget Password?</a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default SignInForm;
