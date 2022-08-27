import styled from '@emotion/styled';
import { Button, ButtonBase, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchUserData } from '../../../api/authenticationService';
import CenteredBox from '../../ui/CenteredBox';
import Category from '../wall-home/Category';


const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
        opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
        opacity: 0,
    },
    '& .MuiTypography-root': {
        border: '4px solid currentColor',
    },
}));

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));
function MyCategories() {

    let categories = useSelector((state) => state.educationCategory.categories);
    const studentType = useSelector((state) => state.educationCategory.selectedStudentType);
    const subjectType = useSelector((state) => state.educationCategory.selectedSubject);
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);

    const fetchCategoryHandler = async () => {
        setIsLoading(true);
        try {
            const response = await fetchUserData({
                url: "api/v1/category/get-student-category",
                method: "post",
                data: {
                    email: localStorage.getItem("USER_EMAIL")
                }
            })

            const categories = await response.data;
            let selectedCategories = [];
            await categories.map((category) => {
                selectedCategories.push({
                    id: `buttonImage-${category.categoryId}`,
                    url: category.image,
                    title: category.categoryName,
                    width: '90%',
                });
            })
            setImages(selectedCategories);

        } catch (error) {
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchCategoryHandler();
    }, [])
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <React.Fragment>
            <Grid container>
                {images.map((image) => (
                    <Grid item>
                        <Box sx={{ minWidth: 300, width: '100%', mb: 2 }}>
                            <ImageButton
                                focusRipple
                                key={image.id}
                                id={image.id}
                                style={{
                                    width: image.width,
                                }}
                            >
                                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                                {/* <input value={category}></input> */}
                                <ImageBackdrop className="MuiImageBackdrop-root" />
                                <Image>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        sx={{
                                            position: 'relative',
                                            p: 4,
                                            pt: 2,
                                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                        }}
                                    >
                                        {image.title}
                                        <ImageMarked className="MuiImageMarked-root" />
                                    </Typography>
                                </Image>
                            </ImageButton>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <CenteredBox align="right">
                        <Button
                            style={{ borderRadius: 20, textTransform: "none" }}
                        >
                            Edit Categories
                        </Button>
                    </CenteredBox>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default MyCategories