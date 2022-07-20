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
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import {
  Avatar,
  Badge,
  Chip,
  Collapse,
  createTheme,
  Grid,
  InputBase,
  ListItemAvatar,
  ThemeProvider,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import HouseIcon from "@mui/icons-material/House";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MainTab from "./MainTab";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ModalOpenButton from "./ModalOpenButton";
import AddPostQuestionModal from "../insight/AddPostQuestionModal";
// interface Props {
//   window?: () => Window;
// }

const drawerWidth = 240;
const navItems = [
  <HouseIcon sx={{ fontSize: 30 }} />,
  <PeopleAltIcon sx={{ fontSize: 30 }} />,
  <NotificationsIcon sx={{ fontSize: 30 }} />,
  <ChatBubbleIcon sx={{ fontSize: 30 }} />,
];

const slidbarItems = [
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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  backgroundColor: "#DBF0FE",
  marginLeft: 0,
  marginRight: 20,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  zIndex: 100,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#0F6096",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#0F6096",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "90%",

    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        cursor: "pointer",
        // width: "20ch",
      },
    },
  },
}));

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

export default function MainHeader(props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabValue, setTabValue] = useState(props.value);
  const [expanded, setExpanded] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const expandHandler = () => {
    console.log("hello my dear");
    setExpanded(!expanded);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        AthPotha
      </Typography>
      <Divider />
      <List>
        {slidbarItems.map((item) => (
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

  // const container = window !== undefined ? () => window().document.body : undefined;
  // console.log(document.getElementById("nav-container-list").style.display)
  // if(document.getElementById("nav-container-list").style.display == "none") {
  //   console.log('hello')
  // }
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
                src="/images/athpotha_v2.png"
                style={{ width: 60, height: 60 }}
              ></img>
            </Typography>

            <Box
              id="nav-container-list"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <MainTab value={tabValue} />
              {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: "#0F6096", borderBottom: 3, borderRadius: 0, padding: 1.5}}>
                {item}
              </Button>
            ))} */}
            </Box>
            <Search>
              <SearchIconWrapper>
                {expanded ? (
                  <CloseIcon onClick={expandHandler} />
                ) : (
                  <SearchIcon />
                )}
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onClick={expandHandler}
              />
              <Collapse
                in={expanded}
                timeout="auto"
                unmountOnExit
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 40,
                  zIndex: 99,
                  width: "100%",
                  backgroundColor: "#DBF0FE",
                  border: "2px solid #FFF",
                  borderTop: "none",
                }}
              >
                {/* <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    onClick={expandHandler}
                  />
                </Search> */}
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemAvatar sx={{ mr: 1 }}>
                        <Avatar
                          src="/images/tutors/tutor-1.jpg"
                          sx={{ width: 56, height: 56 }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        style={{ color: "#000" }}
                        primary="Kumud Perera"
                        secondary="O/L Qualified"
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Collapse>
            </Search>
            <ModalOpenButton
              title="Add Question"
              borderRadius={10}
              variant="contained"
            >
              <AddPostQuestionModal />
            </ModalOpenButton>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            // container={container}
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
