import React, { useEffect, useState } from "react";
import { styled, StyledEngineProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Button,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";

import classes from "./RoundedInputField.module.css";
import { Box } from "@mui/system";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ForumIcon from "@mui/icons-material/Forum";

import Comment from "./Comment";
import RoundedInputField from "../../RoundedInputField";
import BeforeDisplay from "../../BeforeDisplay";

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

const commentDetatils = [
  {
    id: "comment-1",
    avatarImage:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    commentOwnerName: "Melaka Pathiranagama",
    commentContent:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp an chorizo, and cook,stirring occasionally until lightly browned, 6 to 8 minutes.",
    upvotes: 123,
    haveReplies: true,
    replies: [
      {
        id: "comment-reply-1",
        avatarImage: "/images/tutors/tutor-1.jpg",
        commentOwnerName: "Kumud Perera",
        commentContent:
          "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp an chorizo, and cook,stirring occasionally until lightly browned, 6 to 8 minutes.",
        upvotes: 125,
        haveReplies: false,
        replies: [{}],
      },

      {
        id: "comment-reply-2",
        avatarImage: "/images/tutors/tutor-1.jpg",
        commentOwnerName: "Kumud Perera",
        commentContent:
          "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp an chorizo, and cook,stirring occasionally until lightly browned, 6 to 8 minutes.",
        upvotes: 126,
        haveReplies: true,
        replies: [
          {
            id: "comment-reply-reply-1",
            avatarImage: "/images/tutors/tutor-1.jpg",
            commentOwnerName: "Kumud Perera",
            commentContent:
              "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp an chorizo, and cook,stirring occasionally until lightly browned, 6 to 8 minutes.",
            upvotes: 125,
            haveReplies: false,
            replies: [{}],
          },
        ],
      },
    ],
  },
];

export default function HomeCard(props) {
  const [expanded, setExpanded] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    // for(var i = 0; i < 100000; i++) {
    //   console.log('hello')
    // }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Grid item xs={12} sx={{mb: 5}}>
        <BeforeDisplay width="100%" height={450} />
      </Grid>
    );
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledEngineProvider injectFirst>
      <Grid
        item
        xs={12}
        // style={{ backgroundColor: "#e91e63" }}
        sx={{ bgcolor: "background", p: 1, pl: 0, mb: 2, borderRadius: 2 }}
      >
        <div>
          <Card sx={{ width: "100%", pb: 2 }}>
            <CardHeader
              avatar={
                <ListItem style={{ cursor: "pointer", padding: 0 }}>
                  <ListItemAvatar style={{ cursor: "pointer" }}>
                    <Avatar
                      sx={{ width: 56, height: 56, mr: 1 }}
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
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Typography variant="body" color="text.secondary">
                {props.postItem.postContent}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="460"
              image={props.postItem.postedImage}
              alt="Paella dish"
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <KeyboardDoubleArrowUpIcon />
                <Typography>{props.postItem.noOfPostUpvotes}</Typography>
              </IconButton>
              <IconButton aria-label="share">
                <KeyboardDoubleArrowDownIcon />
              </IconButton>
              <Box sx={{ ml: 10 }}>
                <IconButton aria-label="share" onClick={handleExpandClick}>
                  <ForumIcon />
                  <Typography>{props.postItem.noOfComments}</Typography>
                </IconButton>
              </Box>
              <ExpandMore
              // expand={expanded}
              // onClick={handleExpandClick}
              // aria-expanded={expanded}
              // aria-label="show more"
              >
                <MoreVertIcon />
              </ExpandMore>
            </CardActions>

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
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ mt: 0.6 }}
                    style={{ borderRadius: 22, textTransform: "none" }}
                  >
                    Add Comment
                  </Button>
                </Grid>
              </Grid>
              <Grid container>
                {commentDetatils.map((comment) => (
                  <Comment
                    key={comment.id}
                    commentItem={comment}
                    subcommentMargin={comment.haveReplies ? 7 : 0}
                  />
                ))}
                {/* {commentDetatils.map((comment) => {
              <Comment key={comment.id} commentItem={comment} />;
            })} */}
                {/* <Comment />
            <Comment /> */}
              </Grid>
              {/* <Divider variant="inset" component="li" /> */}
            </Collapse>
          </Card>
        </div>
      </Grid>
    </StyledEngineProvider>
  );
}
