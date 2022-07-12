import { StyledEngineProvider, Grid, Paper, Stack } from "@mui/material";
import React from "react";
import CenteredBox from "./CenteredBox";
import HomeHeading from "./HomeHeading";
import HomeTabButtons from "./HomeTabButtons";
import ShowDetails from "./ShowDetails";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
    maxwidth: 400,
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
    maxwidth: 400,
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
    maxwidth: 400,
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
    maxwidth: 400,
    bgColor: "background.light",
  },
];

function CommiunityExperts() {
  return (
    <StyledEngineProvider injectFirst>
      <Grid
        xs={12}
        direction="column"
        container
        spacing={8}
        alignSelf="center"
        sx={{ backgroundColor: "background", padding: "30px 0" }}
      >
        <Grid item xs={12}>
          <HomeHeading
            spacing={1}
            headingColor="primary.darker"
            headingVariant="h3"
            heading="Commiunity Expers"
            subtitleColor="secondary.contrastText"
            subtitleVariant="h5"
            subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit. consectetur adipiscing elit"
          />
        </Grid>
        <Grid item>
          <Grid container xs={12} spacing={5}>
            {members.map((member) => (
              <Grid item xs={12} sm={6} md={3}>
                <ShowDetails key={member.id} item={member}>
                  <CenteredBox align="center">
                    <Stack direction="row" spacing={0}>
                      <FacebookIcon sx={{ fontSize: 50 }} />
                      <InstagramIcon sx={{ fontSize: 50 }} />
                      <LinkedInIcon sx={{ fontSize: 50 }} />
                    </Stack>
                  </CenteredBox>
                </ShowDetails>
              </Grid>
            ))}
          </Grid>
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
              subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit. consectetur adipiscing elit"
            />
          </Grid>
          <Grid item alignSelf="center">
            <HomeTabButtons />
          </Grid>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
}

export default CommiunityExperts;
