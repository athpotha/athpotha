import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Invitation from "./Invitation";
import { Button, Modal } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FollowStudent, FollowTeacher, FollowUniversity } from "./Follow";
import { fetchUserData } from "../../../api/authenticationService";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '7px',
  boxShadow: 35,
  p: 4,
  width: "58%",
};

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

  const [openOne, setOpenOne] = React.useState(false);
  const handleOpenOne = () => setOpenOne(true);
  const handleCloseOne = () => setOpenOne(false);

  const [openTwo, setOpenTwo] = React.useState(false);
  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false);

  const [openThree, setOpenThree] = React.useState(false);
  const handleOpenThree = () => setOpenThree(true);
  const handleCloseThree = () => setOpenThree(false);

  const [openFour, setOpenFour] = React.useState(false);
  const handleOpenFour = () => setOpenFour(true);
  const handleCloseFour = () => setOpenFour(false);


  const [tutor, setTutor] = React.useState([])

  // React.useEffect(() => {
  //   fetch("http://localhost:8080/network/getTutors")
  //     .then(res => res.json())
  //     .then((result) => {
  //       setTutor(result)
  //     }
  //     )
  // }, [])

  const user_id = localStorage.getItem("USER_ID")
  
  React.useEffect(() => {
    fetchUserData({
      url: "network/getTutors",
      method: "post",
      data:{user_id: user_id}
    }).then((response) => {
      setTutor(response.data)
  })
  
  },[])
  

  return (
    <StyledEngineProvider injectFirst>
      {/* <Container> */}
      <Typography component="div" sx={{ mb: '30px', }}>
        <div style={{}}>

          <Invitation></Invitation>

          <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(4, 1fr)' }}>

            <Item>
              <div style={{ height: '40px', display: 'flex', justifyContent: 'space-between', p: 1, m: 1, alignItems: 'center' }}>
                <div>Trending universities in your network</div>
                <div><Button onClick={handleOpenOne}>See all</Button></div>
                <Modal open={openOne} >
                  <Box sx={style}>
                    <IconButton
                      aria-label="close"
                      onClick={handleCloseOne}
                      sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Box sx={{
                      mt: "25px",
                      height: "70vh",
                      overflow: "auto",
                    }}>
                      {/* <FollowUniversity value={0} tutors={tutor}></FollowUniversity> */}
                    </Box>
                  </Box>
                </Modal>
              </div>
              {/* <FollowUniversity value={1} tutors={tutor}></FollowUniversity> */}
            </Item>

            <Item>
              <div style={{ height: '40px', display: 'flex', justifyContent: 'space-between', p: 1, m: 1, alignItems: 'center' }}>
                <div>People in the community expert you may know</div>
                <div><Button onClick={handleOpenTwo}>See all</Button></div>
                <Modal open={openTwo} >
                  <Box sx={style}>
                    <IconButton
                      aria-label="close"
                      onClick={handleCloseTwo}
                      sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Box sx={{
                      mt: "25px",
                      height: "70vh",
                      overflow: "auto",
                    }}>
                      {/* <FollowStudent value={2} tutors={tutor}></FollowStudent> */}
                    </Box>
                  </Box>
                </Modal>
              </div>
              {/* <FollowStudent value={3} tutors={tutor}></FollowStudent> */}
            </Item>

            <Item>
              <div style={{ height: '40px', display: 'flex', justifyContent: 'space-between', p: 1, m: 1, alignItems: 'center' }}>
                <div>People who are teachers you may know</div>
                <div><Button onClick={handleOpenThree}>See all</Button></div>
                <Modal open={openThree} >
                  <Box sx={style}>
                    <IconButton
                      aria-label="close"
                      onClick={handleCloseThree}
                      sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Box sx={{
                      mt: "25px",
                      height: "70vh",
                      overflow: "auto",
                    }}>
                      <FollowTeacher value={4} tutors={tutor}></FollowTeacher>
                    </Box>
                  </Box>
                </Modal>
              </div>
              <FollowTeacher value={5} tutors={tutor}></FollowTeacher>
            </Item>

            <Item>
              <div style={{ height: '40px', display: 'flex', justifyContent: 'space-between', p: 1, m: 1, alignItems: 'center' }}>
                <div>More sugession for you</div>
                <div><Button onClick={handleOpenFour}>See all</Button></div>
                <Modal open={openFour} >
                  <Box sx={style}>
                    <IconButton
                      aria-label="close"
                      onClick={handleCloseFour}
                      sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Box sx={{
                      mt: "25px",
                      height: "70vh",
                      overflow: "auto",
                    }}>
                      {/* <FollowStudent value={6} tutors={tutor}></FollowStudent> */}
                    </Box>
                  </Box>
                </Modal>
              </div>
              {/* <FollowStudent value={7} tutors={tutor}></FollowStudent> */}
            </Item>
          </Box>
        </div>
      </Typography>
      {/* </Container> */}
    </StyledEngineProvider>
  );
}

export default Content; 