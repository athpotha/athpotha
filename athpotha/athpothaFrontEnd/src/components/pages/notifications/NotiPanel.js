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
  const [notiDBData, setNotiDBData] = React.useState([]);
  const [readUnread, setReadUnread] = React.useState([]);
  // const [profilePic,setProfilePic] = React.useState([]);
  var profilePic;
  function notiClicked(id) {
    changeState();
    // alert(`Hello, ${id}!`);
    const data = {
      url: `notification/markAsRead/${id}`,
      method: "put",
      data: { id: 1 },
    };
    // console.log(data.url);
    fetchUserData(data)
      .then((response) => {
        // console.log(response.data);
        setReadUnread(1);

        // setNotiDBData(response.data);
      })
      .catch((e) => {
        console.log("CATCH---------");
        console.log(e);
      });
  }
  //change the read_unread status of the notification
  function changeState() {
    // setReadUnread(0);
    // console.log("chnageState");

    var state = readUnread;
    if (state) {
      setReadUnread(0);
    } else {
      setReadUnread(1);
    }
    // alert("ss")
  }
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

  //  fetchUserData({
  //   url: "notification/getAllNotifications",
  //   method: "post",
  //   data:{test:"sada"},
  // }).then((response) => {
  //   console.log(response.data);
  //   // setNotiDBData(response.data);
  //   notiDBData=response.data;

  // })
  const userId = localStorage.getItem("USER_ID");

  React.useEffect(() => {
    fetchUserData({
      url: "notification/getAllNotifications",
      method: "post",
      data: { userId: userId },
    }).then((response) => {
      console.log(response.data); //object
      // setProfilePic(response.data.profilePicture);
      // console.log(userId);

      setNotiDBData(response.data.notifications); //arrayh-it's saved in usestate which is an array
    });
  }, [readUnread]);

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
      {notiDBData.map((notification) => {
        console.log(notification);
        if(notification.notification_type=="request"){
          profilePic="/images/notifications/request.png"
        }
        else if(notification.notification_type=="warning"){
          profilePic="/images/notifications/general-warning.jpg"

        }
        return (
          <React.Fragment>
            <ListItem
              onClick={() => {
                notiClicked(notification.notification_id);
              }}
              id={notification.notification_id}
              key={notification.notification_id}
              disablePadding
              secondaryAction={
                <Grid container direction="column">
                  <Grid item>
                    <IconButton disabled>
                      <Typography>
                        {notification.receive_datetime}
                      </Typography>
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
                    alt={notification.firstName}
                    
                    src={profilePic}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={notification.notification_type}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {notification.message}
                      </Typography>
                      {/* {` — ${notification.firstName}`} */}
                    </React.Fragment>
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
}
