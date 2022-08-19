import {
  Button,
  CardMedia,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CenteredBox from "../CenteredBox";
import ProfileImage from "./ProfileImage";

import CollectionsIcon from "@mui/icons-material/Collections";

import useInput from "../../../hooks/use-input";
import UseImageInput from "../../../hooks/use-imageInput";
import { fetchUserData } from "../../../api/authenticationService";
import SimpleSnackbar from "./wall-main/Feeds/SimpleSnackbar";
import { useNavigate } from "react-router-dom";

function Addpost(props) {
  const [postSuccess, setPostSuccess] = useState(true);
  const navigate = useNavigate();
  // const fileInput = useRef();
  // const [imagePreview, setImagePreview] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [postData, setPostData] = useState(new FormData());

  // const handleUploadClick = event => {
  //   let file = event.target.files[0];
  //   setImageData(file);
  //   const imageData = new FormData();
  //   imageData.append('imageFile', file);
  //   setImagePreview(URL.createObjectURL(file));
  // };

  const {
    value: content,
    isValid: contentIsValid,
    hasError: contentHasError,
    error: contentError,
    valueChangeHandler: contentChangeHandler,
    inputBlurHandler: contentBlurHandler,
    reset: contentReset
  } = useInput((value) => {
    if (value.trim() === "") {
      return { inputIsValid: false, error: "Can't be Empty !" };
    } else {
      return { inputIsValid: true, error: "" };
    }
  })

  const {
    handleUploadClick: handleUploadHandler,
    imagePreview: postImagePreview,
    fileInput: postImageInput,
    imageData: postImageData
  } = UseImageInput(() => {})

  let formIsValid = false;
  if (contentIsValid) {
    formIsValid = true;
  }
  const postSubmitHandler = () => {
    if (!contentIsValid) {
      return;
    }
    postData.append('imageFile', postImageData);
    postData.append('type', "post");
    postData.append('content', content);
    postData.append('email', localStorage.getItem('USER_EMAIL'));

    console.log(localStorage.getItem("USER_ID"))
    fetchUserData({
      url: "api/v1/post/add-post",
      method: "post",
      data: postData
    }).then((response) => {
      if (response.status === 200) {
        contentReset();
        setPostSuccess(true);
        console.log(window.location.pathname);
        if (window.location.pathname === "/profile") {
          window.location.reload();
        } else {
          navigate("/profile");
        }
      }
    }).catch((error) => {
      alert(error);
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
              <CardMedia
                component="img"
                image={
                  postImagePreview !== null ?
                    postImagePreview :
                    ""}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginRight: "30px" }}>
            <Grid container>
              <Grid item xs={10}>
                <CenteredBox align="left">
                  <IconButton
                    onClick={() => postImageInput.current.click()}
                  >
                    <CollectionsIcon />
                  </IconButton>
                  <input
                    accept="image/*"
                    ref={postImageInput}
                    multiple
                    type="file"
                    onChange={handleUploadHandler}
                    style={{ display: "none" }}
                  />
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
                    Add Post
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
