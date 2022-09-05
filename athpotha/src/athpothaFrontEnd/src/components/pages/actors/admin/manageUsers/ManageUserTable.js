import * as React from "react";
import PropTypes from 'prop-types';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  gridClasses 
} from '@mui/x-data-grid';
// import styled from "@emotion/styled";
import { green, red, blue } from "@mui/material/colors";
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
  backgroundColor: red[600],
  textTransform: "none",
  "&:hover": {
    backgroundColor: red[700],
  },
}));

const rows = [
  {
    id: 1,
    col1: "Kasun",
    col2: "Perera",
    col3: "kasun@gmail.com",
  },
  {
    id: 2,
    col1: "Roneki",
    col2: "Manamperi",
    col3: "roneki.saranga12@gmail.com",
  },
  {
    id: 3,
    col1: "Roneki",
    col2: "Manamperi",
    col3: "roneki.saranga12@gmail.com",
  },
  {
    id: 4,
    col1: "Roneki",
    col2: "Manamperi",
    col3: "roneki.saranga12@gmail.com",
  },
  {
    id: 5,
    col1: "Roneki",
    col2: "Manamperi",
    col3: "roneki.saranga12@gmail.com",
  },
  {
    id: 6,
    col1: "Roneki",
    col2: "Manamperi",
    col3: "roneki.saranga12@gmail.com",
  },
];

const columns = [
  {
    field: "col1",
    headerName: "First Name",
    headerClassName: "header-class-name",
    width: 150,
  },
  {
    field: "col2",
    headerName: "Last Name",
    headerClassName: "header-class-name",
    width: 150,
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
    width: 400,
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
            <ColorButton2 style={{ marginRight: 30 }}>Update</ColorButton2>
          </CenteredBox>
          <CenteredBox align="center">
            <ColorButton3 style={{ marginRight: 30 }}>Delete</ColorButton3>
          </CenteredBox>
        </>
      );
    },
  },
];

export default function DonationPendingTable() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [filterButtonEl, setFilterButtonEl] = React.useState(null);
  return (
    <Grid>
      {/* select dropdown */}
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ maxWidth: 200, mb: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select User Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="User_Type"
                onChange={handleChange}
              >
                <MenuItem value={10}>Student</MenuItem>
                <MenuItem value={20}>Teacher</MenuItem>
                <MenuItem value={30}>University Representative</MenuItem>
                <MenuItem value={40}>Stakeholders</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>

      <div style={{ height: 300, width: "1000px" }}>
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
