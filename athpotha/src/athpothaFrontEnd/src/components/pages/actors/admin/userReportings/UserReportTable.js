import * as React from "react";
import PropTypes from 'prop-types';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  gridClasses 
} from '@mui/x-data-grid';
// import styled from "@emotion/styled";
import { green, red, blue,orange,blueGrey } from "@mui/material/colors";
import CenteredBox from "../../../../ui/CenteredBox";
import {
  Box,
  Button,
  Grid
} from "@mui/material";
import { alpha, styled } from '@mui/material/styles';

// striped rows
const ODD_OPACITY = 0.2;
const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
      backgroundColor: theme.palette.grey[300],
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&.Mui-selected': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity,
        ),
        '&:hover, &.Mui-hovered': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY +
              theme.palette.action.selectedOpacity +
              theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY + theme.palette.action.selectedOpacity,
            ),
          },
        },
      },
    },
  }));

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
    textTransform: "none",
    backgroundColor: red[600],
    "&:hover": {
      backgroundColor: red[700],
    },
  }));
  
  const ColorButton4 = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[600]),
    textTransform: "none",
    backgroundColor: orange[600],
    "&:hover": {
      backgroundColor: orange[700],
    },
  }));

const rows = [
  {
    id: 1,
    col1: "Kasun",
    col2: "Perera",
    col3: "2022-02-01",
    col4: "Fake Account",
  },
  {
    id: 2,
    col1: "Roneki",
    col2: "Manamperi",
    col3: "2022-02-01",
    col4: "Fake Account",
  },
  {
    id: 3,
    col1: "Roneki",
    col2: "Manamperi",
   col3: "2022-02-01",
   col4: "Fake Account",
  },
  {
    id: 4,
    col1: "Roneki",
    col2: "Manamperi",
    col3: "2022-02-01",
    col4: "Fake Account",
  },
  {
    id: 5,
    col1: "Roneki",
    col2: "Manamperi",
    col3: "2022-02-01",
    col4: "Fake Account",
  },
  {
    id: 6,
    col1: "Roneki",
    col2: "Manamperi",
    col3: "2022-02-01",
    col4: "Fake Account",
  },
];

const columns = [
  {
    field: "col1",
    headerName: "Reporter",
    headerClassName: "header-class-name",
    width: 150,
  },
  {
    field: "col2",
    headerName: "Reportee",
    headerClassName: "header-class-name",
    width: 150,
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
    width: 250,
  },

  {
    field: "col5",
    headerName: "Actions",
    headerClassName: "header-class-name",
    width: 500,
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {};

      return (
        <>
          <CenteredBox align="center">
            <ColorButton1 style={{ marginRight: 30 }}>View User</ColorButton1>
          </CenteredBox>
          <CenteredBox align="center">
            <ColorButton2 style={{ marginRight: 30 }}>Reports</ColorButton2>
          </CenteredBox>
          <CenteredBox align="center">
            <ColorButton3 style={{ marginRight: 30 }}>Block</ColorButton3>
          </CenteredBox>
          <CenteredBox align="center">
            <ColorButton4 style={{ marginRight: 30 }}>Warn</ColorButton4>
          </CenteredBox>
        </>
      );
    },
  },
];

export default function DonationPendingTable() {
  const [filterButtonEl, setFilterButtonEl] = React.useState(null);
  return (
    <Grid>
      <div style={{ height: 300, width: "1150px" }}>
        <Box
          sx={{
            height: 600,
            width: "100%",
            align: "center",
            "& .header-class-name": {
              backgroundColor: "rgba(105, 105, 105, 0.70)",
            },
          }}
        >
          <StripedDataGrid
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
            getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
              }
            rows={rows}
            columns={columns}
          />
        </Box>
      </div>
    </Grid>
  );
}
