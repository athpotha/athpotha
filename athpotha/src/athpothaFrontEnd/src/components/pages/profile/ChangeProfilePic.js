import styled from '@emotion/styled'
import { Avatar, Button, CardMedia, Grid, IconButton } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { fetchUserData } from '../../../api/authenticationService'
import UseImageInput from '../../../hooks/use-imageInput'
import CenteredBox from '../../ui/CenteredBox'
import BasicModal from '../../ui/insight/BasicModal'
import ModalOpenButton from '../../ui/insight/ModalOpenButton'



const ProfileAvatar = styled(Avatar)({
    opacity: 1,
    "&:hover": {
        opacity: 0.6
    },
    width: 150,
    height: 150,
    // cursor: "pointer"
    // maxWidth: 330,
});

const profilePicModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    // height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: "10px 0 10px 30px",
    // p: 4,
    borderRadius: 5,
    // pr: 0,
    // pt: 1,
    // pb: 2
};

function ChangeProfilePic() {

    const navigate = useNavigate();
    const {
        handleUploadClick: handleUploadHandler,
        imagePreview: profileImagePreview,
        fileInput: profileImageInput,
        imageData: profileImageData
    } = UseImageInput(() => { })

    const handleProfileClick = (event, param) => {
        navigate("/profile");
    };

    const imageSubmitHandler = () => {
        const imageData = new FormData();
        imageData.append("imageFile", profileImageData);
        imageData.append("email", localStorage.getItem("USER_EMAIL"));
        fetchUserData({
            url: "api/v1/logged-user/change-profileImage",
            method: "put",
            data: imageData
        }).then((response) => {
            localStorage.setItem("PROFILE_PIC", response.data);
            window.location.reload();
        })
    }

    return (
        <ModalOpenButton
            modalName="profile-modal"
            isTabHave={false}
            modalStyle={profilePicModal}
            elements={
                <Grid container>
                    <Grid item xs={12}>
                        <CardMedia component="img"
                            height="600px"
                            image={profileImagePreview === null ? localStorage.getItem("PROFILE_PIC") : profileImagePreview}
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
                </Grid>}
        >
            <IconButton
                style={{ position: "absolute", top: "130px", left: "16px" }}
            >
                <ProfileAvatar
                    src={localStorage.getItem("PROFILE_PIC")}
                    onClick={(event) =>
                        handleProfileClick(event, "myprofile")
                    }
                />
                <Link to="/profile"></Link>
            </IconButton>
        </ModalOpenButton>
    )
}

export default ChangeProfilePic