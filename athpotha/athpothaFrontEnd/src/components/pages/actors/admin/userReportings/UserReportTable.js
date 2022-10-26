import * as React from "react";
import PropTypes from "prop-types";
import ViewPopup from "../manageUsers/ViewPopup";
// import BlockUser from "./BlockUser.js";

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  gridClasses,
} from "@mui/x-data-grid";
// import styled from "@emotion/styled";
import { green, red, blue, orange } from "@mui/material/colors";
import CenteredBox from "../../../../ui/CenteredBox";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import EditPopUp from "../manageUsers/EditPopUp";
import Swal from "sweetalert2";

//open sweet alert when clicked block button
const openSweetAlert = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "User will be blocked after this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#388e3c",
    cancelButtonColor: "#d33",
    confirmButtonText: "Block User",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Blocked!",
        text: "The user has been blocked.",
        icon: "success",
        confirmButtonColor: "#388e3c",
      });
    }
  });
};

//open sweet alert1 when clicked warn user button
const openSweetAlert1 = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "User will be warned after this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#388e3c",
    cancelButtonColor: "#d33",
    confirmButtonText: "Warn User",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Warned!",
        text: "The user has been warned.",
        icon: "success",
        confirmButtonColor: "#388e3c",
      });
    }
  });
};

//Filter panel
const CustomToolbar = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);

CustomToolbar.propTypes = {
  setFilterButtonEl: PropTypes.func.isRequired,
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

const ColorButton2 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[600]),
  textTransform: "none",
  backgroundColor: green[600],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

const ColorButton3 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[600]),
  backgroundColor: red[600],
  textTransform: "none",
  "&:hover": {
    backgroundColor: red[700],
  },
}));

const ColorButton4 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[600]),
  backgroundColor: orange[600],
  textTransform: "none",
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

const rows = [
  {
    id: 1,
    col1: "Kasun",
    col2: "Pavani",
    col3: "2022-09-13",
    col4: "Incorrect Content",
  },
  {
    id: 2,
    col1: "Roneki",
    col2: "Kasun",
    col3: "2022-09-26",
    col4: "Incorrect Content",
  },
  {
    id: 3,
    col1: "Melaka",
    col2: "Kumud",
    col3: "2022-09-29",
    col4: "Incorrect Content",
  },
  {
    id: 4,
    col1: "Roneki",
    col2: "Ashani",
    col3: "2022-10-12",
    col4: "Incorrect Content",
  },
  {
    id: 5,
    col1: "Roneki",
    col2: "Pavani",
    col3: "2022-10-15",
    col4: "Incorrect Content",
  },
  {
    id: 6,
    col1: "Sumudu",
    col2: "Kasun",
    col3: "2022-10-26",
    col4: "Incorrect Content",
  },
];

const columns = [
  {
    field: "col1",
    headerName: "Reported By",
    headerClassName: "header-class-name",
    width: 100,
  },
  {
    field: "col2",
    headerName: "User",
    headerClassName: "header-class-name",
    width: 100,
  },
  {
    field: "col3",
    headerName: "Date",
    headerClassName: "header-class-name",
    width: 150,
  },
  {
    field: "col4",
    headerName: "Reason",
    headerClassName: "header-class-name",
    width: 300,
  },

  {
    field: "col5",
    headerName: "Actions",
    headerClassName: "header-class-name",
    width: 400,
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {};

      return (
        <CenteredBox align='left'>
          <ViewPopup/>
          <ColorButton2 style={{ marginRight: 6 }}>Previous Reportings</ColorButton2>
          <ColorButton4 onClick={openSweetAlert1} style={{ marginRight: 6 }}>Warn User</ColorButton4>
          <ColorButton3 onClick={openSweetAlert}>Block</ColorButton3>
        </CenteredBox>
      );
    },
  },
];

const style = {
  boxShadow: 24,
  borderRadius:"0.5%",
  backgroundColor:"white"
};
export default function ManageUSerTable() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [filterButtonEl, setFilterButtonEl] = React.useState(null);
  return (
    <Grid>
      <Box sx={style}>
        <Box
          sx={{
            height: 600,
            width: "100%",
            align: "center"
          }}
        >
          <DataGrid
            components={{
              Toolbar: CustomToolbar,
            }}
            componentsProps={{
              panel: {
                anchorEl: filterButtonEl,
              },
              toolbar: {
                setFilterButtonEl,
              },
            }}
            rows={rows}
            columns={columns}
          />
        </Box>
      </Box>
    </Grid>
  );
}
