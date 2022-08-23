import React from "react";
import {
  StyledEngineProvider,
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";

import MainHeader from "../../ui/insight/MainHeader";
import Feeds from "./Feeds";
import Leftbar from "../../ui/insight/leftbar/Leftbar";
import Rightbar from "../../ui/insight/rightbar/Rightbar";
import NewContacts from "../../ui/insight/rightbar/NewContacts";
import { leftbarItem } from "../../../services/ListItemService";

const listItems = leftbarItem();

function Main() {
  return (
    <StyledEngineProvider injectFirst>
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
                  <ListItemButton>
                    <ListItemIcon>{listItem.icon}</ListItemIcon>
                    <ListItemText primary={listItem.listName} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Leftbar>
        </Grid>
        <Grid item xs={7} style={{ paddingTop: 120 }}>
          <Feeds></Feeds>
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
          <Rightbar show="">
            <Grid item xs={12}>
              <List>
                <NewContacts />
              </List>
            </Grid>
          </Rightbar>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
}

export default Main;
