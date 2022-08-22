import { Grade } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import React from "react";
import CenteredBox from "../../../../ui/CenteredBox";
import VisitsChart from './VisitsChart'
import PreviewIcon from '@mui/icons-material/Preview';
import UsersChart from './UsersChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import IncomeBarChart from './IncomeBarChart';
import ReportBarChart from './ReportBarChart';

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
        <VisitsChart></VisitsChart>
      </Grid>
      <Grid xs={6} bgcolor="white" sx={{mt:3}}>
        <UsersChart></UsersChart>
      </Grid>


      {/* ----------------------second bar charts section -------------------- */}
      <Grid xs={6} bgcolor="white" sx={{mt:3}}>
        <IncomeBarChart></IncomeBarChart>
      </Grid>
      <Grid xs={6} bgcolor="white" sx={{mt:3}}>
        <ReportBarChart></ReportBarChart>
      </Grid>
    </Grid>
  );
}

export default WebsiteActivityContent;
