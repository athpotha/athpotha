import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import MainHeader from "../../ui/insight/MainHeader";
import Content from "./Content";
import Leftbar from "../../ui/insight/leftbar/Leftbar";
import Rightbar from "../../ui/insight/rightbar/Rightbar";
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { leftbarItem } from "../../../services/ListItemService";

function Chat() {

  const userType = localStorage.getItem("USER_TYPE");
  const navigate = useNavigate();
  const listItems = leftbarItem();
  return (
    <StyledEngineProvider injectFirst>
      <MainHeader value={userType === "university" ? 2 : 3} />
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
            // height: "100vh",
            // position: "sticky",
            // top: 0,
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
        <Grid item xs={9} style={{ paddingTop: 120 }}>
          <Content></Content>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            // height: "100vh",
            // position: "sticky",
            // top: 0,
            paddingTop: 100,
          }}
        >
          {/* <Rightbar></Rightbar> */}
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
}

export default Chat;
