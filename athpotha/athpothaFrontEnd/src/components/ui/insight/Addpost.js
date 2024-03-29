import {
  Button,
  CardMedia,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CenteredBox from "../CenteredBox";
import ProfileImage from "./ProfileImage";

import CollectionsIcon from "@mui/icons-material/Collections";

import useInput from "../../../hooks/use-input";
import UseImageInput from "../../../hooks/use-imageInput";
import { fetchUserData } from "../../../api/authenticationService";
import SimpleSnackbar from "./wall-main/Feeds/SimpleSnackbar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { storage } from '../../../Firebase';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";
import Spinner from "../Spinner";
import BackDrop from "../BackDrop";

function Addpost(props) {
  const [postSuccess, setPostSuccess] = useState(true);
  const navigate = useNavigate();
  const [imageData, setImageData] = useState(null);
  const [postData, setPostData] = useState(new FormData());
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const [dataUploading, setDataUploading] = useState(false);
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
    value: category,
    isValid: categoryIsValid,
    hasError: categoryHasError,
    error: categoryError,
    valueChangeHandler: categoryChangeHandler,
    inputBlurHandler: categoryBlurHandler,
  } = useInput((value) => {
    if (value === "") {
      return { inputIsValid: false, error: "Can't be Empty !" }
    } else {
      return { inputIsValid: true, error: "" }
    }
  })

  const {
    handleUploadClick: handleUploadHandler,
    imagePreview: postImagePreview,
    fileInput: postImageInput,
    imageData: postImageData
  } = UseImageInput(() => { })

  const [imageUrl, setImageUrl] = useState('');
  let formIsValid = false;
  if (contentIsValid && categoryIsValid) {
    formIsValid = true;
  }
  const postSubmitHandler = () => {
    setDataUploading(true);
    if (!contentIsValid && !categoryIsValid) {
      return;
    }
    props.close();
    if (postImageData) {
      const imagePath = `images/posts/${postImageData.name + v4()}`
      const imageRef = ref(storage, imagePath);
      console.log(postImageData);

      const uploadTask = uploadBytesResumable(imageRef, postImageData);
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong !',
          })
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            postData.append('imageFile', downloadURL);
            postData.append('type', "post");
            postData.append('content', content);
            postData.append('postCategory', category)
            postData.append('email', localStorage.getItem('USER_EMAIL'));
            fetchUserData({
              url: "api/v1/post/add-post",
              method: "post",
              data: postData
            }).then((response) => {
              if (response.status === 200) {
                contentReset();
                setPostSuccess(true);
                setDataUploading(false);
                Swal.fire({
                  icon: 'success',
                  title: 'Updated!',
                  text: 'Post Added!',
                }).then(() => {
                  if (window.location.pathname === "/profile") {
                    window.location.reload();
                  } else {
                    navigate("/profile");
                  }
                })
              }
            }).catch((error) => {
              alert(error);
            })
          }).catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong !',
            })
            console.log(error.message)
          });
        }
      );
    } else {
      postData.append('type', "post");
      postData.append('content', content);
      postData.append('postCategory', category)
      postData.append('email', localStorage.getItem('USER_EMAIL'));

      fetchUserData({
        url: "api/v1/post/add-post",
        method: "post",
        data: postData
      }).then((response) => {
        if (response.status === 200) {
          contentReset();
          setPostSuccess(true);
          setDataUploading(false);
          props.close();
          Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: 'Post Added!',
          }).then(() => {
            if (window.location.pathname === "/profile") {
              window.location.reload();
            } else {
              navigate("/profile");
            }
          })
        }
      }).catch((error) => {
        alert(error);
      })
    }
  }

  const fetchMyPostsHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetchUserData({
        url: "api/v1/category/get-my-category",
        method: "post",
        data: {
          email: localStorage.getItem("USER_EMAIL"),
          userType: localStorage.getItem("USER_TYPE")
        }
      })

      const categories = await response.data;
      setCategories(categories);
      console.log(categories);

    } catch (error) {
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchMyPostsHandler();
  }, [])
  // if (isLoading) {
  //   return <p>Loading...</p>
  // }
  return (
    <div style={{ marginTop: "20px" }}>
      {/* {postSuccess && <SimpleSnackbar message="Post added Sucess" />} */}
      <BackDrop dataUploading={dataUploading} />
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
              <FormControl variant="standard" sx={{ width: "100%" }} required
                error={categoryHasError}
              >
                <InputLabel id="category"
                  placeholder="Say something..."

                >Post Category</InputLabel>
                <Select
                  label="Post Category"
                  value={category}
                  onChange={categoryChangeHandler}
                  onBlur={categoryBlurHandler}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {isLoading && <p>Loading</p>}
                  {categories.map((category) => (
                    <MenuItem key={`${category.categoryName}-${category.categoryId}`} value={category.categoryId}>{category.categoryName}</MenuItem>
                  ))}
                  {/*  */}

                </Select>
                <FormHelperText>{categoryHasError ? categoryError : ""}</FormHelperText>
              </FormControl>
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
