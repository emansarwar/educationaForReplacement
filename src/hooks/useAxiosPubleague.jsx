import axios from "axios";

// import React from 'react'
const axiosPubleague = axios.create({
  baseURL: "https://eduplacementserver.vercel.app",
});

const useAxiosPubleague = () => {
  return axiosPubleague;
};

export default useAxiosPubleague;
