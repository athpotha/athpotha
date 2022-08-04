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

function CoverSection(props) {
  const navigate = useNavigate();

  const products = ["1"];

  const handleProfileClick = (event, param) => {
    navigate("/profile");
  };

  const fileInput = React.useRef();
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


  
  // ----------------------------------
  return (
    <StyledEngineProvider injectFirst>
      <div sx={{ maxWidth: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gap: 2,
          }}
        >
          {products.map((product) => (
            <Box sx={{ p: 1, m: 1 }}>
              <Card sx={{ maxWidth: "100%" }}>
                <div style={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="images/profile/cover.jpg"
                    alt="green iguana"
                  />

                  <div
                    style={{ position: "absolute", top: "20px", right: "16px" }}
                  >
                    {/* Upload phot button on cover */}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => fileInput.current.click()}
                    >
                      <PhotoCamera />
                    </Button>

                    <input
                      ref={fileInput}
                      type="file"
                      style={{ display: "none" }}
                    />
                  </div>
                  {/* ----------------------------- White section ------------------------------- */}
                  <div
                    style={{ position: "absolute", top: "130px", left: "16px" }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="images/tutors/tutor-1.jpg"
                      sx={{ width: 150, height: 150, cursor: "pointer" }}
                      onClick={(event) =>
                        handleProfileClick(event, "myprofile")
                      }
                    />
                    <Link to="/profile"></Link>
                  </div>

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
                              defaultValue="Melaka"
                              fullWidth
                            />

                            <TextField
                              id="Last Name"
                              label="Last Name"
                              variant="outlined"
                              defaultValue="Pathiranagama"
                            />
                            <TextField
                              id="Bio"
                              label="Bio"
                              multiline
                              rows={4}
                              defaultValue="Default Value"
                            />
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
                        Melaka Pathiranagama
                      </Box>
                      <Box sx={{ fontSize: "10pt" }}>O/L Qualified</Box>
                      <Box sx={{ fontSize: "10pt" }}>
                        I am an O/L qualified student and currently reading for
                        GCE A/L's.{" "}
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
          ))}
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

                          <form style={{ maxWidth: "100%" }}>
                            
                  
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
