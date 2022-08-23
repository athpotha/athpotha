import { Button, CardMedia, Grid } from '@mui/material'
import React from 'react'
import CenteredBox from '../../ui/CenteredBox'

function ViewPic(props) {
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <CardMedia component="img"
                    image={props.image}
                    sx={{ pr: "30px", mb: "30px" }}
                />
            </Grid>
            {/* <Grid item xs={12}>
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
            </Grid> */}
        </Grid>
    )
}

export default ViewPic