import React, { useState } from "react";
import PropTypes from 'prop-types';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import ContactList from "./ContactList";
import Wall from "./Wall";

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'ffffff'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          fontSize: '0.875rem',
          fontWeight: '700',
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
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };


function Content(props) {

  const [selectContact,setSelectContact] = useState()

    return (
        <StyledEngineProvider injectFirst>
            <Container sx={{ width: '60vw', mt: 12, maxHeight: '82vh' }}>
                <Typography component="div" style={{ backgroundColor: '#ffffff' }}>
                    <Box sx={{
                        display: 'grid' , gridTemplateColumns: 'auto auto'}}>
                        <Item sx={{
                            height: '82vh',
                            width:'22vw',
                            borderRadius:'7px 0 0 7px',
                        }}><ContactList setSelectContact={setSelectContact}/></Item>
                        <Item sx={{
                            height: '82vh',
                            width:'35vw',
                            borderRadius:'0 7px 7px 0',
                        }}><Wall selectContact={selectContact}/></Item>
                    </Box>
                </Typography>
            </Container>
        </StyledEngineProvider >
    );
}

export default Content;