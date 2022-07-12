import React from "react";
import Grid from "@mui/material/Grid";
import HomeHeading from "./HomeHeading";
import HomeTabButtons from "./HomeTabButtons";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShowDetails from "./ShowDetails";


const universities = [
  {
    id: "u-1",
    profileHeight: "16rem",
    profileWidth: "100%",
    profileMargin: "0px",
    profileBorderRadius: 0,
    imagePath: "images/tutors/tutor-1.jpg",
    name: "BIT University of Colombo",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    maxwidth: 450,
    bgColor: "background.light",
  },
  {
    id: "u-2",
    profileHeight: "16rem",
    profileWidth: "100%",
    profileMargin: "0px",
    profileBorderRadius: 0,
    imagePath: "images/tutors/tutor-1.jpg",
    name: "BIT University of Colombo",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    maxwidth: 450,
    bgColor: "background.light",
  },
  {
    id: "u-3",
    profileHeight: "16rem",
    profileWidth: "100%",
    profileMargin: "0px",
    profileBorderRadius: 0,
    imagePath: "images/tutors/tutor-1.jpg",
    name: "BIT University of Colombo",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    maxwidth: 450,
    bgColor: "background.light",
  },
  {
    id: "u-4",
    profileHeight: "16rem",
    profileWidth: "100%",
    profileMargin: "0px",
    profileBorderRadius: 0,
    imagePath: "images/tutors/tutor-1.jpg",
    name: "BIT University of Colombo",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    maxwidth: 450,
    bgColor: "background.light",
  },
  {
    id: "u-5",
    profileHeight: "16rem",
    profileWidth: "100%",
    profileMargin: "0px",
    profileBorderRadius: 0,
    imagePath: "images/tutors/tutor-1.jpg",
    name: "BIT University of Colombo",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    maxwidth: 450,
    bgColor: "background.light",
  },
  {
    id: "u-6",
    profileHeight: "16rem",
    profileWidth: "100%",
    profileMargin: "0px",
    profileBorderRadius: 0,
    imagePath: "images/tutors/tutor-1.jpg",
    name: "BIT University of Colombo",
    icon: StarIcon,
    emptyIcon: StarBorderIcon,
    value: 5,
    review: 2400,
    maxwidth: 450,
    bgColor: "background.light",
  },
];

function UniversityDegrees() {
  return (
    <Grid
      container
      xs={12}
      direction="column"
      spacing={8}
      sx={{ bgcolor: "background.light", padding: "30px 0" }}
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
      <Grid item container xs={12} spacing={3}>
        {universities.map((university) => (
          <Grid item xs={12} sm={6} md={4}>
            <ShowDetails key={university.id} item={university} />
          </Grid>
        ))}
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
          <HomeTabButtons />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UniversityDegrees;
