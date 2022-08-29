import React, { useEffect, useState } from "react";
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

import { leftbarItem } from "../../../services/ListItemService";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserData } from "../../../api/authenticationService";


function ViewProfile(props) {
  const navigate = useNavigate();
  const listItems = leftbarItem();
  const { name } = useParams();
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  console.log(name, userId);


  const fetchUsers = async () => {
    setIsLoading(true)
    try {
      const response = await fetchUserData({
        url: "api/v1/logged-user/get-user",
        method: "post",
        data: {
          userId: userId
        }
      })
      const user = await response.data;
      console.log(user);
      // const transformedContent = await users.map((user) => (
          
      //   ))
      // setContent(transformedContent);
      setUser(user);
    } catch (error) {

    }
    setIsLoading(false);
    // await content = users.
    // .then((response) => {
    //   console.log(response.data);
    //   setUsers(response.data);
    //   setIsLoading(false)
    // })
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  if (isLoading) {
    return <p>Loading ....</p>
  }
  return (
    <React.Fragment>
      <MainHeader value={0} />
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
                  <ListItemButton onClick={() => { navigate(listItem.link) }}>
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
          <Content user={user}></Content>
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
    </React.Fragment>
  );
}

export default ViewProfile;
