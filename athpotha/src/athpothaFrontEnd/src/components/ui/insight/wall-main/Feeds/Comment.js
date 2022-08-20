import React, { useState } from "react";
import {
  Avatar,
  Collapse,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReplyIcon from "@mui/icons-material/Reply";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Reply from "./Reply";
import SubComment from "./SubComment";

function Comment(props) {
  const [replyExpanded, setReplyExpanded] = useState(false);
  const [viewReplyExpanded, setViewReplyExpanded] = useState(false);

  const handleReplyExpandClick = () => {
    setReplyExpanded(!replyExpanded);
  };

  const handleViewReplyExpanded = () => {
    setViewReplyExpanded(!viewReplyExpanded);
  };
  console.log("hello world");
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={props.commentItem.avatarImage} />
            </ListItemAvatar>
            <ListItemText
              primary={props.commentItem.commentOwnerName}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text"
                  >
                    {props.commentItem.commentContent}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </Grid>
        <Grid item xs={12} sx={{ ml: 7 }}>
          <div>
            <Grid container>
              <Grid item xs={10}>
                <IconButton aria-label="add to favorites">
                  <KeyboardDoubleArrowUpIcon />
                  <Typography>Upvote {props.commentItem.upvotes}</Typography>
                </IconButton>
                <IconButton aria-label="reply" onClick={handleReplyExpandClick}>
                  <ReplyIcon />
                  <Typography>Reply</Typography>
                </IconButton>
                {props.commentItem.haveReplies ? (
                  <IconButton
                    aria-label="view reply"
                    onClick={handleViewReplyExpanded}
                  >
                    <Typography>View replies</Typography>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                ) : (
                  ""
                )}
                <IconButton aria-label="share" disabled>
                  <Typography>1d ago</Typography>
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <IconButton aria-label="add to favorites">
                  <KeyboardDoubleArrowDownIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <MoreHorizIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
          <div>
            <Collapse in={replyExpanded} timeout="auto" unmountOnExit>
              <Reply />
            </Collapse>
          </div>
        </Grid>
      </Grid>
      {props.commentItem.haveReplies
        ? props.commentItem.replies.map((reply) => (
            <SubComment
              subcommentMargin={props.subcommentMargin}
              in={viewReplyExpanded}
              key={reply.id}
              commentItem={reply}
            />
          ))
        : ""}
    </>
  );
}

export default Comment;
