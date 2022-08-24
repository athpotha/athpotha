import { Avatar, Divider, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";
import React from "react";

function Contacts() {
  return (
    <>
      <ListItem disablePadding style={{ backgroundColor: "#fff" }}>
        <ListItemButton style={{ cursor: "default" }}>
          <ListItemAvatar sx={{ mr: 1 }} style={{ cursor: "pointer" }}>
            <Avatar
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              sx={{ width: 56, height: 56 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography style={{ cursor: "pointer" }}>
                Disal Bandara
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
