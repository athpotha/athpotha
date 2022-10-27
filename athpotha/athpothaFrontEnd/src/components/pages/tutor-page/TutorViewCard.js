import React, { useEffect, useState } from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CenteredBox from "../../ui/CenteredBox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
        color: "#285e89",
    },
    "& .MuiRating-iconHover": {
        color: "#ff3d47",
    },
});

function TutorViewCard(props) {

    const navigate = useNavigate();

    function navigateuniprofile(tid){
        navigate('/profile/'+ tid);
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tutors = props.tutor

    return (
        <StyledEngineProvider injectFirst>

            <div sx={{ width: '100%' }}>

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
                    {
                        tutors.map((tutor) => {
                            if (props.filtern == null) {
                                return (
                                    <Grid item xs={4}>
                                        <Box sx={{ p: 2, m: 1, }} >
                                            <Card sx={{ width: 220 }}>
                                                <div style={{ position: 'relative' }}>
                                                    <CardMedia
                                                        component="img"
                                                        height="90"
                                                        image={tutor.coverPicture}
                                                        alt="green iguana"
                                                    />
                                                    <div style={{ position: 'absolute', top: '30px', left: '16px' }}>
                                                        <Avatar alt="Remy Sharp" src={tutor.profilePicture} sx={{ width: 90, height: 90 }} />
                                                    </div>
                                                </div>
                                                <div style={{ marginTop: '35px', marginLeft: '16px' }}>
                                                    <Box sx={{ mb: "px" }}>{tutor.firstName+" "+tutor.lastName}</Box>
                                                    <Box sx={{ mb: "30px" }}>{tutor.subject ? tutor.subject : "-"}</Box>
                                                    <CenteredBox >
                                                        <Stack direction="row" spacing={1}>
                                                            <StyledRating
                                                                value={tutor.rate}
                                                                readOnly
                                                                icon={<StarIcon />}
                                                                emptyIcon={<StarBorderIcon />}
                                                            />
                                                            <div>
                                                                <CenteredBox>{tutor.rate}</CenteredBox>
                                                            </div>
                                                        </Stack>
                                                    </CenteredBox>
                                                </div>
                                                <CardActions>
                                                    <Button size="small" variant="outlined" onClick={() => navigateuniprofile(tutor.userId)}>View</Button>
                                                </CardActions>
                                            </Card>
                                        </Box>
                                    </Grid>
                                );
                            }
                            else if (props.filtern == tutor.subject) {
                                return (
                                    <Grid item xs={4}>
                                        <Box sx={{ p: 1, m: 1, }} >
                                            <Card sx={{ width: 220}}>
                                                <div style={{ position: 'relative' }}>
                                                    <CardMedia
                                                        component="img"
                                                        height="90"
                                                        image={tutor.coverPicture}
                                                        alt="green iguana"
                                                    />
                                                    <div style={{ position: 'absolute', top: '30px', left: '16px' }}>
                                                        <Avatar alt="Remy Sharp" src={tutor.profilePicture} sx={{ width: 90, height: 90 }} />
                                                    </div>
                                                </div>
                                                <div style={{ marginTop: '35px', marginLeft: '16px' }}>
                                                    <Box sx={{ mb: "px" }}>{tutor.firstName+" "+tutor.lastName}</Box>
                                                    <Box sx={{ mb: "30px" }}>{tutor.subject}</Box>
                                                    <CenteredBox >
                                                        <Stack direction="row" spacing={1}>
                                                            <StyledRating
                                                                value={tutor.rate}
                                                                readOnly
                                                                icon={<StarIcon />}
                                                                emptyIcon={<StarBorderIcon />}
                                                            />
                                                            <div>
                                                                <CenteredBox>{tutor.rate}</CenteredBox>
                                                            </div>
                                                        </Stack>
                                                    </CenteredBox>
                                                </div>
                                                <CardActions>
                                                    <Button size="small" variant="outlined" onClick={navigateuniprofile}>View</Button>
                                                </CardActions>
                                            </Card>
                                        </Box>
                                    </Grid>
                                );
                            }
                        })

                    }

                </Tabs>

            </div>

        </StyledEngineProvider>
    );
}

export default TutorViewCard;