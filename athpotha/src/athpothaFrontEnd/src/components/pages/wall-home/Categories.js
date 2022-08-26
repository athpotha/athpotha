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
import { fetchUserData } from '../../../api/authenticationService';

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
export default function Categories() {

    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let categories = useSelector((state) => state.educationCategory.categories);
    const studentType = categories[0];
    const backBtn = useSelector((state) => state.educationCategory.backButton);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: (localStorage.getItem("USER_TYPE") === "student" && studentType === undefined) ? 1200 : 900,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
        borderRadius: 2,
    };
    console.log(studentType);

    const dispatch = useDispatch();

    const backButtonClicked = () => {
        dispatch(educationCategoryActions.setBackButton(0));
        categories.map((category) => (
            dispatch(educationCategoryActions.addCategory(category))
        ))
    }

    const submitCategories = () => {
        console.log(categories);
        fetchUserData({
            url: "api/v1/category/add-categories",
            method: "put",
            data: {
                categories: categories,
                userType: localStorage.getItem("USER_TYPE"),
                email: localStorage.getItem("USER_EMAIL")
            }
        })
    }

    console.log(categories)
    return (
        <div>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container>
                        <Grid item xs={6}>
                            {backBtn === 1 &&
                                <IconButton onClick={backButtonClicked} color="primary">
                                    <NavigateBeforeIcon />
                                </IconButton>
                            }
                        </Grid>
                        <Grid item xs={6}>
                            {/* {backBtn === 0 && <CenteredBox align="right">
                                <IconButton onClick={forwardButtonClicked} color="primary">
                                    <NavigateNextIcon />
                                </IconButton>
                            </CenteredBox>
                            } */}
                        </Grid>
                    </Grid>
                    {(localStorage.getItem("USER_TYPE") === "student" && studentType === undefined) ? <StudentTypeSlector /> : <CategorySelection />}
                    {/* {localStorage.getItem("USER_TYPE") === "student" && studentType === "A/L Qualified" && <CategorySelection />}
                    {localStorage.getItem("USER_TYPE") === "student" && studentType === "Undergraduate" && <CategorySelection />} */}
                    <Grid container>
                        <Grid item xs={12}>
                            {localStorage.getItem("USER_TYPE") !== "student" || studentType !== undefined &&
                                <CenteredBox align="right">
                                    <Button
                                        variant="contained"
                                        style={{ borderRadius: 20, textTransform: "none" }}
                                        onClick={submitCategories}
                                    >
                                        Select
                                    </Button>
                                </CenteredBox>
                            }
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
