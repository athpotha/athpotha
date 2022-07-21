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

export default function ModalTabs(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

//   console.log(value);
//   if (props.value === null) {
//     setValue(false);
//     console.log("hello");
//   }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0F6096",
      },
    },
  });

  return (
    // <StyledEngineProvider injectFirst>
    //   <ThemeProvider theme={theme}>
    <Tabs
      value={value}
      onChange={handleChange}
      //   textColor="primary"
      //   indicatorColor="primary"
      //   sx={{ color: "#0F6096" }}
    >
      <Tab
        sx={{ width: "50%" }}
        value={0}
        // icon={<HomeIcon />}
        // component={Link}
        // to={"/main/addquestion"}
        label="Home"
      />
      <Tab
        sx={{ width: "50%" }}
        value={1}
        // icon={<PeopleAltIcon />}
        // component={Link}
        // to={"/my-network"}
        label="Connections"
      />
    </Tabs>
    //   </ThemeProvider>
    // </StyledEngineProvider>
  );
}
