import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalTabs from '../../ui/insight/ModalTabs';
import ViewPic from './ViewPic';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, IconButton } from '@mui/material';
import CenteredBox from '../../ui/CenteredBox';


import CloseIcon from "@mui/icons-material/Close";
import { modalActions } from '../../../store/modal-slice';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 700,
  // height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: "10px 0 10px 30px",
  // p: 4,
  borderRadius: 5,
  // pr: 0,
  // pt: 1,
  // pb: 2
};

export default function ViewImageModal(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
    dispatch(modalActions.setModalTabValue(props.tabValue));
  }
  const handleClose = () => setOpen(false);
  const changeProfileModalTabs = [
    { id: "addQuestionModalTab-1", label: "Profile", value: 0 },
    { id: "addQuestionModalTab-2", label: "Cover", value: 1 },
  ];
  const tabValue = useSelector((state) => state.modal.modalTabValue);
  return (
    <div>
      <div onClick={handleOpen}>{props.children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item xs={11}>
              <ModalTabs tabs={changeProfileModalTabs} />
            </Grid>
            <Grid item xs={1}>
              <CenteredBox>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </CenteredBox>
            </Grid>
          </Grid>
          <div>
            {tabValue === 0 ? (
              <ViewPic
                // close={props.onClose}
                imageType="PROFILE_PIC"
                image={props.user.profilePicture}
              />
            ) : (
              <ViewPic
                // close={props.onClose}
                imageType="COVER_PIC"
                image={props.user.coverPicture}
              />
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
