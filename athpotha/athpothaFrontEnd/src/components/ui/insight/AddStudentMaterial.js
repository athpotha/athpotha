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
import FileUploadService from "../../../services/FileUploadService";

function AddStudentMaterial(props) {
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

  
  const [fileMaterial, setFileMaterial] = useState("");
  const setFileMaterialHandler = (material) => {
    setFileMaterial(material);
  }
  
  const [imageUrl, setImageUrl] = useState('');
  let formIsValid = false;
  if (contentIsValid && categoryIsValid) {
    formIsValid = true;
  }

  const postSubmitHandler = () => {
    setDataUploading(true);
    if (!contentIsValid && fileMaterial === "") {
      return;
    }
    const data = {
      url: fileMaterial,
      content: content,
    }
    //api call here
    props.close();
    
  }

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
              <FileUploadService path="/student-matreials" onChange={setFileMaterialHandler} />
              {/* <CardMedia
                component="img"
                image={
                  postImagePreview !== null ?
                    postImagePreview :
                    ""}
              /> */}
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginRight: "30px" }}>
            <Grid container>
              <Grid item xs={8}>
                {/* <CenteredBox align="left">
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
                </CenteredBox> */}
              </Grid>
              <Grid item xs={4}>
                <CenteredBox align="right">
                  <Button
                    variant="contained"
                    style={{ borderRadius: 20, textTransform: "none" }}
                    onClick={postSubmitHandler}
                    disabled={!formIsValid}
                  >
                    Add material
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

export default AddStudentMaterial;
