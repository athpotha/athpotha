import * as React from "react";
import PropTypes from "prop-types";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
// import styled from "@emotion/styled";
import { green, red } from "@mui/material/colors";
import CenteredBox from "../../../../ui/CenteredBox";
import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ViewPopup from "./ViewPopup";
import { fetchUserData } from "../../../../../api/authenticationService";
import { useState } from "react";
import EditPopUp from "./EditPopUp";

//sweet alert
const Swal = require("sweetalert2");

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
const ColorButton3 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[600]),
  backgroundColor: red[600],
  textTransform: "none",
  "&:hover": {
    backgroundColor: red[700],
  },
}));

const style = {
  boxShadow: 24,
  borderRadius: "0.5%",
  backgroundColor: "white",
};

export default function ManageUSerTable() {
  
  const [tableData, setTableData] = useState([]);
  let tableRows = [];

  //get data from database
  React.useEffect(() => {
    fetchUserData({
      url: "admin/getAll",
      method: "post",
    }).then((response) => {
      response.data.map((row) => {
        if (row.userType !== "admin") {
          tableRows.push({
            id: row.userId,
            col1: `${row.userType}`,
            col2: `${row.firstName} ${row.lastName}`,
            col3: row.email,
          });
        //   console.log(tableRows['id]);
        // console.log(tableRows[0]['col1']);
        }
      });
      setTableData(tableRows);
    });
  }, []);

  //Delete User
  
  const openSweetAlert = (id) => {  
    const data = {
      url: `admin/deleteUser/${id}`,
      method: "put",
      data: null
    };
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#388e3c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Clicked Confirm");
        fetchUserData(data).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "User deleted",
            icon: "success",
            confirmButtonColor: "#388e3c",
          }).then(() => {        
              console.log("After Delete");
              window.location.replace("/admin/manage-users");
            })
        })
    }
})
}

  const columns = [
    {
      field: "col1",
      headerName: "User Type",
      headerClassName: "header-class-name",
      width: 200,
    },
    {
      field: "col2",
      headerName: "User Name",
      headerClassName: "header-class-name",
      width: 300,
    },
    {
      field: "col3",
      headerName: "Email",
      headerClassName: "header-class-name",
      width: 300,
    },

    {
      field: "col4",
      headerName: "Actions",
      headerClassName: "header-class-name",
      headerAlign: "center",
      width: 400,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        // console.log(params.row)
        // const onClick = (e) => {}    
        return (
          
          <CenteredBox align="left">
          
            <ViewPopup userId={params.row.id} />
            <EditPopUp userId={params.row.id} />
            <ColorButton3 onClick={() => {openSweetAlert(params.row.id)}}>Delete</ColorButton3>
          </CenteredBox>
        );
      },
    },
  ];
  
  const [filterButtonEl, setFilterButtonEl] = React.useState(null);

  return (
    <div>
      <Grid>
        <Box sx={style}>
          <Box
            sx={{
              height: 600,
              width: "100%",
              align: "center",
            }}
          >
            <DataGrid
              disableSelectionOnClick
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
    </div>
  );
}
