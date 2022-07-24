import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, Chip, createTheme, ThemeProvider } from "@mui/material";

import HouseIcon from "@mui/icons-material/House";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MainTab from "./MainTab";
import { Link } from "react-router-dom";
import ModalOpenButton from "./ModalOpenButton";
import ModalTabs from "../insight/ModalTabs";
import SearchProfiles from "./SearchProfiles";

const drawerWidth = 240;

const slidebarItems = [
  {
    id: "slider-icon-1",
    icon: (
      <div>
        <Badge badgeContent={0} color="primary">
          <HouseIcon sx={{ fontSize: 30 }} />
        </Badge>{" "}
        Home
      </div>
    ),
    linkName: "/main",
  },
  {
    id: "slider-icon-2",
    icon: (
      <div>
        <Badge badgeContent={0} color="primary">
          <PeopleAltIcon sx={{ fontSize: 30 }} />
        </Badge>{" "}
        Connections
      </div>
    ),
    linkName: "/my-network",
  },
  {
    id: "slider-icon-3",
    icon: (
      <div>
        <Badge badgeContent={0} color="primary">
          <NotificationsIcon sx={{ fontSize: 30 }} />
        </Badge>{" "}
        Notifications
      </div>
    ),
    linkName: "/notifications",
  },
  {
    id: "slider-icon-4",
    icon: (
      <div>
        <Badge badgeContent={0} color="primary">
          <ChatBubbleIcon sx={{ fontSize: 30 }} />
        </Badge>{" "}
        Chats
      </div>
    ),
    linkName: "/chat",
  },
  {
    id: "slider-icon-5",
    icon: (
      <Chip
        avatar={
          <Avatar
            alt="Natacha"
            src="/images/tutors/tutor-1.jpg"
            sx={{ fontSize: 30 }}
          />
        }
        label="Kumud perera"
        variant="outlined"
        size="large"
      />
    ),
    linkName: "/profile",
  },
];

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const addQuestionModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  // height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: "10px 0 10px 30px",
  // p: 4,
  borderRadius: 5,
  // pr: 0,
  // pt: 1,
  // pb: 2
};

export default function MainHeader(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabValue, setTabValue] = useState(props.value);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        AthPotha
      </Typography>
      <Divider />
      <List>
        {slidebarItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "left" }}
              component={Link}
              to={item.linkName}
              onClick={() => setTabValue(false)}
            >
              <ListItemText primary={item.icon} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const addQuestionModalTabs = [
    { id: "addQuestionModalTab-1", label: "Add Question", value: 0 },
    { id: "addQuestionModalTab-2", label: "Add Post", value: 1 },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav" sx={{ backgroundColor: "#fff" }}>
          <Toolbar style={{ position: "relative" }}>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <img
                alt="athpotha"
                src="/images/athpotha_v2.png"
                style={{ width: 60, height: 60 }}
              />
            </Typography>

            <Box
              id="nav-container-list"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <MainTab value={tabValue} />
            </Box>
            <SearchProfiles />
            <ModalOpenButton
              modalName="addQuestion-post-modal"
              isTabHave={true}
              title="Add Question"
              borderRadius={10}
              variant="contained"
              modalStyle={addQuestionModalStyle}
              header={<ModalTabs tabs={addQuestionModalTabs} />}
            />
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
