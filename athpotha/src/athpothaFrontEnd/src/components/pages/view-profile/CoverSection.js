import { ButtonGroup, Grid, StyledEngineProvider } from "@mui/material";
import React from 'react';
import { Box, Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import SettingsIcon from '@mui/icons-material/Settings';
import styled from "@emotion/styled";
import ViewImage from "./ViewImage";


import MoreVertIcon from '@mui/icons-material/MoreVert';
import CenteredBox from "../../ui/CenteredBox";
import ViewProfileMenu from "./ViewProfileMenu";
import ViewImageModal from "./ViewImageModal";
import { fetchUserData } from "../../../api/authenticationService";
function CoverSection(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 200,
    bgcolor: "background.paper",
    borderRadius: "7px",
    boxShadow: 35,
    p: 5,
    width: "58%",

  };


  // ------------- Model -----------

  const [openOne, setOpenOne] = React.useState(false);
  const handleOpenOne = () => setOpenOne(true);
  const handleCloseOne = () => setOpenOne(false);

  const [openTwo, setOpenTwo] = React.useState(false);
  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false);

  let subText = ""
  const userType = props.user.userType;
  switch (userType) {
    case "student":
      subText = props.user.studentType;
      break;
  }

  const ProfileAvatar = styled(Avatar)({
    opacity: 1,
    "&:hover": {
      opacity: 0.6
    },
    width: 150,
    height: 150,
    // cursor: "pointer"
    // maxWidth: 330,
  });
  // ----------------------------------

  const makeFollowHandler = () => {
    const formData = new FormData();
    formData.append("follower_id", props.user.userId);
    formData.append("following_id", localStorage.getItem("USER_ID"))
    fetchUserData({
      url: "api/v1/follow/add-follow",
      method: "put",
      data: formData
    }).then((response) => {
      console.log(response);
      const formData = new FormData();
      formData.append("following_id", localStorage.getItem("USER_ID"))
      fetchUserData({
        url: "api/v1/follow/get-follow",
        method: "post",
        data: formData
      }).then((response) => {
        console.log(response.data);
      })
    })
  }
  return (
    <div sx={{ width: "100%" }}>
      <Box
        sx={{ bgcolor: "background", mb: 3, borderRadius: 2 }}
      >
        <Box>
          <Card sx={{ maxWidth: "100%" }}>
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="200"
                image={props.user.coverPicture}
              />

              <div
                style={{ position: "absolute", top: "20px", right: "16px" }}
              >
                <ViewImageModal tabValue={1} user={props.user}>
                  <IconButton>
                    <PhotoCamera />
                  </IconButton>
                </ViewImageModal>
                {/*  */}

              </div>
              {/* ----------------------------- White section ------------------------------- */}
              <ViewImageModal tabValue={0} user={props.user}>

                <IconButton
                  style={{ position: "absolute", top: "130px", left: "16px" }}
                >
                  <ProfileAvatar
                    src={props.user.profilePicture}
                  />
                </IconButton>
              </ViewImageModal>

            </div>
            <Grid container>
              <Grid item xs={10}>
                <div
                  style={{
                    marginTop: "90px",
                    marginLeft: "16px",
                    paddingBottom: "20px",
                  }}
                >
                  <Box sx={{ fontWeight: "bold" }}>
                    {`${props.user.firstName} ${props.user.lastName}`}
                    {/* {localStorage.getItem("FIRST_NAME")} {localStorage.getItem("LAST_NAME")} */}
                  </Box>
                  <Box sx={{ fontSize: "10pt" }}>{props.user.userType === "student" && props.user.studentType}</Box>
                  <Box sx={{ fontSize: "10pt" }}>
                    {props.user.description}
                  </Box>

                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <ButtonGroup sx={{ ml: "16px" }}>

                  {(userType === "student" || userType === "community") ?
                    <>
                      <Button
                        variant="contained"
                        style={{ borderRadius: 20, textTransform: "none" }}
                        onClick={makeFollowHandler}
                      >
                        Connect
                      </Button>
                      <Button
                        style={{ borderRadius: 20, textTransform: "none" }}
                      >
                        Message
                      </Button>
                    </>
                    :
                    <>
                      <Button
                        variant="contained"
                        style={{ borderRadius: 20, textTransform: "none" }}
                        onClick={makeFollowHandler}
                      >
                        Follow
                      </Button>
                      {localStorage.getItem("IS_PREMIUM") && <Button
                        style={{ borderRadius: 20, textTransform: "none" }}
                      >
                        Message
                      </Button>
                      }
                    </>
                  }

                </ButtonGroup>
              </Grid>
              <Grid item xs={6}>
                <CenteredBox align="right">
                  <IconButton>
                    <ViewProfileMenu />
                  </IconButton>
                </CenteredBox>

              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
    </div>
  );
}

export default CoverSection;
