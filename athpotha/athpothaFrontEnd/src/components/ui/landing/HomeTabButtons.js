import React from "react";
import { StyledEngineProvider, Stack, Button } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signupButtonActions } from "../../../store/signup-button-slice";

function HomeTabButtons(props) {
  const dispatch = useDispatch();
  const getStartedClicked = () => {
    dispatch(signupButtonActions.setClickedSignupButton(props.userType))
  }
  return (
    <StyledEngineProvider injectFirst>
      <Stack direction="row" spacing={3} alignSelf="center">
        <Button
          sx={{ size: { sm: "small", md: "medium", lg: "large" } }}
          color="background"
          variant="contained"
        >
          Learn More
        </Button>
        <Link to="/registration" style={{ textDecoration: "none" }}>
          <Button
            sx={{ size: { sm: "small", md: "medium", lg: "large" } }}
            variant="contained"
            endIcon={<SendOutlinedIcon />}
            onClick={getStartedClicked}
          >
            Get Started
          </Button>
        </Link>
      </Stack>
    </StyledEngineProvider>
  );
}

export default HomeTabButtons;
