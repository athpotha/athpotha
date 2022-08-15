import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Grid, IconButton, ListItemButton } from "@mui/material";
import CenteredBox from "../../ui/CenteredBox";
import NotificationMenu from "./NotificationMenu";

const DUMMY_NOTIFICATIONS = [
  {
    id: "notification-0",
    senderName: "Roneki Manamperi",
    senderProfileImage: "/static/images/avatar/1.jpg",
    whenItCame: "1d",
    primaryContent: "Brunch this weekend?",
    secondaryContent: "I'll be in your neighborhood doing errands this…",
    isNotificationRead: false
  },
  {
    id: "notification-1",
    senderName: "Roneki Manamperi",
    senderProfileImage: "/static/images/avatar/1.jpg",
    whenItCame: "1d",
    primaryContent: "Brunch this weekend?",
    secondaryContent: "I'll be in your neighborhood doing errands this…",
    isNotificationRead: true
  },
  {
    id: "notification-2",
    senderName: "Roneki Manamperi",
    senderProfileImage: "/static/images/avatar/1.jpg",
    whenItCame: "1d",
    primaryContent: "Brunch this weekend?",
    secondaryContent: "I'll be in your neighborhood doing errands this…",
    isNotificationRead: true
  },
  {
    id: "notification-3",
    senderName: "Roneki Manamperi",
    senderProfileImage: "/static/images/avatar/1.jpg",
    whenItCame: "1d",
    primaryContent: "Brunch this weekend?",
    secondaryContent: "I'll be in your neighborhood doing errands this…",
    isNotificationRead: true
  },
];

export default function NotiPanel() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {DUMMY_NOTIFICATIONS.map((notification) => (
        <React.Fragment>
          <ListItem
            id={notification.id}
            key={notification.id}
            disablePadding
            secondaryAction={
              <Grid container direction="column">
                <Grid item>
                  <IconButton disabled>
                    <Typography>{notification.whenItCame} ago</Typography>
                  </IconButton>
                </Grid>
                <Grid item>
                  <CenteredBox align="right">
                    <NotificationMenu />
                  </CenteredBox>
                </Grid>
              </Grid>
            }
            // style={{backgroundColor: "#000"}}
          >
            <ListItemButton
              disablePadding
              sx={{
                height: 100,
                backgroundColor: notification.isNotificationRead ? "#fff" : "#00000006",
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt={notification.senderName}
                  src={notification.senderProfileImage}
                />
              </ListItemAvatar>
              <ListItemText
                primary={notification.primaryContent}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {notification.senderName}
                    </Typography>
                    {` — ${notification.secondaryContent}`}
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}
