import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Test from "./components/pages/test/Test";
import { createTheme, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Home from "./components/pages/landing/Home";
import { blue, lightBlue } from "@mui/material/colors";
import Registration from "./components/pages/login/Registration";
import Main from "./components/pages/wall-home/Main";
// import { Theme } from "@mui/material";
import Notifications from "./components/pages/notifications/Notifications";
import Profile from "./components/pages/profile/Profile";
import Chat from "./components/pages/chat/Chat";
import MyNetwork from "./components/pages/my-network/MyNetwork";
import AuthContext from "./store/ath-context";
import UniProfile from "./components/pages/uni-profile/UniProfile";
import WebsiteActivity from './components/pages/actors/admin/WebsiteActivity/WebsiteActivity'

import { useSelector } from "react-redux";
import Admin from "./components/pages/actors/admin/Admin";
import Categories from "./components/pages/wall-home/Categories";
import ManageUser from "./components/pages/actors/admin/manageUsers/ManageUser";
import UniversityRegistration from "./components/pages/actors/admin/UniversityRegistration";
import UserReport from "./components/pages/actors/admin/userReportings/UserReport";
import CoursePage from "./components/pages/course-page/CoursePage";
import ViewProfile from "./components/pages/view-profile/ViewProfile";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: blue[300],
        main: blue[600],
        dark: blue[800],
        darker: "#285e89",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: blue[800],
        dark: "#ba000d",
        contrastText: "#000",
      },
      background: {
        light: "#F2F8FC",
        main: "#E6F2FA",
        dark: lightBlue["A100"],
        contrastText: "#000",
        paper: "#fff",
        default: "#fff",
      },
    },
    typography: {
      fontFamily: "Poppins",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });

  const authCtx = useContext(AuthContext);
  const [userType, setUserType] = useState(localStorage.getItem("USER_TYPE"));
  // localStorage.setItem("USER_TYPE", "student");
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration/" element={<Registration />} exact />
          <Route path="/home" element={<Home />}></Route>
          {authCtx.isLoggedIn && userType !== "university" && userType !== "admin" && (
            <Route path="/main" element={<Main />}></Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/my-network" element={<MyNetwork />}></Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/notifications" element={<Notifications />}></Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/chat" element={<Chat />}></Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/profile" element={<Profile />}></Route>
          )}

          <Route path="/test" element={<Test />}></Route>
          <Route path="*" element={<Navigate to="/" />}>
            {/* <Navigate to="/" /> */}
          </Route>
          <Route path="/uni-profile" element={<UniProfile />}></Route>
          {/* {authCtx.isLoggedIn && <Route path="/admin" element={<Admin />}></Route>} */}
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin/manage-users" element={<ManageUser />}></Route>
          <Route path="/admin/university-registration" element={<UniversityRegistration />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/admin/website-activity" element={<WebsiteActivity />}></Route>
          <Route path="/admin/user-reports" element={<UserReport />}></Route>
          <Route path="/course-page" element={<CoursePage />}></Route>
          <Route path="/user/view-user" element={<ViewProfile />}></Route>
          <Route path="/university/view-user" element={<ViewProfile />}></Route>
          <Route path="/community/view-user" element={<ViewProfile />}></Route>
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
