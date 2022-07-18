import { Avatar, Divider, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";
import React from "react";

function Contacts() {
  return (
    <>
      <ListItem disablePadding style={{ backgroundColor: "#fff" }}>
        <ListItemButton style={{ cursor: "default" }}>
          <ListItemAvatar sx={{ mr: 1 }} style={{ cursor: "pointer" }}>
            <Avatar
              src="/images/tutors/tutor-1.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography style={{ cursor: "pointer" }}>
                Kumud Perera
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
}

export default Contacts;
