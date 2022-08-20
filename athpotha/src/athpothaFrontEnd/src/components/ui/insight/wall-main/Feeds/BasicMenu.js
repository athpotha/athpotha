import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";

import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ReportIcon from "@mui/icons-material/Report";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { useDispatch, useSelector } from "react-redux";
import { bookmarkActions } from "../../../../../store/bookmark-slice";
BasicMenu.propTypes = {
  button: PropTypes.element,
};

export default function BasicMenu(props) {
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
    // showBookmark = bookmarkPosts.find(
    //   (bookmarkPost) => bookmarkPost.id === props.menuId
    // );
    // if (!showBookmark) {
    dispatch(bookmarkActions.addPostToBookmarks({ id: props.menuId }));
    // } else {
    //   dispatch(bookmarkActions.removePostFormBookmarks({ id: props.menuId }));
    // }
  };
  return (
    <div>
      <MoreVertIcon
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
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
            <div>
              <BookmarkIcon /> Remove Bookmark
            </div>
          ) : (
            <div>
              <BookmarkBorderIcon /> Bookmark
            </div>
          )}
        </MenuItem>
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
