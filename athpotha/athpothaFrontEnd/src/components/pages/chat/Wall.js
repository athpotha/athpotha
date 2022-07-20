import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Box, Paper } from "@mui/material";
import { MessageLeft, MessageRight } from "./Message";
import TextInput from "./TextInput";

const messages = [
    {
        fid: 10,
        tid:1,
        message: "Hello",
        timestamp: "MM/DD 00:00",
        displayName: "Ashani",
    },
    {
        fid: 1,
        tid:10,
        message: "Hello",
        timestamp: "MM/DD 00:00",
        displayName: "Ashani",
    },
    {
        fid: 10,
        tid:1,
        message: "Can you help me?",
        timestamp: "MM/DD 00:00",
        displayName: "you",
    },
    {
        fid: 10,
        tid:1,
        message: "I want to know more details about CS",
        timestamp: "MM/DD 00:00",
        displayName: "you",
    },
    {
        fid: 2,
        tid:10,
        message: "yeah, sure",
        timestamp: "MM/DD 00:00",
        displayName: "Ashani",
    },
    {
        fid: 2,
        tid:10,
        message: "Give us degree names or interested fields of you",
        timestamp: "MM/DD 00:00",
        displayName: "Ashani",
    },
    {
        fid: 10,
        tid:2,
        message: "ICT",
        timestamp: "MM/DD 00:00",
        displayName: "you",
    },
];

function Wall(props) {

    const id = props.selectContactdetails.value1
    const loginid = 10
    const check = 0

    return (
        <StyledEngineProvider injectFirst>
            <Box>
                <Box sx={{ height: "50px", borderBottom: '1px solid', borderColor: 'grey.300', }}>
                    <Box sx={{ ml: 1, p: 1.5, fontSize: '12pt' }}>{props.selectContactdetails.value2}</Box>
                </Box>
                <Box sx={{
                    overflow: "hidden",
                    overflowY: "auto", height: '66vh',
                }}>

                    {messages.map(({ fid, tid, message, timestamp, displayName }) => {

                        if((fid == id) && (tid == loginid) || (tid == id) && (fid == loginid)){
                            if (id == fid) {
                                return (
                                    <MessageLeft
                                        message={message}
                                        timestamp={timestamp}
                                        displayName={displayName}
                                    />
    
    
                                )
                            }{
                                return (
                                    <MessageRight
                                        message={message}
                                        timestamp={timestamp}
                                        displayName={displayName}
                                    />
    
                                )
                            }
                        }
                        

                    })}

                    {/* <MessageLeft
                        message="hello"
                        timestamp="MM/DD 00:00"
                        displayName="Ashani"
                    />
                    <MessageLeft
                        message="Hey man wahts up?"
                        timestamp="MM/DD 00:00"
                        displayName="Ashani"
                    />
                    <MessageRight
                        message="Hey, Iam Good! What about you ?"
                        timestamp="MM/DD 00:00"
                        displayName="you"
                    />
                    <MessageRight
                        message="thank you"
                        timestamp="MM/DD 00:00"
                        displayName="you"
                    />
                    <MessageLeft
                        message="Thank you"
                        timestamp="MM/DD 00:00"
                        displayName="Ashani"
                    />
                    <MessageLeft
                        message="See you soon"
                        timestamp="MM/DD 00:00"
                        displayName="Ashani"
                    /> */}
                </Box>
                <TextInput></TextInput>
            </Box>
        </StyledEngineProvider >
    );
}

export default Wall;