import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputField from "./InputField";
import classes from "./Login.module.css";
import axios from "axios";
import AuthContext from "../../../store/ath-context";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../../../api/authenticationService";

function SignInForm({ loading, error, ...props }) {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const USER_REST_API_URL = "api/v1/auth/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(USER_REST_API_URL, {
        email: email,
        password: password,
      })
      .then((response) => {
        authCtx.login(response.data.token);
      })
      .then(() => {
        fetchUserData({
          method: "post",
          url: "api/v1/auth/userinfo",
          data: { email: email },
        })
          .then((response) => {
            const name = `${response.data.firstName} ${response.data.lastName}`;
            localStorage.setItem("USER_TYPE", response.data.userType);
            localStorage.setItem("USER_NAME", name);
            localStorage.setItem("USER_EMAIL", response.data.email);
            const user_type = localStorage.getItem("USER_TYPE");
            if (user_type !== "university" && user_type !== "admin") {
              navigate("/main");
            } else if(user_type === "admin") {
              navigate("/admin");
            } else if(user_type === "university") {
              navigate("/university");
            }
          })
          .catch((error) => {
            console.log(error);
          });
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
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <span className={classes.textFieldError}>hello</span> */}
          </div>
          <div className={classes["input-wrap"]}>
            <InputField
              label="Password"
              id="standard-adornment-sign-in-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
