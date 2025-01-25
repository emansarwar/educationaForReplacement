// import React from 'react'
import { useContext, useEffect, useState, } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha} from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
// import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    
    const from = location.state?.from?.pathname || "/";
    // const from = location.state?.from?.pathname || "/";
    
    

    useEffect(()=>{
        loadCaptchaEnginge(3);
    },[])
    const handleCaptcha = (e) =>{
      
      const captcha = e.target.value;
      
      if (validateCaptcha(captcha)!==true) {
        alert('Captcha Does Not Match');
        setDisabled(true);
    }
    else {
      setDisabled(false)
    }
    }

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        
        
        
        // console.log(email, pass)
        signIn(email, pass)
        .then(result =>{
            const user = result.user;
            // console.log(user);
            Swal.fire({
              title: "User Login Successful.",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
            
           navigate(from, {replace: true})
        })



    }
  return (
    <>
    <Helmet>
      <title>Food Station | Login</title>
    </Helmet>
    <div className="bg-emerald-800 min-h-screen hero">
      <div className="lg:flex-row-reverse flex-col hero-content">
        <div className="m-20 text-center lg:text-left">
          <h1 className="font-bold text-5xl">Login now!</h1>
          <p className="py-6">
          Log in to your account to quickly place your favorite orders, manage your settings, and view your past meals. If you're not a member yet, sign up today to enjoy exclusive offers, easy reordering, and more! It's the best way to get the most out of your dining experience.
          </p>
        </div>
        <div className="bg-emerald-600 shadow-2xl w-full max-w-sm card shrink-0">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-white label-text">email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input-bordered input" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input-bordered input" required />
              <label className="label">
                <a href="#" className="label-text-alt text-white link link-hover">
                  Forgot password?
                </a>
              </label>
              
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate className=""/>
              </label>
              <input onBlur={handleCaptcha} type="text" name="captcha" placeholder="type captcha" className="input-bordered input" />
              
              
              
            </div>
            <div className="form-control mt-6">
              
              <input className="btn btn-primary" type="submit"  value="Login"/>
              
            </div>
          </form>
          {/* <SocialLogin></SocialLogin> */}
          <p className='text-center'>Are you new here? <Link to="/signup"><button className="mt-2 btn btn-outline">Create an account</button></Link> </p>
          
          
        </div>
      </div>
    </div>
   
    </>
  );
};

export default Login;

