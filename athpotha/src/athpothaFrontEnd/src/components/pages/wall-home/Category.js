import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import SelectedCategory from './CategorySelection';
import { useDispatch, useSelector } from 'react-redux';
import { educationCategoryActions } from '../../../store/educationCategory-slice';

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

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


export default function Category(props) {

    let imageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('sm')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
            zIndex: 1,
            '& .MuiImageBackdrop-root': {
                opacity: 0.15,
            },
            // '& .MuiImageMarked-root': {
            //     opacity: 0,
            // },
            '& .MuiTypography-root': {
                border: '4px solid currentColor',
            },
        },
    }));
    const dispatch = useDispatch();
    const [ImageButton, setImageButton] = React.useState(imageButton);
    const [isSelected, setIsSelected] = React.useState(false);
    let categories = useSelector((state) => state.educationCategory.categories);
    const studentType = useSelector((state) => state.educationCategory.selectedStudentType);
    const subjectType = useSelector((state) => state.educationCategory.selectedSubject);

    const clickedButton = () => {
        if (!isSelected) {
            imageButton = styled(ButtonBase)(({ theme }) => ({
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
            setIsSelected(true);
            setImageButton(imageButton);
            // props.onSetSelectedCategories();
        } else {
            imageButton = styled(ButtonBase)(({ theme }) => ({
                position: 'relative',
                height: 200,
                [theme.breakpoints.down('sm')]: {
                    width: '100% !important', // Overrides inline-style
                    height: 100,
                },
                '&:hover, &.Mui-focusVisible': {
                    zIndex: 1,
                    '& .MuiImageBackdrop-root': {
                        opacity: 0.15,
                    },
                    // '& .MuiImageMarked-root': {
                    //     opacity: 0,
                    // },
                    '& .MuiTypography-root': {
                        border: '4px solid currentColor',
                    },
                },
            }));
            setIsSelected(false);
            setImageButton(imageButton);
        }

        if(subjectType === "") {
            dispatch(educationCategoryActions.setSelectedSubject(props.image.title))
            dispatch(educationCategoryActions.setBackButton(1));
            // dispatch(educationCategoryActions.addCategory(props.image.id.replace("buttonImage-", "")));
        } else if(studentType === "") {
            dispatch(educationCategoryActions.setSelectedStudentType(props.image.title))
            dispatch(educationCategoryActions.setBackButton(1));
            // dispatch(educationCategoryActions.addCategory(props.image.title));
        } else {
            dispatch(educationCategoryActions.addCategory(props.image.id.replace("buttonImage-", "")));
        }
        if (props.image.title === "OL_Qualified" || props.image.title === "AL_Qualified" || props.image.title === "Undergraduate") {
            dispatch(educationCategoryActions.setBackButton(1));
        }
        // dispatch(educationCategoryActions.setSelectedStudentType(props.image.title));
    }

    return (
        <Box sx={{ minWidth: 300, width: '100%', mb: 2 }}>
            <ImageButton
                focusRipple
                key={props.image.id}
                id={props.image.id}
                style={{
                    width: props.image.width,
                }}
                onClick={clickedButton}
            >
                <ImageSrc style={{ backgroundImage: `url(${props.image.url})` }} />
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
                        {props.image.title}
                        <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                </Image>
            </ImageButton>
        </Box>
    );
}
