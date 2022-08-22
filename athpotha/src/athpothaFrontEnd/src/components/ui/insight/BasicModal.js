import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, IconButton } from "@mui/material";
import CenteredBox from "../CenteredBox";
import { useDispatch, useSelector } from "react-redux";
import Addquestion from "./Addquestion";
import Addpost from "./Addpost";
import PropTypes from "prop-types";
import SimpleSnackbar from "./wall-main/Feeds/SimpleSnackbar";
import ChangeProfile from "./profile/ChangeProfile";
import ChangeCover from "./profile/ChangeCover";
import ViewPic from "../../pages/view-profile/ViewPic";

// import modalActions

// const tabs = [];
BasicModal.propTypes = {
  header: PropTypes.element,
  elements: PropTypes.element,
  changeCover: PropTypes.element,
  changeProfile: PropTypes.element
};

export default function BasicModal(props) {
  const dispatch = useDispatch();
  // const click = () => {
  if (props.isTabHave) {
  }

  // }
  const tabValue = useSelector((state) => state.modal.modalTabValue);
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={props.modalStyle}>

        <Grid container>
          <Grid item xs={11}>
            {props.isTabHave && props.header}
          </Grid>
          <Grid item xs={1}>
            <CenteredBox>
              <IconButton onClick={props.onClose}>
                <CloseIcon />
              </IconButton>
            </CenteredBox>
          </Grid>
        </Grid>
        <div>
          {props.isTabHave ? (
            props.modalName === "addQuestion-post-modal" ? (
              tabValue === 0 ? (
                <Addquestion close={props.onClose} />
              ) : (
                <Addpost />
              )
            ) : props.modalName === "search-modal" ? (
              props.children
            ) : props.modalName === "changeProfile-cover-modal" ? (
              tabValue === 0 ? (
                <ChangeProfile
                  close={props.onClose}
                  imageType="PROFILE_PIC"
                  image={localStorage.getItem("PROFILE_PIC")}
                />
              ) : (
                <ChangeProfile
                  close={props.onClose}
                  imageType="COVER_PIC"
                  image={localStorage.getItem("COVER_PIC")}
                />
              )
            ) : props.modalName === "viewProfile-cover-modal" ? (
              tabValue === 0 ? (
                <ViewPic
                  close={props.onClose}
                  imageType="PROFILE_PIC"
                  image="/images/tutors/tutor-1.jpg"
                />
              ) : (
                <ViewPic
                  close={props.onClose}
                  imageType="COVER_PIC"
                  image="/images/profile/cover.jpg"
                />
              )
            ) : (
              ""
            )
          ) : (
            props.elements
          )}
        </div>
      </Box>
    </Modal>
  );
}
