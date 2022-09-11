import React from "react";
import Box from "@mui/material/Box";

export default function CenteredBox(props) {
  const commonStyles = {
    // bgcolor: "background.paper",
    // borderColor: "text.primary",
    marginTop: "2px",
    // border: 1,
    // width: "17rem",
    // height: "17rem",
  };
  return (
    <Box sx={{ display: "flex", justifyContent: `${props.align}` }}>
      {/* <CardMedia
        component="img"
        sx={{ ...commonStyles, borderRadius: "50%" }}
        image={props.imagePath}
      /> */}
      <Box sx={commonStyles}>{props.children}</Box>
      {/* <Box sx={{ ...commonStyles, borderRadius: '16px' }} /> */}
    </Box>
  );
}
