import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import {auth} from "../firebase"
import { AuthProvider } from "../context/AuthContext"

import Chats from "./Chats"
import Login from "./Login"

function App() {
  
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
        <Routes>
        <Route path="/" >
        <Route path="chats" element={<Chats/>} />

          <Route path="login" element={<Login />} />
          
        </Route>
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App
