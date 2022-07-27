import { Button, Grid } from "@mui/material";
import React from "react";
import RoundedInputField from "../../../RoundedInputField";

function Reply() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={7}>
        {/* <TextField
          variant="outlined"
          placeholder="Add a reply"
          sx={{ width: "100%" }}
        /> */}
        <RoundedInputField width="100%" height="15px" placeholder="Add a Reply..." />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          sx={{mt: 0.5 }}
          style={{ borderRadius: 20, textTransform: "none" }}
        >
          Reply
        </Button>
      </Grid>
    </Grid>
  );
}

export default Reply;
