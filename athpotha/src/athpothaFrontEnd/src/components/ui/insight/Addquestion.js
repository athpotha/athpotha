import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../../../api/authenticationService";
import useInput from "../../../hooks/use-input";
import CenteredBox from "../CenteredBox";
import ProfileImage from "./ProfileImage";

function Addquestion(props) {
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
  const questionSubmitHandler = () => {
    if(!contentIsValid) {
      return;
    }
    console.log(localStorage.getItem("USER_ID"))
    fetchUserData({
      url: "api/v1/post/add-post",
      method: "post",
      data: {
        type: "question",
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
