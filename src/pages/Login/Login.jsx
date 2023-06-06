import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import loginImg from '../../assets/others/authentication2.png';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  // console.log(signIn);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password) 
      .then(result => {
        const user = result.user;
        // console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        // navigate('/');
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleValidateCaptcha = (event) => {
    const user_captcha_value = event.target.value;
    // console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) === true) {
    // alert("Captcha Matched");
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  return (
    <div className="background py-12">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen max-w-6xl mx-auto border-2 shadow-2xl">
        <div className="md:flex justify-center items-center">
          <div className="md:w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="md:w-1/2">
            <div className="text-center pt-4">
              <h1 className="text-4xl font-bold">Login</h1>
            </div>
            <form onSubmit={handleLogin} className="card-body text-center">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[##5D5FEF] text-lg font-semibold">
                    <LoadCanvasTemplate />
                  </span>
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="U A g l u o"
                  className="input input-bordered"
                />
              </div>
              {/* TODO: make button disable for captcha */}
              <div className="form-control mt-6">
                <input
                  // disabled={disabled}
                  disabled={false}
                  className="btn bg-[#D1A054] hover:bg-[#D1A054] capitalize border-0"
                  type="submit"
                  value="Sign In"
                />
              </div>
              <p className="text-lg font-medium text-[#D1A054]">
                New here? <Link to="/signUp">Create a New Account</Link>
              </p>
            </form>
            <div className="text-center -mt-5">
              <p className="text-lg font-medium">Or sign in with</p>
              <div className='pb-5 mt-4'>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;