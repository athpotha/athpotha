import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchUserData } from '../../../../../api/authenticationService';
import SubComment from './SubComment'

function SubCommentSection(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [replies, setReplies] = useState([]);
    const replyBtnClicked = useSelector((state) => state.comment.replyAdded);

    const getReplies = async () => {
        const postData = new FormData();
        postData.append("commentId", props.commentId);
        setIsLoading(true)
        if (props.replyType === "comment") {
            const postData = new FormData();
            postData.append("commentId", props.commentId);
            fetchUserData({
                url: "api/v1/reply/get-replies",
                method: "post",
                data: postData
            }).then((response) => {
                console.log(response.data);
                // props.noOfReplies(response.data.replies.length)
                setReplies((response.data.replies.map((reply) => (
                    {
                        key: `reply-${reply.replyId}`,
                        id: reply.replyId,
                        avatarImage: reply.user.profilePicture,
                        commentOwnerName: `${reply.user.firstName} ${reply.user.lastName}`,
                        commentContent: reply.reply,
                        upvotes: reply.upVotes,
                        downvotes: reply.downVotes,
                        haveReplies: reply.replies.length !== 0,
                    }
                ))))
                setIsLoading(false);
            })
        } else if (props.replyType === "reply") {
            const postData = new FormData();
            postData.append("replyId", props.commentId);
            fetchUserData({
                url: "api/v1/reply/get-replyToReply",
                method: "post",
                data: postData
            }).then((response) => {
                console.log(response.data);
                // props.noOfReplies(response.data.replies.length)
                setReplies((response.data.replies.map((reply) => (
                    {
                        key: `reply-${reply.replyId}`,
                        id: reply.replyId,
                        avatarImage: reply.user.profilePicture,
                        commentOwnerName: `${reply.user.firstName} ${reply.user.lastName}`,
                        commentContent: reply.reply,
                        upvotes: reply.upVotes,
                        downvotes: reply.downVotes,
                        haveReplies: reply.replies.length !== 0,
                    }
                ))))
                setIsLoading(false);
            })
        }

    }

    useEffect(() => {
        getReplies();
    }, [replyBtnClicked])

    if (isLoading) {
        return <p>Loading ...</p>
    }
    return (
        <React.Fragment>
            
            {replies.map((reply) => (
                <SubComment
                    subcommentMargin={props.subcommentMargin}
                    in={props.in}
                    key={reply.id}
                    commentId={reply.id}
                    commentItem={reply}
                />
            ))}
        </React.Fragment>
    )
}

export default SubCommentSection