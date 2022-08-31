import { Grid, Divider, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BeforeDisplay from "../../../../ui/BeforeDisplay";
import ProfileCard from "../../../../ui/insight/profile/ProfileCard";
import ViewPosts from "../../../view-profile/ViewPosts";
import ViewCategories from "../../../view-profile/ViewCategories";
// import BeforeDisplay from "../../ui/BeforeDisplay";
// import ProfileCard from "../../ui/insight/profile/ProfileCard";

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


function TutorFeedSection(props) {
    return (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} sx={{ bgColor: "#ffff" }} aria-label="basic tabs example">
                <Tab label="Posts" {...a11yProps(0)} />
                <Tab label="Categories" {...a11yProps(1)} />
            </Tabs>
            <Divider></Divider>
            <TabPanel value={value} index={0}>
                <ViewPosts postType="posts" />
            </TabPanel>
            <TabPanel value={value} index={0}>
                <ViewCategories />
            </TabPanel>
        </React.Fragment>
    );
}

export default TutorFeedSection;
