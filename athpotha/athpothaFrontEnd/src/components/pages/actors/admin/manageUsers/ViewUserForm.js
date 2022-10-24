import React, { useState } from "react";
import Button from "@mui/material/Button";
import classes from "../Form.module.css"
import { FormControl,  Grid,  InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";
import Input from '@mui/material/Input';
import { fetchUserData } from "../../../../../api/authenticationService";
import TextField from '@mui/material/TextField';

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

  const lblStyle = {
    color:'Black'
  };

function ViewUserForm(props) {
  // console.log(typeof(props.userId));
  //get user with the relevent id
  const [userData, setUserData] = React.useState([])

 
  var id=props.userId;

  const data = {
    url: `admin/getUser/${id}`,
    method: "post",
    data: null,
  };

  React.useEffect(()=>{
      fetchUserData(data).then((response) => {
        setUserData(response.data)
          // console.log("User Data");
          // console.log(response.data);
      })
  }, [])

  //  console.log(userData);
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
            <InputLabel style={lblStyle} id="user_name">User Name</InputLabel>
            <Input style={{color:'black'}} disabled defaultValue="user name" value={userData['firstName']+" "+userData['lastName']} />
          </FormControl>
          
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel style={lblStyle} id="user_type">User Type</InputLabel>
            <Input disabled defaultValue="user type" value={userData['userType']} />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel style={lblStyle} id="description">Description</InputLabel>
            <Input  multiline disabled defaultValue="No Description" value={userData['description']} />            
          </FormControl>
        </div>

        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel style={lblStyle} id="email">Email</InputLabel>
            <Input disabled defaultValue="email" value={userData['email']} />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel style={lblStyle} id="university">University</InputLabel>
            <Input disabled defaultValue="university" inputProps={ariaLabel} />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel style={lblStyle} id="faculty">Faculty</InputLabel>
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