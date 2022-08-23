import React, { useEffect, useState } from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import { Global, jsx } from "@emotion/react";
import { Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { styled } from "@mui/material/styles";
import { Rating} from "@mui/material";
import CenteredBox from "../../ui/CenteredBox";

const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#285e89",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  export const ConnectionStudent = (props) => {

    const navigate = useNavigate();

    //const selectproducts = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const products = props.students

    const handleProfileClick = (event, param) => {
        navigate('/profile')
    };


    const [active, setActive] = useState(props.value)
    console.log(active)
    if (active === 1 || active === 3 || active === 5 || active === 7) {
        
    } else if (active == 0 || active == 2 || active == 4 || active == 6) {
        
    }

    return (
        <StyledEngineProvider injectFirst>
            <div sx={{ width: '100%' }}>
                <Box sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                }}>
                    {products.map(({user_id,first_name, last_name,studentType}) => (
                        <Box sx={{ p: 1, m: 1, }}>
                            <Card sx={{ maxWidth: 320 }}>
                                <div style={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="90"
                                        image="images/tutors/tutor-1.jpg"
                                        alt="green iguana"
                                    />
                                    <div style={{ position: 'absolute', top: '30px', left: '16px' }}>
                                        <Avatar alt="Remy Sharp" src="images/tutors/tutor-2.png" sx={{ width: 90, height: 90, cursor: 'pointer' }}
                                            onClick={event => handleProfileClick(event, 'myprofile')} />
                                        <Link to="/profile"></Link>
                                    </div>
                                </div>
                                <div style={{ marginTop: '35px', marginLeft: '16px' }}>
                                    <Box>{first_name + " "}{last_name}</Box>
                                    <Box sx={{ fontSize: '10pt' }}>{studentType}</Box>
                                    <Box sx={{ mt: 3, fontSize: '10pt' }}>1,100 followers</Box>
                                </div>
                                <CardActions>
                                    <Button size="small" variant="outlined">Connection</Button>
                                </CardActions>
                            </Card>
                        </Box>
                    ))
                    }

                </Box>
            </div>
        </StyledEngineProvider>
    );
};