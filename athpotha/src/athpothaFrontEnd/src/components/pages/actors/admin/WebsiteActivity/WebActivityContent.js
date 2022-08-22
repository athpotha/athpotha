import { Grade } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import React from "react";
import CenteredBox from "../../../../ui/CenteredBox";
import BarChart from './BarCHart'
import PreviewIcon from '@mui/icons-material/Preview';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function WebsiteActivityContent(props) {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Button variant="contained" sx={{ p:2,pl:3,pr:3 }} startIcon={<PreviewIcon   />}>
          Generate Activity Report
        </Button>
      </Grid>
      <Grid item xs={6}>
        <CenteredBox align="right">
          <Button variant="contained" sx={{ p:2,pl:3,pr:3 }} startIcon={<AttachMoneyIcon></AttachMoneyIcon>}>
            Generate Income Report
          </Button>
        </CenteredBox>
      </Grid>

      <Grid xs={6} bgcolor="white" sx={{mt:3}}>
        <BarChart></BarChart>
      </Grid>
      <Grid xs={6} bgcolor="white" sx={{mt:3}}>
        <BarChart></BarChart>
      </Grid>
    </Grid>
  );
}

export default WebsiteActivityContent;
