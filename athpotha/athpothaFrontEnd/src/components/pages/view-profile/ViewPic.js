import { Button, CardMedia, Grid } from '@mui/material'
import React from 'react'
import CenteredBox from '../../ui/CenteredBox'

function ViewPic(props) {

    return (
        <Grid container>
            <Grid item xs={12}>
                <div style={{ height: "400px", overflowY: "auto" }}>
                    <CardMedia component="img"
                        image={props.image}
                        sx={{ pr: "30px", mb: "30px" }}
                    />
                </div>
            </Grid>
        </Grid>
    )
}

export default ViewPic