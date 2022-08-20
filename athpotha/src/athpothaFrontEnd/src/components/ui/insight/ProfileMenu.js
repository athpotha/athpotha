import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, ListItemIcon, Typography } from "@mui/material";
import AuthContext from "../../../store/ath-context";
import { useNavigate } from "react-router-dom";

import LogoutIcon from '@mui/icons-material/Logout';

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    navigate('/login');
    authCtx.logout();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Avatar onClick={handleClick} src={localStorage.getItem("PROFILE_PIC")} />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <Typography variant="h6" >Logout</Typography>
          </MenuItem>
      </Menu>
    </div>
  );
}
