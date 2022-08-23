import { Button, Grid, StyledEngineProvider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    fontWeight: "normal",
    color: "grey.600",
    mb: 2,
    width: "100%",
};

const textfield = {
    fontWeight: "normal",
    color: "grey.600",
    mb: 2,
    width: 400,
}

const stylebox1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    bgcolor: 'background.paper',
    borderRadius: '7px',
    boxShadow: 35,
    pt: 2,
    px: 4,
    pb: 3,
};

function About() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [contentOne, setContentOne] = React.useState('University of Colombo School of Computing (UCSC) was established by merging The Institute of Computer Technology(ICT Ordinance 1987.09.21) and The Department of Computer Science both of the University of Colombo, as the first centre of higher learning of computing in Sri Lanka.');
    const [contentTwo, setContentTwo] = React.useState('The major goal of the UCSC is to prepare students for careers in Information and Communication Technology as Software Developers, Systems Analysts, Network Administrators, Database Administrators, Web Developers, IT Managers, IT Strategic Planners and IT Policy Makers.')
    const handleChangeOne = (event) => {
        setContentOne(event.target.value);
    };
    const handleChangeTwo = (event) => {
        setContentTwo(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <Typography variant="body2" gutterBottom textAlign="justify" sx={style} >
                {contentOne}
            </Typography>

            <Typography variant="body2" gutterBottom textAlign="justify" sx={style}>
                {contentTwo}
            </Typography>
        </div>
    );
}

export default About;
