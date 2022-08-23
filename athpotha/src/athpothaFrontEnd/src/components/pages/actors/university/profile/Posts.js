import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";

function Posts() {
    return (
        <StyledEngineProvider injectFirst>

            <Grid>
                posts
            </Grid>

        </StyledEngineProvider>
    );
}

export default Posts;
