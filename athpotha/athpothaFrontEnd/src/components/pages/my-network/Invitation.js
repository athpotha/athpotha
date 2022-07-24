import React, { useState } from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Box } from '@mui/system';
import { Avatar, Button, Divider, ButtonBase } from "@mui/material";
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

const style = {
    bgcolor: '#ffffff',
    borderRadius: '5px',
    m: 1,
    p:1,
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'grey.300'

};


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
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

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Received" {...a11yProps(0)} />
                        <Tab label="Send" {...a11yProps(1)} />
                    </Tabs>

                    <TabPanel value={value} index={0}>
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
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    <Box>
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
                    </Box>
                    </TabPanel>
                </Box>
                }
            </div>
        </StyledEngineProvider>
    );
}

export default Invitation;