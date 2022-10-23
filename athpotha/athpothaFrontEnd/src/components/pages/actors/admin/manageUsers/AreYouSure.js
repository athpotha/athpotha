import * as React from 'react';
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";
import { Margin } from '@mui/icons-material';

const ColorButton1 = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[600]),
    textTransform: "none",
    backgroundColor: green[600],
    "&:hover": {
      backgroundColor: green[700],
    },
  }));
  
  
  const ColorButton2 = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[600]),
    backgroundColor: red[600],
    textTransform: "none",
    "&:hover": {
      backgroundColor: red[700],
    },
  }));

function AreYouSure(){
    return(
        <div>
          <p style={{textAlign:'center', fontSize:25, padding:15}}>Are you Sure?</p>
          <div style={{marginTop:10}}>
          <ColorButton1 style={{ marginRight: 50, marginLeft:60 , paddingLeft:30, paddingRight:30}}>Yes</ColorButton1>
        <ColorButton2 style={{ paddingLeft:30, paddingRight:30}}>No</ColorButton2>
        </div>
       </div>
    );

}

export default AreYouSure;