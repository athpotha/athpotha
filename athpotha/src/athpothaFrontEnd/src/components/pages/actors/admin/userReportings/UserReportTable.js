import * as React from "react";
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
  backgroundColor: blue[600],
  "&:hover": {
    backgroundColor: blue[700],
  },
}));

const ColorButton2 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[600]),
  backgroundColor: green[600],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

const ColorButton3 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[600]),
  backgroundColor: red[600],
  "&:hover": {
    backgroundColor: red[700],
  },
}));

const ColorButton4 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[600]),
  backgroundColor: orange[600],
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

export default function CustomizedTables() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
    </Grid>
  );
}
