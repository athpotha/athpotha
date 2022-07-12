import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

export default function Circle(props) {
  const commonStyles = {
    // bgcolor: "background.paper",
    // borderColor: "text.primary",
    m: `${props.margin}`,
    border: "none",
    width: `${props.width}`,
    height: `${props.height}`,
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CardMedia component="img" sx={{ ...commonStyles, borderRadius: `${props.borderRadius}` }} image={props.imagePath} />
      {/* <Box sx={{ ...commonStyles, borderRadius: 1 }} />
      <Box sx={{ ...commonStyles, borderRadius: '16px' }} /> */}
    </Box>
  );
}
