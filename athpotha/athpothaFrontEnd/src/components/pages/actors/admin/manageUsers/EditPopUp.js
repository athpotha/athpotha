import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { green } from '@mui/material/colors';
import EditUserForm from "./EditUserForm";

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
const ColorButton2 = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[600]),
    textTransform: "none",
    backgroundColor: green[600],
    "&:hover": {
      backgroundColor: green[700],
    },
  }));

export default function Popup(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setOpen(props.flag);
  }, []);

  return (
    <React.Fragment>
      <ColorButton2 style={{ marginRight: 6 }}  onClick={handleClickOpen}>
        Update
        </ColorButton2>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditUserForm userId={props.userId} state={open}>
          </EditUserForm>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
