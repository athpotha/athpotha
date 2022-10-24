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
import { fetchUserData } from "../../../../../api/authenticationService";

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

   console.log(userData);
  //sweet alert
  const [firstName,setFirstName]= useState( userData['firstName']);
  const [lastName, setLastName] = useState(userData['lastName']);
  const [userType, setUserType] = useState(userData['userType']);
  const [description, setDescription] = useState(userData['description']);
  const [email, setEmail] = useState(userData['email']);
  
  console.log("FirstName - "+firstName);

  const UpdateUser=(e)=>{
    e.preventDefault();
    // setFirstName(e.target.value);
    // setLastName(e.target.value);
    // setUserType(e.target.value);
    // setDescription(e.target.value);
    // setEmail(e.target.value);

    const data = {
      url: `admin/updateUser/${id}`,
      method: "put",
      data: {
        firstName,
        lastName,
        userType,
        description,
        email
      },
    };
    fetchUserData(data)
      .then((response) => {
        console.log(response.data);
      });
  }
  
  // const UpdateUser = () => {
  //   Swal.fire({
  //     title: "Updated!",
  //     text: "The user has been updated.",
  //     icon: "success",
  //     confirmButtonColor: "#388e3c"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //      console.log("success");
  //     }
  //   });
  // };

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
            {console.log("Username"+userData['firstName'])}
            <Input placeholder="first name" value={userData['firstName']} onChange={(e) => setFirstName(e.target.value)} />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]} style={{ marginTop: "10px" }}>
           <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="last_name">Last Name</InputLabel>
            <Input  placeholder="last name" value={userData['lastName']} onChange={(e) => setLastName(e.target.value)} />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="user_type">User Type</InputLabel>
            <Input placeholder="user type" value={userData['userType']} onChange={(e) => setUserType(e.target.value)}  />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="description">Description</InputLabel>
            <Input multiline placeholder="decsription" value={userData['description']} onChange={(e) => setDescription(e.target.value)}  />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="email">Email</InputLabel>
            <Input placeholder="email" value={userData['email']} onChange={(e) => setEmail(e.target.value)}  />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="university">University</InputLabel>
            <Input placeholder="university" value={userData['university']}  />
          </FormControl>
        </div>
        <div className={classes["input-wrap"]}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="faculty">Faculty</InputLabel>
            <Input placeholder="faculty" value={userData['faculty']}  />
          </FormControl>
        </div>
         <ColorButton1 style={{ marginRight: 50, marginLeft:40 , paddingLeft:30, paddingRight:30}} onClick={UpdateUser}>Update</ColorButton1>
            <ColorButton2 style={{ paddingLeft:30, paddingRight:30}} onClick={handleClose}>Cancel</ColorButton2>
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