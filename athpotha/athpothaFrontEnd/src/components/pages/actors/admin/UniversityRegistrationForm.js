// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import InputField from "../../login/InputField";
// import classes from "./Form.module.css";
// // import { registrationActions } from "../../../../store/registration-slice";
// // import { signupButtonActions } from "../../../store/signup-button-slice";
// import { useDispatch, useSelector } from "react-redux";
// import { FormControl, FormHelperText, Grid, IconButton, InputLabel, MenuItem, Select } from "@mui/material";
// import CenteredBox from "../../../ui/CenteredBox";
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// import useInput from "../../../../hooks/use-input";

// import { checkEmail, userRegistration } from "../../../../api/authenticationService";
// function UniversityRegistrationForm(props) {
//   const dispatch = useDispatch();

//   // const backButtonClicked = () => {
//   //   dispatch(signupButtonActions.setBeforeClickBackButton(user_type));
//   //   dispatch(signupButtonActions.setSelectedSignupButton(""));
//   // }

//   // const forwardButtonClicked = () => {
//   //   dispatch(registrationActions.setEmailSent(true));
//   // }


//   //Helpers to validate Fname and Lname
//   const hasNumber = (string) => {
//     return /\d/.test(string);
//   }

//   const hasSpecialChars = (string) => {
//     let pattern = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
//     if (string.match(pattern)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   //-------------------

//   //First Name Validate
//   const {
//     value: fname,
//     isValid: fnameIsValid,
//     hasError: fnameHasError,
//     error: fnameError,
//     valueChangeHandler: fnameChangeHandler,
//     inputBlurHandler: fnameBlurHandler,
//   } = useInput((value) => {
//     if (value.trim() === "") {
//       return { inputIsValid: false, error: "Can't be Empty !" };
//     } else if (hasNumber(value.trim())) {
//       return { inputIsValid: false, error: "Can't contained numbers !" };
//     } else if (hasSpecialChars(value.trim())) {
//       return { inputIsValid: false, error: "Can't contained special chars !" };
//     } else {
//       return { inputIsValid: true, error: "" };
//     }
//   })

//   //Last Name Validate
//   const {
//     value: lname,
//     isValid: lnameIsValid,
//     hasError: lnameHasError,
//     error: lnameError,
//     valueChangeHandler: lnameChangeHandler,
//     inputBlurHandler: lnameBlurHandler,
//   } = useInput((value) => {
//     if (value.trim() === "") {
//       return { inputIsValid: false, error: "Can't be Empty !" };
//     } else if (hasNumber(value.trim())) {
//       return { inputIsValid: false, error: "Can't contained numbers !" };
//     } else if (hasSpecialChars(value.trim())) {
//       return { inputIsValid: false, error: "Can't contained special chars !" };
//     } else {
//       return { inputIsValid: true, error: "" };
//     }
//   })

//   //Helper For Email validataion
//   const emailValidation = (email) => {
//     let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (!email.match(pattern)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   //Email Validation
//   const [emailResponse, setEmailResponse] = useState("");
//   const {
//     value: email,
//     isValid: emailIsValid,
//     hasError: emailHasError,
//     error: emailError,
//     valueChangeHandler: emailChangeHandler,
//     inputBlurHandler: emailBlurHandler,
//   } = useInput((value) => {

//     if (value.trim() === "") {
//       return { inputIsValid: false, error: "Can't be Empty !" };
//     } else if (emailValidation(value.trim())) {
//       return { inputIsValid: false, error: "Email is not completed !" };
//     } else {
//       // return { inputIsValid: true, error: "" };
//       checkEmail(value.trim())
//         .then((response) => {
//           setEmailResponse(response.data)
//         });
//       if (emailResponse === "VERIFIED_USER") {
//         return { inputIsValid: false, error: "Already Registered email !" };
//       } else {
//         return { inputIsValid: true, error: "" };
//       }
//     }
//   })

//   //University Validation
//   const {
//     value: university,
//     isValid: universityIsValid,
//     hasError: universityHasError,
//     error: universityError,
//     valueChangeHandler: universityChangeHandler,
//     inputBlurHandler: universityBlurHandler,
//   } = useInput((value) => {
//     if (value === "") {
//       return { inputIsValid: false, error: "Can't be Empty !" }
//     } else {
//       return { inputIsValid: true, error: "" }
//     }
//   })

