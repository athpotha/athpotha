import { Grid, Divider, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BeforeDisplay from "../../ui/BeforeDisplay";
import ProfileCard from "../../ui/insight/profile/ProfileCard";
import ViewCategories from "./ViewCategories";
import ViewPosts from "./ViewPosts";

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

    const userType = localStorage.getItem("USER_TYPE");
    return (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} sx={{ bgColor: "#ffff" }} aria-label="basic tabs example">
                <Tab label="Posts" {...a11yProps(0)} />
                {(userType === "student" || userType === "community") && <Tab label="Questions" {...a11yProps(1)} />}
                <Tab label="Categories" {...a11yProps(2)} />
            </Tabs>
            <Divider></Divider>
            <TabPanel value={value} index={0}>
                <ViewPosts user={props.user} postType={"post"} />
            </TabPanel>
            {(userType === "student" || userType === "community") && 
            <TabPanel value={value} index={1}>
                <ViewPosts user={props.user} postType={"question"} />
            </TabPanel>}
            <TabPanel value={value} index={2}>
                <ViewCategories user={props.user} />
            </TabPanel>
        </React.Fragment>
    );
}

export default FeedsSection;
