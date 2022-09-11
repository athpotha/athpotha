import React from "react"
import AppWidgetSummary from "./AppWidjet"
import {Grid} from "@mui/material";
// import { Icon } from "@material-ui/core"
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import BookmarksIcon from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import ErrorIcon from '@mui/icons-material/Error';
import PaidIcon from '@mui/icons-material/Paid';
import BarChart from "./BarChart";
import PeiChart from "./PieChart";


function  Content(){
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            bgColor="rgb(209, 233, 252)"
            title="Weekly Visits"
            total={714000}
            icon={<VisibilityIcon></VisibilityIcon>}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            bgColor="rgb(208, 242, 255)"
            title="New Users"
            total={1352831}
            color="info"
            icon={<PersonIcon></PersonIcon>}
          />
          {/* <BookmarksIcon></BookmarksIcon> */}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            bgColor="rgb(255, 231, 217)"
            title="Weekly Income"
            total={2312}
            color="warning"
            icon={<PaidIcon></PaidIcon>}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            bgColor="rgb(255, 247, 205)"
            title="User Reports"
            total={4}
            color="error"
            icon={<ErrorIcon></ErrorIcon>}
          />
        </Grid>

        <Grid container sx={{ bgcolor: "white", ml: 3, mt:3, borderRadius:3 }}>
          <Grid item xs={6}>
            <BarChart></BarChart>
          </Grid>
          <Grid item xs={6}>
            <PeiChart></PeiChart>
          </Grid>
        </Grid>
      </Grid>
      //   ------------------------------------------------------------
    );
}
export default Content;