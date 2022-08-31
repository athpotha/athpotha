import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";

import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ReportIcon from "@mui/icons-material/Report";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { useDispatch, useSelector } from "react-redux";
import { IconButton, ListItemIcon, Typography } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
ViewProfileMenu.propTypes = {
    button: PropTypes.element,
};

export default function ViewProfileMenu(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <MoreVertIcon onClick={handleClick} />

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
                    <ListItemIcon>
                        <PersonAddIcon />
                    </ListItemIcon>
                    <Typography variant="inherit" >Follow</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon style={{ color: "#ff0000" }}>
                        <ReportIcon />
                    </ListItemIcon>
                    <Typography variant="inherit" style={{ color: "#ff0000" }}>Report</Typography>
                </MenuItem>
            </Menu>
        </div>
    );
}
