// import { StyledEngineProvider } from "@mui/material";
// import React from "react";
// import MainHeader from "../../ui/insight/MainHeader";
// import {useNavigate} from 'react-router-dom';
// import { Box, Container } from '@mui/system';
// import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
// import Avatar from '@mui/material/Avatar';
// import { Link } from "react-router-dom";



// function Profile() {

//   const navigate = useNavigate();

//   const products = ['1', '2', '3', '4', '5', '6'];

//   const handleProfileClick = (event, param) => {
//       navigate('/profile')
//   };
  
  
//   return (
//     <StyledEngineProvider injectFirst>
//       <MainHeader value={4} />
      
//             <div sx={{ width: '100%' }}>
//                 <Box sx={{
//                     display: 'grid',
//                     gap: 2,
//                     gridTemplateColumns: 'repeat(3, 1fr)',
//                 }}>
//                     {products.map(product => (
//                         <Box sx={{ p: 1, m: 1, }}>
//                             <Card sx={{ maxWidth: 320 }}>
//                                 <div style={{ position: 'relative' }}>
//                                     <CardMedia
//                                         component="img"
//                                         height="90"
//                                         image="images/tutors/tutor-1.jpg"
//                                         alt="green iguana"
//                                     />
//                                     <div style={{ position: 'absolute', top: '30px', left: '16px' }}>
//                                         <Avatar alt="Remy Sharp" src="image3.jpg" sx={{ width: 90, height: 90, cursor: 'pointer' }} 
//                                         onClick={event => handleProfileClick(event, 'myprofile')} />
//                                         <Link to="/profile"></Link>
//                                     </div>
//                                 </div>
//                                 <div style={{ marginTop: '35px', marginLeft: '16px' }}>
//                                     <Box>Ashani Imalsha</Box>
//                                     <Box sx={{fontSize:'10pt'}}>Software Engineer at 99X</Box>
//                                     <Box sx={{mt:3,fontSize:'10pt'}}>1,100 followers</Box>
//                                 </div>
//                                 <CardActions>
//                                     <Button size="small" variant="outlined">Follow</Button>
//                                 </CardActions>
//                             </Card>
//                         </Box>
//                     ))
//                     }

//                 </Box>
//             </div>
//         </StyledEngineProvider>
    
//   );
// }

// export default Profile;


import React from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import MainHeader from "../../ui/insight/MainHeader";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Leftbar from "../../ui/insight/leftbar/Leftbar";
import Rightbar from "../../ui/insight/rightbar/Rightbar";
import Content from "./Content";

import BookmarksIcon from "@mui/icons-material/Bookmarks";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CellTowerIcon from "@mui/icons-material/CellTower";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
const listItems = [
  {
    id: "leftbar-listItem-1",
    listName: "Connections",
    icon: <PeopleAltIcon />,
  },
  {
    id: "leftbar-listItem-3",
    listName: "Commiunity Experts",
    icon: <CellTowerIcon />,
  },
  {
    id: "leftbar-listItem-2",
    listName: "Teachers",
    icon: <CastForEducationIcon />,
  },
  {
    id: "leftbar-listItem-5",
    listName: "Courses",
    icon: <SchoolIcon />,
  },
  {
    id: "leftbar-listItem-4",
    listName: "Bookmarks",
    icon: <BookmarksIcon />,
  },
];

function Profile() {
  return (
    <StyledEngineProvider injectFirst>
      <MainHeader value={4} />
      <Grid
        container
        spacing={2}
        style={{
          boxSizing: "initial",
          width: "1500px",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "stretch",
          backgroundColor: "rgb(242, 250, 255)",
        }}
      >
        <Grid
          item
          xs={2}
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            paddingTop: 100,
          }}
        >
          <Leftbar>
            <List>
              {listItems.map((listItem) => (
                <ListItem key={listItem.id} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{listItem.icon}</ListItemIcon>
                    <ListItemText primary={listItem.listName} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Leftbar>
        </Grid>
        <Grid item xs={7} style={{ paddingTop: 120 }}>
          {/* Middle Section comes here */}
          <Content></Content>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            paddingTop: 100,
          }}
        >
          <Rightbar></Rightbar>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
}

export default Profile;
