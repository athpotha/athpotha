import { Grid, Divider, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BeforeDisplay from "../../../../ui/BeforeDisplay";
import ProfileCard from "../../../../ui/insight/profile/ProfileCard";
import Home from "./Home";
import About from "./About";
import MyPosts from "../../../profile/MyPosts";
import { fetchUserData } from "../../../../../api/authenticationService";

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


function StudentFeedSection(props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const user_id = localStorage.getItem("USER_ID")
    const [uniDetails, setUniDetails] = React.useState([])

    React.useEffect(()=>{
        fetchUserData({
            url: "/university/getUniDetails",
            method: "post",
            data: { userId: user_id }
        }).then((response) => {
            setUniDetails(response.data)
        })
    }, [])

    console.log(uniDetails)

    return (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="About" {...a11yProps(0)} />
                <Tab label="Degree Programmes" {...a11yProps(1)} />
                <Tab label="Posts" {...a11yProps(2)} />
            </Tabs>
            <Divider></Divider>
            <TabPanel value={value} index={0} style={{ backgroundColor: "#FFF", padding: "20px" }}>
                <About aboutdata={uniDetails['about']}></About>
            </TabPanel>

            <TabPanel value={value} index={1} style={{ backgroundColor: "#FFF", padding: "20px" }}>
                <Home></Home>
            </TabPanel>

            <TabPanel value={value} index={2} style={{ backgroundColor: "#FFF" }}>
                <MyPosts postType="post" />
            </TabPanel>
        </React.Fragment>
    );
}

export default StudentFeedSection;
