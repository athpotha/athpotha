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

function About(props) {

    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <Typography variant="body2" gutterBottom textAlign="justify" sx={style} >
                    <textarea
                        name="Text1"
                        cols="90"
                        rows="15"
                        value={props.aboutdata}
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
        </div>
    );
}

export default About;
