import React, { useEffect, useState } from "react";
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
import { fetchUserData } from "../../../api/authenticationService";
import axios from "axios";

const DUMMY_NOTIFICATIONS = [
  {
    id: "notification-0",
    senderName: "Melaka Pathiranagama",
    senderProfileImage: "/static/images/avatar/1.jpg",
    whenItCame: "1d",
    primaryContent: "Brunch this weekend?",
    secondaryContent:
      "I'll be in your neighborhood doing errands this lorem lorem lorem lore neighborhood doing errands this lorem lorem lorem loremm lorem",
    isNotificationRead: false,
  },
  {
    id: "notification-1",
    senderName: "Roneki Manamperi",
    senderProfileImage: "/static/images/avatar/1.jpg",
    whenItCame: "1d",
    primaryContent: "Brunch this weekend?",
    secondaryContent: "I'll be in your neighborhood doing errands this…",
    isNotificationRead: true,
  },
  {
    id: "notification-2",
    senderName: "Roneki Manamperi",
    senderProfileImage: "/static/images/avatar/1.jpg",
    whenItCame: "1d",
    primaryContent: "Brunch this weekend?",
    secondaryContent: "I'll be in your neighborhood doing errands this…",
    isNotificationRead: true,
  },
  {
    id: "notification-3",
    senderName: "Roneki Manamperi",
    senderProfileImage: "/static/images/avatar/1.jpg",
    whenItCame: "1d",
    primaryContent: "Brunch this weekend?",
    secondaryContent: "I'll be in your neighborhood doing errands this…",
    isNotificationRead: true,
  },
];

export default function NotiPanel() {
  const [notiDBData, setNotiDBData] = useState([]);
  // const GET_ALL_NOTIFICATIONS_API_URL =
  //   "localhost:8080/notification/getAllNotifications";
  // console.log(notiDBData);
  // useEffect(()=>{
  //   // fetch("localhost:8080/notification/getAllNotifications")
  //   // .then(res=>res.json())
  //   // .then((result)=>{
  //   //   setNotiDBData(result);
  //   // })
  //   fetchUserData({
  //     url: "api/v1/notification/getAllNotifications",
  //     method: "get",

  // }).then(res=>res.json())
  // .then((result)=>{
  //   setNotiDBData(result);
  // })
  // },[])

  fetchUserData({
    url: "notification/getAllNotifications",
    method: "post",
  }).then((response) => {
    // console.log(response.data)
    setNotiDBData(response.data);
  })
  // .then(res=>res.json())
  // .then((result)=>{
  //   setNotiDBData(result);
  // })

  // useEffect(()=>{
  //   axios.get(GET_ALL_NOTIFICATIONS_API_URL)
  //   .then(res=>res.json())
  //   .then((result)=>{
  //     setNotiDBData(result);
  //    })
  //   ;

  // })

  
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {notiDBData.map((notification) => (
        <React.Fragment>
          <ListItem
            id={notification.notification_id}
            key={notification.notification_id}
            disablePadding
            secondaryAction={
              <Grid container direction="column">
                <Grid item>
                  <IconButton disabled>
                    <Typography>{notification.receive_datetime} ago</Typography>
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
                backgroundColor: notification.read_Unread
                  ? "#fff"
                  : "#00000006",
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt={notification.sender_id}
                  // src={notification.senderProfileImage}
                />
              </ListItemAvatar>
              <ListItemText
                primary={notification.message}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {notification.sender_id}
                    </Typography>
                    {` — ${notification.receiver_Id}`}
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
