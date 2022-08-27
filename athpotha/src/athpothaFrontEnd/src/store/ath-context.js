import React, { useState, useEffect, useCallback } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => { },
  userInfo: (user) => { },
  logout: () => { },
  userHasLogged: (isLogged) => { },
  hasLogged: false
});


const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('USER_KEY');
  return {
    token: storedToken,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const [hasLogged, setHasLogged] = useState(localStorage.getItem("HAS_LOGGED"));

  const userIsLoggedIn = !!token;
  const hasUserLoggedIn = hasLogged;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('USER_KEY');
    localStorage.removeItem("USER_TYPE");
    localStorage.removeItem("USER_ID");
    localStorage.removeItem("USER_NAME");
    localStorage.removeItem("FIRST_NAME");
    localStorage.removeItem("LAST_NAME");
    localStorage.removeItem("USER_EMAIL");
    localStorage.removeItem("PROFILE_PIC");
    localStorage.removeItem("COVER_PIC");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
    window.location.reload();
  }, []);

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('USER_KEY', token);
    return true;
  };

  const hasLoggedHandler = (isLogged) => {
    setHasLogged(isLogged);
  }

  const userInfoHandler = (user) => {
    console.log(user);
    localStorage.setItem("USER_TYPE", user.user_type);
    localStorage.setItem("USER_ID", user.user_id);
    localStorage.setItem("USER_NAME", `${user.first_name} ${user.last_name}`);
    localStorage.setItem("FIRST_NAME", user.first_name);
    localStorage.setItem("LAST_NAME", user.last_name);
    localStorage.setItem("USER_EMAIL", user.email);
    localStorage.setItem("PROFILE_PIC", user.profile_picture);
    localStorage.setItem("COVER_PIC", user.cover_picture);
    localStorage.setItem("HAS_LOGGED", user.hasLogged);
    hasLoggedHandler(user.hasLogged);
    if(user.user_type === "student") {
      localStorage.setItem("STUDENT_TYPE", user.studentType);
    } else if(user.user_type === 'tutor') {

    } else if(user.user_type === 'university') {

    } else if(user.user_type === 'commiunity') {

    }
  }

  // useEffect(() => {
  //   if (tokenData) {
  //     console.log(tokenData.duration);
  //   }
  // }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    userInfo: userInfoHandler,
    logout: logoutHandler,
    userHasLogged: hasLoggedHandler,
    hasLogged: hasUserLoggedIn
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
