import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Invitation from "./Invitation";
import Follow from "./Follow";
import { Button } from "@mui/material";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        m: 1,
        borderRadius: 2,
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

function Content() {

  return (
    <StyledEngineProvider injectFirst>
      {/* <Container> */}
        <Typography component="div" style={{ backgroundColor: '#ffffff'}}>
          <div >
            <Invitation></Invitation>
            <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(4, 1fr)' }}>
              <Item>
                <div style={{ height: '40px', display: 'flex', justifyContent: 'space-between', p: 1, m: 1, alignItems: 'center' }}>
                  <div>Trending universities in your network</div>
                  <div><Button>See all</Button></div>
                </div><Follow></Follow>
              </Item>
              <Item>
                <div style={{ height: '40px', display: 'flex', justifyContent: 'space-between', p: 1, m: 1, alignItems: 'center' }}>
                  <div>People in the community expert you may know</div>
                  <div><Button>See all</Button></div>
                </div><Follow></Follow>
              </Item>
              <Item>
                <div style={{ height: '40px', display: 'flex', justifyContent: 'space-between', p: 1, m: 1, alignItems: 'center' }}>
                  <div>People who are teachers you may know</div>
                  <div><Button>See all</Button></div>
                </div><Follow></Follow>
              </Item>
              <Item>
                <div style={{ height: '40px', display: 'flex', justifyContent: 'space-between', p: 1, m: 1, alignItems: 'center' }}>
                  <div>More sugession for you</div>
                  <div><Button>See all</Button></div>
                </div><Follow></Follow>
              </Item>
            </Box>
          </div>
        </Typography>
      {/* </Container> */}
    </StyledEngineProvider>
  );
}

export default Content;