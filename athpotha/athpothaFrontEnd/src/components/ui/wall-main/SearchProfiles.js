import React, { useState } from "react";
import BasicModal from "../insight/BasicModal";
import styled from "@mui/system/styled";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

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
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      width: "100%",
      // "&:focus": {
      //   // cursor: "pointer",
      //   // width: "20ch",
      // },
    },
  },
}));

const searchModalStyle = {
  position: "absolute",
  top: "40%",
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

function SearchProfiles() {
  const [expanded, setExpanded] = useState(false);

  const expandHandler = () => {
    setExpanded(!expanded);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onClick={expandHandler}
      />
      <BasicModal
        open={expanded}
        modalStyle={searchModalStyle}
        onClose={expandHandler}
        modalName="search-modal"
        isTabHave={true}
        header={
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              style={{ width: "100%" }}
              onKeyDown={(event) => console.log(event.target.value)}
            />
          </Search>
        }
      >
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
      </BasicModal>
    </Search>
  );
}

export default SearchProfiles;
