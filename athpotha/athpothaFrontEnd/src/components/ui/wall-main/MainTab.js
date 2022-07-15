import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Link } from "react-router-dom";
import {
    Avatar,
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { blue, lightBlue } from "@mui/material/colors";

export default function MainTab() {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0F6096",
      },
    },
    typography: {
      fontFamily: "Poppins",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
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
            value="one"
            icon={<HomeIcon />}
            component={Link}
            to={"/main"}
            //   label="Home"
          />
          <Tab
            sx={{ minWidth: 0 }}
            value="two"
            icon={<PeopleAltIcon />}
            component={Link}
            to={"/my-network"}
            //   label="Connections"
          />
          <Tab
            sx={{ minWidth: 0 }}
            value="three"
            icon={<NotificationsIcon />}
            component={Link}
            to={"/notifications"}
            // label="Notifications"
          />
          <Tab
            sx={{ minWidth: 0 }}
            value="four"
            icon={<ChatBubbleIcon />}
            component={Link}
            to={"/chat"}
            //   label="Chat"
          />
          <Tab
            sx={{ minWidth: 0 }}
            value="five"
            icon={
              <Avatar
                // alt="Remy Sharp"
                src="/images/tutors/tutor-1.jpg"
                // sx={{ width: 56, height: 56 }}
              />
            }
            //   label="Chat"
            component={Link}
            to={"/profile"}
          />
        </Tabs>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
