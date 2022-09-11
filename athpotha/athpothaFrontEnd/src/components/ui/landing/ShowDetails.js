import { Card, Rating, Tab } from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Profile from "./Profile";
import CenteredBox from "../CenteredBox";
import PropTypes from "prop-types";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled" : {
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
  maxWidth: 330,
});

function ShowDetails(props) {
  const Icon = props.item.icon ? props.item.icon : "";
  const EmptyIcon = props.item.emptyIcon ? props.item.emptyIcon : "";
  return (
    <AnyTab
      icon={
        <Card
          sx={{
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
                <div>
                  <CenteredBox>({props.item.review})</CenteredBox>
                </div>
              </Stack>
            </CenteredBox>
            {props.children}
          </CardContent>
        </Card>
      }
    />
  );
}

ShowDetails.propTypes = {
  emptyIcon: PropTypes.element,
  icon: PropTypes.element,
};

export default ShowDetails;
