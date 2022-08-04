import * as React from 'react';
import {
 Typography,
} from "@mui/material";
import { Box} from "@mui/system";
import { useState } from 'react';

import { Modal } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import ChangePassword from "./ChangePassword"

export default function SettingsPopUpModel() {
  const [openTwo, setOpenTwo] = React.useState(false);
  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 200,
    bgcolor: "background.paper",
    borderRadius: "7px",
    boxShadow: 35,
    p: 5,
    width: "58%",
  
  };
  const [show, setShow] = useState(false);
  <Grid>
    <Modal open={openTwo}>
      <Box sx={style}>
        <Grid>
          <Typography variant="h5" component="h2" color="#1e88e5">
            Settings
          </Typography>
        </Grid>
        <IconButton
          aria-label="close"
          onClick={handleCloseTwo}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ mt: "25px", height: "70vh", overflow: "auto" }}>
          {/* ---------------------content of the model start ------------------ */}

          <form style={{ maxWidth: "100%" }}>
            <TextField
              id="First Name"
              label="First Name"
              variant="outlined"
              defaultValue="Melaka"
              fullWidth
            />
            
            {/* ---------------------content of the model end ------------------ */}
          </form>
        </Box>
      </Box>
    </Modal>
  </Grid>;
}