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
import Contacts from "./Contacts";
import NewContacts from "./NewContacts";

function Rightbar(props) {
  return (
    <div>
      <Grid container spacing={5}>
        {props.children}
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
