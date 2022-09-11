import { Grid, InputLabel, MenuItem, Select, StyledEngineProvider } from "@mui/material";
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
  
const editInfo =(e)=>{
  e.preventDeafult();
}
  // ------------- Model -----------

  const [openOne, setOpenOne] = React.useState(false);
  const handleOpenOne = () => setOpenOne(true);
  const handleCloseOne = () => setOpenOne(false);

  const [openTwo, setOpenTwo] = React.useState(false);
  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false);
  
  const [firstName,setFirstName]= React.useState( localStorage.getItem("FIRST_NAME"));
  const [lastName,setLastName]= React.useState(localStorage.getItem("LAST_NAME"));
  const [description,setDescription]= React.useState(localStorage.getItem("DESCRIPTION"));
  const[studentType,setStudentType]=React.useState(localStorage.getItem("STUDENT_TYPE"));
  // console.log("studentType"+studentType);
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
  var id=localStorage.getItem("USER_ID");

  const handleChange=(e)=>{
    console.log(e);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(id) ;
    // var dataSet=JSON.stringify(data);
    const data = {
      url: `profile/edit-info/${id}`,
      method: "put",
      data: {
        firstName,
        lastName,
        description
      },
    };
    fetchUserData(data)
      .then((response) => {
        console.log(response.data);
        // setReadUnread(1);

        // setNotiDBData(response.data);
        localStorage.setItem("FIRST_NAME",firstName);
        localStorage.setItem("LAST_NAME",lastName);
        localStorage.setItem("DESCRIPTION",description);

        window.location.replace("/profile");

      })
      .catch((e) => {
        console.log("CATCH---------");
        console.log(e);
      });
    // console.log(data);
  }

  return (
    <StyledEngineProvider injectFirst>
      <div sx={{ width: "100%" }}>
        <Box sx={{ bgcolor: "background", mb: 3, borderRadius: 2 }}>
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
                    <ProfileAvatar src={localStorage.getItem("PROFILE_PIC")} />
                  </IconButton>
                </ChangeImage>

                {/* --------------------------------- Model Start ----------------------------- */}

                <Grid>
                  <Modal open={openOne}>
                    <Box sx={style}>
                      <Grid>
                        <Typography variant="h5" component="h2" color="#1e88e5">
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

                        <form
                          style={{ maxWidth: "100%" }}
                          onSubmit={handleSubmit}
                        >
                          <TextField
                            id="First Name"
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            onChange={(e) => setFirstName(e.target.value)} //
                            value={firstName}
                            defaultValue={localStorage.getItem("FIRST_NAME")}
                          />

                          <TextField
                            id="Last Name"
                            label="Last Name"
                            variant="outlined"
                            defaultValue={localStorage.getItem("LAST_NAME")}
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                          />
                          <TextField
                            id="Bio"
                            label="Bio"
                            multiline
                            rows={1}
                            defaultValue={localStorage.getItem("DESCRIPTION")}
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                          />


                          {/* select dropdown */}
                          {/* <InputLabel id="demo-simple-select-label">
                            Student Type
                          </InputLabel> */}
                          <Select
                            labelId="demo-simple-select-label"
                            id="Student_Type"
                            value={studentType}
                            label="Student Type"
                            // defaultValue={studentType}
                            onChange={(e)=>handleChange(e.target.value)}
                          >
                            <MenuItem value={"Regular"}>Regular</MenuItem>
                            <MenuItem value={"OL_Qualified"}>OL_Qualified</MenuItem>
                            <MenuItem value={30}>AL_Qualified</MenuItem>
                            <MenuItem value={40}>Undergraduate</MenuItem>

                          </Select>



                          <Button variant="contained" type="submit">
                            Save
                          </Button>
                          {/* <input type="submit"/> */}
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
                      {localStorage.getItem("FIRST_NAME")}{" "}
                      {localStorage.getItem("LAST_NAME")}
                    </Box>
                    <Box sx={{ fontSize: "10pt" }}>{subText}</Box>
                    <Box sx={{ fontSize: "10pt" }}>
                      {localStorage.getItem("DESCRIPTION")}
                    </Box>

                    {/* <Box sx={{mt:3,fontSize:'10pt'}}>1,100 followers</Box> */}
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    onClick={handleOpenOne}
                    style={{ marginLeft: "20px", marginTop: "6px" }}
                    variant="text"
                    startIcon={<BorderColorIcon />}
                  >
                    Edit Info
                  </Button>
                  <Button
                    onClick={handleOpenTwo}
                    style={{ marginLeft: "20px", marginBottom: "2px" }}
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
                <Typography variant="h5" component="h2" color="#1e88e5">
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
              <Box sx={{ mt: "2px", height: "100%", overflow: "auto" }}>
                {/* ---------------------content of the model start ------------------ */}

                <form style={{ maxWidth: "100%" }}>
                  {" "}
                  {/*  FORM HERE ???? */}
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
