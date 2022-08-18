import React, { useState } from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";


function TextInput(props) {

    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`The name you entered was: ${message}`)
        { props.setMsg((obj)=>({...obj,id:props.id,text:message})) }
    }

    return (
        <StyledEngineProvider injectFirst>
            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        ml: -12,
                        mr: -12,
                    }}>
                    <TextField id="full-width-text-field" label="type here" variant="filled" style={{ width: 600 }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                    <Button variant="contained" color="primary" input type="submit">
                        <SendRoundedIcon />
                    </Button>
                </Box>

            </form>
        </StyledEngineProvider>
    );
}

export default TextInput;