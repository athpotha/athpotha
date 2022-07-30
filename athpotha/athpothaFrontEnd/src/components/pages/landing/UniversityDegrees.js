import React from "react";
import Grid from "@mui/material/Grid";
import HomeHeading from "../../ui/landing/HomeHeading";
import HomeTabButtons from "../../ui/landing/HomeTabButtons";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShowDetails from "../../ui/landing/ShowDetails";
import { Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";

const universities = [
  {
    id: "u-1",
    profileHeight: "16rem",
    profileWidth: "100%",
    profileMargin: "0px",
    profileBorderRadius: 0,
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "left",
    name: "BIT University of Colombo",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,

    bgColor: "background.light",
  },
  {
    id: "u-2",
    profileHeight: "16rem",
    profileWidth: "100%",
    profileMargin: "0px",
    profileBorderRadius: 0,
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "left",
    name: "BIT University of Colombo",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,

    bgColor: "background.light",
  },
  {
    id: "u-3",
    profileHeight: "16rem",
    profileWidth: "100%",
    profileMargin: "0px",
    profileBorderRadius: 0,
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "left",
    name: "BIT University of Colombo",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,

    bgColor: "background.light",
  },
  {
    id: "u-4",
    profileHeight: "16rem",
    profileWidth: "100%",
    profileMargin: "0px",
    profileBorderRadius: 0,
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "left",
    name: "BIT University of Colombo",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,

    bgColor: "background.light",
  },
  {
    id: "u-5",
    profileHeight: "16rem",
    profileWidth: "100%",
    profileMargin: "0px",
    profileBorderRadius: 0,
    imagePath: "images/tutors/tutor-1.jpg",
    typographyAlign: "left",
    name: "BIT University of Colombo",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,

    bgColor: "background.light",
  },
];

const AnyTab = styled(Tab)({
  "&:hover": {
    opacity: 0.8,
  },
});

function UniversityDegrees() {
  return (
    <Grid
      container
      direction="column"
      spacing={8}
      sx={{
        bgcolor: "background.light",
        padding: "30px 0",
        maxWidth: { xs: 500, sm: 800, md: 1200, lg: 1550 },
      }}
      alignSelf="center"
    >
      <Grid item>
        <HomeHeading
          spacing={1}
          headingColor="primary.darker"
          headingVariant="h3"
          heading="Private & Government Universities"
          subtitleColor="secondary.contrastText"
          subtitleVariant="h5"
          subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit. consectetur adipiscing elit"
        />
      </Grid>
      <Grid item xs={12}>
        <Tabs
          value={false}
          // onChange={handleChange}
          variant="scrollable"
          // scrollButtons
          // allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{
            maxWidth: { xs: 320, sm: 620, md: 1030, lg: 1400 },
          }}
        >
          {universities.map((university) => (
            <ShowDetails key={university.id} item={university} />
          ))}
        </Tabs>
      </Grid>
      <Grid item container direction="column" spacing={2}>
        <Grid item>
          <HomeHeading
            spacing={1}
            headingColor="secondary.contrastText"
            headingVariant="h4"
            heading="Be an Athpotha University Representative"
            subtitleColor="secondary.contrastText"
            subtitleVariant="h6"
            subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit. consectetur adipiscing elit"
          />
        </Grid>
        <Grid item alignSelf="center">
          <HomeTabButtons userType="university" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UniversityDegrees;
