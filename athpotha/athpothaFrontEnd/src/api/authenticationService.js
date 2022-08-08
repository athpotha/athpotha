import React from "react";
import axios from "axios";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const userLogin = (authRequest) => {
  return axios.post("api/v1/auth/login", {
    authRequest,
  });
};

export const userRegistration = (authRequest) => {
  return axios.post("api/v1/auth/login", {
    authRequest,
  });
};
export const fetchUserData = (authRequest) => {
  return axios({
    method: authRequest.method,
    url: authRequest.url,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    data: authRequest.data,
  });
};
