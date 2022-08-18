import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputField from "./InputField";
import classes from "./Login.module.css";
import axios from "axios";
import AuthContext from "../../../store/ath-context";
import { useNavigate } from "react-router-dom";
import { checkEmail, fetchUserData, userLogin } from "../../../api/authenticationService";
import useInput from "../../../hooks/use-input";
import Swal from "sweetalert2";

function SignInForm({ loading, error, ...props }) {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const USER_REST_API_URL = "api/v1/auth/login";

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //Helper For Email validataion
  const emailValidation = (email) => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(pattern)) {
      return true;
    } else {
      return false;
    }
  }
  //Email Validation
  const [emailResponse, setEmailResponse] = useState("");
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    error: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => {

    if (value.trim() === "") {
      return { inputIsValid: false, error: "Can't be Empty !" };
    } else if (emailValidation(value.trim())) {
      return { inputIsValid: false, error: "Email is not completed !" };
    } else {
      // return { inputIsValid: true, error: "" };
      checkEmail(value.trim())
        .then((response) => {
          setEmailResponse(response.data)
        });
      if (emailResponse === "VERIFIED_USER") {
        return { inputIsValid: true, error: "" };
      } else {
        return { inputIsValid: false, error: "Not Registered Email !" };
      }
    }
  })

  //Helper for the password
  function CheckPassword(string) {
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!string.match(pattern)) {
      return true;
    } else {
      return false;
    }
  }
  //Password Validation
  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    error: passwordError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => {
    if (value.trim() === "") {
      return { inputIsValid: false, error: "Can't be Empty !" };
    }
    // else if (value.trim().length <= 8) {
    //   return { inputIsValid: false, error: "Password is short !" };
    // } else if (CheckPassword(value.trim())) {
    //   return { inputIsValid: false, error: "Password is not strong !" };
    // } 
    else {
      return { inputIsValid: true, error: "" };
    }
  })

  let formIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!emailIsValid && !passwordIsValid) {
      return;
    }
    try {
      const tokenResponse = await userLogin({
        email: email,
        password: password
      });

      const tokenData = await tokenResponse.data;
      authCtx.login(tokenData.token);

      const userInfoResponse = await fetchUserData({
        method: "post",
        url: "api/v1/auth/userinfo",
        data: { email: email }
      });

      const userInfo = await userInfoResponse.data;
      authCtx.userInfo(userInfo);

      const user_type = localStorage.getItem("USER_TYPE");
      if (user_type !== "university" && user_type !== "admin") {
        navigate("/main");
      } else if (user_type === "admin") {
        navigate("/admin");
      } else if (user_type === "university") {
        navigate("/university");
      }
    }catch {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password is Wrong!',
      })
    }
  };

  return (
    <form
      // action="index.html"
      // autoComplete="off"
      className={classes[props.className]}
      onSubmit={submitHandler}
      noValidate
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
              type="email"
              label="Email"
              name="email"
              variant="standard"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              error={emailHasError}
              helperText={emailHasError ? emailError : ""}
              required
              fullWidth
            />
          </div>
          <div className={classes["input-wrap"]}>
            <InputField
              label="Password"
              id="standard-adornment-sign-in-password"
              name="password"
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              error={passwordHasError}
              helperText={passwordHasError ? passwordError : ""}
            />
          </div>
          <Button
            type="submit"
            className={classes["sign-btn"]}
            variant="contained"
            disabled={!formIsValid}
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
