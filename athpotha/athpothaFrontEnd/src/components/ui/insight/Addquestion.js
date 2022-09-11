import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchUserData } from "../../../api/authenticationService";
import useInput from "../../../hooks/use-input";
import CenteredBox from "../CenteredBox";
import ProfileImage from "./ProfileImage";

function Addquestion(props) {
  const [postSuccess, setPostSuccess] = useState(true);
  const [postData, setPostData] = useState(new FormData());
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
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

  let formIsValid = false;
  if (contentIsValid && categoryIsValid) {
    formIsValid = true;
  }
  const questionSubmitHandler = () => {
    if (!contentIsValid && !categoryIsValid) {
      return;
    }
    postData.append("email", localStorage.getItem("USER_EMAIL"));
    postData.append("type", "question");
    postData.append("content", content);
    postData.append('postCategory', category)
    fetchUserData({
      url: "api/v1/post/add-post",
      method: "post",
      data: postData
    }).then((response) => {
      if (response.status === 200) {
        contentReset();
        setPostSuccess(true);
        props.close();
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'Question Added!',
        }).then(() => {
          if (window.location.pathname === "/profile") {
            window.location.reload();
          } else {
            navigate("/profile");
          }
        })
      }
    })
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

  return (
    <div style={{ marginTop: "20px" }}>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ height: "300px", overflowY: "auto" }}>
            <div style={{ marginRight: "30px" }}>
              <ProfileImage size="small" />
              <TextField
                sx={{ my: 2 }}
                placeholder="Enter your question"
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

                >Question Category</InputLabel>
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
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginRight: "30px" }}>
            <CenteredBox align="right">
              <Button
                variant="contained"
                style={{ borderRadius: 20, textTransform: "none" }}
                onClick={questionSubmitHandler}
                disabled={!formIsValid}
              >
                Add question
              </Button>
            </CenteredBox>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Addquestion;
