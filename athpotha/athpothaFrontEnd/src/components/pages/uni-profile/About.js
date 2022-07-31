import { Button, Grid, StyledEngineProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const style = {
    fontWeight:"normal",
    color:"grey.600",
    mb:2,
};

function About() {
    return (
        <StyledEngineProvider injectFirst>

            <Grid >

                <Typography variant="body2" gutterBottom textAlign="justify" sx={style} >
                    University of Colombo School of Computing (UCSC) was established by merging The Institute of Computer Technology
                    (ICT Ordinance 1987.09.21) and The Department of Computer Science both of the University of Colombo, as the
                    first centre of higher learning of computing in Sri Lanka.
                </Typography>

                <Typography variant="body2" gutterBottom textAlign="justify" sx={style}>
                    The major goal of the UCSC is to prepare students for careers in Information and Communication Technology as Software Developers,
                    Systems Analysts, Network Administrators, Database Administrators, Web Developers, IT Managers, IT Strategic Planners and
                    IT Policy Makers.
                </Typography>

                <Box sx={{display:"flex", justifyContent:"flex-end"}}>
                    <Button variant="outlined">Edit</Button>
                </Box>
                

            </Grid>

        </StyledEngineProvider>
    );
}

export default About;
