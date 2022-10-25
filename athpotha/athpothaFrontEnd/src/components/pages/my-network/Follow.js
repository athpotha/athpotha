import React, { useEffect, useState } from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import { Global, jsx } from "@emotion/react";
import { Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import CenteredBox from "../../ui/CenteredBox";
import Tabs, { tabsClasses } from '@mui/material/Tabs';

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

    //const selectproducts = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const products = props.students

    const handleProfileClick = (event, param) => {
        navigate('/profile')
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                    // gap: 2,
                    // gridTemplateColumns: 'repeat(3, 1fr)',
                }}>
                    <Tabs
                        // value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        aria-label="visible arrows tabs example"
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                            },
                        }}
                    >

                        {products.map(({ userId, firstName, lastName, studentType, coverPicture, profilePicture }) => (
                            <Grid item xs={4}>
                                <Box sx={{ p: 1, m: 1, }}>
                                    <Card sx={{ width: 220 }}>
                                        <div style={{ position: 'relative' }}>
                                            <CardMedia
                                                component="img"
                                                height="90"
                                                image={coverPicture}
                                                alt="green iguana"
                                            />
                                            <div style={{ position: 'absolute', top: '30px', left: '16px' }}>
                                                <Avatar alt="Remy Sharp" src={profilePicture} sx={{ width: 90, height: 90, cursor: 'pointer' }}
                                                    onClick={event => handleProfileClick(event, 'myprofile')} />
                                                <Link to="/profile"></Link>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '35px', marginLeft: '16px' }}>
                                            <Box>{firstName + " "}{lastName}</Box>
                                            <Box sx={{ fontSize: '10pt' }}>{studentType}</Box>
                                            <Box sx={{ mt: 3, fontSize: '10pt' }}>10 followers</Box>
                                        </div>
                                        <CardActions>
                                            <Button size="small" variant="outlined">Follow</Button>
                                        </CardActions>
                                    </Card>
                                </Box>
                            </Grid>
                        ))
                        }
                    </Tabs>
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


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


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
                    // gap: 2,
                    // gridTemplateColumns: 'repeat(3, 1fr)',
                }}>

                    <Tabs
                        // value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        aria-label="visible arrows tabs example"
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                            },
                        }}
                    >
                        {products.map(({ userId, firstName, lastName, subject, coverPicture, profilePicture }) => (
                            <Grid item xs={4}>
                                <Box sx={{ p: 1, m: 1, }} key={userId}>
                                    <Card sx={{ width: 220 }}>
                                        <div style={{ position: 'relative' }}>
                                            <CardMedia
                                                component="img"
                                                height="90"
                                                image={coverPicture}
                                                alt="green iguana"
                                            />
                                            <div style={{ position: 'absolute', top: '30px', left: '16px' }}>
                                                <Avatar alt="Remy Sharp" src={profilePicture} sx={{ width: 90, height: 90, cursor: 'pointer' }}
                                                    onClick={event => handleProfileClick(event, 'myprofile')} />
                                                <Link to="/profile"></Link>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '35px', marginLeft: '16px' }}>
                                            <Box>{firstName + " "}{lastName}</Box>
                                            <Box sx={{ fontSize: '10pt', mb: "20px" }}>{subject}</Box>
                                            <CenteredBox >
                                                <Stack direction="row" spacing={1}>
                                                    <Rating
                                                        name="half-rating-read"
                                                        value="4.5"
                                                        readOnly
                                                        precision={0.5}
                                                        icon={<StarIcon />}
                                                        emptyIcon={<StarBorderIcon />}
                                                    />
                                                    <div>
                                                        <CenteredBox>4.5</CenteredBox>
                                                    </div>
                                                </Stack>
                                            </CenteredBox>
                                        </div>
                                        <CardActions>
                                            <Button size="small" variant="outlined">Follow</Button>
                                        </CardActions>
                                    </Card>
                                </Box>
                            </Grid>
                        ))
                        }
                    </Tabs>

                </Box>
            </div>

        </StyledEngineProvider>
    );

};



