import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import MainHeader from "../../ui/insight/MainHeader";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Leftbar from "../../ui/insight/leftbar/Leftbar";
import Rightbar from "../../ui/insight/rightbar/Rightbar";
import Content from "./Content";

import BookmarksIcon from "@mui/icons-material/Bookmarks";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CellTowerIcon from "@mui/icons-material/CellTower";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";

import { leftbarItem } from "../../../services/ListItemService";
import { useNavigate } from "react-router-dom";


function ViewProfile() {
  const navigate = useNavigate();
  const listItems = leftbarItem();

  return (
    <React.Fragment>
      <MainHeader value={0} />
      <Grid
        container
        spacing={2}
        style={{
          boxSizing: "initial",
          width: "1500px",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "stretch",
          backgroundColor: "rgb(242, 250, 255)",
        }}
      >
        <Grid
          item
          xs={2}
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            paddingTop: 100,
          }}
        >
          <Leftbar>
            <List>
              {listItems.map((listItem) => (
                <ListItem key={listItem.id} disablePadding>
                  <ListItemButton onClick={() => { navigate(listItem.link) }}>
                    <ListItemIcon>{listItem.icon}</ListItemIcon>
                    <ListItemText primary={listItem.listName} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Leftbar>
        </Grid>
        <Grid item xs={7} style={{ paddingTop: 120 }}>
          {/* Middle Section comes here */}
          <Content></Content>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            paddingTop: 100,
          }}
        >
          <Rightbar></Rightbar>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ViewProfile;
