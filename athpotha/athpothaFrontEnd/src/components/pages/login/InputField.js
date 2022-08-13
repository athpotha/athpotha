import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
// import makeS

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from "@mui/material/InputLabel";
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField } from "@mui/material";

const InputField = (props) => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      password: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  return (
    <TextField
      id={props.id}
      type={values.showPassword ? "text" : "password"}
      variant="standard"
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      error={props.error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end"><IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
          >
            {values.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton></InputAdornment>
        ),
      }}
      required
      fullWidth
      helperText={props.helperText}
    />
    
  );
};

export default InputField;
