import * as React from "react";
import PropTypes from "prop-types";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  gridClasses,
} from "@mui/x-data-grid";
// import styled from "@emotion/styled";
import { green, red, blue } from "@mui/material/colors";
import CenteredBox from "../../../ui/CenteredBox";
import {
  Box,
  Button,
  Grid,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { fetchUserData } from "../../../../api/authenticationService";
import { useState } from "react";
import ConfirmPopup from "./manageUsers/ConfirmPopup";
import RejectDeletePopUp from "./manageUsers/RejectDeletePopUp";

//colour buttons
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


//sweet alert
const Swal = require("sweetalert2");

 //open sweet alert when clicked delete button
 const verifyUser= () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#388e3c",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, verify!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Added!",
        text: "University added",
        icon: "success",
        confirmButtonColor: "#388e3c",
      });
    }
  });
};

const rejectUser= () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#388e3c",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, reject!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Rejected!",
        text: "University rejected",
        icon: "error",
        confirmButtonColor: "#e53935",
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

const columns = [
  {
    field: "col1",
    headerName: "University",
    headerClassName: "header-class-name",
    width: 300,
  },
  {
    field: "col2",
    headerName: "Faculty",
    headerClassName: "header-class-name",
    width: 200,
  },
  {
    field: "col3",
    headerName: "Email",
    headerClassName: "header-class-name",
    width: 300,
  },

  {
    field: "col6",
    headerName: "Actions",
    headerClassName: "header-class-name",
    width: 200,
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {};

      return (
        <CenteredBox align='left'>
           <ColorButton2 
     style={{ marginRight: 6 }} onClick={verifyUser}>
     Verify
      </ColorButton2>
      <ColorButton3
      onClick={rejectUser}
      >
        Reject
        </ColorButton3>
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
export default function UniversityRegistrationTable() {
  const [tableData, setTableData] = useState([]);
  let tableRows = []
  //get data from database
  React.useEffect(() => {
    fetchUserData({
      url: "admin/getAllUni",
      method: "post",
    }).then((response) => {
      response.data.map((row) => {
        if (row.userType == "university") {
          tableRows.push({
            id: row.userId,
            col1: `${row.university}`,
            col2: `${row.faculty} `,
            col3: row.email,
          })
        }
      })
      setTableData(tableRows);
    });
  }, []);

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
            rows={tableData}
            columns={columns}
          />
        </Box>
      </Box>
    </Grid>
  );
}
