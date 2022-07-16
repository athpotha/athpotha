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
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/system";
import { InputBase } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import HouseIcon from "@mui/icons-material/House";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MainTab from "./MainTab";
import { Link } from "react-router-dom";
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
  {id:"slider-icon-1", icon: <div><HouseIcon sx={{ fontSize: 30 }} /> Home</div>, linkName: "/main"},
  {id: "slider-icon-2", icon: <div><PeopleAltIcon sx={{ fontSize: 30 }} /> Connections</div>, linkName: "/my-network" },
  {id: "slider-icon-3", icon:<div><NotificationsIcon sx={{ fontSize: 30 }} /> Notifications</div>, linkName: "/notifications"},
  {id: "slider-icon-4", icon:<div><ChatBubbleIcon sx={{ fontSize: 30 }} /> Chats</div>,linkName: "/chat"},
]

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
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function MainHeader(props) {
  // const { window } = props;
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
        {slidbarItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }} component={Link} to={item.linkName} onClick={() => setTabValue(false)}>
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
    <Box sx={{ display: "flex", mb: 13 }}>
      <AppBar component="nav" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
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

          <Box id="nav-container-list" sx={{ display: { xs: "none", sm: "block" } }}>
            <MainTab value={tabValue} />
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: "#0F6096", borderBottom: 3, borderRadius: 0, padding: 1.5}}>
                {item}
              </Button>
            ))} */}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button>Ask Question</Button>
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
      {/* </div> */}
    </Box>
  );
}
