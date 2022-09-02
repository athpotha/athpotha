import { Button, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../../../../api/authenticationService";
import { commentActions } from "../../../../../store/comment-slice";
import RoundedInputField from "../../../RoundedInputField";

function Reply(props) {
  const [reply, setReply] = useState('');
  let isReplyValid = false;
  if (reply !== '') {
    isReplyValid = true;
  }
  const dispatch = useDispatch();
  const commentBtnClicked = useSelector((state) => state.comment.replyAdded);
  const addReply = () => {
    if (commentBtnClicked) {
      dispatch(commentActions.setReplyAdded(false));
    } else {
      dispatch(commentActions.setReplyAdded(true));
    }
    const postData = new FormData();
    postData.append("commentId", props.commentId)
    postData.append("reply", reply);
    postData.append("userId", localStorage.getItem("USER_ID"));
    postData.append("replyType", props.replyType);
    fetchUserData({
      url: "api/v1/reply/add-reply",
      method: "post",
      data: postData
    }).then(() => {
      setReply('');
    })
  }
  console.log(reply);
  return (
    <Grid container spacing={1}>
      <Grid item xs={7}>
        {/* <TextField
          variant="outlined"
          placeholder="Add a reply"
          sx={{ width: "100%" }}
        /> */}
        <RoundedInputField
          value={reply}
          onChange={(e) => {
            setReply(e.target.value)
          }} width="100%" height="15px" placeholder="Add a Reply..."
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          sx={{ mt: 0.5 }}
          style={{ borderRadius: 20, textTransform: "none" }}
          onClick={addReply}
          disabled={!isReplyValid}
        >
          Reply
        </Button>
      </Grid>
    </Grid>
  );
}

export default Reply;
