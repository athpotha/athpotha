import React from "react";
import Box from "@mui/material/Box";

export default function LeftbarList(props) {
  return (
    <Box sx={{ width: "100%", maxWidth: 360}}>
      <nav aria-label="main mailbox folders">
        {props.children}
      </nav>
    </Box>
  );
}
