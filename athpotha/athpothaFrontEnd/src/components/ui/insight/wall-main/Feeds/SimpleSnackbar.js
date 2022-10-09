import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, Link } from "@mui/material";

export default function SimpleSnackbar(props) {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    console.log("Hadle on close")
    // if (reason === "clickaway") {
    //   return;
    // }

    setOpen(false);
  };

  return (
    <div>
      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        // message="Note archived"
        // action={action}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {props.message}
          {/* <Link sx={{ml: 2}}>hello</Link> */}
        </Alert>
      </Snackbar>
    </div>
  );
}
