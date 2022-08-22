import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CenteredBox from '../../ui/CenteredBox';
import StudentTypeSlector from './StudentTypeSlector';
import { useSelector, useDispatch } from 'react-redux';
import CategorySelection from './CategorySelection';


import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { educationCategoryActions } from '../../../store/educationCategory-slice';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    borderRadius: 2
};

let images = [
    {
        id: 'buttonImage-1',
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'O/L Qualified',
        width: '90%',
    },
    {
        id: 'buttonImage-2',
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'A/L Qualified',
        width: '90%',
    },
    {
        id: 'buttonImage-3',
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'Undergraduate',
        width: '90%',
    },
];

let categories = [];
export default function Categories() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let studentType = useSelector((state) => state.educationCategory.categories[0]);
    const selectedCategories = useSelector((state) => state.educationCategory.categories);
    const backBtn = useSelector((state) => state.educationCategory.backButton);

    console.log(studentType);
    if (studentType === "O/L Qualified") {
        images = [
            {
                id: 'buttonImage-1',
                url: '/images/main-wall/main-wall-1.jpg',
                title: 'Maths',
                width: '90%',
            },
            {
                id: 'buttonImage-2',
                url: '/images/main-wall/main-wall-1.jpg',
                title: 'Physics',
                width: '90%',
            },
            {
                id: 'buttonImage-3',
                url: '/images/main-wall/main-wall-1.jpg',
                title: 'Chemistry',
                width: '90%',
            },
        ];
    } else if (studentType === "A/L Qualified") {
        images = [
            {
                id: 'buttonImage-1',
                url: '/images/main-wall/main-wall-1.jpg',
                title: 'Computer Science',
                width: '90%',
            },
            {
                id: 'buttonImage-2',
                url: '/images/main-wall/main-wall-1.jpg',
                title: 'Software Engineering',
                width: '90%',
            },
            {
                id: 'buttonImage-3',
                url: '/images/main-wall/main-wall-1.jpg',
                title: 'Bio medical',
                width: '90%',
            },
            {
                id: 'buttonImage-3',
                url: '/images/main-wall/main-wall-1.jpg',
                title: 'Bio medicine',
                width: '90%',
            },
            {
                id: 'buttonImage-3',
                url: '/images/main-wall/main-wall-1.jpg',
                title: 'Bio medical',
                width: '90%',
            },
        ];
    } else {
        images = [
            {
                id: 'buttonImage-1',
                url: '/images/main-wall/main-wall-1.jpg',
                title: '',
                width: '90%',
            },
            {
                id: 'buttonImage-2',
                url: '/images/main-wall/main-wall-1.jpg',
                title: 'Data Science',
                width: '90%',
            },
            {
                id: 'buttonImage-3',
                url: '/images/main-wall/main-wall-1.jpg',
                title: 'Chemistry',
                width: '90%',
            },
        ];
    }

    const setCategories = (category) => {
        categories.push(category);
    }

    console.log(selectedCategories);

    const dispatch = useDispatch();

    const backButtonClicked = () => {
        dispatch(educationCategoryActions.setBackButton(0));
        studentType = undefined;
        // dispatch(educationCategoryActions.addCategory(studentType));
        // dispatch(signupButtonActions.setBeforeClickBackButton(user_type));
        // dispatch(signupButtonActions.setSelectedSignupButton(""));
    }

    const forwardButtonClicked = () => {
        // dispatch(registrationActions.setEmailSent(true));
    }
    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container>
                        <Grid item xs={6}>
                            {/* {localStorage.getItem("USER_TYPE") === "student" && studentType !== undefined &&
                                <IconButton onClick={backButtonClicked} color="primary">
                                    <NavigateBeforeIcon />
                                </IconButton>
                            } */}
                            {backBtn === 1 &&
                                <IconButton onClick={backButtonClicked} color="primary">
                                    <NavigateBeforeIcon />
                                </IconButton>
                            }
                        </Grid>
                        <Grid item xs={6}>
                            {backBtn === 0 && <CenteredBox align="right">
                                <IconButton onClick={forwardButtonClicked} color="primary">
                                    <NavigateNextIcon />
                                </IconButton>
                            </CenteredBox>
                            }
                        </Grid>
                    </Grid>
                    {localStorage.getItem("USER_TYPE") === "student" && studentType === undefined && <StudentTypeSlector />}
                    {localStorage.getItem("USER_TYPE") === "student" && studentType === "O/L Qualified" && <CategorySelection images={images} />}
                    <Grid container>
                        {/* <Grid item xs={11}></Grid> */}
                        <Grid item xs={12}>
                            <CenteredBox align="right">
                                <Button
                                    variant="contained"
                                    style={{ borderRadius: 20, textTransform: "none" }}
                                >
                                    Select
                                </Button>
                            </CenteredBox>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
