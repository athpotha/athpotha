import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputField from "./InputField";
import classes from "./Login.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";

function SignInForm(props) {
  const dispatch = useDispatch();
  const USER_REST_API_URL = "http://localhost:8080/user/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(USER_REST_API_URL, {
      email: email,
      password: password,
    });
  };
  return (
    <form
      // action="index.html"
      // autoComplete="off"
      className={classes[props.className]}
      onSubmit={submitHandler}
    >
      <div className={classes.logo}>
        <img src="/images/athpotha_v3.png" alt="අත්පොත" />
      </div>

      <div className={classes.heading}>
        <h2>Welcome Back</h2>
        <h6>Not registred as a student yet? </h6>
        <span className={classes.toggle} onClick={props.onClick}>
          Sign up
        </span>
        <div style={{ marginTop: "20px" }}>
          <div className={classes["input-wrap"]}>
            <TextField
              label="Email"
              type="email"
              variant="standard"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target)}
            />
            {/* <span className={classes.textFieldError}>hello</span> */}
          </div>
          <div className={classes["input-wrap"]}>
            <InputField
              label="Password"
              id="standard-adornment-sign-in-password"
              value={password}
              onChange={(e) => setPassword(e.target)}
            />
          </div>
          <Button
            type="submit"
            className={classes["sign-btn"]}
            variant="contained"
          >
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
