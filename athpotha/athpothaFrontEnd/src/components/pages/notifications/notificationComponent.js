import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { Avatar } from '@mui/material';

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';




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
    
    const bgcolors=props.status=== 'read'? '#fff':'#c3e3f7';
    

  return (
      
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: bgcolors,
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: "100%",
          mt: 1,
        }}
      >


        <Box sx={{ display:"flex", color: "text.primary", fontSize: 16, fontWeight: "medium" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://icon-library.com/images/notification-icon-png/notification-icon-png-11.jpg"
          sx={{ width: 45, height: 45, mr:2 }}
        />
          <p sx={{mt:5}}>{props.title}</p>
        </Box>
        <Box sx={{ color: "text.secondary" }}>{props.content}</Box>
        
      </Box>
    </ThemeProvider>
  );
}

export default NotificationComponent;
