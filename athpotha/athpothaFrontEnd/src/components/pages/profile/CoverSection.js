import { Grid, StyledEngineProvider } from "@mui/material";
import React from "react";
import { Box, Container } from "@mui/system";
import {useNavigate} from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function CoverSection(props) {

    const navigate = useNavigate();

    const products = ['1'];

    const handleProfileClick = (event, param) => {
        navigate('/profile')
    };
    
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
                    style={{ position: "absolute", top: "30px", right: "16px" }}
                  >
                    <Button>
                    <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </IconButton>
                  </Button>
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
                <div style={{ marginTop: "90px", marginLeft: "16px" }}>
                  <Box>Ashani Imalsha</Box>
                  <Box sx={{ fontSize: "10pt" }}>Software Engineer at 99X</Box>

                  {/* <Box sx={{mt:3,fontSize:'10pt'}}>1,100 followers</Box> */}
                </div>
                
              </Card>
            </Box>
          ))}
        </Box>
      </div>
    </StyledEngineProvider>
  );
}

export default CoverSection;
