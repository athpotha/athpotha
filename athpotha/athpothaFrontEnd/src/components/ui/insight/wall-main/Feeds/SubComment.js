import { Collapse, Grid } from "@mui/material";
import React from "react";
import Comment from "./Comment";

function SubComment(props) {
  return (
    <Grid item xs={12} sx={{ ml: props.subcommentMargin }}>
      <div>
        <Collapse in={props.in} timeout="auto" unmountOnExit>
          {/* {props.commentItem.map((reply) => ( */}
            <Comment
              commentItem={props.commentItem}
              commentId={props.commentId}
              subcommentMargin={0}
              replyType="reply"
            />
          {/* ))} */}
        </Collapse>
      </div>
    </Grid>
  );
}

export default SubComment;
