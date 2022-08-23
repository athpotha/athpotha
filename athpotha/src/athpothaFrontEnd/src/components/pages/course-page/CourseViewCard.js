import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CenteredBox from "../../ui/CenteredBox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { styled } from "@mui/material/styles";
import { Rating} from "@mui/material";

const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#285e89",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

function CourseViewCard(props) {

    const navigate = useNavigate();
    const navigateuniprofile = () => {
        navigate('/uni-profile');
      };

    const products = props.uni;


    return (
        <StyledEngineProvider injectFirst>
            <div sx={{ width: '100%' }}>
                <Box sx={{
                    display: 'grid',
                    gap: 3,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                }}>
                    {products.map(({user_id,faculty, university}) => (
                        <Box sx={{ p: 1, m: 1, }} key={user_id}>
                            <Card sx={{ maxWidth: 330, p:2 }}>
                                <div style={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="90"
                                        image="images/tutors/tutor-1.jpg"
                                        alt="green iguana"
                                    />
                                    <div style={{ position: 'absolute', top: '30px', left: '16px' }}>
                                        <Avatar alt="Remy Sharp" src="image3.jpg" sx={{ width: 90, height: 90}} />
                                    </div>
                                </div>
                                <div style={{ marginTop: '35px', marginLeft: '16px' }}>
                                    <Box sx={{ mb: "px" }}>{university}</Box>
                                    <Box sx={{ mb: "30px" }}>{faculty}</Box>
                                    <CenteredBox >
                                        <Stack direction="row" spacing={1}>
                                            <StyledRating
                                                value="5"
                                                readOnly
                                                icon={<StarIcon />}
                                                emptyIcon={<StarBorderIcon />}
                                            />
                                            <div>
                                                <CenteredBox>(2400)</CenteredBox>
                                            </div>
                                        </Stack>
                                    </CenteredBox>
                                </div>
                                <CardActions>
                                    <Button size="small" variant="outlined" onClick={navigateuniprofile}>View</Button>
                                </CardActions>
                            </Card>
                        </Box>
                    ))
                    }

                </Box>
            </div>
        </StyledEngineProvider>
    );
}

export default CourseViewCard;