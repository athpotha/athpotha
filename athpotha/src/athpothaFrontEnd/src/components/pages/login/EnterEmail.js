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

import useInput from "../../../hooks/use-input";

import { checkEmail, userRegistration } from "../../../api/authenticationService";
function EnterEmail(props) {
  const dispatch = useDispatch();

  const backButtonClicked = () => {
    dispatch(signupButtonActions.setBeforeClickBackButton(user_type));
    dispatch(signupButtonActions.setSelectedSignupButton(""));
  }

  const forwardButtonClicked = () => {
    dispatch(registrationActions.setEmailSent(true));
  }

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
        return { inputIsValid: false, error: "Already Registered email !" };
      } else {
        return { inputIsValid: true, error: "" };
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
    } else if (value.trim().length <= 8) {
      return { inputIsValid: false, error: "Password is short !" };
    } else if (CheckPassword(value.trim())) {
      return { inputIsValid: false, error: "Password is not strong !" };
    } else {
      return { inputIsValid: true, error: "" };
    }
  })

  //Confirm Password Validation
  const {
    value: confirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    error: confirmPasswordError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
  } = useInput((value) => {
    if (value.trim() === "") {
      return { inputIsValid: false, error: "Can't be Empty !" };
    } else if (password !== value.trim()) {
      return { inputIsValid: false, error: "Password not match !" };
    } else {
      return { inputIsValid: true, error: "" };
    }
  })

  let formIsValid = false;
  // if (fnameIsValid && lnameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid) {
  //   formIsValid = true;
  // }
  if(emailIsValid) {
    formIsValid = true;
  }

  const user_type = useSelector(
    (state) => state.signupButton.selectedSignupButton
  );
  const enteredEmail = useSelector((state) => state.registration.enteredEmail);

  const submitHandler = (e) => {
    e.preventDefault();
    if(!emailIsValid) {
      return;
    }
    dispatch(
      registrationActions.setIsEmailSent({
        email: email,
        emailSent: true,
      })
    );

    // userRegistration({
    //   user_type: user_type,
    //   email: email,
    // })
  };
  return (
    <form
      className={classes[props.className]}
      onSubmit={submitHandler}
      noValidate
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
        
        <p className={classes.text}>
          By signing up, I agree to the
          <a href="#"> Terms of Services </a> and <a href="#">Privacy Policy</a>
        </p>
        <Button
          type="submit"
          className={classes["sign-btn"]}
          variant="contained"
          disabled={!formIsValid}
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
}

export default EnterEmail;
