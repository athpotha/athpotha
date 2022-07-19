import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Box, Paper } from "@mui/material";

function Wall(props) {
    return (
        <StyledEngineProvider injectFirst>
            <Box sx={{height:"50px", borderBottom:'1px solid', borderColor:'grey.300'}}>
                {props.selectContact}
            </Box>
            <Box sx={{overflow: 'auto'}}>
                <div>
                    <Paper>
                        
                    </Paper>
                </div>
            </Box>
        </StyledEngineProvider >
    );
}

export default Wall;