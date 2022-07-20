import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { makeStyles, createStyles } from "@mui/material/styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from "@mui/material";


export const MessageRight = (props) => {
    const message = props.message ? props.message : "no message";
    const timestamp = props.timestamp ? props.timestamp : "";
    const displayName = props.displayName ? props.displayName : "Ashani";
    return (
        <StyledEngineProvider injectFirst>
            <List >
                <ListItem key="1" sx={{}}>
                    <Grid container >
                        <Grid item xs={12}>
                            <ListItemText align="right" primary={message}></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="right" secondary={timestamp}></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        </StyledEngineProvider >
    );
};

export const MessageLeft = (props) => {
    const message = props.message ? props.message : "no message";
    const timestamp = props.timestamp ? props.timestamp : "";
    return (
        <>
            <List >
                <ListItem key="2" style={{marginLeft:"2px", background:"#e4f2f7", width:"fit-content", borderRadius:"10px"}}>
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align="left"  primary={message} ></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="left" secondary={timestamp}></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        </>
    );
};