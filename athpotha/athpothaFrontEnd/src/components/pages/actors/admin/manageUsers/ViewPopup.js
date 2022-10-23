import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ViewUserForm from './ViewUserForm';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { blue } from '@mui/material/colors';

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

//Colour buttons
const ColorButton1 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[600]),
  textTransform: "none",
  backgroundColor: blue[600],
  "&:hover": {
    backgroundColor: blue[700],
  },
}));

export default function ViewPopup(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setOpen(props.flag);
  }, []);

  return (
    <React.Fragment>
      <ColorButton1
        style={{ marginRight: 6 }}
        onClick={handleClickOpen}
      >
        View User
      </ColorButton1>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ViewUserForm >
          </ViewUserForm>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
