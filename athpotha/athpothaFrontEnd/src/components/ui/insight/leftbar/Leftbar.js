import React from "react";
// import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Grid, ListItemButton } from "@mui/material";
import LeftbarList from "./LeftbarList";
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

function Leftbar(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar sx={{ mr: 1 }}>
                <Avatar
                  src="/images/tutors/tutor-1.jpg"
                  sx={{ width: 56, height: 56 }}
                />
              </ListItemAvatar>
              <ListItemText primary="Kumud Perera" secondary="O/L Qualified" />
            </ListItemButton>
          </ListItem>
        </Grid>
        <Grid item xs={12}>
          <LeftbarList>{props.children}</LeftbarList>
        </Grid>
      </Grid>
    </div>
  );
}

export default Leftbar;
