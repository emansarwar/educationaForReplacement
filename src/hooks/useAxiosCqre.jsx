import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
// import React from 'react'
const axiosCqre = axios.create({
  baseURL: "https://food-server-sepia-nine.vercel.app",
});
const useAxiosCqre = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  axiosCqre.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  axiosCqre.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      // console.log('error', error)
      const statuus = error.response.status;
      // console.log('statuus', statuus)
      if (statuus === 401 || statuus === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosCqre;
};

export default useAxiosCqre;
