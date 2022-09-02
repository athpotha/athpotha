import { Button, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import { fetchUserData } from "../../../../../api/authenticationService";
import RoundedInputField from "../../../RoundedInputField";

function Reply(props) {
  const [reply, setReply] = useState('');
  const addReply = () => {
    const postData = new FormData();
    postData.append("commentId", props.commentId)
    postData.append("reply", reply);
    postData.append("userId", localStorage.getItem("USER_ID"));
    fetchUserData({
      url: "api/v1/reply/add-reply",
      method: "post",
      data: postData
    }).then(() => {
      setReply('');
    })
  }
  return (
    <Grid container spacing={1}>
      <Grid item xs={7}>
        {/* <TextField
          variant="outlined"
          placeholder="Add a reply"
          sx={{ width: "100%" }}
        /> */}
        <RoundedInputField width="100%" height="15px" placeholder="Add a Reply..." />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          sx={{mt: 0.5 }}
          style={{ borderRadius: 20, textTransform: "none" }}
          value={reply}
          onChange={(e) => {setReply(e.target.value)}}
          onClick={addReply}
        >
          Reply
        </Button>
      </Grid>
    </Grid>
  );
}

export default Reply;
