import React, { useContext, useRef, useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import classes from './ImageUploadService.module.css';
import { Button, CardMedia, Fab, IconButton, InputLabel, LinearProgress } from '@mui/material';
import CenteredBox from '../CenteredBox';
import UseImageInput from '../../../hooks/use-imageInput';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useDispatch } from 'react-redux';
import { imageUploadActions } from '../../../store/uploadImage-slice';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SimpleSnackbar from '../alerts/SimpleSnackbar';
import AddProductContext from '../../../context/AddProduct-context';
import ImageUploadService from '../../../services/ImageUploadService';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../../Firebase';
import Swal from 'sweetalert2';
import BackDrop from '../BackDrop';
function ImageUploadService(props) {

    const imageInput = useRef();
    const [imageData, setImageData] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [alreadyAdded, setAlreadyAdded] = useState(false);
    const [previouslyAdded, setPreviouslyAdded] = useState(false);
    const [file, setFile] = useState(null)
    const [url, setUrl] = useState('');
    const [uploading, setUploading] = useState(false)
    const setUrlHandler = (settedUrl) => {
        setUrl(settedUrl);
    }

    const ctx = useContext(AddProductContext);

    var removeByAttr = function (arr, attr, value) {
        var i = arr.length;
        while (i--) {
            if (
                arr[i] &&
                arr[i].hasOwnProperty(attr) &&
                arguments.length > 2 &&
                arr[i][attr] === value
            ) {
                arr.splice(i, 1);
            }
        }
        return arr;
    };

    const hello = (path, file) => {
        setUploading(true)
        const filePath = `${path}/${file.name + v4()}`;
        const fileRef = ref(storage, filePath);
        let url2 = "";

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
                    setUrl(downloadURL);
                    // handleChange(downloadURL);
                }).catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong !',
                    })
                });
                setUploading(false);
            }
        )

    }
    console.log(url);

    const handleUploadHandler = (event) => {
        let file = event.target.files[0];
        hello("/images/test", file);
        setFile(file);
    };

    if (url !== "") {
        const newImage = { id: props.id, imageId: props.id };
        const existingImage = props.images.find(
            (image) => image.id === newImage.id
        );
        const previouslyAddedImage = props.images.find(
            (image) => image.imageId === newImage.imageId
        )
        if (!existingImage && !previouslyAddedImage) {
            ctx.setProductImages((prevImages) => {
                return [...prevImages, { id: props.id, url: url, imageId: props.id }];
            });
            setImagePreview({ id: props.id, image: URL.createObjectURL(file) });
            setAlreadyAdded(false);
        } else if (previouslyAddedImage) {
            setAlreadyAdded(false);
            setPreviouslyAdded(true)
        } else {
            setPreviouslyAdded(false);
            setAlreadyAdded(true);
        }
        setUrl("");
    }
    function deleteImageClick() {
        removeByAttr(props.images, 'id', imagePreview.id);
        ctx.setProductImages(props.images);
        setImagePreview(null);
        props.onDelete();
    }

    return (
        <React.Fragment>
            <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
            <Button sx={{ p: imagePreview === null && 1 }} onClick={() => imageInput.current.click()} className={classes["file-card"]} >
                <div className={classes["file-inputs"]}>
                    <input
                        accept="image/*"
                        ref={imageInput}
                        multiple
                        type="file"
                        onChange={handleUploadHandler}
                        style={{ display: "none" }}
                    />
                    {imagePreview === null &&
                        <CenteredBox align="center">
                            add image
                        </CenteredBox>
                    }
                    {imagePreview &&
                        <div>
                            <CardMedia
                                component="img"
                                image={imagePreview.image}
                                sx={{ height: props.size, width: props.size }}
                            />
                        </div>
                    }
                </div>
            </Button>
            {uploading && <LinearProgress /> }
            {imagePreview &&
                <React.Fragment>
                    {/* <CenteredBox align="center">
                        <Button onClick={() => onUploadImage(imagePreview)} style={{ textTransform: "none" }} color="error"> Delete Image</Button>
                    </CenteredBox> */}
                    <CenteredBox align="center">
                        <Button onClick={() => deleteImageClick(imagePreview)} style={{ textTransform: "none" }} color="error"> Delete Image</Button>
                    </CenteredBox>
                </React.Fragment>
            }
            {alreadyAdded &&
                <SimpleSnackbar
                    variant="filled"
                    alertType="error"
                    message="Image is already added !"
                    vertical="bottom"
                    horizontal="center"
                />
            }
            {previouslyAdded &&
                <SimpleSnackbar
                    variant="filled"
                    alertType="warning"
                    message="Please Delete Image before add !"
                    vertical="bottom"
                    horizontal="center"
                />
            }
        </React.Fragment>
    )
}

export default ImageUploadService