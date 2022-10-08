import React, { useEffect, useState } from "react";
import { styled, StyledEngineProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";

import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Button,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import { Box } from "@mui/system";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ForumIcon from "@mui/icons-material/Forum";

import RoundedInputField from "../../RoundedInputField";
import { useDispatch, useSelector } from "react-redux";
import SimpleSnackbar from "../wall-main/Feeds/SimpleSnackbar";
import ProfileCardAction from "./ProfileCardAction";
import ProfileCardMenu from "./ProfileCardMenu";
import { fetchUserData } from "../../../../api/authenticationService";
import CommentSection from "../wall-main/Feeds/CommentSection";
import { commentActions } from "../../../../store/comment-slice";
import Swal from "sweetalert2";
import FeedCardActions from "./FeedCardActions";
import { useNavigate } from "react-router-dom";

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

const PostedPerson = styled(Avatar)({
  opacity: 1,
  "&:hover": {
    opacity: 0.6
  },
  width: 56,
  height: 56,
  marginRight: 10,
  cursor: "pointer"
});

const PostedImage = styled(CardMedia)({
  cursor: "pointer",
  "&:hover": {
    opacity: 0.8
  },
  height: "460"
})
export default function ProfileCard(props) {
  const [expanded, setExpanded] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setIsLoading(true);
  //   setIsLoading(false);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <Grid item xs={12} sx={{ mb: 5 }}>
  //       <BeforeDisplay width="100%" height={450} />
  //     </Grid>
  //   );
  // }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const bookmarkPosts = useSelector((state) => state.bookmarks.bookmarkedPosts);

  var isBookmarkAdded = null;
  var isBookmarkRemoved = null;
  const bookmarkIndex = bookmarkPosts.findIndex(
    (bookmark) => bookmark.id === props.homeCardId
  );

  if (bookmarkIndex !== -1) {
    isBookmarkAdded = bookmarkPosts[bookmarkIndex].isBookmarkAdded;
    isBookmarkRemoved = bookmarkPosts[bookmarkIndex].isBookmarkRemoved;
  }

  const [comment, setComment] = useState('');
  let isCommentValid = false;
  if (comment !== '') {
    isCommentValid = true;
  }

  const commentBtnClicked = useSelector((state) => state.comment.commentAdded);
  const addComment = () => {
    if (commentBtnClicked) {
      dispatch(commentActions.setCommentAdded(false));
    } else {
      dispatch(commentActions.setCommentAdded(true));
    }
    const commentData = new FormData();
    commentData.append("postId", props.homeCardId);
    commentData.append("comment", comment);
    commentData.append("userId", localStorage.getItem("USER_ID"));
    fetchUserData({
      url: "api/v1/comment/add-comment",
      method: "post",
      data: commentData
    }).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Comment Added!',
      }).then(() => {
        setComment('');
      })
    })
  }

  const [noOfComments, setNoOfComments] = useState(props.postItem.noOfComments)
  const setNumberOfComments = (value) => {
    setNoOfComments(value)
  }

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/profile/${props.postItem.userId}`)
  }

  const postSeenHandler = () => {
    console.log("hello world");
    const postData = new FormData();
    postData.append("postId", props.homeCardId);
    postData.append("userId", localStorage.getItem("USER_ID"))
    fetchUserData({
      url: "api/v1/feeds/set-post-seen",
      method: "post",
      data: postData
    })
  }
  return (
    <StyledEngineProvider injectFirst>
      <Grid
        item
        xs={12}
        // style={{ backgroundColor: "#e91e63" }}
        sx={{ bgcolor: "background", mb: 3, borderRadius: 2, p: 0 }}
        onMouseEnter={postSeenHandler}
      >
        <div>
          <Card sx={{ width: "100%", pb: 2 }}>
            <CardHeader
              avatar={
                <ListItem style={{ cursor: "pointer", padding: 0 }}>
                  <ListItemAvatar>
                    <PostedPerson
                      onClick={clickHandler}
                      src={props.postItem.personImage}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={props.postItem.personName}
                    secondary={props.postItem.postDate}
                  />
                </ListItem>
              }
              action={
                props.cardType == "profile" && <ProfileCardAction postId={props.homeCardId} postType={props.postType} />
              }
            />
            <CardContent>
              <Typography variant="body" color="text">
                {props.postItem.postContent}
              </Typography>
            </CardContent>
            {props.postItem.postedImage && <PostedImage
              component="img"
              image={props.postItem.postedImage}
            // alt="Paella dish"
            />}

            <FeedCardActions
              noOfComments={noOfComments}
              noOfPostUpvotes={props.postItem.noOfPostUpvotes}
              noOfPostDownvotes={props.postItem.noOfPostDownvotes}
              onClick={handleExpandClick}
              menuId={props.homeCardId}
            />

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Grid container spacing={2} sx={{ ml: 2 }}>
                <Grid item xs={1}>
                  <Avatar
                    sx={{ width: 56, height: 56 }}
                    src={props.postItem.userImage}
                  />
                </Grid>
                <Grid item xs={7} style={{ mr: 2 }}>
                  <RoundedInputField
                    placeholder="Add a comment"
                    width="100%"
                    height="50px"
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value)
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ mt: 0.6 }}
                    style={{ borderRadius: 22, textTransform: "none" }}
                    onClick={addComment}
                    disabled={!isCommentValid}
                  >
                    Add Comment
                  </Button>
                </Grid>
              </Grid>
              <Grid container>
                <CommentSection
                  postId={props.homeCardId}
                  comments={props.postItem.comments}
                  noOfComments={setNumberOfComments}
                />
                {/* {commentDetatils.map((comment) => (
                  <Comment
                    key={comment.id}
                    commentItem={comment}
                    subcommentMargin={comment.haveReplies ? 7 : 0}
                  />
                ))} */}
              </Grid>
              {/* <Divider variant="inset" component="li" /> */}
            </Collapse>
          </Card>
          {isBookmarkAdded && (
            <SimpleSnackbar message="Post added to your bookmarks" />
          )}
          {isBookmarkRemoved && (
            <SimpleSnackbar message="Post remove from your bookmarks" />
          )}
        </div>
      </Grid>
    </StyledEngineProvider>
  );
}
