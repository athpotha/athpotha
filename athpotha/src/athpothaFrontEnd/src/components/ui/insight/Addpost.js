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
import { fetchUserData } from "../../../api/authenticationService";
import SimpleSnackbar from "./wall-main/Feeds/SimpleSnackbar";
import { useNavigate } from "react-router-dom";

function Addpost(props) {
  const [postSuccess, setPostSuccess] = useState(true);
  const navigate = useNavigate();
  const fileInput = useRef();
  const [imagePreview, setImagePreview] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [postData, setPostData] = useState(new FormData());
  // const [imageName, setImageName] = useState("");

  // const handleUploadClick = event => {
  //   console.log("image uploader clicked");
  //   var file = event.target.files[0];

  //   // file.mv(`images/posts/${file.name}`)
  //   console.log(file)
  //   const reader = new FileReader();
  //   var url = reader.readAsDataURL(file);
  //   console.log(url);
  //   console.log(fileInput);

  //   // reader.onload = (event) => {

  //   // }
  //   // reader.onloadend = function(e) {
  //   //   this.setState({
  //   //     selectedFile: [reader.result]
  //   //   });
  //   // }.bind(this);
  //   // console.log(url); // Would see a path?

  //   // this.setState({
  //   //   mainState: "uploaded",
  //   //   selectedFile: event.target.files[0],
  //   //   imageUploaded: 1
  //   // });
  // };
  const handleUploadClick = event => {
    let file = event.target.files[0];
    setImageData(file);
    const imageData = new FormData();
    imageData.append('imageFile', file);
    setImagePreview(URL.createObjectURL(file));
  };

  const uploadImageWithAdditionalData = () => {
    // imageData.append('imageName', imageName);
    // dispatch(uploadImage(imageData));
  };

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

  let formIsValid = false;
  if (contentIsValid || imageData) {
    formIsValid = true;
  }
  const postSubmitHandler = () => {
    if (!contentIsValid) {
      return;
    }
    postData.append('imageFile', imageData);
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
              <CardMedia
                component="img"
                image={
                  imagePreview !== null ?
                    imagePreview :
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
                  {/* <IconButton component="label"> */}
                  <IconButton
                    onClick={() => fileInput.current.click()}
                  >
                    <CollectionsIcon />
                  </IconButton>
                  <input
                    accept="image/*"
                    // className={classes.input}
                    // id="contained-button-file"
                    ref={fileInput}
                    multiple
                    type="file"
                    onChange={handleUploadClick}
                    style={{ display: "none" }}
                  />
                  {/* <CollectionsIcon /> */}
                  {/* </IconButton> */}
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
