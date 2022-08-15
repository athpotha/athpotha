import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Link } from "react-router-dom";
import {
  Avatar,
  Badge,
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import ProfileMenu from "./ProfileMenu";

export default function MainTab(props) {
  const [value, setValue] = useState(props.value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(value);
  if (props.value === null) {
    setValue(false);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0F6096",
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          sx={{ color: "#0F6096" }}
        >
          <Tab
            sx={{ minWidth: 0 }}
            value={0}
            icon={<HomeIcon />}
            component={Link}
            to={"/main"}
          />
          <Tab
            sx={{ minWidth: 0 }}
            value={1}
            icon={<PeopleAltIcon />}
            component={Link}
            to={"/my-network"}
            //   label="Connections"
          />
          <Tab
            sx={{ minWidth: 0 }}
            value={2}
            icon={
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            }
            component={Link}
            to={"/notifications"}
            // label="Notifications"
          />
          <Tab
            sx={{ minWidth: 0 }}
            value={3}
            icon={<ChatBubbleIcon />}
            component={Link}
            to={"/chat"}
            //   label="Chat"
          />
          <Tab
            sx={{ minWidth: 0 }}
            value={4}
            icon={<ProfileMenu />}
            //   label="Chat"
            component={Link}
            to={"/profile"}
          />
        </Tabs>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
