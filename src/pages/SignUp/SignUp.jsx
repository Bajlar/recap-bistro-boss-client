import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import signUpImg from '../../assets/others/authentication2.png';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  // console.log(createUser, updateUserProfile);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      updateUserProfile(data.name, data.photo)
        .then( () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Create successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="background py-12">
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen max-w-6xl mx-auto border-2 shadow-2xl">
        <div className="md:flex justify-center items-center">
          <div className="md:w-1/2">
            <div className="text-center">
              <h1 className="text-4xl font-bold pt-4">Sign Up</h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body text-center"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500 text-left mt-2">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  placeholder="Enter your photo URL"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-500 text-left mt-2">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500 text-left mt-2">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&?*])(?=.*[0-9])/,
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-left mt-2">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 text-left mt-2">
                    Password must be 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500 text-left mt-2">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 text-left mt-2">
                    Password must have one uppercase one lower case, one special
                    characters and minimum one number
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054] hover:bg-[#D1A054] capitalize border-0"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p className="text-lg font-medium text-[#D1A054]">
                Already registered? <Link to="/login">Go to log in</Link>
              </p>
              <p className="text-lg font-medium">Or sign up with</p>
              <div className="flex gap-6 justify-center">
                <div>
                  <button className="btn btn-circle btn-outline">
                    <FaFacebookF></FaFacebookF>
                  </button>
                </div>
                <div>
                  <button className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                  </button>
                </div>
                <div>
                  <button className="btn btn-circle btn-outline">
                    <FaGithub></FaGithub>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="md:w-1/2">
            <img src={signUpImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;