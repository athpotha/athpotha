import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputField from "../../../login/InputField"
// import classes from "./Form.module.css";
import classes from "../Form.module.css"
import { FormControl,  Grid,  InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";

const ColorButton1 = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[600]),
    textTransform: "none",
    backgroundColor: green[600],
    "&:hover": {
      backgroundColor: green[700],
    },
  }));
  
  const ColorButton2 = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[600]),
    backgroundColor: red[600],
    textTransform: "none",
    "&:hover": {
      backgroundColor: red[700],
    },
  }));
function UniversityRegistrationForm(props) {
  return (
    <form
      className={classes[props.className]}
    >
      <div className={classes.logo}>
        <img src="/images/athpotha_v3.png" alt="easyclassName" />
      </div>

      <div className={classes.heading}>
        <h2>User Details</h2>
      </div>

      <div className={classes["actual-form"]}>
        <div className={classes["input-wrap"]} style={{ marginTop: "10px" }}>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                name="first_name"
                variant="standard"
                type="text"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                name="last_name"
                variant="standard"
                type="text"
              />
            </Grid>

          </Grid>
        </div>
        <div className={classes["input-wrap"]}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="university">University</InputLabel>
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="faculty">Faculty</InputLabel>
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
          <TextField
            type="email"
            label="Email"
            name="email"
            variant="standard"
            fullWidth
          />
        </div>
        <div className={classes["input-wrap"]}>
          <InputField
            label="Password"
            id="standard-adornment-sign-up-password"
            name="password"
          />
        </div>
        <div className={classes["input-wrap"]}>
          <InputField
            label="Confirm Password"
            name="confirm_password"
            id="standard-adornment-sign-up-confirm-password"
          />
        </div>
         <ColorButton1 style={{ marginRight: 50, marginLeft:40 , paddingLeft:30, paddingRight:30}}>Update</ColorButton1>
            <ColorButton2 style={{ paddingLeft:30, paddingRight:30}}>Delete</ColorButton2>
      </div>
    </form>
  );
}

export default UniversityRegistrationForm;

