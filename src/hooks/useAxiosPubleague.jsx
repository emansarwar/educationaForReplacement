import axios from "axios";

// import React from 'react'
const axiosPubleague = axios.create({
  baseURL: "https://food-server-sepia-nine.vercel.app",
});

const useAxiosPubleague = () => {
  return axiosPubleague;
};

export default useAxiosPubleague;
