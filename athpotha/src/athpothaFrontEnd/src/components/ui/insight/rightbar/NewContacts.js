import { Avatar, Button, ButtonGroup, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";
import React from "react";

function NewContacts() {
  return (
    <ListItem disablePadding style={{ backgroundColor: "#fff" }}>
      <ListItemButton>
        <ListItemAvatar sx={{ mr: 1 }}>
          <Avatar
            src="/images/tutors/tutor-1.jpg"
            sx={{ width: 70, height: 70 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography component="div">Kumud Perera</Typography>
          }
          // secondary="O/L Qualified"
          secondary={
            <Typography component="div">
              <Typography>O/L Qualified</Typography>
              <ButtonGroup>
                <Button
                  variant="contained"
                  style={{
                    borderRadius: 20,
                    textTransform: "none",
                    marginRight: "8px",
                  }}
                >
                  Confirm
                </Button>
                <Button
                  color="error"
                  style={{ borderRadius: 20, textTransform: "none" }}
                >
                  Cancel
                </Button>
              </ButtonGroup>
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}

export default NewContacts;
