import {
  StyledEngineProvider,
  Grid,
  Paper,
  Stack,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
} from "@mui/material";
import React from "react";
import CenteredBox from "../../ui/CenteredBox";
import HomeHeading from "../../ui/landing/HomeHeading";
import HomeTabButtons from "../../ui/landing/HomeTabButtons";
import ShowDetails from "../../ui/landing/ShowDetails";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Tabs from "@mui/material/Tabs";

const members = [
  {
    id: "c-1",
    profileHeight: "16rem",
    profileWidth: "16rem",
    profileMargin: "20px",
    profileBorderRadius: "50%",
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "center",
    align: "center",
    name: "Mohomad Perera",
    jobRole: "Full Stack Developer",
    icon: FavoriteIcon,
    emptyIcon: FavoriteBorderIcon,
    value: 5,
    review: 2400,
    
    bgColor: "background.light",
  },
  {
    id: "c-2",
    profileHeight: "16rem",
    profileWidth: "16rem",
    profileMargin: "20px",
    profileBorderRadius: "50%",
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "center",
    align: "center",
    name: "Mohomad Perera",
    jobRole: "Full Stack Developer",
    icon: FavoriteIcon,
    emptyIcon: FavoriteBorderIcon,
    value: 5,
    review: 2400,
    
    bgColor: "background.light",
  },
  {
    id: "c-3",
    profileHeight: "16rem",
    profileWidth: "16rem",
    profileMargin: "20px",
    profileBorderRadius: "50%",
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "center",
    align: "center",
    name: "Mohomad Perera",
    jobRole: "Full Stack Developer",
    icon: FavoriteIcon,
    emptyIcon: FavoriteBorderIcon,
    value: 5,
    review: 2400,
    
    bgColor: "background.light",
  },
  {
    id: "c-4",
    profileHeight: "16rem",
    profileWidth: "16rem",
    profileMargin: "20px",
    profileBorderRadius: "50%",
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "center",
    align: "center",
    name: "Mohomad Perera",
    jobRole: "Full Stack Developer",
    icon: FavoriteIcon,
    emptyIcon: FavoriteBorderIcon,
    value: 5,
    review: 2400,
    
    bgColor: "background.light",
  },

  {
    id: "c-5",
    profileHeight: "16rem",
    profileWidth: "16rem",
    profileMargin: "20px",
    profileBorderRadius: "50%",
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "center",
    align: "center",
    name: "Mohomad Perera",
    jobRole: "Full Stack Developer",
    icon: FavoriteIcon,
    emptyIcon: FavoriteBorderIcon,
    value: 5,
    review: 2400,
    
    bgColor: "background.light",
  },
  {
    id: "c-6",
    profileHeight: "16rem",
    profileWidth: "16rem",
    profileMargin: "20px",
    profileBorderRadius: "50%",
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "center",
    align: "center",
    name: "Mohomad Perera",
    jobRole: "Full Stack Developer",
    icon: FavoriteIcon,
    emptyIcon: FavoriteBorderIcon,
    value: 5,
    review: 2400,
    
    bgColor: "background.light",
  },
];

function CommiunityExperts() {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };
  return (
    <StyledEngineProvider injectFirst>
      <Grid
        direction="column"
        container
        spacing={8}
        alignSelf="center"
        sx={{
          backgroundColor: "background",
          padding: "30px 0",
          maxWidth: { xs: 500, sm: 800, md: 1200, lg: 1550 },
        }}
      >
        <Grid item xs={12}>
          <HomeHeading
            spacing={1}
            headingColor="primary.darker"
            headingVariant="h3"
            heading="Commiunity Experts"
            subtitleColor="secondary.contrastText"
            subtitleVariant="h5"
            subtitle="Athpotha  envisions to deliver long lasting guidance for the high schoolers by creating a network of interrelated personnels"
          />
        </Grid>
        <Grid item xs={12}>
          <Tabs
            value={false}
            // onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            sx={{
              maxWidth: { xs: 320, sm: 620, md: 1030, lg: 1400 },
            }}
          >
            {members.map((member) => (
              <ShowDetails key={member.id} item={member}>
                <CenteredBox align="center">
                  <Stack direction="row" spacing={0}>
                    <FacebookIcon sx={{ fontSize: 50 }} />
                    <InstagramIcon sx={{ fontSize: 50 }} />
                    <LinkedInIcon sx={{ fontSize: 50 }} />
                  </Stack>
                </CenteredBox>
              </ShowDetails>
            ))}
          </Tabs>
        </Grid>
        <Grid item container direction="column" spacing={2}>
          <Grid item>
            <HomeHeading
              spacing={1}
              headingColor="secondary.contrastText"
              headingVariant="h4"
              heading="Want to be a Part of AthPotha Commiunity?"
              subtitleColor="secondary.contrastText"
              subtitleVariant="h6"
              subtitle="Join our community to offer your support to deliver the best career guidance for the high schoolers"
            />
          </Grid>
          <Grid item alignSelf="center">
            <HomeTabButtons userType="commiunity" />
          </Grid>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
}

export default CommiunityExperts;
