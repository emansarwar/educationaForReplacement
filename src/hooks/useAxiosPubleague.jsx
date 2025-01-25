import axios from "axios";

// import React from 'react'
const axiosPubleague = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosPubleague = () => {
  return axiosPubleague;
};

export default useAxiosPubleague;
