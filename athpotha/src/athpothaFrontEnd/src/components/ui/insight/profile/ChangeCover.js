import { Button, CardMedia, Grid } from '@mui/material'
import React from 'react'
import { fetchUserData } from '../../../../api/authenticationService'
import UseImageInput from '../../../../hooks/use-imageInput'
import CenteredBox from '../../CenteredBox'

function ChangeCover() {
    const {
        handleUploadClick: handleUploadHandler,
        imagePreview: profileImagePreview,
        fileInput: profileImageInput,
        imageData: profileImageData
    } = UseImageInput(() => { })
    const imageSubmitHandler = () => {
        const imageData = new FormData();
        imageData.append("imageFile", profileImageData);
        imageData.append("email", localStorage.getItem("USER_EMAIL"));
        fetchUserData({
            url: "api/v1/logged-user/change-profileImage",
            method: "put",
            data: imageData
        }).then((response) => {
            localStorage.setItem("COVER_PIC", response.data);
            window.location.reload();
        })
    }
    return (
        <Grid container>
            <Grid item xs={12}>
                <CardMedia component="img"
                    // height="600px"
                    image={profileImagePreview === null ? localStorage.getItem("COVER_PIC") : profileImagePreview}
                    sx={{ pr: "30px", mb: "30px" }}
                />
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