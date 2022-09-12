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
import { green, red, blue, orange } from "@mui/material/colors";
import CenteredBox from "../../../../ui/CenteredBox";
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
>>>>>>> fdd58da438b8c85638e2dd4fb4b6fdeb9d9b0e98
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
<<<<<<< HEAD
import { alpha, styled } from "@mui/material/styles";

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
=======
import { FormLabel } from "@mui/material";
import {
  blue,
  blueGrey,
  green,
  orange,
  red,
  yellow,
} from "@mui/material/colors";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("1", "2", "2022-01-5", "Fake Account"),
  createData("5", "8", "2022-01-6", "Malicious COntent"),
  createData("10", "3", "2022-01-7", "Malicious COntent"),
  createData("5", "7", "2022-01-8", "Malicious COntent"),
  createData("9", "11", "2022-01-9", "Fake Account"),
];
const updateRow = () => {
  console.log("user reports");
};

const ColorButton1 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[600]),
>>>>>>> fdd58da438b8c85638e2dd4fb4b6fdeb9d9b0e98
  backgroundColor: blue[600],
  "&:hover": {
    backgroundColor: blue[700],
  },
}));

const ColorButton2 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[600]),
<<<<<<< HEAD
  textTransform: "none",
=======
>>>>>>> fdd58da438b8c85638e2dd4fb4b6fdeb9d9b0e98
  backgroundColor: green[600],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

const ColorButton3 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[600]),
  backgroundColor: red[600],
<<<<<<< HEAD
  textTransform: "none",
=======
>>>>>>> fdd58da438b8c85638e2dd4fb4b6fdeb9d9b0e98
  "&:hover": {
    backgroundColor: red[700],
  },
}));

const ColorButton4 = styled(Button)(({ theme }) => ({
<<<<<<< HEAD
  color: theme.palette.getContrastText(orange[600]),
  backgroundColor: orange[600],
  textTransform: "none",
=======
  color: theme.palette.getContrastText(blueGrey[600]),
  backgroundColor: orange[600],
>>>>>>> fdd58da438b8c85638e2dd4fb4b6fdeb9d9b0e98
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

<<<<<<< HEAD
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
    headerName: "Reporter",
    headerClassName: "header-class-name",
    width: 100,
  },
  {
    field: "col2",
    headerName: "Reportee",
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
          <ColorButton1 style={{ marginRight: 6 }}>View User</ColorButton1>
          <ColorButton2 style={{ marginRight: 6 }}>Reports</ColorButton2>
          <ColorButton4 style={{ marginRight: 6 }}>Warn</ColorButton4>
          <ColorButton3>Block</ColorButton3>
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
=======
export default function CustomizedTables() {
>>>>>>> fdd58da438b8c85638e2dd4fb4b6fdeb9d9b0e98
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
<<<<<<< HEAD
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
=======
  return (
    <Grid>
      {/* <Grid container>
      
      <Grid item xs={12}>
      <Box sx={{ maxWidth: 200 ,mb:3}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select User Type</InputLabel>
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
      </Grid> */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth:700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Reporter Id</StyledTableCell>
              <StyledTableCell align="left">Reportee Id</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">Reason</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
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
                  <Grid container spacing={3}>
                    <Grid item>
                      <ColorButton1 variant="contained">View User</ColorButton1>
                    </Grid>
                    <Grid item>
                      <ColorButton2 variant="contained">Reports</ColorButton2>
                    </Grid>
                    <Grid item>
                      <ColorButton3 variant="contained">Block</ColorButton3>
                    </Grid>
                    <Grid item>
                      <ColorButton4 variant="contained">Warn</ColorButton4>
                    </Grid>
                  </Grid>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
>>>>>>> fdd58da438b8c85638e2dd4fb4b6fdeb9d9b0e98
    </Grid>
  );
}
