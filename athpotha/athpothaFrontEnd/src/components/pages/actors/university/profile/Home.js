import { Button, Grid, StyledEngineProvider, TextField } from "@mui/material";
import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { height } from "@mui/system";
import Swal from "sweetalert2";
import { useState } from "react";
import { fetchUserData } from "../../../../../api/authenticationService";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const coursestyle = {
    fontWeight: "normal",
    color: "grey.600",
    mb: 2,
    ml: "20px",
};

const stylebox1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "600px",
    bgcolor: 'background.paper',
    borderRadius: '7px',
    boxShadow: 35,
    p: 4,
    width: "800px",
}

const coursefield = {
    innerHeight: "100px",
    fontWeight: "normal",
    color: "grey.600",
    mb: 2,
    mt: 4,
    width: "650px",
}

const textfield = {
    innerHeight: "100px",
    fontWeight: "normal",
    color: "grey.600",
    mb: 2,
    mt: 4,
    width: "500px",
}

function replaceCommaLine(data) {
    const Requirements = data.split('/')
    return Requirements;
}

function Home(props) {

    //alert for update and save data button

    const showAlert = () => {
        Swal.fire({
            title: "Success",
            text: "Alert successful",
            icon: "success",
            confirmButtonText: "OK",
        }).then((result) => {
            if (result.isConfirmed) {
                //window.location.reload();
            }
        });
    }

    //set course id to variable

    const [cid, setCid] = React.useState('');

    const [req, setReq] = React.useState('');
    const [des, setDes] = React.useState('');
    const [opp, setOpp] = React.useState('');


    const handleChange = (event) => {
        setCid(event.target.value);
        props.homedata.map(({ id, courseName, preRequirements, courseDescription, carrerOpertunities }) => {
            if (id == event.target.value) {
                setReq(preRequirements)
                setDes(courseDescription)
                setOpp(carrerOpertunities)
            }
        })

    };


    const [openReq, setOpenReq] = React.useState(false);
    const handleOpenReq = data => () => {
        setOpenReq(true);
        setReq(data);
    }
    const handleCloseReq = () => setOpenReq(false);

    const [openDes, setOpenDes] = React.useState(false);
    const handleOpenDes = data => () => {
        setOpenDes(true);
        setDes(data);
    }
    const handleCloseDes = () => setOpenDes(false);

    const [openOpp, setOpenOpp] = React.useState(false);
    const handleOpenOpp = data => () => {
        setOpenOpp(true);
        setOpp(data);
    }
    const handleCloseOpp = () => setOpenOpp(false);

    //update course requirements

    const onSubmitReq = (e) => {
        e.preventDefault()
        const data = {
            url: `university/updateCourseReq/${cid}`,
            method: "put",
            data: {
                preRequirements: req
            },
        };
        fetchUserData(data)
            .then((response) => {

                console.log(response.data);
                handleCloseReq();
                showAlert();

            })
            .catch((e) => {
                console.log(e);
            });
    }

    const onSubmitDec = (e) => {
        e.preventDefault()
        const data = {
            url: `university/updateCourseDes/${cid}`,
            method: "put",
            data: {
                courseDescription: des
            },
        };
        fetchUserData(data)
            .then((response) => {

                console.log(response.data);
                handleCloseDes();
                showAlert();

            })
            .catch((e) => {
                console.log(e);
            });
    }

    const onSubmitOpp = (e) => {
        e.preventDefault()
        const data = {
            url: `university/updateCourseOpp/${cid}`,
            method: "put",
            data: {
                carrerOpertunities: opp
            },
        };
        fetchUserData(data)
            .then((response) => {

                console.log(response.data);
                handleCloseOpp();
                showAlert();

            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <StyledEngineProvider injectFirst>

            <Grid>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        onChange={handleChange}
                        autoWidth
                        label="Select Degree Programms"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {props.homedata.map(({ id, courseName }) =>
                            <MenuItem value={id}>{courseName}</MenuItem>
                        )}

                    </Select>

                </FormControl>
                <Box>
                    {props.homedata.map(({ id, courseName, preRequirements, courseDescription, carrerOpertunities }) => {

                        if (id == cid) {

                            return (

                                <Card sx={{ minWidth: 275, mt: "25px" }}>
                                    <CardContent>

                                        <Typography variant="h5" component="div" sx={{ fontWeight: "600", fontSize: "13pt", mb: "10px", color: "#2196f3" }}>
                                            {courseName}
                                        </Typography>

                                        <Grid>
                                            <Typography variant="h6" component="div" sx={{ fontWeight: "normal", fontSize: "12pt", mb: "15px", color: "#ff9800" }}>
                                                Pre Requirements
                                            </Typography>

                                            {replaceCommaLine(req).map(name =>
                                                <Grid sx={{ ml: "20px" }}><CheckIcon sx={{ color: "green" }} /><span style={{ fontSize: "11pt" }}>{name}</span></Grid>)}
                                            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "10px" }}>
                                                <Button onClick={handleOpenReq(req)}>Edit</Button>
                                            </Box>
                                        </Grid>

                                        <Modal open={openReq} >
                                            <Box sx={stylebox1}>
                                                <IconButton
                                                    aria-label="close"
                                                    onClick={handleCloseReq}
                                                    sx={{
                                                        position: 'absolute',
                                                        right: 8,
                                                        top: 8,
                                                        color: (theme) => theme.palette.grey[500],
                                                    }}
                                                >
                                                    <CloseIcon />
                                                </IconButton>
                                                <Box sx={{
                                                    mt: "25px",
                                                }}>
                                                    <Typography variant="h2" component="div" sx={{ fontWeight: "bold", fontSize: "14pt", mb: "5px", color: "#000000" }}>
                                                        Pre Requirements<br></br>
                                                        <span style={{ color: "#36454F", fontSize: "11pt", fontWeight: "normal" }}>Seperate each requirement using backslash (/)</span>
                                                    </Typography>
                                                    <form onSubmit={onSubmitReq} style={{ maxWidth: "100%" }}>

                                                        <TextField

                                                            sx={textfield}
                                                            id="Pre Requirements"
                                                            label="Pre Requirements"
                                                            name="requirements"
                                                            value={req}
                                                            multiline
                                                            maxRows={10}
                                                            onChange={(e) => { setReq(e.target.value) }}
                                                            defaultValue={req}
                                                        />

                                                        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "10px", mt: "10px" }}>
                                                            <Button type="submit" variant="contained">Save</Button>
                                                        </Box>

                                                    </form>
                                                </Box>
                                            </Box>
                                        </Modal>

                                        <Grid >

                                            <Typography variant="h6" component="div" sx={{ fontWeight: "normal", fontSize: "12pt", mb: "20px", mt: "10px", color: "#ff9800" }}>
                                                Course Description
                                            </Typography>

                                            <Typography variant="body2" gutterBottom textAlign="justify" sx={coursestyle}>

                                                <textarea
                                                    name="Text1"
                                                    cols="90"
                                                    rows="15"
                                                    value={des}
                                                    readOnly
                                                    style={{
                                                        width: "700px",
                                                        border: "0px solid #ccc",
                                                        resize: "none",
                                                        fontFamily: 'poppins',
                                                        fontSize: '11pt',
                                                        textAlign: 'justify',
                                                        boxShadow: "none",
                                                        outline: "none",
                                                        paddingLeft: "30px",
                                                    }}

                                                >
                                                </textarea>

                                            </Typography>

                                            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "10px" }}>
                                                <Button onClick={handleOpenDes(des)}>Edit</Button>
                                            </Box>

                                        </Grid>

                                        <Modal open={openDes} >
                                            <Box sx={stylebox1}>
                                                <IconButton
                                                    aria-label="close"
                                                    onClick={handleCloseDes}
                                                    sx={{
                                                        position: 'absolute',
                                                        right: 8,
                                                        top: 8,
                                                        color: (theme) => theme.palette.grey[500],
                                                    }}
                                                >
                                                    <CloseIcon />
                                                </IconButton>
                                                <Box sx={{
                                                    mt: "25px",
                                                }}>
                                                    <Typography variant="h6" component="div" sx={{ fontWeight: "bold", fontSize: "14pt", mb: "5px", color: "#000000" }}>
                                                        Course Description
                                                    </Typography>
                                                    <form onSubmit={onSubmitDec} style={{ maxWidth: "100%" }}>

                                                        <TextField

                                                            sx={coursefield}
                                                            id="Course Description"
                                                            label="Course Description"
                                                            name="courseDescription"
                                                            value={des}
                                                            multiline
                                                            maxRows={25}
                                                            onChange={(e) => { setDes(e.target.value) }}
                                                            defaultValue={des}
                                                        />

                                                        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "10px", mt: "10px" }}>
                                                            <Button type="submit" variant="contained">Save</Button>
                                                        </Box>

                                                    </form>
                                                </Box>
                                            </Box>
                                        </Modal>

                                        <Grid>
                                            <Typography variant="h6" component="div" sx={{ fontWeight: "normal", fontSize: "12pt", mb: "20px", mt: "10px", color: "#ff9800" }}>
                                                Carrer Opertunities
                                            </Typography>
                                            {replaceCommaLine(opp).map(name =>
                                                <Grid sx={{ ml: "20px" }}><CheckIcon sx={{ color: "green" }} /><span style={{ fontSize: "11pt" }}>{name}</span></Grid>)}
                                            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "10px" }}>
                                                <Button onClick={handleOpenOpp(opp)}>Edit</Button>
                                            </Box>
                                        </Grid>

                                        <Modal open={openOpp} >
                                            <Box sx={stylebox1}>
                                                <IconButton
                                                    aria-label="close"
                                                    onClick={handleCloseOpp}
                                                    sx={{
                                                        position: 'absolute',
                                                        right: 8,
                                                        top: 8,
                                                        color: (theme) => theme.palette.grey[500],
                                                    }}
                                                >
                                                    <CloseIcon />
                                                </IconButton>
                                                <Box sx={{
                                                    mt: "25px",
                                                }}>
                                                    <Typography variant="h2" component="div" sx={{ fontWeight: "bold", fontSize: "14pt", mb: "5px", color: "#000000" }}>
                                                        Career Opportunities<br></br>
                                                        <span style={{ color: "#36454F", fontSize: "11pt", fontWeight: "normal" }}>Seperate each opportunity using backslash (/)</span>
                                                    </Typography>

                                                    <form onSubmit={onSubmitOpp} style={{ maxWidth: "100%" }}>


                                                        <TextField

                                                            sx={textfield}
                                                            id="Career opportunities"
                                                            label="Career opportunities"
                                                            name="carrerOpertunities"
                                                            value={opp}
                                                            multiline
                                                            maxRows={10}
                                                            onChange={(e) => { setOpp(e.target.value) }}
                                                            defaultValue={opp}

                                                        />

                                                        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "10px", mt: "10px" }}>
                                                            <Button type="submit" variant="contained">Save</Button>
                                                        </Box>

                                                    </form>

                                                </Box>
                                            </Box>
                                        </Modal>

                                    </CardContent>
                                </Card>
                            );
                        }
                    }
                    )}

                </Box>
            </Grid>

        </StyledEngineProvider >
    );
}

export default Home;
