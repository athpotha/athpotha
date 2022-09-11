import { Grid, MenuItem, StyledEngineProvider } from "@mui/material";
import React from "react";
import { Box } from '@mui/system';
import { Avatar, Button, Divider, ButtonBase } from "@mui/material";
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import About from "./About";
import Home from "./Home";
import Posts from "./Posts";


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

function NavRow() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <StyledEngineProvider injectFirst>

            <Grid sx={{
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: "5px",
                bgcolor: "#ffffff",
                ml: 2,
                mr: 2,
                p: 2,
                mb: 5,
            }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="About" {...a11yProps(0)} />
                    <Tab label="Degree Programms" {...a11yProps(1)} />
                    <Tab label="Posts" {...a11yProps(2)} />
                </Tabs>
                <Divider></Divider>
                <TabPanel value={value} index={0}>
                    <Box>
                        <About></About>
                    </Box>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <Box>
                        <Home></Home>
                    </Box>
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <Box>
                        <Posts></Posts>
                    </Box>
                </TabPanel>

            </Grid>

        </StyledEngineProvider>
    );
}

export default NavRow;
