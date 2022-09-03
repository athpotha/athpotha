import { Grid, Divider, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BeforeDisplay from "../../ui/BeforeDisplay";
import ProfileCard from "../../ui/insight/profile/ProfileCard";
import MyCategories from "./MyCategories";
import MyPosts from "./MyPosts";

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
                <Box sx={{ mt: 3 }}>
                    {children}
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


function FeedsSection(props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} sx={{ bgColor: "#ffff" }} aria-label="basic tabs example">
                <Tab label="Posts" {...a11yProps(0)} />
                <Tab label="Questions" {...a11yProps(1)} />
                <Tab label="Categories" {...a11yProps(2)} />
            </Tabs>
            <Divider></Divider>
            <TabPanel value={value} index={0}>
                <MyPosts postType={"post"} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MyPosts postType={"question"} />
            </TabPanel>
            <TabPanel value={value} index={2} style={{ backgroundColor: "#FFF"}}>
                <MyCategories />
            </TabPanel>
        </React.Fragment>
    );
}

export default FeedsSection;
