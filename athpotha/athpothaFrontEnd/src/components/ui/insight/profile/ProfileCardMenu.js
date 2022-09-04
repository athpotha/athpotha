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
import { bookmarkActions } from "../../../../store/bookmark-slice";
import { IconButton, ListItemIcon, Typography } from "@mui/material";
ProfileCardMenu.propTypes = {
    button: PropTypes.element,
};

export default function ProfileCardMenu(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const bookmarkPosts = useSelector((state) => state.bookmarks.bookmarkedPosts);
    var showBookmark = false;
    const bookmarkIndex = bookmarkPosts.findIndex(
        (bookmark) => bookmark.id === props.menuId
    );
    if (bookmarkIndex != -1) {
        showBookmark = bookmarkPosts[bookmarkIndex].isBookmarkAdded;
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleBookmarkAdded = () => {
        setAnchorEl(null);

        dispatch(bookmarkActions.addPostToBookmarks({ id: props.menuId }));
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
                <MenuItem onClick={handleBookmarkAdded}>
                    {showBookmark ? (
                        <React.Fragment>
                            <ListItemIcon>
                                <BookmarkIcon />
                            </ListItemIcon>
                            <Typography variant="inherit">Remove Bookmark</Typography>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <ListItemIcon>
                                <BookmarkBorderIcon />
                            </ListItemIcon>
                            <Typography variant="inherit">Bookmark</Typography>
                        </React.Fragment>
                    )}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <KeyboardDoubleArrowDownOutlinedIcon />
                    </ListItemIcon>
                    <Typography variant="inherit">Downvote</Typography>
                </MenuItem>
                <MenuItem style={{ color: "#ff0000" }} onClick={handleClose}>
                    <ListItemIcon>
                        <ReportIcon />
                    </ListItemIcon>
                    <Typography variant="inherit">Report</Typography>
                </MenuItem>
            </Menu>
        </div>
    );
}
