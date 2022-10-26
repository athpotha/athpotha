import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Box, Button } from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import "./cpstyle.css";

const style = {
    bgcolor: '#ffffff',
    borderRadius: '5px',
    m: 1,
    p: 1,
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

function Category(props) {

    const [value, setValue] = React.useState(0);
        
    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.getTid(newValue);
    };


    // const getFilterName = (filtername) => {
    //     alert(filtername)
    // };


    return (

        <StyledEngineProvider injectFirst>
            <Box sx={style}>

                <Box >
                    <Tabs value={value} onChange={handleChange}  aria-label="basic tabs example">
                        <Tab label="Physical Science" {...a11yProps(0)} />
                        <Tab label="Bio Science" {...a11yProps(1)} />
                        <Tab label="Commerce" {...a11yProps(2)} />
                        <Tab label="Art" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignContent: 'center',
                        p: 1,
                        gap:2,
                    }}>
                        <Button className="btn" sx={{ borderRadius: '20px' }} variant="outlined" onClick={event => props.getFilterName("Engineering Faculty")} >Engineering</Button>
                        <Button className="btn" sx={{ borderRadius: '20px' }} variant="outlined" onClick={event => props.getFilterName("Computer Science")}>Computer Science</Button>
                        <Button className="btn" sx={{ borderRadius: '20px' }} variant="outlined" onClick={event => props.getFilterName("Information Technology")}>Information Technology</Button>
                        <Button className="btn" sx={{ borderRadius: '20px' }} variant="outlined" onClick={event => props.getFilterName("Physical Science")}>Physical Science</Button>
                        <Button className="btn" sx={{ borderRadius: '20px' }} variant="outlined" onClick={event => props.getFilterName("Applied Science")}>Applied Science</Button>
                        <Button className="btn" sx={{ borderRadius: '20px' }} variant="outlined" onClick={event => props.getFilterName("Quantity Surveying")}>Quantity Surveying</Button>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Bio Science
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Commerce
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Art
                </TabPanel>

            </Box>
        </StyledEngineProvider >

    );
}

export default Category;
