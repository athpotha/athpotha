import {
  StyledEngineProvider,
  Grid,
  Paper,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";
import React from "react";
import HomeHeading from "../../ui/landing/HomeHeading";
import HomeTabButtons from "../../ui/landing/HomeTabButtons";
import ShowDetails from "../../ui/landing/ShowDetails";
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
    jobRole: "Chemistry Tutor",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    
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
    jobRole: "Physics Tutor",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    
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
    jobRole: "O/L Maths Tutor",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    
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
    jobRole: "Science Tutor",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    
    bgColor: "background.light",
  },
  {
    id: "t-5",
    profileHeight: "16rem",
    profileWidth: "16rem",
    profileMargin: "20px",
    profileBorderRadius: "50%",
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "center",
    align: "center",
    name: "Mohomad Perera",
    jobRole: "Science Tutor",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    
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
        sx={{
          backgroundColor: "background.light",
          padding: "30px 0",
          width: "1550px",
        }}
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
        <Grid item xs={12}>
          <Tabs
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            sx={{
              maxWidth: { xs: 320, sm: 800, md: 1400 },
            }}
          >
            {tutors.map((tutor) => (
              <ShowDetails key={tutor.id} item={tutor} />
            ))}
          </Tabs>
        </Grid>
        <Grid item container direction="column" spacing={2}>
          <Grid item>
            <HomeHeading
              spacing={1}
              headingColor="secondary.contrastText"
              headingVariant="h4"
              heading="Are You a Tutor? Get Yourself Registerd"
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
