import React, { useState } from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Box } from '@mui/system';
import { Avatar, Button, Divider, ButtonBase } from "@mui/material";
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const style = {
    bgcolor: '#ffffff',
    borderRadius: '5px',
    m: 1,
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'grey.300'

};

const sendbtnstyle = {
    mr: 4,
    mb: 1,
}

const recievedbtnstyle = {
    mr: 2,
    mb: 1,
}

function Invitation() {

    const [count, setCount] = useState(1)
    const [active, setActive] = useState("false")
    const setCountClick = (c) => {
        setCount(c)
        if (count % 2 == 0) {
            setActive("false")
        } else {
            setActive("true")
        }
    }

    const [sendrecieved, setSendRecieved] = useState("Received")
    if (sendrecieved == "Received") {
        recievedbtnstyle.background = "#D6EAF8"
        sendbtnstyle.background = "#FFFFFF"
    } else {
        sendbtnstyle.background = "#D6EAF8"
        recievedbtnstyle.background = "#FFFFFF"
    }

    return (
        <StyledEngineProvider injectFirst>
            <div sx={{ width: '100%' }}>
                <Box
                    sx={{
                        bgcolor: '#ffffff', height: '12vh', borderRadius: '5px', display: 'flex', justifyContent: 'space-around', p: 1,
                        m: 1, alignItems: 'center', border: '1px solid', borderColor: 'grey.300'
                    }}>
                    <Box>No pending invitations</Box>
                    <Box><Button onClick={() => setCountClick(count + 1)}>Manage</Button></Box>
                </Box>
                {active === "true" && <Box
                    sx={style}>
                    <Box sx={{ p: 1 }}>Manage Invitation</Box>
                    <Box sx={{ pl: 1, display: 'flex', justifyContent: 'start' }}>
                        <Button sx={recievedbtnstyle} onClick={() => setSendRecieved("Received")}>Received</Button>
                        <Button sx={sendbtnstyle} onClick={() => setSendRecieved("Send")}>Sent</Button>
                    </Box>
                    {sendrecieved === "Received" &&
                        <Box>
                            <List>
                                <Divider />
                                <ListItem >
                                    <ListItemAvatar >
                                        <Avatar alt="Profile Picture" src="images/tutors/tutor-3.png" component={ButtonBase} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Roneki Manamperi" secondary="2 weeks ago" />
                                    <Button sx={{ mr: 5 }} color="warning">Ignore</Button>
                                    <Button variant="outlined" color="success">Accept</Button>
                                </ListItem>
                                <Divider />
                                <ListItem >
                                    <ListItemAvatar >
                                        <Avatar alt="Profile Picture" src="images/tutors/tutor-3.png" component={ButtonBase} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Kumud Perera" secondary="2 days ago" />
                                    <Button sx={{ mr: 5 }} color="warning">Ignore</Button>
                                    <Button variant="outlined" color="success">Accept</Button>
                                </ListItem>
                            </List>
                        </Box>}
                    {sendrecieved === "Send" && <Box>
                        <List>
                            <Divider />
                            <ListItem >
                                <ListItemAvatar >
                                    <Avatar alt="Profile Picture" src="images/tutors/tutor-3.png" component={ButtonBase} />
                                </ListItemAvatar>
                                <ListItemText primary="Roneki Manamperi" secondary="3 weeks ago" />
                                <Button sx={{ mr: 5 }} color="warning">Withdraw</Button>
                            </ListItem>
                        </List>
                    </Box>}
                </Box>
                }
            </div>
        </StyledEngineProvider>
    );
}

export default Invitation;