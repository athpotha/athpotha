import React from "react";
// import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Grid, ListItemButton } from "@mui/material";
import LeftbarList from "./LeftbarList";
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const userType = localStorage.getItem("USER_TYPE");
const studentType = localStorage.getItem("STUDENT_TYPE");
console.log(userType);
function Leftbar(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar sx={{ mr: 1 }}>
                <Avatar
                  src={localStorage.getItem("PROFILE_PIC")}
                  sx={{ width: 56, height: 56 }}
                />
              </ListItemAvatar>
<<<<<<< HEAD
              <ListItemText primary={localStorage.getItem("USER_NAME")} secondary={userType === "student" && studentType} />
=======
              <ListItemText primary={localStorage.getItem("FIRST_NAME")+" "+localStorage.getItem("LAST_NAME")  } secondary={userType === "student" && studentType} />
>>>>>>> fdd58da438b8c85638e2dd4fb4b6fdeb9d9b0e98
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
