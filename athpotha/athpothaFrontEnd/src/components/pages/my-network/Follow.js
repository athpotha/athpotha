import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

function Follow() {

    const navigate = useNavigate();

    const products = ['1', '2', '3', '4', '5', '6'];

    const handleProfileClick = (event, param) => {
        navigate('/profile')
    };
    

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
                                    <Box>Ashani Imalsha</Box>
                                    <Box sx={{fontSize:'10pt'}}>Software Engineer at 99X</Box>
                                    <Box sx={{mt:3,fontSize:'10pt'}}>1,100 followers</Box>
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
}

export default Follow;