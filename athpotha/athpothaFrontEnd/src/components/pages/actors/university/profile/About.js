import { Button, Grid, StyledEngineProvider, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { hover } from "@testing-library/user-event/dist/hover";
import { fetchUserData } from "../../../../../api/authenticationService";
import Swal from "sweetalert2";

const style = {
    fontWeight: "normal",
    color: "grey.600",
    mb: 2,
    // width: 650,
};

const textfield = {
    fontWeight: "normal",
    color: "grey.600",
    mb: 2,
    mt: 2,
}

const stylebox1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    borderRadius: '7px',
    boxShadow: 35,
    pt: 2,
    px: 4,
    pb: 3,
};

function About(props) {

    var id=localStorage.getItem("USER_ID");

    const showAlert = () => {
        Swal.fire({
            title: "Success",
            text: "Alert successful",
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace("/profile");
            }
          });
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setAboutUni(props.aboutdata);
    }

    const [aboutUni, setAboutUni] = React.useState(props.aboutdata);

    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            url: `university/updateUniDetails/${id}`,
            method: "put",
            data: {
                about: aboutUni
            },
          };
          fetchUserData(data)
            .then((response) => {

              console.log(response.data);
              handleClose();
              showAlert();
      
            })
            .catch((e) => {
              console.log(e);
            });
    }


    return (
        <StyledEngineProvider injectFirst>

            <Grid >

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

                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button onClick={handleOpen}>Update About</Button>
                </Box>

                <Modal open={open} >
                    <Box sx={stylebox1}>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
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
                            mt: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>

                            <form onSubmit={onSubmit} style={{ maxWidth: "100%" }}>


                                <TextField

                                    sx={textfield}
                                    id="description"
                                    label="description"
                                    multiline
                                    maxRows={10}
                                    value={aboutUni}
                                    onChange={(e) => setAboutUni(e.target.value)}
                                    defaultValue={props.aboutdata}

                                />


                                <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "10px", mt: "10px" }}>
                                    <Button type="submit" variant="contained" >Save</Button>
                                </Box>

                            </form>


                        </Box>
                    </Box>
                </Modal>

            </Grid>

        </StyledEngineProvider >
    );
}

export default About;