//   //Faculty Validation
//   const {
//     value: faculty,
//     isValid: facultyIsValid,
//     hasError: facultyHasError,
//     error: facultyError,
//     valueChangeHandler: facultyChangeHandler,
//     inputBlurHandler: facultyBlurHandler,
//   } = useInput((value) => {
//     if (value === "") {
//       return { inputIsValid: false, error: "Can't be Empty !" }
//     } else {
//       return { inputIsValid: true, error: "" }
//     }
//   })

//   //Helper for the password
//   function CheckPassword(string) {
//     let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//     if (!string.match(pattern)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   //Password Validation
//   const {
//     value: password,
//     isValid: passwordIsValid,
//     hasError: passwordHasError,
//     error: passwordError,
//     valueChangeHandler: passwordChangeHandler,
//     inputBlurHandler: passwordBlurHandler,
//   } = useInput((value) => {
//     if (value.trim() === "") {
//       return { inputIsValid: false, error: "Can't be Empty !" };
//     } else if (value.trim().length <= 8) {
//       return { inputIsValid: false, error: "Password is short !" };
//     } else if (CheckPassword(value.trim())) {
//       return { inputIsValid: false, error: "Password is not strong !" };
//     } else {
//       return { inputIsValid: true, error: "" };
//     }
//   })

//   //Confirm Password Validation
//   const {
//     value: confirmPassword,
//     isValid: confirmPasswordIsValid,
//     hasError: confirmPasswordHasError,
//     error: confirmPasswordError,
//     valueChangeHandler: confirmPasswordChangeHandler,
//     inputBlurHandler: confirmPasswordBlurHandler,
//   } = useInput((value) => {
//     if (value.trim() === "") {
//       return { inputIsValid: false, error: "Can't be Empty !" };
//     } else if (password !== value.trim()) {
//       return { inputIsValid: false, error: "Password not match !" };
//     } else {
//       return { inputIsValid: true, error: "" };
//     }
//   })

//   let formIsValid = false;
//   if (fnameIsValid && lnameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid) {
//     formIsValid = true;
//   }

//   // console.log(formIsValid);
//   const user_type = useSelector(
//     (state) => state.signupButton.selectedSignupButton
//   );
//   const enteredEmail = useSelector((state) => state.registration.enteredEmail);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (!fnameIsValid && !lnameIsValid && !emailIsValid && !passwordIsValid && !confirmPasswordIsValid) {
//       return;
//     }
//     // dispatch(
//     //   registrationActions.setIsEmailSent({
//     //     email: email,
//     //     emailSent: true,
//     //   })
//     // );

//     // console.log(fname, lname, user_type, email, password);
//     userRegistration({
//       first_name: fname,
//       last_name: lname,
//       user_type: user_type,
//       email: email,
//       password: password,
//       // profile_picture: "images/Profile/default_profile.jpg",
//     })
//   };
//   return (
//     <form
//       className={classes[props.className]}
//       onSubmit={submitHandler}
//       noValidate
//     >
//       <div className={classes.logo}>
//         <img src="/images/athpotha_v3.png" alt="easyclassName" />
//       </div>

//       <div className={classes.heading}>
//         <h2>University Registration</h2>
//         {/* <h6>Already have a student account? </h6> */}
//         {/* <span className={classes.toggle} onClick={props.onClick}>
//           Sign in
//         </span> */}
//       </div>

//       <div className={classes["actual-form"]}>
//         <div className={classes["input-wrap"]} style={{ marginTop: "10px" }}>
//           <Grid container>
//             <Grid item xs={6}>
//               <TextField
//                 label="First Name"
//                 name="first_name"
//                 variant="standard"
//                 value={fname}
//                 onChange={fnameChangeHandler}
//                 onBlur={fnameBlurHandler}
//                 error={fnameHasError}
//                 helperText={fnameHasError ? fnameError : ""}
//                 required
//                 type="text"
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Last Name"
//                 name="last_name"
//                 variant="standard"
//                 value={lname}
//                 onChange={lnameChangeHandler}
//                 onBlur={lnameBlurHandler}
//                 error={lnameHasError}
//                 helperText={lnameHasError ? lnameError : ""}
//                 required
//                 type="text"
//               />
//             </Grid>

