import { Button } from "@mui/material";
import React, { useState } from "react";
import BasicModal from "./BasicModal";
import { modalActions } from "../../../store/modal-slice";
import { useDispatch } from "react-redux";

function ModalOpenButton(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
    if (props.isTabHave) {
      dispatch(modalActions.setModalTabValue(props.tabValue));
    }
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <div onClick={handleOpen}>{props.children}</div>
      <BasicModal
        modalName={props.modalName}
        isTabHave={props.isTabHave}
        modalStyle={props.modalStyle}
        open={open}
        onClose={handleClose}
        header={props.header}
      />
      {/* {props.children}
      </BasicModal> */}
    </>
  );
}

export default ModalOpenButton;
