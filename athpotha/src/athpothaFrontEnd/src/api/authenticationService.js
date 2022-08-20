import React from "react";
import axios from "axios";

const getToken = () => {
  return localStorage.getItem('USER_KEY');
};

export const checkEmail = (authRequest) => {
  return axios.post("api/v1/user/check-email", {
    email: authRequest
  })
}

export const userRegistration = (authRequest) => {
  return axios.post("api/v1/user/registration", authRequest);
};

export const userLogin = (authRequest) => {
  return axios.post("api/v1/auth/login", authRequest);
};

export const fetchUserData = (authRequest) => {
  if (authRequest.method === "post") {
    return axios.post(authRequest.url, authRequest.data, {
      headers: {
        'Authorization': "Bearer " + getToken(),
      }
    })
  } else if(authRequest.method === "put") {
    return axios.put(authRequest.url, authRequest.data, {
      headers: {
        'Authorization': "Bearer " + getToken(),
      }
    })
  } else if(authRequest.method === "get") {
    return axios.get(authRequest.url, authRequest.data, {
      headers: {
        'Authorization': "Bearer " + getToken(),
      }
    })
  }
};
