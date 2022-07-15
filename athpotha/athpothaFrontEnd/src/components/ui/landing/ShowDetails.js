import { Card, Link, Rating, StyledEngineProvider, Tab } from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import Profile from "./Profile";
import CenteredBox from "../CenteredBox";
import PropTypes from "prop-types";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#285e89",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const AnyTab = styled(Tab) ({
  opacity: 1,
  "&:hover": {
    opacity: 0.8
  },
  // padding: 0,
  maxWidth: 330,
  // border: 
});

function ShowDetails(props) {
  const Icon = props.item.icon ? props.item.icon : "";
  const EmptyIcon = props.item.emptyIcon ? props.item.emptyIcon : "";
  console.log(props);
  return (
    <AnyTab
      label={
        <Card
          sx={{
            // maxWidth: `${props.item.maxwidth}`,
            bgcolor: `${props.item.bgColor}`,
          }}
        >
          <Profile
            width={props.item.profileWidth}
            height={props.item.profileHeight}
            margin={props.item.profileMargin}
            borderRadius={props.item.profileBorderRadius}
            imagePath={props.item.imagePath}
          />
          <CardContent>
            <Typography
              align={props.item.typographyAlign}
              gutterBottom
              variant="body1"
              component="div"
              fontWeight="semi-bold"
              noWrap
            >
              {props.item.name}
            </Typography>
            <Typography
              align={props.item.typographyAlign}
              gutterBottom
              variant="body2"
              color="text.secondary"
              noWrap
            >
              {props.item.jobRole}
            </Typography>
            <CenteredBox align={props.item.align}>
              <Stack direction="row" spacing={1}>
                <StyledRating
                  value={props.item.value}
                  readOnly
                  icon={<Icon />}
                  emptyIcon={<EmptyIcon />}
                />
                <Typography>
                  <CenteredBox>({props.item.review})</CenteredBox>
                </Typography>
              </Stack>
            </CenteredBox>
            {props.children}
          </CardContent>
        </Card>
      }
    />

    // </StyledEngineProvider>
  );
}

ShowDetails.propTypes = {
  emptyIcon: PropTypes.element,
  icon: PropTypes.element,
};

export default ShowDetails;
