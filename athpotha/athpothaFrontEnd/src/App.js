import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
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
        dark: lightBlue['A100'],
        contrastText: "#000",
        paper: "#fff",
        default: "#fff"
      }
    },
    typography: {
      fontFamily: "Poppins",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/my-network" element={<MyNetwork />}></Route> 
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
