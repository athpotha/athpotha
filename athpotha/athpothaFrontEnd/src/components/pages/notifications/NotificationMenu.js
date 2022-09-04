import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";


import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import ReportIcon from "@mui/icons-material/Report";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function NotificationMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBookmarkAdded = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton>
        <MoreHorizIcon
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <KeyboardDoubleArrowDownOutlinedIcon /> Downvote
        </MenuItem>
        <MenuItem style={{ color: "#ff0000" }} onClick={handleClose}>
          <ReportIcon /> Report
        </MenuItem>
      </Menu>
    </div>
  );
}
