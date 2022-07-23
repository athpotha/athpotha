import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
    palette: {
      background: {
        read: '#fff',
        unread:'red'
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      },
      success: {
        dark: '#009688',
      },
    },
  });  

function NotificationComponent(props) {
    
    const bgcolors=props.status=== 'read'? '#fff':'red';
    

  return (
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              bgcolor: bgcolors,
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              minWidth: '100%',
            }}
          >
            <Box sx={{ color: 'text.primary', fontSize: 16, fontWeight: 'medium' }}>
            {props.title}
            </Box>
            <Box sx={{ color: 'text.secondary' }}>madaa</Box>

            <Box
              sx={{
                color: 'success.dark',
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 14,
              }}
            >
              +18.77%
            </Box>
            <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
              vs. last week
            </Box>
          </Box>
        </ThemeProvider>
      
    
    
  );
}

export default NotificationComponent;
