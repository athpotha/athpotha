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
import styled from "@emotion/styled";
import ViewImage from "./ViewImage";

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
                image="/images/profile/cover.jpg"
              />

              <div
                style={{ position: "absolute", top: "20px", right: "16px" }}
              >
                <ViewImage tabValue={1}>
                  <IconButton>
                    <PhotoCamera />
                  </IconButton>
                </ViewImage>

              </div>
              {/* ----------------------------- White section ------------------------------- */}
              <ViewImage tabValue={0}>
                <IconButton
                  style={{ position: "absolute", top: "130px", left: "16px" }}
                >
                  <ProfileAvatar
                    src="/images/tutors/tutor-1.jpg"
                  />
                </IconButton>
              </ViewImage>
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
                    Kumud Perera
                  </Box>
                  <Box sx={{ fontSize: "10pt" }}>O/L Qualified</Box>
                  <Box sx={{ fontSize: "10pt" }}>
                    I am an O/L qualified student and currently reading for
                    GCE A/L's.{" "}
                  </Box>

                </div>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
    </div>
  );
}

export default CoverSection;
