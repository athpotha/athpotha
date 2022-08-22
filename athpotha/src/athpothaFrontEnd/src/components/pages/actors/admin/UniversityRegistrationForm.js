
import React, { useState } from 'react';
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import AppWidgetSummary from "./AppWidjet";
import Dashboard from "./Dashboard";
import NotificationMenu from "./NotificationMenu";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';


function UniversityRegistrationForm() {
    //For university and faculty dropdowns
    const [universityname, setUniversity] = React.useState('');
    const handleChangeUniversity = (event) => {
        setUniversity(event.target.value);
    };

    const [facultyname, setFaculty] = React.useState('');
    const handleChangeFaculty = (event) => {
        setFaculty(event.target.value);
    };

    //For password
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

      const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
  return (
    <Box style={{mt:"200px"}}>
      <form>
      <TextField id="firstname" label="First Name" variant="standard" />
      <TextField id="lastname" label="Last Name" variant="standard" />
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="university">University</InputLabel>
        <Select
          labelId="university"
          id="university-names"
          value={universityname}
          onChange={handleChangeUniversity}
          label="University"
        >
          <MenuItem value={1}>University of Moratuwa</MenuItem>
          <MenuItem value={2}>University of Colombo</MenuItem>
          <MenuItem value={3}>University of Peradeniya</MenuItem>
          <MenuItem value={4}>University of Kelaniya</MenuItem>
          <MenuItem value={5}>University of Japura</MenuItem>
          <MenuItem value={6}>University of Ruhuna</MenuItem>
          <MenuItem value={7}>Sri Lanka Institute of Information Technology (SLIIT)</MenuItem>
          <MenuItem value={8}>Informatics Information of Technology (IIT)</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="faculty">Faculty</InputLabel>
        <Select
          labelId="faculty"
          id="faculty-names"
          value={facultyname}
          onChange={handleChangeFaculty}
          label="Faculty"
        >
          <MenuItem value={1}>Engineering</MenuItem>
          <MenuItem value={2}>Computer Science</MenuItem>
          <MenuItem value={3}>Information Technology</MenuItem>
          <MenuItem value={4}>Physical Science</MenuItem>
          <MenuItem value={5}>Applied Sciences</MenuItem>
          <MenuItem value={6}>Quantity Surveying</MenuItem>
          <MenuItem value={7}>Computing and Information Systems</MenuItem>
          <MenuItem value={8}>Town and Country Planning</MenuItem>
        </Select>
      </FormControl>
      <TextField
          id="email"
          label="Email"
          type="email"
        //   autoComplete="current-password"
          variant="standard"
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            // value={values.password}
            onChange={handleChangePassword('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="current-password">Password</InputLabel>
          <Input
            id="current-password"
            type={values.showPassword ? 'text' : 'password'}
            // value={values.password}
            onChange={handleChangePassword('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained">Submit</Button>
      </form>
    </Box>
  );
}

export default UniversityRegistrationForm;
