import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";

function Home() {
    return (
        <StyledEngineProvider injectFirst>

            <Grid>
                home
            </Grid>

        </StyledEngineProvider>
    );
}

export default Home;
