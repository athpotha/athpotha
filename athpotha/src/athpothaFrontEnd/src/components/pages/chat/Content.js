import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import ContactList from "./ContactList";
import Wall from "./Wall";
import { Grid } from "@mui/material";
import CenteredBox from "../../ui/CenteredBox";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "ffffff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

function Content() {
  
  const [selectContactid, setSelectContactid] = useState();
  const [selectContactdetails, setSelectContactdetails] = useState({value1:0,value2:"Chat for AthPotha"});

  return (
    <StyledEngineProvider injectFirst>
      <Container sx={{ maxHeight: "82vh" }}>
        <Typography component="div" style={{ backgroundColor: "#ffffff" }}>
          <Grid container>
            <Grid item xs={4}>
              <ContactList setSelectContactdetails={setSelectContactdetails} />
            </Grid>
            <Grid item xs={8}>
              <CenteredBox align="center">
                <div
                  // style={{ border: "1px solid", borderRadius: "7px 0 0 7px" }}
                  // style={{border: "1px solid #e0e0e0", borderRadius: "7px 0 0 7px",width: "32vw"}}
                >
                  <Wall selectContactdetails={selectContactdetails} />
                </div>
              </CenteredBox>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </StyledEngineProvider>
  );
}

export default Content;
