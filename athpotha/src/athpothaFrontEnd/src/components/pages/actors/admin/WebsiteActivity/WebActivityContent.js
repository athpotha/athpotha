import { Grade } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import React from "react";
import CenteredBox from "../../../../ui/CenteredBox";

function WebsiteActivityContent(props) {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Button variant="contained" sx={{ ml: 2 }}>
          Generate Activity Report
        </Button>
      </Grid>
      <Grid item xs={6}>
        <CenteredBox align="right">
          <Button variant="contained" sx={{ mr: 2 }}>
            Generate Income Report
          </Button>
        </CenteredBox>
      </Grid>
    </Grid>
  );
}

export default WebsiteActivityContent;
