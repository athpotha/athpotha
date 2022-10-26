import React, { useRef, useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import classes from './FileUploadService.module.css';
import { Box, Button, CardMedia, Fab, Grid, IconButton, InputLabel, Typography } from '@mui/material';
import CenteredBox from '../components/ui/CenteredBox';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import Backdrop from '@mui/material';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { storage } from '../../../Firebase';
import Swal from 'sweetalert2';
import { storage } from '../Firebase';
import LinearIndeterminate from '../components/ui/LinearIndeterminate';

function FileUploadService(props) {
    const fileInput = useRef();
    const [fileData, setFileData] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [isDataUploading, setIsDataUploading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const handleUploadClick = event => {
        setIsDataUploading(true)
        let file = event.target.files[0];
        setFileData(file);
        setFilePreview(file.name);
        setImagePreview(URL.createObjectURL(file));
        const filePath = `${props.path}/${file.name + v4()}`;
        const fileRef = ref(storage, filePath);

        const uploadTask = uploadBytesResumable(fileRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case 'paused':
                        break;
                    case 'running':
                        break;
                }
                console.log(progress);
            },
            (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong !',
                })
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    props.onChange(downloadURL)
                }).catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong !',
                    })
                });
                setIsDataUploading(false);
            }
        )
    };

    const deleteFileClick = event => {
        setFileData(null);
        setFilePreview(null);
        console.log(fileInput)
    }

    // props.onChange(fileData)
    return (
        <React.Fragment>
            {/* <BackDrop dataUploading={isDataUploading} /> */}
            {isDataUploading && <LinearIndeterminate />}
            <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
            <div className={classes["file-card"]}>
                <div className={classes["file-inputs"]}>
                    <input
                        ref={fileInput}
                        multiple
                        type="file"
                        onChange={handleUploadClick}
                        style={{ display: "none" }}
                    />
                    <CenteredBox align="center">
                        <Button variant="extended" onClick={() => fileInput.current.click()}>
                            <AttachFileIcon sx={{ mr: 1 }} />
                            Add File
                        </Button>
                    </CenteredBox>
                </div>
                <p className={classes.main}>Supported files</p>
                <p className={classes.info}>PDF, JPG, PNG</p>
            </div>
            {(filePreview !== null && props.imageType === undefined) &&
                <Grid sx={{ p: 2 }} container className={classes.li}>
                    <Grid item xs={11}>
                        <Typography>{filePreview}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={deleteFileClick}>
                            <DeleteForeverIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            }
        </React.Fragment>
    )
}

export default FileUploadService