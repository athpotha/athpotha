import React from "react";
// import ReactDOM from "react-dom/client";
// import Home from "../../chat/chatFirebase/pages/Home.jsx";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <AuthContextProvider>
//     <ChatContextProvider>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </ChatContextProvider>
//   </AuthContextProvider>
// );


function Chat() {
  // const { currentUser } = useContext(AuthContext);

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/chat" />;
  //   }

  //   return children
  // };
  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <React.StrictMode>
          {/* <ProtectedRoute> */}
            <Login></Login>
          {/* </ProtectedRoute> */}
        </React.StrictMode>
      </ChatContextProvider>
    </AuthContextProvider>
  );
}
export default Chat;
