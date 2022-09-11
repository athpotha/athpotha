import { Grid, Divider, StyledEngineProvider, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BeforeDisplay from "../../ui/BeforeDisplay";
import ProfileCard from "../../ui/insight/profile/ProfileCard";
import { fetchUserData } from "../../../api/authenticationService";
import { useSelector } from "react-redux";

function MyPosts(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    // console.log(commentBtnClicked);

    const fetchMyPostsHandler = async () => {
        setIsLoading(true);
        setError(null)
        try {
            const response = await fetchUserData({
                method: "post",
                url: "api/v1/post/get-own-posts",
                data: {
                    userId: localStorage.getItem("USER_ID"),
                    email: localStorage.getItem("USER_EMAIL"),
                }
            });
            const myPosts = await response.data;
            console.log(myPosts);

            const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const transformedPosts = myPosts.map((post) => {
                let d = new Date(post.addedTime);
                let addedDate = `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
                return {
                    id: post.postId,
                    personName: `${post.user.firstName} ${post.user.lastName}`,
                    postDate: addedDate,
                    postType: post.type,
                    postContent: post.type === "post" ? post.title : post.question,
                    postedImage: post.image,
                    personImage: post.user.profilePicture,
                    userImage: post.user.profilePicture,
                    noOfPostUpvotes: post.upVotes,
                    noOfPostDownvotes: post.downVotes,
                    noOfComments: post.comments.length,
                    comments: post.comments
                };
            })
            setPosts(transformedPosts);
            // console.log(transformedPosts);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchMyPostsHandler();
    }, [])

    let content = <Typography>Found no {props.postType}s</Typography>

    if (posts.length > 0) {
        content = posts.map((post) => (
            post.postType == props.postType && <ProfileCard cardType="profile" homeCardId={post.id} key={post.id} postItem={post} />
        ))
    }

    if (content.length < 0) {
        content = <Typography>Found no {props.postType}s</Typography>
    }
    
    if (isLoading) {
        content = <BeforeDisplay />;
    }

    return (
        <div>{content}</div>
    )
}

export default MyPosts