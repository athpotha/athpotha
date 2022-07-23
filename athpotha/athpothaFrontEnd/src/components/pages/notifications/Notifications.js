import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import MainHeader from "../../ui/wall-main/MainHeader";
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Leftbar from "../../ui/insight/leftbar/Leftbar";
import Rightbar from "../../ui/insight/rightbar/Rightbar";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const listItems = [
  {
    id: "listItem-1",
    listName: "Connections", 
    icon: <InboxIcon />,
  },
  {
    id: "listItem-2",
    listName: "Teachers",
    icon: <DraftsIcon />,
  },
  {
    id: "listItem-3",
    listName: "Commiunity Experts",
    icon: <DraftsIcon />,
  },
];

function Notifications() {
  return (
    <StyledEngineProvider injectFirst>
      <MainHeader value={1} />
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
          dsdfsdf
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
    </StyledEngineProvider>
  );
}

export default Notifications;
