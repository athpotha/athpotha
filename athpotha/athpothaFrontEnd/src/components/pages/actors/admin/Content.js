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
import PieChart from "./PieChart";
import { useState } from "react";
import { fetchUserData } from "../../../../../src/api/authenticationService";


function Content(){
  const [totalUsers, setTotalUsers] = useState();
  const[newUsers,setNewUsers] = useState();

  //get data from database
  //total users
  React.useEffect(() => {
    fetchUserData({
      url: "admin/getTotUsers",
      method: "post",
    }).then((response) => {
      console.log("Response data"+response.data);
      setTotalUsers(response.data)
    });
  }, []);

  //new users
  React.useEffect(() => {
    fetchUserData({
      url: "admin/getNewUsers",
      method: "post",
    }).then((response) => {
      console.log("Response data"+response.data);
      setNewUsers(response.data)
    });
  }, []);

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            bgColor="rgb(209, 233, 252)"
            title="Total Users"
            total={totalUsers}
            icon={<VisibilityIcon></VisibilityIcon>}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            bgColor="rgb(208, 242, 255)"
            title="New Users"
            total={newUsers}
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
            <PieChart></PieChart>
          </Grid>
        </Grid>
      </Grid>
      //   ------------------------------------------------------------
    );
}
export default Content;