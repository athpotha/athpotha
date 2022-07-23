import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import { Box, Container } from '@mui/system';
import { Button } from "@mui/material";
function UpperBox() {
  return (
    <StyledEngineProvider injectFirst>
      <div sx={{ width: '100%' }}>
                <Box 
                    sx={{ bgcolor: '#ffffff', height: '12vh' , borderRadius: '5px', display: 'flex', justifyContent: 'space-around' , p: 1,
                    m: 1, alignItems: 'center', border: '1px solid', borderColor:'grey.300' }}>
                    <Typography align="center">
                    <Box sx={{ fontWeight: 'medium' }}><p>Notifications</p>
                            
                    </Box>
                    <Box  sx={{ fontWeight: 'light' }}>
                    <p>You have new notifications</p>
                    </Box>
                    </Typography>
                </Box>
            </div>
    </StyledEngineProvider>
  );
}

export default UpperBox;
