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

function CourseViewCard(props) {

    const navigate = useNavigate();

    // const navigateuniprofile = (uniid,cid) => {
    //     navigate('/profile/'+ uniid, {cid: cid});
    //     alert(cid)
    // };

    function navigateuniprofile(uniid, cid) {
        navigate('/profile/' + uniid);
        localStorage.setItem("UNI_ID", uniid)

    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const unicourses = props.course

    //console.log(unicourses);

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
                    {unicourses.map((university) => {
                        return (
                            university.coureselist.map((course) => {
                                if (props.filtern == null) {
                                    return (
                                        <Grid item xs={4}>
                                            <Box sx={{ p: 2, m: 1, }} >
                                                <Card sx={{ width: 220 }}>
                                                    <div style={{ position: 'relative' }}>
                                                        <CardMedia
                                                            component="img"
                                                            height="90"
                                                            image={university.coverPicture}
                                                            alt="green iguana"
                                                        />
                                                        <div style={{ position: 'absolute', top: '30px', left: '16px' }}>
                                                            <Avatar alt="Remy Sharp" src={university.profilePicture} sx={{ width: 90, height: 90 }} />
                                                        </div>
                                                    </div>
                                                    <div style={{ marginTop: '35px', marginLeft: '12px' }}>
                                                        <Box sx={{ mb: "5px" }}>{university.university}</Box>
                                                        <Box sx={{ width: "100%", height: 50, fontSize: "10pt" }}>{course.courseName}</Box>
                                                        <CenteredBox >
                                                            <Stack direction="row" spacing={1}>
                                                                <Stack direction="row" spacing={1}>
                                                                    <Rating
                                                                        name="half-rating-read"
                                                                        value={university.uniRate}
                                                                        readOnly
                                                                        precision={0.5}
                                                                        icon={<StarIcon />}
                                                                        emptyIcon={<StarBorderIcon />}
                                                                    />
                                                                    <div>
                                                                        <CenteredBox>{university.uniRate}</CenteredBox>
                                                                    </div>
                                                                </Stack>
                                                            </Stack>
                                                        </CenteredBox>
                                                    </div>
                                                    <CardActions>
                                                        <Button size="small" variant="outlined" onClick={() => navigateuniprofile(university.userId, course.id)}>View</Button>
                                                    </CardActions>
                                                </Card>
                                            </Box>
                                        </Grid>
                                    );
                                }
                                else if (props.filtern == university.faculty || props.filtern == course.courseName) {
                                    return (
                                        <Grid item xs={4}>
                                            <Box sx={{ p: 1, m: 1, }} >
                                                <Card sx={{ width: 220 }}>
                                                    <div style={{ position: 'relative' }}>
                                                        <CardMedia
                                                            component="img"
                                                            height="90"
                                                            image={university.coverPicture}
                                                            alt="green iguana"
                                                        />
                                                        <div style={{ position: 'absolute', top: '30px', left: '16px' }}>
                                                            <Avatar alt="Remy Sharp" src={university.profilePicture} sx={{ width: 90, height: 90 }} />
                                                        </div>
                                                    </div>
                                                    <div style={{ marginTop: '35px', marginLeft: '16px' }}>
                                                        <Box sx={{ mb: "px" }}>{university.university}</Box>
                                                        <Box sx={{ mb: "30px" }}>{course.courseName}</Box>
                                                        <CenteredBox >
                                                            <Stack direction="row" spacing={1}>
                                                                <StyledRating
                                                                    value={university.uniRate}
                                                                    readOnly
                                                                    icon={<StarIcon />}
                                                                    emptyIcon={<StarBorderIcon />}
                                                                />
                                                                <div>
                                                                    <CenteredBox>{university.uniRate}</CenteredBox>
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
                        );

                    })}

                </Tabs>

            </div>

        </StyledEngineProvider>
    );
}

export default CourseViewCard;