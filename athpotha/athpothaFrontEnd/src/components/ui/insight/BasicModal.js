import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, IconButton } from "@mui/material";
import CenteredBox from "../CenteredBox";

export default function BasicModal(props) {
  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 700,
  //   // height: 400,
  //   bgcolor: "background.paper",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   p: "10px 0 10px 30px",
  //   // p: 4,
  //   borderRadius: 5,
  //   // pr: 0,
  //   // pt: 1,
  //   // pb: 2
  // };
  return (
    // <div>
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      
      <Box sx={props.modalStyle} >
        <Grid container>
          <Grid item xs={11}>
            {props.children}
          </Grid>
          <Grid item xs={1}>
            <CenteredBox>
              <IconButton onClick={props.onClose}>
                <CloseIcon />
              </IconButton>
            </CenteredBox>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
