import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { fetchUserData } from "../../../api/authenticationService";
import Category from "./Category";
import TutorViewCard from "./TutorViewCard";

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

    const [count, setCount] = React.useState(null);

    const [filter, setFilter] = React.useState(null);
    const [tid, setTid] = React.useState(0);

    const getFilterName = name=> {
        if (count == 1 && filter == name) {
            window.location.reload(false);
        } else {
            setCount(1);
        }
        setFilter(name)
    }

    const getTid = id => {
        setTid(id)
    }

    const [tutors, setTutors] = React.useState([])
    const user_id = localStorage.getItem("USER_ID")

    React.useEffect(() => {
        fetchUserData({
            url: "/tutor/getTutors",
            method: "post",
            data: null
        }).then((response) => {
            setTutors(response.data)
        })
    }, [])

    return (
        <StyledEngineProvider injectFirst>

            <Category getFilterName={getFilterName} getTid={getTid}></Category>

            {/* <Item>
                <CourseViewCard course={courses} filtern={filter}></CourseViewCard>
            </Item> */}

            <div>
                {(() => {
                    if (tid == 0) {
                        return (
                            <Item>
                                <TutorViewCard tutor={tutors} filtern={filter}></TutorViewCard>
                            </Item>

                        )
                    } else if (tid == 1) {
                        return (
                            // <CourseViewCard course={null} filtern={}></CourseViewCard>
                            <Item>no data</Item>
                            
                        )
                    } else if (tid == 2) {
                        return (
                            // <CourseViewCard course={} filtern={}></CourseViewCard>
                            <Item>no data</Item>
                            
                        )
                    } else if (tid == 3) {
                        return (
                            // <CourseViewCard course={} filtern={}></CourseViewCard>
                            <Item>no data</Item>
                            
                        )
                    }
                })()}
            </div>

        </StyledEngineProvider>
    );
}

export default Content;
