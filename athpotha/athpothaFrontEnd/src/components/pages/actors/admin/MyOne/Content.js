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
// import BarChart from "./BarChart"

function Content(){
    return (
    <Grid container spacing={3} >
      <Grid item xs={12} sm={6} md={3} sx={{p:5}}>
        <AppWidgetSummary title="Weekly Visits"  total={714000} icon={<VisibilityIcon></VisibilityIcon>}/>
        
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AppWidgetSummary title="New Users" total={1352831} color="info" icon={<PersonIcon></PersonIcon>} />
        {/* <BookmarksIcon></BookmarksIcon> */}

      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AppWidgetSummary title="Weekly Income" total={2312} color="warning" icon={<PaidIcon></PaidIcon>} />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AppWidgetSummary title="User Reports" total={4} color="error" icon={<ErrorIcon></ErrorIcon>} />
      </Grid>

      <Grid item xs={8} >
          {/* <BarChart></BarChart>  //BarChart section */}
      </Grid>
      <Grid item xs={4} sm={6} md={3}>
      <h1>dsf</h1>

      </Grid>

</Grid>
    //   ------------------------------------------------------------

    

      );
}
export default Content;