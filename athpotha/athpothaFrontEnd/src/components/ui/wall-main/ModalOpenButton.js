import { Button } from "@mui/material";
import React, { useState } from "react";
import BasicModal from "../insight/BasicModal";

function ModalOpenButton(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant={props.variant}
        style={{ borderRadius: props.borderRadius, textTransform: "none" }}
        onClick={handleOpen}
      >
        {props.title}
      </Button>
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
