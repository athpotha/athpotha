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
          <ConfirmPopup />
          <RejectDeletePopUp text="Reject"/>
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
            rows={tableData}
            columns={columns}
          />
        </Box>
      </Box>
    </Grid>
  );
}
