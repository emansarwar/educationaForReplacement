import { useForm } from "react-hook-form";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha} from 'react-simple-captcha';
// import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPubleague from "../../hooks/useAxiosPubleague";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPubleague = useAxiosPubleague();
  const navigate = useNavigate();
  
  // const [disabled, setDisabled] = useState(true);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
    .then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      updateUserProfile(data.name)
        .then(() => {
          //create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPubleague.post("/users", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              
              // console.log('user added to the database', res)
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  useEffect(() => {
    loadCaptchaEnginge(3);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    const captcha = form.captcha.value;

    if (validateCaptcha(captcha) !== true) {
      alert("Captcha Does Not Match");
      // captcha.value = '';
    }
    console.log(email, pass, captcha);
    // signIn(email, pass)
    // .then(result =>{
    //     const user = result.user;
    //     console.log(user);
    // })
  };
  return (
    <>
      <Helmet>
        <title>Food Station | Sign Up</title>
      </Helmet>
      <div className="bg-emerald-800 min-h-screen hero">
        <div className="lg:flex-row-reverse flex-col hero-content">
          <div className="m-20 text-center lg:text-left">
            <h1 className="font-bold text-5xl">SignUp now!</h1>
            <p className="py-6">
            Sign up today to enjoy all the benefits of being a member! From saving your favorite dishes to getting special discounts, our easy sign-up process gives you access to personalized offers and faster ordering. It's the first step towards a better, more convenient dining experience.
            </p>
          </div>
          <div onSubmit={handleLogin} className="bg-emerald-600 shadow-2xl w-full max-w-sm card shrink-0">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* <form  onSubmit={handleSubmit(onSubmit)} onSubmit={handleLogin} className="card-body"> */}
              <div className="form-control">
                <label className="label">
                  <span className="text-white label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" {...register("name", { required: true })} className="input-bordered input" />
                {errors.name && <span>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-white label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" {...register("email", { required: true })} className="input-bordered input" />
                {errors.email && <span>Email is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-white label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...register("password", { required: true, minLength: 6, maxLength: 20 })}
                  className="input-bordered input"
                />
                {errors.password?.type === "required" && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === "minLength" && <p className="text-red-600">Password must be 6 characters</p>}
                {errors.password?.type === "maxLength" && <p className="text-red-600">Password must be less than 20 characters</p>}
                <label className="label">
                  <a href="#" className="label-text-alt text-white link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input type="text" name="captcha" placeholder="type captcha" className="input-bordered input" required />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="SignUp" />
                {/* <input className="btn btn-primary" type="submit" disabled={disabled} value="Login" /> */}
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <p className="text-center">
              Already have an account?
              <Link to="/login">
                <button className="mt-4 btn btn-outline">Please Login</button>
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
