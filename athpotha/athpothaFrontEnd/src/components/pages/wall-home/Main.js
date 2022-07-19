import {
  StyledEngineProvider,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import React from "react";
import MainHeader from "../../ui/wall-main/MainHeader";
import Feeds from "./Feeds";
import Leftbar from "../../ui/insight/leftbar/Leftbar";
import Rightbar from "../../ui/insight/rightbar/Rightbar";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import NewContacts from "../../ui/insight/rightbar/NewContacts";

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
              <div>
                <Grid container>
                  <Grid item xs={9}>
                    <Typography variant="h6">New Contacts</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Link
                      variant="h6"
                      sx={{ fontWeight: 10, cursor: "pointer" }}
                    >
                      See all
                    </Link>
                  </Grid>
                </Grid>
              </div>
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
