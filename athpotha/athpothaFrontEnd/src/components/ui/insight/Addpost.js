import {
  Button,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CenteredBox from "../CenteredBox";
import ProfileImage from "./ProfileImage";

import CollectionsIcon from "@mui/icons-material/Collections";

import useInput from "../../../hooks/use-input";
import { fetchUserData } from "../../../api/authenticationService";
import SimpleSnackbar from "./wall-main/Feeds/SimpleSnackbar";
import { useNavigate } from "react-router-dom";

function Addpost(props) {
  const [postSuccess, setPostSuccess] = useState(true);
  const navigate = useNavigate();
  const {
    value: content,
    isValid: contentIsValid,
    hasError: contentHasError,
    error: contentError,
    valueChangeHandler: contentChangeHandler,
    inputBlurHandler: contentBlurHandler,
    reset:contentReset
  } = useInput((value) => {
    if (value.trim() === "") {
      return { inputIsValid: false, error: "Can't be Empty !" };
    } else {
      return { inputIsValid: true, error: "" };
    }
  })
  
  let formIsValid = false;
  if(contentIsValid) {
    formIsValid = true;
  }
  const postSubmitHandler = () => {
    if(!contentIsValid) {
      return;
    }
    console.log(localStorage.getItem("USER_ID"))
    fetchUserData({
      url: "api/v1/post/add-post",
      method: "post",
      data: {
        type: "post",
        title: content,
        email: localStorage.getItem("USER_EMAIL"),
      }
    }).then((response) => {
      if(response.status === 200) {
        contentReset();
        setPostSuccess(true);
        navigate("/profile");
      }
    })
  }
  return (
    <div style={{ marginTop: "20px" }}>
      {/* {postSuccess && <SimpleSnackbar message="Post added Sucess" />} */}
      <Grid container>
        <Grid item xs={12}>
          <div style={{ height: "300px", overflowY: "auto" }}>
            <div style={{ marginRight: "30px" }}>
              <ProfileImage size="small" />
              <TextField
                sx={{ my: 2 }}
                placeholder="Say something..."
                variant="standard"
                multiline
                onChange={contentChangeHandler}
                onBlur={contentBlurHandler}
                error={contentHasError}
                helperText={contentHasError ? contentError : ""}
                value={content}
                fullWidth
              />
              {/* <CardMedia
                component="img"
                // image="/images/tutors/tutor-1.jpg"
                alt="green iguana"
              /> */}
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginRight: "30px" }}>
            <Grid container>
              <Grid item xs={10}>
                <CenteredBox align="left">
                  <IconButton onClick={() => console.log("hello")}>
                    <CollectionsIcon />
                  </IconButton>
                </CenteredBox>
              </Grid>
              <Grid item xs={2}>
                <CenteredBox align="right">
                  <Button
                    variant="contained"
                    style={{ borderRadius: 20, textTransform: "none" }}
                    onClick={postSubmitHandler}
                    disabled={!formIsValid}
                  >
                    Post
                  </Button>
                </CenteredBox>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Addpost;
