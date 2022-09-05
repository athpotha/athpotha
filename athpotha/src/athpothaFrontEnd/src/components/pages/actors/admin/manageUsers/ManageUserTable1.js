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
  backgroundColor: green[600],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

const ColorButton2 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[600]),
  backgroundColor: red[600],
  "&:hover": {
    backgroundColor: red[700],
  },
}));

function createData(name, calories, fat) {
  return { name, calories, fat};
}

const rows = [
  createData("Kasun", "Perera", "Done IJSE"),
  createData("Nuwan", "Janitha", "Done CIMA"),
  createData("Kumara", "Liyanage", "Done AAT"),
  createData("Nuwan", "Janitha", "OL Qualified"),
  createData("Kumara", "Liyanage", "Business Management"),
];
const updateRow = () => {
  console.log("ada");
};

export default function CustomizedTables() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
              <StyledTableCell align="left">First Name</StyledTableCell>
              <StyledTableCell align="left">Last Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
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
  );
}
