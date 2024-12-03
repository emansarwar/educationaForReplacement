// import React from 'react'

import { FaGoogle } from "react-icons/fa"
import useAuth from "../../hooks/useAuth"
import useAxiosPubleague from "../../hooks/useAxiosPubleague";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPubleague = useAxiosPubleague();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then((result) =>{
            // console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPubleague.post('/users', userInfo)
            .then(res =>{
                // console.log(res.data)
                navigate('/');
            })
        })
        // .catch((error) => {
        //     console.log(error.message);
        // })
    }
  return (
    <div className="px-10">
        <div className="divider"></div>
        <button onClick={handleGoogleSignIn} className="w-full btn btn-success">
            <FaGoogle className="m-2"></FaGoogle> GOOGLE
        </button>
    </div>
  )
}

export default SocialLogin