export const FollowUniversity = (props) => {

    const navigate = useNavigate();

    //const selectproducts = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const products = props.Universities

    const handleProfileClick = (event, param) => {
        navigate('/profile')
    };


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [active, setActive] = useState(props.value)
    console.log(active)
    if (active == 1 || active == 3 || active == 5 || active == 7) {

    } else if (active == 0 || active == 2 || active == 4 || active == 6) {

    }

    return (

        <StyledEngineProvider injectFirst>
            <div sx={{ width: '100%' }}>
                <Box sx={{
                    display: 'grid',
                    // gap: 2,
                    // gridTemplateColumns: 'repeat(3, 1fr)',
                }}>
                    <Tabs
                        // value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        aria-label="visible arrows tabs example"
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                            },
                        }}
                    >
                        {products.map(({ userId, faculty, university, uniRate, coverPicture, profilePicture }) => (
                            <Grid item xs={4}>
                                <Box sx={{ p: 1, m: 1, }} key={userId}>
                                    <Card sx={{ width: 220 }}>
                                        <div style={{ position: 'relative' }}>
                                            <CardMedia
                                                component="img"
                                                height="90"
                                                image={coverPicture}
                                                alt="green iguana"
                                            />
                                            <div style={{ position: 'absolute', top: '30px', left: '16px' }}>
                                                <Avatar alt="Remy Sharp" src={profilePicture} sx={{ width: 90, height: 90, cursor: 'pointer' }}
                                                    onClick={event => handleProfileClick(event, 'myprofile')} />
                                                <Link to="/profile"></Link>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '35px', marginLeft: '16px' }}>
                                            <Box sx={{ mb: "5px" }}>{faculty}</Box>
                                            <Box sx={{ mb: "30px" }}>{university}</Box>
                                            <CenteredBox >
                                                <Stack direction="row" spacing={1}>
                                                    <Rating
                                                        name="half-rating-read"
                                                        value={uniRate}
                                                        readOnly
                                                        precision={0.5}
                                                        icon={<StarIcon />}
                                                        emptyIcon={<StarBorderIcon />}
                                                    />
                                                    <div>
                                                        <CenteredBox>{uniRate}</CenteredBox>
                                                    </div>
                                                </Stack>
                                            </CenteredBox>
                                        </div>
                                        <CardActions>
                                            <Button size="small" variant="outlined">Follow</Button>
                                        </CardActions>
                                    </Card>
                                </Box>
                            </Grid>
                        ))
                        }
                    </Tabs>
                </Box>
            </div>

        </StyledEngineProvider>
    );
};



export const FollowCommunity = (props) => {

    const navigate = useNavigate();

    //const selectproducts = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const products = props.communities

    const handleProfileClick = (event, param) => {
        navigate('/profile')
    };


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                    // gap: 2,
                    // gridTemplateColumns: 'repeat(3, 1fr)',
                }}>
                    <Tabs
                        // value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        aria-label="visible arrows tabs example"
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                            },
                        }}
                    >
                        {products.map(({ userId, firstName, lastName, coverPicture, profilePicture }) => (
                            <Grid item xs={4}>
                                <Box sx={{ p: 1, m: 1, }}>
                                    <Card sx={{ width: 220 }}>
                                        <div style={{ position: 'relative' }}>
                                            <CardMedia
                                                component="img"
                                                height="90"
                                                image={coverPicture}
                                                alt="green iguana"
                                            />
                                            <div style={{ position: 'absolute', top: '30px', left: '16px' }}>
                                                <Avatar alt="Remy Sharp" src={profilePicture} sx={{ width: 90, height: 90, cursor: 'pointer' }}
                                                    onClick={event => handleProfileClick(event, 'myprofile')} />
                                                <Link to="/profile"></Link>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '35px', marginLeft: '16px' }}>
                                            <Box>{firstName + " "}{lastName}</Box>
                                            <Box sx={{ fontSize: '10pt' }}>Software Engineer at 99X</Box>
                                            <Box sx={{ mt: 3, fontSize: '10pt' }}>5 followers</Box>
                                        </div>
                                        <CardActions>
                                            <Button size="small" variant="outlined">Follow</Button>
                                        </CardActions>
                                    </Card>
                                </Box>
                            </Grid>
                        ))
                        }
                    </Tabs>
                </Box>
            </div>

        </StyledEngineProvider>

    );
};