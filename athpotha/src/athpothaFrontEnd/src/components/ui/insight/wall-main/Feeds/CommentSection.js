import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUserData } from '../../../../../api/authenticationService';
import Comment from "./Comment";

function CommentSection(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const commentBtnClicked = useSelector((state) => state.comment.commentAdded);

  const getComments = async () => {
    const postData = new FormData();
    postData.append("postId", props.postId);
    setIsLoading(true)
    fetchUserData({
      url: "api/v1/comment/get-comments",
      method: "post",
      data: postData
    }).then((response) => {
      console.log(response.data);
      props.noOfComments(response.data.comments.length)
      setComments((response.data.comments.map((comment) => (
        {
          key: `comment-${comment.commentId}`,
          id: comment.commentId,
          avatarImage: comment.user.profilePicture,
          commentOwnerName: `${comment.user.firstName} ${comment.user.lastName}`,
          commentContent: comment.comment,
          upvotes: comment.upVotes,
          downvotes: comment.downVotes,
          haveReplies: comment.replies.length !== 0,
        }
      ))))
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getComments();
  }, [commentBtnClicked])

  if (isLoading) {
    return <p>Loading ...</p>
  }
  return (
    <React.Fragment>
      {comments.map((comment) => (
        <Comment
          commentId={comment.id}
          key={comment.key}
          commentItem={comment}
          subcommentMargin={comment.haveReplies ? 7 : 0}
          replyType="comment"
        />
      ))}
    </React.Fragment>
  )
}

export default CommentSection