//           </Grid>
//         </div>
//         <div className={classes["input-wrap"]}>
//           <FormControl variant="standard" sx={{ width: "100%" }} required error={universityHasError}>
//             <InputLabel id="university">University</InputLabel>
//             <Select
//               label="University"
//               value={university}
//               onChange={universityChangeHandler}
//               onBlur={universityBlurHandler}
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={1}>University of Moratuwa</MenuItem>
//               <MenuItem value={2}>University of Colombo</MenuItem>
//               <MenuItem value={3}>University of Peradeniya</MenuItem>
//               <MenuItem value={4}>University of Kelaniya</MenuItem>
//               <MenuItem value={5}>University of Japura</MenuItem>
//               <MenuItem value={6}>University of Ruhuna</MenuItem>
//               <MenuItem value={7}>Sri Lanka Institute of Information Technology (SLIIT)</MenuItem>
//               <MenuItem value={8}>Informatics Information of Technology (IIT)</MenuItem>
//             </Select>
//             <FormHelperText>{universityHasError ? universityError : ""}</FormHelperText>
//           </FormControl>
//         </div>
//         <div className={classes["input-wrap"]}>
//           <FormControl variant="standard" sx={{ width: "100%" }} required error={universityHasError}>
//             <InputLabel id="faculty">Faculty</InputLabel>
//             <Select
//               label="Faculty"
//               value={faculty}
//               onChange={facultyChangeHandler}
//               onBlur={facultyBlurHandler}
//               error={facultyHasError}
//               helperText={facultyHasError ? facultyError : ""}
//               required
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={1}>Engineering</MenuItem>
//               <MenuItem value={2}>Computer Science</MenuItem>
//               <MenuItem value={3}>Information Technology</MenuItem>
//               <MenuItem value={4}>Physical Science</MenuItem>
//               <MenuItem value={5}>Applied Sciences</MenuItem>
//               <MenuItem value={6}>Quantity Surveying</MenuItem>
//               <MenuItem value={7}>Computing and Information Systems</MenuItem>
//               <MenuItem value={8}>Town and Country Planning</MenuItem>
//             </Select>
//             <FormHelperText>{facultyHasError ? facultyError : ""}</FormHelperText>
//           </FormControl>
//         </div>
//         <div className={classes["input-wrap"]}>
//           <TextField
//             type="email"
//             label="Email"
//             name="email"
//             variant="standard"
//             value={email}
//             onChange={emailChangeHandler}
//             onBlur={emailBlurHandler}
//             error={emailHasError}
//             helperText={emailHasError ? emailError : ""}
//             required
//             fullWidth
//           />
//         </div>
//         <div className={classes["input-wrap"]}>
//           <InputField
//             label="Password"
//             id="standard-adornment-sign-up-password"
//             name="password"
//             value={password}
//             onChange={passwordChangeHandler}
//             onBlur={passwordBlurHandler}
//             error={passwordHasError}
//             helperText={passwordHasError ? passwordError : ""}
//           />
//         </div>
//         <div className={classes["input-wrap"]}>
//           <InputField
//             label="Confirm Password"
//             name="confirm_password"
//             id="standard-adornment-sign-up-confirm-password"
//             value={confirmPassword}
//             onChange={confirmPasswordChangeHandler}
//             onBlur={confirmPasswordBlurHandler}
//             error={confirmPasswordHasError}
//             helperText={confirmPasswordHasError ? confirmPasswordError : ""}
//           />
//         </div>
//         <p className={classes.text}>
//           By signing up, I agree to the
//           <a href="#"> Terms of Services </a> and <a href="#">Privacy Policy</a>
//         </p>
//         <Button
//           type="submit"
//           className={classes["sign-btn"]}
//           variant="contained"
//           disabled={!formIsValid}
//         >
//           Sign Up
//         </Button>
//       </div>
//     </form>
//   );
// }

// export default UniversityRegistrationForm;

