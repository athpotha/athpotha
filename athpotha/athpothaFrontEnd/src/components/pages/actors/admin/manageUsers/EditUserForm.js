import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputField from "../../../login/InputField"
// import classes from "./Form.module.css";
import classes from "../Form.module.css"
import { FormControl, Grid, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";
import Input from '@mui/material/Input';
import { fetchUserData } from "../../../../../api/authenticationService";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ariaLabel = { 'aria-label': 'description' };
//sweet alert
const Swal = require("sweetalert2");

//open sweet alert when clicked delete button
const UpdateUser = () => {

  Swal.fire({
    title: "Updated!",
    text: "The user has been updated.",
    icon: "success",
    confirmButtonColor: "#388e3c"
  });
};




//colour buttons
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
function EditUserForm(props) {
  //close popup
  const [open, setOpen] = React.useState(props.state);
  const handleClickOpen = () => setOpen(true);
  console.log("open");
  console.log(open);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    setOpen(props.flag);
  }, []);

  //get user with the relevent id
  const [userData, setUserData] = React.useState([])


  var id = props.userId;

  const data = {
    url: `admin/getUser/${id}`,
    method: "post",
    data: null,
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userType, setUserType] = useState("");
  // const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
  React.useEffect(() => {
    fetchUserData(data).then((response) => {
      console.log(response.data)
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setUserType(response.data.userType);
      setEmail(response.data.email);
      if (response.data.userType === "university") {
        setUniversity(response.data.university);
        console.log("University"+response.data.faculty);
        setFaculty(response.data.faculty);
      }
      // setDescription(response.data.)
      // setUserData(response.data)
      // console.log("User Data");
      // console.log(response.data);
    })
  }, [])

  //  console.log(userData);
  //sweet alert

  // console.log("FirstName - "+firstName);

  const UpdateUser = () => { 
    props.handleClose();
    console.log("id"+id) ;
    const data = {
      url: `admin/updateUser/${id}`,
      method: "put",
      data: {
        firstName,
        lastName,
        userType,
        email,
        university,
        faculty
      }
    };
    console.log(data);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#388e3c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Clicked update");
        fetchUserData(data).then(() => {
          Swal.fire({
            title: "Updated!",
            text: "User updated",
            icon: "success",
            confirmButtonColor: "#388e3c",
          }).then(() => {        
              console.log("After Update");
              window.location.replace("/admin/manage-users");
            })
        })
    }
})
}

  return (
    <form
      className={classes[props.className]}
    >
      <div className={classes.logo}>
        <img src="/images/athpotha_v3.png" alt="easyclassName" />
      </div>

      <div className={classes.heading}>
        <h2>Edit Details</h2>
      </div>

      <div className={classes["actual-form"]}>
        <div className={classes["input-wrap"]} style={{ marginTop: "10px" }}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="first_name">First Name</InputLabel>
            <Input placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]} style={{ marginTop: "10px" }}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="last_name">Last Name</InputLabel>
            <Input placeholder="last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-label">User Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userType}
              label="User Type"
              onChange={(e) => {setUserType(e.target.value)}}
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="tutor">Tutor</MenuItem>
              <MenuItem value="university">University</MenuItem>
              <MenuItem value="community">Community</MenuItem>
            </Select>
          </FormControl>
          {/* <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="user_type">User Type</InputLabel>
            <Input placeholder="user type" value={userType} onChange={(e) => setUserType(e.target.value)} />
          </FormControl> */}
        </div>
        {/* <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="description">Description</InputLabel>
            <Input multiline placeholder="decsription" value={userData['description']} onChange={(e) => setDescription(e.target.value)}  />
          </FormControl>
        </div> */}
        <div className={classes["input-wrap"]}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="email">Email</InputLabel>
            <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
        </div>
        {userType === "university" &&
          <React.Fragment>
            <div className={classes["input-wrap"]}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="university">University</InputLabel>
                <Input placeholder="university" value={university} onChange={(e) => setUniversity(e.target.value)} />
              </FormControl>
            </div>
            <div className={classes["input-wrap"]}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="faculty">Faculty</InputLabel>
                <Input placeholder="faculty" value={faculty} onChange={(e) => setFaculty(e.target.value)} />
              </FormControl>
            </div>
          </React.Fragment>
        }
        <ColorButton1 style={{ marginRight: 50, marginLeft: 40, paddingLeft: 30, paddingRight: 30 }} onClick={UpdateUser}>Update</ColorButton1>
        <ColorButton2 style={{ paddingLeft: 30, paddingRight: 30 }} onClick={props.handleClose}>Cancel</ColorButton2>
      </div>
    </form>
  );
}

export default EditUserForm;


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