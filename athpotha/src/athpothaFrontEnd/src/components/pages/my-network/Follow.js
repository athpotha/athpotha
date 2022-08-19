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

  export const FollowStudent = (props) => {

    const navigate = useNavigate();

    const selectproducts = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const products = []
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
                    {products.map(product => (
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
                                    <Box>Ashani Imalsha</Box>
                                    <Box sx={{ fontSize: '10pt' }}>Software Engineer at 99X</Box>
                                    <Box sx={{ mt: 3, fontSize: '10pt' }}>1,100 followers</Box>
                                </div>
                                <CardActions>
                                    <Button size="small" variant="outlined">Follow</Button>
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


export const FollowTeacher = (props) => {

    const navigate = useNavigate();

    const products = props.tutors

    const handleProfileClick = (event, param) => {
        navigate('/profile')
    };

    console.log(products[0])
    
    const [active, setActive] = useState(props.value)
    console.log(active)
    if (active === 1 || active === 3 || active === 5 || active === 7) {
        //products.push(productslist[1])
    } else if (active === 0 || active === 2 || active === 4 || active === 6) {
        //productslist = products
    }


    return (
        <StyledEngineProvider injectFirst>
            <div sx={{ width: '100%' }}>
                <Box sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                }}>
                    {products.map(({user_id,first_name, last_name,subject}) => (
                        <Box sx={{ p: 1, m: 1, }} key={user_id}>
                            <Card sx={{ maxWidth: 320 }}>
                                <div style={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="90"
                                        image="images/tutors/tutor-1.jpg"
                                        alt="green iguana"
                                    />
                                    <div style={{ position: 'absolute', top: '30px', left: '16px' }}>
                                        <Avatar alt="Remy Sharp" src="image3.jpg" sx={{ width: 90, height: 90, cursor: 'pointer' }}
                                            onClick={event => handleProfileClick(event, 'myprofile')} />
                                        <Link to="/profile"></Link>
                                    </div>
                                </div>
                                <div style={{ marginTop: '35px', marginLeft: '16px' }}>
                                    <Box>{first_name + " "}{last_name}</Box>
                                    <Box sx={{ fontSize: '10pt' , mb:"20px"}}>{subject}</Box>
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
                                    <Button size="small" variant="outlined">Follow</Button>
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

export const FollowUniversity = (props) => {

    const navigate = useNavigate();

    const selectproducts = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const products = []
    const handleProfileClick = (event, param) => {
        navigate('/profile')
    };

    const [active, setActive] = useState(props.value)
    console.log(active)
    if (active == 1 || active == 3 || active == 5 || active == 7) {
        products.push(selectproducts[0])
        products.push(selectproducts[1])
        products.push(selectproducts[2])
        products.push(selectproducts[3])
        products.push(selectproducts[4])
        products.push(selectproducts[5])
    } else if (active == 0 || active == 2 || active == 4 || active == 6) {
        for (var i of selectproducts)
            products.push(selectproducts[i])
    }

    return (
        <StyledEngineProvider injectFirst>
            <div sx={{ width: '100%' }}>
                <Box sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                }}>
                    {products.map(product => (
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
                                        <Avatar alt="Remy Sharp" src="image3.jpg" sx={{ width: 90, height: 90, cursor: 'pointer' }}
                                            onClick={event => handleProfileClick(event, 'myprofile')} />
                                        <Link to="/profile"></Link>
                                    </div>
                                </div>
                                <div style={{ marginTop: '35px', marginLeft: '16px' }}>
                                    <Box sx={{mb:"30px"}}>BIT University of Colombo</Box>
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
                                    <Button size="small" variant="outlined">Follow</Button>
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