// // <Box style={{mt:"200px"}}>
//     //   <form>
//     //   <TextField id="firstname" label="First Name" variant="standard" />
//     //   <TextField id="lastname" label="Last Name" variant="standard" />
//     //   <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
//     //     <InputLabel id="university">University</InputLabel>
//     //     <Select
//     //       labelId="university"
//     //       id="university-names"
//     //       value={universityname}
//     //       onChange={handleChangeUniversity}
//     //       label="University"
//     //     >
//     //       <MenuItem value={1}>University of Moratuwa</MenuItem>
//     //       <MenuItem value={2}>University of Colombo</MenuItem>
//     //       <MenuItem value={3}>University of Peradeniya</MenuItem>
//     //       <MenuItem value={4}>University of Kelaniya</MenuItem>
//     //       <MenuItem value={5}>University of Japura</MenuItem>
//     //       <MenuItem value={6}>University of Ruhuna</MenuItem>
//     //       <MenuItem value={7}>Sri Lanka Institute of Information Technology (SLIIT)</MenuItem>
//     //       <MenuItem value={8}>Informatics Information of Technology (IIT)</MenuItem>
//     //     </Select>
//     //   </FormControl>
//     //   <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
//     //     <InputLabel id="faculty">Faculty</InputLabel>
//     //     <Select
//     //       labelId="faculty"
//     //       id="faculty-names"
//     //       value={facultyname}
//     //       onChange={handleChangeFaculty}
//     //       label="Faculty"
//     //     >
//     //       <MenuItem value={1}>Engineering</MenuItem>
//     //       <MenuItem value={2}>Computer Science</MenuItem>
//     //       <MenuItem value={3}>Information Technology</MenuItem>
//     //       <MenuItem value={4}>Physical Science</MenuItem>
//     //       <MenuItem value={5}>Applied Sciences</MenuItem>
//     //       <MenuItem value={6}>Quantity Surveying</MenuItem>
//     //       <MenuItem value={7}>Computing and Information Systems</MenuItem>
//     //       <MenuItem value={8}>Town and Country Planning</MenuItem>
//     //     </Select>
//     //   </FormControl>
//     //   <TextField
//     //       id="email"
//     //       label="Email"
//     //       type="email"
//     //     //   autoComplete="current-password"
//     //       variant="standard"
//     //     />
//     //     <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
//     //       <InputLabel htmlFor="password">Password</InputLabel>
//     //       <Input
//     //         id="password"
//     //         type={values.showPassword ? 'text' : 'password'}
//     //         // value={values.password}
//     //         onChange={handleChangePassword('password')}
//     //         endAdornment={
//     //           <InputAdornment position="end">
//     //             <IconButton
//     //               aria-label="toggle password visibility"
//     //               onClick={handleClickShowPassword}
//     //               onMouseDown={handleMouseDownPassword}
//     //             >
//     //               {values.showPassword ? <VisibilityOff /> : <Visibility />}
//     //             </IconButton>
//     //           </InputAdornment>
//     //         }
//     //       />
//     //     </FormControl>
//     //     <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
//     //       <InputLabel htmlFor="current-password">Password</InputLabel>
//     //       <Input
//     //         id="current-password"
//     //         type={values.showPassword ? 'text' : 'password'}
//     //         // value={values.password}
//     //         onChange={handleChangePassword('password')}
//     //         endAdornment={
//     //           <InputAdornment position="end">
//     //             <IconButton
//     //               aria-label="toggle password visibility"
//     //               onClick={handleClickShowPassword}
//     //               onMouseDown={handleMouseDownPassword}
//     //             >
//     //               {values.showPassword ? <VisibilityOff /> : <Visibility />}
//     //             </IconButton>
//     //           </InputAdornment>
//     //         }
//     //       />
//     //     </FormControl>
//     //     <Button variant="contained">Submit</Button>
//     //   </form>
//     // </Box>

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { create } from "@mui/material/styles/createTransitions";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FormLabel } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import CenteredBox from "../../../ui/CenteredBox";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ColorButton1 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[600]),
  backgroundColor: green[600],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

const ColorButton2 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[600]),
  backgroundColor: red[600],
  "&:hover": {
    backgroundColor: red[700],
  },
}));

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("University Of Colombo", "UCSC", "admin@ucsc.cmb.ac.lk"),
  createData("University Of Peradeniya", "Science", "admin@uop.per.ac.lk"),
  createData("University Of Moratuwa", "IT", "ITadmin@ucsc.cmb.ac.lk"),
  createData("University Of Colombo", "Management", "admin@uoc.cmb.ac.lk"),


  ];
const updateRow = () => {
  console.log("ada");
};

export default function CustomizedTables() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid>
      

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <StyledTableCell align="left">First Name</StyledTableCell>
              <StyledTableCell align="left">Last Name</StyledTableCell> */}
              <StyledTableCell align="left">University Name</StyledTableCell>
              <StyledTableCell align="left">Faculty</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>


              <StyledTableCell align="left">
                <CenteredBox align="center">Actions</CenteredBox>
              </StyledTableCell>
              {/* <StyledTableCell align="left">Buttons</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.calories}</StyledTableCell>
                <StyledTableCell align="left">{row.fat}</StyledTableCell>
                {/* <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                <StyledTableCell align="left">{row.protein}</StyledTableCell> */}
                <StyledTableCell align="left">
                  <Grid container>
                    <Grid item xs={6}>
                      <CenteredBox align="center"><ColorButton1 variant="contained">Verify</ColorButton1></CenteredBox>
                    </Grid>
                    <Grid item xs={6}>
                      <ColorButton2 variant="contained">Decline</ColorButton2>
                    </Grid>
                  </Grid>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
