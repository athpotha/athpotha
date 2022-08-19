import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CenteredBox from '../../ui/CenteredBox';
import Category from './Category';
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


const images = [
    {
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'Chemistry',
        width: '90%',
    },
    {
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'Physics',
        width: '90%',
    },
    {
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'Applied Maths',
        width: '90%',
    },
    {
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'Pure Maths',
        width: '90%',
    },
    {
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'Burgers',
        width: '90%',
    },
    {
        url: '/images/main-wall/main-wall-1.jpg',
        title: 'Camera',
        width: '90%',
    },
];
export default function Categories() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        {images.map((image) => (
                            <Grid item xs={4}>
                                <Category image={image} />
                            </Grid>
                        ))}
                    </Grid>
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
