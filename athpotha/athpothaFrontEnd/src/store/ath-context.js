import React, { useState, useEffect, useCallback } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => { },
  userInfo: (user) => { },
  logout: () => { },
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

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('USER_KEY');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('USER_KEY', token);
    return true;
  };

  const userInfoHandler = (user) => {
    localStorage.setItem("USER_TYPE", user.user_type);
    localStorage.setItem("USER_NAME", `${user.first_name} ${user.last_name}`);
    localStorage.setItem("FIRST_NAME", user.first_name);
    localStorage.setItem("LAST_NAME", user.last_name);
    localStorage.setItem("USER_EMAIL", user.email);
    localStorage.setItem("PROFILE_PIC", user.profile_picture);
    if(user.user_type === "student") {
      localStorage.setItem("STUDENT_TYPE", user.student_type);
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
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
