import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";


function TextInput() {
    return (
        <StyledEngineProvider injectFirst>
            <form>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        ml:-12,
                        mr:-12,
                    }}>
                    <TextField id="full-width-text-field" label="type here" variant="filled" style = {{width: 600}}/>
                    <Button variant="contained" color="primary">
                        <SendRoundedIcon />
                    </Button>
                </Box>

            </form>
        </StyledEngineProvider>
    );
}

export default TextInput;
