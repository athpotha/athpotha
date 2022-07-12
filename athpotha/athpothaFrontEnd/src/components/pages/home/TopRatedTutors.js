import { StyledEngineProvider, Grid, Paper, Stack } from "@mui/material";
import React from "react";
import HomeHeading from "./HomeHeading";
import HomeTabButtons from "./HomeTabButtons";
import ShowDetails from "./ShowDetails";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const tutors = [
  {
    id: "t-1",
    profileHeight: "16rem",
    profileWidth: "16rem",
    profileMargin: "20px",
    profileBorderRadius: "50%",
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "center",
    align: "center",
    name: "Mohomad Perera",
    jobRole: "Teacher",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    maxwidth: 400,
    bgColor: "background.light",
  },
  {
    id: "t-2",
    profileHeight: "16rem",
    profileWidth: "16rem",
    profileMargin: "20px",
    profileBorderRadius: "50%",
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "center",
    align: "center",
    name: "Mohomad Perera",
    jobRole: "Teacher",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    maxwidth: 400,
    bgColor: "background.light",
  },
  {
    id: "t-3",
    profileHeight: "16rem",
    profileWidth: "16rem",
    profileMargin: "20px",
    profileBorderRadius: "50%",
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "center",
    align: "center",
    name: "Mohomad Perera",
    jobRole: "Teacher",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    maxwidth: 400,
    bgColor: "background.light",
  },
  {
    id: "t-4",
    profileHeight: "16rem",
    profileWidth: "16rem",
    profileMargin: "20px",
    profileBorderRadius: "50%",
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "center",
    align: "center",
    name: "Mohomad Perera",
    jobRole: "Teacher",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    maxwidth: 400,
    bgColor: "background.light",
  },
];

function TopRatedTutors() {
  return (
    <StyledEngineProvider injectFirst>
      <Grid
        xs={12}
        direction="column"
        container
        spacing={8}
        alignSelf="center"
        sx={{ backgroundColor: "background.light", padding: "30px 0" }}
      >
        <Grid item xs={12}>
          <HomeHeading
            spacing={1}
            headingColor="primary.darker"
            headingVariant="h3"
            heading="Top Rated Tutors"
            subtitleColor="secondary.contrastText"
            subtitleVariant="h5"
            subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit. consectetur adipiscing elit"
          />
        </Grid>
        <Grid item>
          <Grid container xs={12} spacing={5}>
            {tutors.map((tutor) => (
              <Grid item xs={12} sm={6} md={3}>
                <ShowDetails key={tutor.id} item={tutor} />
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
              heading="Are You a Teacher? Get Yourself Registerd"
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

export default TopRatedTutors;
