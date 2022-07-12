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
    <FormControl variant="standard" fullWidth required>
      <InputLabel htmlFor="standard-adornment-password">
        {props.label}
      </InputLabel>
      <Input
        id={props.id}
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              // onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default InputField;
