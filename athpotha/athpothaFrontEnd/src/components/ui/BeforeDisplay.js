import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function BeforeDisplay(props) {
  return (
    <Stack spacing={1}>
      {/* <Skeleton variant="text" /> */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={props.width} height={props.height} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Stack>
  );
}
