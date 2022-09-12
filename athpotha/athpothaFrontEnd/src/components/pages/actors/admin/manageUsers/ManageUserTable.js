import * as React from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  gridClasses,
} from "@mui/x-data-grid";
// import styled from "@emotion/styled";
import { green, red, blue } from "@mui/material/colors";
import CenteredBox from "../../../../ui/CenteredBox";
import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Popup from "./Popup";
import { useRef } from "react";

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
=======
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { create } from "@mui/material/styles/createTransitions";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FormLabel } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import CenteredBox from "../../../../ui/CenteredBox";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ColorButton1 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[600]),
>>>>>>> fdd58da438b8c85638e2dd4fb4b6fdeb9d9b0e98
  backgroundColor: green[600],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

<<<<<<< HEAD
const ColorButton3 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[600]),
  backgroundColor: red[600],
  textTransform: "none",
=======
const ColorButton2 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[600]),
  backgroundColor: red[600],
>>>>>>> fdd58da438b8c85638e2dd4fb4b6fdeb9d9b0e98
  "&:hover": {
    backgroundColor: red[700],
  },
}));

<<<<<<< HEAD
const style = {
  boxShadow: 24,
  borderRadius: "0.5%",
  backgroundColor: "white",
};
export default function ManageUSerTable() {
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(false);

  const modelRef = useRef();

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
    }
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
      field: "col4",
      headerName: "Actions",
      headerClassName: "header-class-name",
      width: 400,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        // const onClick = (e) => {};

        return (
          <CenteredBox align="left">
            <Popup />
            <ColorButton2 style={{ marginRight: 6 }}>Update</ColorButton2>
            <ColorButton3>Delete</ColorButton3>
          </CenteredBox>         
        );
      },
    },
  ];
=======
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Student", "Kasun", "Perera", "Done IJSE", "Undergraduate at UCSC", 24, 4.0),
  createData("Student", "Nuwan", "Janitha", "Done CIMA"," Student at Leeds", 37, 4.3),
  createData("Teacher", "Kumara", "Liyanage", "Done AAT", "Teacher at Leeds", 24, 6.0),
  createData("Student", "Nuwan", "Janitha", "OL Qualified", "Undergraduate at UCSC", 37, 4.3),
  createData("Teacher", "Kumara", "Liyanage", "Business Management", "Teacher at Leeds", 24, 6.0),
];
const updateRow = () => {
  console.log("ada");
};

export default function CustomizedTables() {
  const [age, setAge] = React.useState("");
>>>>>>> fdd58da438b8c85638e2dd4fb4b6fdeb9d9b0e98

  const handleChange = (event) => {
    setAge(event.target.value);
  };
<<<<<<< HEAD
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
              rows={rows}
              columns={columns}
            />
          </Box>
        </Box>
      </Grid>
    </div>
=======
  return (
    <Grid>
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

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">User Type</StyledTableCell>
              <StyledTableCell align="left">First Name</StyledTableCell>
              <StyledTableCell align="left">Last Name</StyledTableCell>
              <StyledTableCell align="left">Qualification</StyledTableCell>
              <StyledTableCell align="left">Bio</StyledTableCell>
              <StyledTableCell align="left">
                <CenteredBox align="center">Actions</CenteredBox>
              </StyledTableCell>
              {/* <StyledTableCell align="left">Buttons</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.calories}</StyledTableCell>
                <StyledTableCell align="left">{row.fat}</StyledTableCell>
                <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                <StyledTableCell align="left">{row.protein}</StyledTableCell>
                <StyledTableCell align="left">
                  <Grid container>
                    <Grid item xs={6}>
                      <CenteredBox align="center"><ColorButton1 variant="contained">Update</ColorButton1></CenteredBox>
                    </Grid>
                    <Grid item xs={6}>
                      <ColorButton2 variant="contained">Delete</ColorButton2>
                    </Grid>
                  </Grid>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
>>>>>>> fdd58da438b8c85638e2dd4fb4b6fdeb9d9b0e98
  );
}
