import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CourseViewCard from "./CourseViewCard";
import { fetchUserData } from "../../../api/authenticationService";
import Category from "./Category";

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 1,
                m: 1,
                borderRadius: 2,
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

const notiCount = 7; // no of new notifications

function Content() {

    const [courses, setCourses] = React.useState([])
    const user_id = localStorage.getItem("USER_ID")

    React.useEffect(() => {
        fetchUserData({
            url: "/university/courses",
            method: "post",
            data: { user_id: user_id }
        }).then((response) => {
            setCourses(response.data)
        })
    }, [])

    //console.log(courses)

    return (
        <StyledEngineProvider injectFirst>

            <Category></Category>

            <Item>
                <CourseViewCard course={courses}></CourseViewCard>
            </Item>

        </StyledEngineProvider>
    );
}

export default Content;
