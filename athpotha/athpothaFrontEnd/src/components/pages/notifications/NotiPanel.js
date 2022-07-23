import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import { Box, Container } from '@mui/system';
import NotificationComponent from "./notificationComponent"
function NotiPanel() {
  return (
    
      <div sx={{ width: '100%' }}>
                <Box 
                    sx={{ padding:'50px', height: '100%' , borderRadius: '5px', display: 'flex' , p: 0,
                    m: 1, alignItems: 'center', border: '1px solid', borderColor:'grey.300' }}>
                    <NotificationComponent title="Mohomad Perera" status="read">

                    </NotificationComponent>
                </Box>
            </div>
    
  );
}

export default NotiPanel;
