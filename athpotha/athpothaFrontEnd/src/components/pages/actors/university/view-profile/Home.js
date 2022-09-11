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
    width: "full-Content",
}

const inputfield = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #BCB9B9"
}

const Programms = [
    {
        id: 10,
        name: 'Computer Science - CS',
        minirequirements: "English C pass, Merit Pass",
        details: "This programme continued for 18 batches until the Faculty of Science 2002/03 intake. This was replaced by 3 and 4 years Computer Science degrees from the 2002/03 intake of the UCSC.",
        CareerOpportunities: "Web Developer,Software Quality Assurance Engineer,Software Engineer"
    },
    {
        id: 11,
        name: 'Information System - IS',
        minirequirements: "English C pass, Merit Pass",
        details: "This programme continued for 18 batches until the Faculty of Science 2002/03 intake. This was replaced by 3 and 4 years Computer Science degrees from the 2002/03 intake of the UCSC.",
        CareerOpportunities: "Web Developer,Software Quality Assurance Engineer,Software Engineer"
    },
    {
        id: 12,
        name: 'Bachelor of Information Technology - BIT',
        minirequirements: "English C pass, Merit Pass",
        details: "This programme continued for 18 batches until the Faculty of Science 2002/03 intake. This was replaced by 3 and 4 years Computer Science degrees from the 2002/03 intake of the UCSC.",
        CareerOpportunities: "Web Developer,Software Quality Assurance Engineer,Software Engineer"
    },
];

function replaceCommaLine(data) {
    const Requirements = data.split(',')
    return Requirements;
}

function Home() {

    const [programm, setPogramm] = React.useState('');

    const [req, setReq] = React.useState('');
    const [des, setDes] = React.useState('');
    const [opp, setOpp] = React.useState('');

    const handleChange = (event) => {
        setPogramm(event.target.value);
    };
    console.log(programm)

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

    const onSubmitReq = (e) => {
        e.preventDefault()
        console.log(req)
        console.log(des)
        console.log(opp)
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
                        {Programms.map(({ id, name }) =>
                            <MenuItem value={id}>{name}</MenuItem>
                        )}

                    </Select>

                </FormControl>
                <Box>
                    {Programms.map(({ id, name, minirequirements, details, CareerOpportunities }) => {
                        if (id == programm) {

                            return (

                                <Card sx={{ minWidth: 275, mt: "25px" }}>
                                    <CardContent>

                                        <Typography variant="h5" component="div" sx={{ fontWeight: "600", fontSize: "13pt", mb: "10px", color: "#2196f3" }}>
                                            {name}
                                        </Typography>

                                        <Grid>
                                            <Typography variant="h6" component="div" sx={{ fontWeight: "normal", fontSize: "12pt", mb: "15px", color: "#ff9800" }}>
                                                Pre Requirements
                                            </Typography>

                                            {replaceCommaLine(minirequirements).map(name =>
                                                <Grid sx={{ ml: "20px" }}><CheckIcon sx={{ color: "green" }} /><span style={{ fontSize: "11pt" }}>{name}</span></Grid>)}
                                            {/* <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "10px" }}>
                                                <Button onClick={handleOpenReq(minirequirements)}>Edit</Button>
                                            </Box> */}
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
                                                    <Typography variant="h6" component="div" sx={{ fontWeight: "normal", fontSize: "12pt", mb: "5px", color: "#ff9800" }}>
                                                        Pre Requirements
                                                    </Typography>
                                                    <form onSubmit={onSubmitReq}>
                                                        <input type="text"
                                                            name="requirements"
                                                            value={req}
                                                            onChange={(e) => { setReq(e.target.value) }}
                                                            style={inputfield} />

                                                        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "10px", mt: "10px" }}>
                                                            <Button type="submit">Save</Button>
                                                        </Box>

                                                    </form>
                                                </Box>
                                            </Box>
                                        </Modal>

                                        <Grid >
                                            <Typography variant="h6" component="div" sx={{ fontWeight: "normal", fontSize: "12pt", mb: "20px", mt: "10px", color: "#ff9800" }}>
                                                Course Description
                                            </Typography>
                                            <Typography variant="body2" sx={{ ml: "20px" }}>
                                                {details}
                                            </Typography>
                                            {/* <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "10px" }}>
                                                <Button onClick={handleOpenDes(details)}>Edit</Button>
                                            </Box> */}
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
                                                    <Typography variant="h6" component="div" sx={{ fontWeight: "normal", fontSize: "12pt", mb: "20px", mt: "10px", color: "#ff9800" }}>
                                                        Course Description
                                                    </Typography>
                                                    <form onSubmit={onSubmitReq}>

                                                        <TextField
                                                            id="filled-multiline-flexible"
                                                            label=""
                                                            multiline
                                                            maxRows={10}
                                                            name="description"
                                                            value={des}
                                                            onChange={(e) => { setDes(e.target.value) }}
                                                             />

                                                        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "10px", mt: "10px" }}>
                                                            <Button type="submit">Save</Button>
                                                        </Box>

                                                    </form>
                                                </Box>
                                            </Box>
                                        </Modal>

                                        <Grid>
                                            <Typography variant="h6" component="div" sx={{ fontWeight: "normal", fontSize: "12pt", mb: "20px", mt: "10px", color: "#ff9800" }}>
                                                Career Opportunities
                                            </Typography>
                                            {replaceCommaLine(CareerOpportunities).map(name =>
                                                <Grid sx={{ ml: "20px" }}><CheckIcon sx={{ color: "green" }} /><span style={{ fontSize: "11pt" }}>{name}</span></Grid>)}
                                            {/* <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "10px" }}>
                                                <Button onClick={handleOpenOpp(CareerOpportunities)}>Edit</Button>
                                            </Box> */}
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
                                                    <Typography variant="h6" component="div" sx={{ fontWeight: "normal", fontSize: "12pt", mb: "20px", mt: "10px", color: "#ff9800" }}>
                                                        Career Opportunities
                                                    </Typography>
                                                    <form onSubmit={onSubmitReq}>
                                                        <input type="text"
                                                            name="description"
                                                            value={opp}
                                                            onChange={(e) => { setOpp(e.target.value) }}
                                                            style={inputfield} />

                                                        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "10px", mt: "10px" }}>
                                                            <Button type="submit">Save</Button>
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

        </StyledEngineProvider>
    );
}

export default Home;
