import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import SelectedCategory from './CategorySelection';
import { useDispatch } from 'react-redux';
import { educationCategoryActions } from '../../../store/educationCategory-slice';


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
    const dispatch = useDispatch();
    const [ImageButton, setImageButton] = React.useState(imageButton);
    const [isSelected, setIsSelected] = React.useState(false);
    const [category, setCategory] = React.useState("");

    const clickedButton = () => {
        console.log(props.image.title);
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
            setCategory(props.image.title);
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
            setCategory("");
            setImageButton(imageButton);
        }
        dispatch(educationCategoryActions.addCategory(props.image.title));
        if(props.image.title === "O/L Qualified") {
            dispatch(educationCategoryActions.setBackButton(1));
        }
        // dispatch(educationCategoryActions.setSelectedStudentType(props.image.title));
    }
    return (
        <Box sx={{ minWidth: 300, width: '100%', mb: 2 }}>
            <ImageButton
                focusRipple
                key={props.image.title}
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
