import styled from '@emotion/styled';
import { Button, ButtonBase, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchUserData } from '../../../api/authenticationService';
import BeforeDisplay from '../../ui/BeforeDisplay';
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
    cursor: "default",
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
function ViewCategories(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);

    const fetchCategoryHandler = async () => {
        setIsLoading(true);
        try {
            const response = await fetchUserData({
                url: "api/v1/category/get-my-category",
                method: "post",
                data: {
                    email: props.user.email,
                    userType: props.user.userType
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
    let content = <Typography>Found no Categories</Typography>

    if (images.length > 0) {

        content = <Grid container>
            {images.map((image) => (
                <Grid key={image.id} item xs={12 / images.length}>
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
    }

    if (!content[0]) {
        content = <Typography>Found no Categories</Typography>
    }

    if (isLoading) {
        content = <BeforeDisplay />;
    }

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )
}

export default ViewCategories