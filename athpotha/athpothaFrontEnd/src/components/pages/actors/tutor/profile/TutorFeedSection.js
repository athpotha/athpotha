import { Grid, Divider, StyledEngineProvider, Typography } from "@mui/material";
import React from "react";
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BeforeDisplay from "../../../../ui/BeforeDisplay";
import ProfileCard from "../../../../ui/insight/profile/ProfileCard";
import MyCategories from "../../../profile/MyCategories";
import StudentMaterials from "./StudentMaterials";
import { fetchUserData } from "../../../../../api/authenticationService";
import MyPosts from "../../../profile/MyPosts";
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


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    let posts = <Typography>Found no posts</Typography>

    if (props.posts.length > 0) {
        posts = props.posts.map((post) => (
            post.postType == "post" && <ProfileCard cardType="profile" homeCardId={post.id} key={post.id} postItem={post} />
        ))
    }
    if (props.isLoading) {
        posts = <BeforeDisplay />;
    }

    if (posts[0] === "") {
        posts = <Typography>Found no posts</Typography>
    }
    return (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} sx={{ bgColor: "#ffff" }} aria-label="basic tabs example">
                <Tab label="Posts" {...a11yProps(0)} />
                <Tab label="Student Materials" {...a11yProps(1)} />
                <Tab label="Your Categories" {...a11yProps(2)} />
            </Tabs>
            <Divider></Divider>
            <TabPanel value={value} index={0}>
                <MyPosts postType={"post"} />
                {/* {posts} */}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <StudentMaterials profileType="own-profile" />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MyCategories />
            </TabPanel>
        </React.Fragment>
    );
}

export default TutorFeedSection;
