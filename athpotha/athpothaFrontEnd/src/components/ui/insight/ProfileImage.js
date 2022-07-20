import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

function ProfileImage(props) {
  return (
    <ListItem disablePadding>
      <ListItemAvatar sx={props.changeStyle} style={{cursor: "pointer"}}>
        <Avatar
          src={props.userProfileImage}
          sx={{ width: props.sizeInUnits, height: props.sizeInUnits }}
          size={props.size}
        />
      </ListItemAvatar>
      <ListItemText primary={(props.primary) ? props.primary: ""} secondary={(props.secondary) ? props.secondary: ""} />
    </ListItem>
  );
}

export default ProfileImage;
