import { Grid, StyledEngineProvider } from "@mui/material";
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
import ChangePassword from "./ChangePassword"
import styled from "@emotion/styled";
import ChangeImage from "./ChangeImage";

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
  switch (localStorage.getItem("USER_TYPE")) {
    case "student":
      subText = localStorage.getItem("STUDENT_TYPE");
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
  return (
    <StyledEngineProvider injectFirst>
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
                  image={localStorage.getItem("COVER_PIC")}
                />

                <div
                  style={{ position: "absolute", top: "20px", right: "16px" }}
                >
                  <ChangeImage tabValue={1}>
                    <IconButton>
                      <PhotoCamera />
                    </IconButton>
                  </ChangeImage>

                </div>
                {/* ----------------------------- White section ------------------------------- */}
                <ChangeImage tabValue={0}>
                  <IconButton
                    style={{ position: "absolute", top: "130px", left: "16px" }}
                  >
                    <ProfileAvatar
                      src={localStorage.getItem("PROFILE_PIC")}
                    />
                  </IconButton>
                </ChangeImage>


                {/* --------------------------------- Model Start ----------------------------- */}


                <Grid>
                  <Modal open={openOne}>
                    <Box sx={style}>
                      <Grid>
                        <Typography
                          variant="h5"
                          component="h2"
                          color="#1e88e5"
                        >
                          EDIT INFO
                        </Typography>
                      </Grid>
                      <IconButton
                        aria-label="close"
                        onClick={handleCloseOne}
                        sx={{
                          position: "absolute",
                          right: 8,
                          top: 8,
                          color: (theme) => theme.palette.grey[500],
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                      <Box
                        sx={{ mt: "25px", height: "70vh", overflow: "auto" }}
                      >
                        {/* ---------------------content of the model start ------------------ */}

                        <form style={{ maxWidth: "100%" }}>
                          <TextField
                            id="First Name"
                            label="First Name"
                            variant="outlined"
                            defaultValue={localStorage.getItem("FIRST_NAME")}
                            fullWidth
                          />

                          <TextField
                            id="Last Name"
                            label="Last Name"
                            variant="outlined"
                            defaultValue={localStorage.getItem("LAST_NAME")}
                          />
                          <TextField
                            id="Bio"
                            label="Bio"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                          />
                          <Button variant="contained">Save</Button>

                          {/* ---------------------content of the model end ------------------ */}
                        </form>
                      </Box>
                    </Box>
                  </Modal>
                </Grid>
                {/* -----------------------------------Model End ----------------------------------- */}
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
                      {localStorage.getItem("USER_NAME")}
                    </Box>
                    <Box sx={{ fontSize: "10pt" }}>{subText}</Box>
                    <Box sx={{ fontSize: "10pt" }}>
                      {localStorage.getItem("USER_TYPE") === "student" && 
                      "I am an O/L qualified student and currently reading for GCE A/L's."
                      }
                      {localStorage.getItem("USER_TYPE") === "university" && 
                      "We are Government."
                      }
                      {localStorage.getItem("USER_TYPE") === "tutor" && 
                      "I'm an English medium Physics tutor."
                      }
                      {localStorage.getItem("USER_TYPE") === "community" && 
                      "I'm a Community Member."
                      }
                    </Box>

                    {/* <Box sx={{mt:3,fontSize:'10pt'}}>1,100 followers</Box> */}
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    onClick={handleOpenOne}
                    style={{ "margin-left": "20px", "margin-top": "6px" }}
                    variant="text"
                    startIcon={<BorderColorIcon />}
                  >
                    Edit Info
                  </Button>
                  <Button
                    onClick={handleOpenTwo}
                    style={{ "margin-left": "20px", "margin-bottom": "2px" }}
                    variant="text"
                    startIcon={<SettingsIcon color="action" />}
                    sx={{ m: "90px" }}
                  >
                    Settings
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Box>


        {/* <---------------- Settings Pop Up ---------------------> */}
        <Grid>
          <Modal open={openTwo}>
            <Box sx={style}>
              <Grid>
                <Typography
                  variant="h5"
                  component="h2"
                  color="#1e88e5"
                >
                  Settings
                </Typography>
              </Grid>
              <IconButton
                aria-label="close"
                onClick={handleCloseTwo}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box
                sx={{ mt: "2px", height: "100%", overflow: "auto" }}
              >
                {/* ---------------------content of the model start ------------------ */}

                <form style={{ maxWidth: "100%" }}>  {/*  FORM HERE ???? */}


                  <ChangePassword></ChangePassword>

                  {/* ---------------------content of the model end ------------------ */}
                </form>
              </Box>
            </Box>
          </Modal>
        </Grid>
      </div>

      {/* -------------------------------------- settings Pop up End   ------------------------------- */}




    </StyledEngineProvider>

  );
}

export default CoverSection;
