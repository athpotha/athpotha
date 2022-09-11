import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import ProfileCardMenu from './ProfileCardMenu'

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ForumIcon from "@mui/icons-material/Forum";
import styled from '@emotion/styled';
import CardActions from "@mui/material/CardActions";
import { useState } from 'react';
import { fetchUserData } from '../../../../api/authenticationService';
import { useEffect } from 'react';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

function FeedCardActions(props) {
    const [upvotes, setUpvotes] = useState(props.noOfPostUpvotes);
    const [upvoted, setUpvoted] = useState(false);

    const [downvoted, setDownvoted] = useState(false);
    const [downvotes, setDownvotes] = useState(props.noOfPostDownvotes);

    const [isLoading, setIsLoading] = useState(false);


    const postData = new FormData();
    postData.append("email", localStorage.getItem("USER_EMAIL"));
    postData.append("postId", props.menuId);
    useEffect(() => {
        setIsLoading(true);

        postData.append("voteType", "upvote")
        fetchUserData({
            url: "api/v1/post/is-user-voted",
            method: "post",
            data: postData
        }).then((response) => {
            setUpvoted(response.data);
        }).catch((error) => {
            console.log(error.message)
        })

        postData.set("voteType", "downvote")

        fetchUserData({
            url: "api/v1/post/is-user-voted",
            method: "post",
            data: postData
        }).then((response) => {
            setDownvoted(response.data);
        }).catch((error) => {
            console.log(error.message)
        })
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }
    const addUpvoteHandler = () => {
        if (!upvoted) {
            setUpvotes(props.noOfPostUpvotes + 1);
            setUpvoted(true);
        } else {
            setUpvotes((prevNoOfPostUpvotes) => { return prevNoOfPostUpvotes - 1 });
            setUpvoted(false);
        }
        postData.set("voteType", "upvote")
        fetchUserData({
            url: "api/v1/post/vote-post",
            method: "put",
            data: postData
        })
    }

    const addDownvoteHandler = () => {
        if (!downvoted) {
            setDownvotes(props.noOfPostDownvotes + 1);
            setDownvoted(true);
        } else {
            setDownvotes((prevNoOfPostDownvotes) => { return prevNoOfPostDownvotes - 1 });
            setDownvoted(false);
        }
    }
    console.log(upvoted);
    console.log(downvoted);
    return (
        <CardActions disableSpacing>
            <IconButton color={upvoted ? "primary" : "default"} onClick={addUpvoteHandler}>
                <KeyboardDoubleArrowUpIcon />
                <Typography>{upvotes}</Typography>
            </IconButton>
            <IconButton color={downvoted ? "error" : "default"} onClick={addDownvoteHandler} >
                <KeyboardDoubleArrowDownIcon />
                <Typography>{downvotes}</Typography>
            </IconButton>
            <Box sx={{ ml: 10 }}>
                <IconButton onClick={props.onClick}>
                    <ForumIcon />
                    <Typography>{props.noOfComments}</Typography>
                </IconButton>
            </Box>
            <ExpandMore>
                <ProfileCardMenu menuId={props.menuId} />
            </ExpandMore>
        </CardActions>
    )
}

export default FeedCardActions