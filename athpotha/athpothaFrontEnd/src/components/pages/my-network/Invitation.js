import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Box, Container } from '@mui/system';
import { Button } from "@mui/material";

function Invitation() {

    return (
        <StyledEngineProvider injectFirst>
            <div sx={{ width: '100%' }}>
                <Box 
                    sx={{ bgcolor: '#ffffff', height: '12vh' , borderRadius: '5px', display: 'flex', justifyContent: 'space-around' , p: 1,
                    m: 1, alignItems: 'center', border: '1px solid', borderColor:'grey.300' }}>
                    <Box>No pending invitations</Box>
                    <Box><Button>Manage</Button></Box>
                </Box>
            </div>
        </StyledEngineProvider>
    );
}

export default Invitation;