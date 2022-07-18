import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Contacts from "../../ui/wall-main/rightbar/Contacts";
import NewContacts from "../../ui/wall-main/rightbar/NewContacts";

function Rightbar() {
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <div>
            <Grid container>
              <Grid item xs={9}>
                <Typography variant="h6">New Contacts</Typography>
              </Grid>
              <Grid item xs={3}>
                <Link variant="h6" sx={{ fontWeight: 10, cursor: "pointer" }}>
                  See all
                </Link>
              </Grid>
            </Grid>
          </div>
          <List>
            <NewContacts />
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Contacts</Typography>
          <List>
            <Contacts />
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default Rightbar;
