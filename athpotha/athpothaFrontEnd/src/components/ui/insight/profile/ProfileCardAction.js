import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

import { useDispatch, useSelector } from "react-redux";
import { IconButton, ListItemIcon, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { fetchUserData } from "../../../../api/authenticationService";
import { postActions } from "../../../../store/post-slice";
ProfileCardAction.propTypes = {
    button: PropTypes.element,
};

export default function ProfileCardAction(props) {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
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

    const deleteHandler = () => {
        handleClose();
        const postData = new FormData();
        postData.append("postId", props.postId);
        postData.append("postType", props.postType)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetchUserData({
                    method: "put",
                    url: "api/v1/post/delete-post",
                    data: postData
                }).then(() => {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been removed.',
                        'success'
                    ).then(() => {
                        dispatch(postActions.setPostDelete())
                    })
                })
            }
        })
    }
    return (
        <div>
            <IconButton onClick={handleClick}>
                <MoreVertIcon />
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
                    <ListItemIcon>
                        <EditIcon />
                    </ListItemIcon>
                    <Typography variant="inherit">Edit</Typography>
                </MenuItem>
                <MenuItem onClick={deleteHandler}>
                    <ListItemIcon style={{ color: "#ff0000" }}>
                        <DeleteForeverIcon />
                    </ListItemIcon>
                    <Typography variant="inherit" style={{ color: "#ff0000" }} >Delete</Typography>
                </MenuItem>
            </Menu>
        </div>
    );
}
