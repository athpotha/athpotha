import { Grid, Divider, StyledEngineProvider, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BeforeDisplay from "../../ui/BeforeDisplay";
import ProfileCard from "../../ui/insight/profile/ProfileCard";
import { fetchUserData } from "../../../api/authenticationService";
import HomeCard from "../../ui/insight/wall-main/Feeds/HomeCard";

function ViewPosts(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const fetchMyPostsHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null)
        try {
            const response = await fetchUserData({
                method: "post",
                url: "api/v1/post/get-own-posts",
                data: {
                    userId: props.user.userId,
                    email: props.user.email,
                }
            });
            const myPosts = await response.data;

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
                    noOfComments: post.numberOfComments,
                };
            })
            setPosts(transformedPosts);
            // console.log(transformedPosts);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, [])

    useEffect(() => {
        fetchMyPostsHandler();
    }, [])

    let content = <Typography>Found no {props.postType}</Typography>

    if (posts.length > 0) {
        content = posts.map((post) => (
            post.postType == props.postType && <ProfileCard cardType="mainWall" homeCardId={post.id} key={post.id} postItem={post} />
        ))
    }

    if (!content[0]) {
        content = <Typography>Found no {props.postType}</Typography>
    }
    
    if (isLoading) {
        content = <BeforeDisplay />;
    }

    return (
        <div>{content}</div>
    )
}

export default ViewPosts