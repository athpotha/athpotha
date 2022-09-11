import { Button, CardMedia, Grid } from '@mui/material'
import React from 'react'
import Swal from 'sweetalert2'
import { fetchUserData } from '../../../../api/authenticationService'
import UseImageInput from '../../../../hooks/use-imageInput'
import CenteredBox from '../../CenteredBox'
import { storage } from '../../../../Firebase';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";
import { useState } from 'react'

function ChangeCover(props) {
    const {
        handleUploadClick: handleUploadHandler,
        imagePreview: profileImagePreview,
        fileInput: profileImageInput,
        imageData: profileImageData
    } = UseImageInput(() => { })

    const [imageUrl, setImageUrl] = useState('');
    const imageSubmitHandler = () => {
        props.close();
        const imagePath = `images/profile/${profileImageData.name + v4()}`
        const imageRef = ref(storage, imagePath);
        console.log(profileImageData);
        const uploadTask = uploadBytesResumable(imageRef, profileImageData);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (progress !== 100) {
                    Swal.showLoading()
                    Swal.fire({
                        title: 'Auto close alert!',
                        html: 'I will close in <b></b> milliseconds.',
                        timer: 2000 + (100 - progress),
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                        },
                        willClose: () => {
                            clearInterval(progress === 100)
                        }
                    })
                }

                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
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
                    setImageUrl(downloadURL);
                    const imageData = new FormData();
                    imageData.append("imagePath", downloadURL);
                    imageData.append("email", localStorage.getItem("USER_EMAIL"));
                    imageData.append("imageType", props.imageType);
                    fetchUserData({
                        url: "api/v1/logged-user/change-profileImage",
                        method: "put",
                        data: imageData
                    }).then((response) => {
                        if (props.imageType === "PROFILE_PIC") {
                            localStorage.setItem("PROFILE_PIC", response.data);
                        } else {
                            localStorage.setItem("COVER_PIC", response.data);
                        }
                        Swal.fire({
                            icon: 'success',
                            title: 'Updated!',
                            text: 'Profile Image Changed!',
                        }).then(() => {
                            window.location.reload();
                        })
                    }).catch((error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong !',
                        })
                        console.log(error.message)
                    });
                }).catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong !',
                    })
                    console.log(error.message)
                });
            }
        );
    }
    return (
        <Grid container>
            <Grid item xs={12}>
                <div style={{ height: "400px", overflowY: "auto" }}>
                    <CardMedia component="img"
                        image={profileImagePreview === null ? props.image : profileImagePreview}
                        sx={{ pr: "30px", mb: "30px" }}
                    />
                </div>
            </Grid>
            <Grid item xs={12}>
                <div style={{ marginRight: "30px" }}>
                    <CenteredBox align="right">
                        <Button
                            // variant="contained"
                            style={{ borderRadius: 20, textTransform: "none" }}
                            onClick={() => profileImageInput.current.click()}
                        >
                            Change Image
                        </Button>
                        <Button
                            variant="contained"
                            style={{ borderRadius: 20, textTransform: "none" }}
                            onClick={imageSubmitHandler}
                            disabled={profileImagePreview === null}
                        >
                            Upload Image
                        </Button>
                        <input
                            accept="image/*"
                            ref={profileImageInput}
                            multiple
                            type="file"
                            onChange={handleUploadHandler}
                            style={{ display: "none" }}
                        />
                    </CenteredBox>
                </div>
            </Grid>
        </Grid>
    )
}

export default ChangeCover