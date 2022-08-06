import React, { useState } from 'react';
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
const ChangePassword = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setShow((prev) => !prev)}>
        Change Password
      </Button>
      {show && (
        <Box>
          <form style={{ mt: "2px", height: "60vh", overflow: "auto" }}>
            <TextField
              id="outlined-password-input"
              label="Current Password"
              type="password"
              autoComplete=""
              required
              helperText="Enter Your Current Password"
            />
        
            <TextField
              id="outlined-password-input"
              label="New Password"
              type="password"
              autoComplete=""
              helperText="Enter A New Password"
              required
            />
            <TextField
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              autoComplete=""
              helperText="Confirm Password"
              required
            />
            <Button variant="contained">Save</Button>
            {/* ---------------------content of the model end ------------------ */}
          </form>
        </Box>
      )}
    </>
  );
}

export default ChangePassword