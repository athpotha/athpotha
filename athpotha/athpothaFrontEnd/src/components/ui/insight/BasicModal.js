import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, IconButton } from "@mui/material";
import CenteredBox from "../CenteredBox";
import { useSelector } from "react-redux";
import Addquestion from "./Addquestion";
import Addpost from "./Addpost";
import PropTypes from "prop-types";

// const tabs = [];
BasicModal.propTypes = {
  header: PropTypes.element,
};

export default function BasicModal(props) {
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
                <Addquestion />
              ) : (
                <Addpost />
              )
            ) : props.modalName === "search-modal" ? (
              props.children
            ) : (
              ""
            )
          ) : (
            props.children
          )}
        </div>
      </Box>
    </Modal>
  );
}
