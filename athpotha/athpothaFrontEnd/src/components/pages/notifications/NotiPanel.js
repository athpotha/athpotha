import { Grid, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import { Box, Container } from '@mui/system';
import NotificationComponent from "./notificationComponent"
function NotiPanel() {
  return (
    
      <div sx={{ width: '100%' }}>
                <Box 
                    sx={{ padding:'50px', height: '100%' , borderRadius: '5px', display: 'grid' , p: 0,
                    ml: 1,mr:1,mt:5, alignItems: 'center',  borderColor:'grey.300' }}>
                    <NotificationComponent title="Mohomad Perera" status="read" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"></NotificationComponent>
                    <NotificationComponent title="Mohomad Perera" status="read" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"></NotificationComponent>
                    <NotificationComponent title="Mohomad Perera" status="unread" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"></NotificationComponent>
                    <NotificationComponent title="Mohomad Perera" status="unread" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"></NotificationComponent>
                    <NotificationComponent title="Mohomad Perera" status="unread" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"></NotificationComponent>
                    <NotificationComponent title="Mohomad Perera" status="read" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"></NotificationComponent>
                    <NotificationComponent title="Mohomad Perera" status="read" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"></NotificationComponent>
                    
                </Box>
            </div>
    
  );
}

export default NotiPanel;
