import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";

function App() {
  return (

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
  );
}

export default App;
