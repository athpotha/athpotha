import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputField from "../../../login/InputField"
// import classes from "./Form.module.css";
import classes from "../Form.module.css"
import { FormControl,  Grid,  InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

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
function ViewUserForm(props) {
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
           <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="user_name">User Name</InputLabel>
            <Input disabled defaultValue="user name" value={props.userData} />
          </FormControl>
          
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="user_type">User Type</InputLabel>
            <Input disabled defaultValue="user type" inputProps={ariaLabel} />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="description">Description</InputLabel>
            <Input disabled defaultValue="description" inputProps={ariaLabel} />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="email">Email</InputLabel>
            <Input disabled defaultValue="email" inputProps={ariaLabel} />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="university">University</InputLabel>
            <Input disabled defaultValue="university" inputProps={ariaLabel} />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="faculty">Faculty</InputLabel>
            <Input disabled defaultValue="faculty" inputProps={ariaLabel} />
          </FormControl>
        </div>
      </div>
    </form>
  );
}

export default ViewUserForm;


//parallel inputs
 {/* <Grid container>
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

          </Grid> */}