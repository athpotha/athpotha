import { Grid, StyledEngineProvider } from "@mui/material";
import React from "react";
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

import DeleteIcon from "@mui/icons-material/Delete";
function CoverSection(props) {
  const navigate = useNavigate();

  const products = ["1"];

  const handleProfileClick = (event, param) => {
    navigate("/profile");
  };
  const fileInput = React.useRef();
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
                </div>
                <Grid container>
                  <Grid item xs={10}>
                    <div style={{ marginTop: "90px", marginLeft: "16px", paddingBottom: "20px" }}>
                      <Box sx={{ fontWeight: "bold" }}>
                        Melaka Pathiranagama
                      </Box>
                      <Box sx={{ fontSize: "10pt" }}>O/L Qualified</Box>

                      {/* <Box sx={{mt:3,fontSize:'10pt'}}>1,100 followers</Box> */}
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      // style={{ marginTop: "90px"}}
                      variant="text"
                      startIcon={<BorderColorIcon />}
                    >
                      Edit Info
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          ))}
        </Box>
      </div>
    </StyledEngineProvider>
  );
}

export default CoverSection;
