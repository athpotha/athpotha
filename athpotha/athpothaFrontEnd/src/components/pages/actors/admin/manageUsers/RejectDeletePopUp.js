import * as React from 'react';
import Button from '@mui/material/Button';
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import AreYouSure from './AreYouSure';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const ColorButton3 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[600]),
  backgroundColor: red[600],
  textTransform: "none",
  "&:hover": {
    backgroundColor: red[700],
  },
}));


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ConfirmPopup(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  React.useEffect(() => {
    setOpen(props.flag);
  }, []);
  
  return (
    <React.Fragment>
      <ColorButton3
      onClick={handleOpen}
      >
        {props.text}
        </ColorButton3>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <AreYouSure></AreYouSure>
        </Box>
      </Modal>
      
      </React.Fragment>
  );
}
