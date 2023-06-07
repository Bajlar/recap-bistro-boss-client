import React from 'react';
import { useContext } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  // console.log(googleSignIn);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };
        fetch("https://recap-bistro-boss-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User login successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            // navigate('/');
            navigate(from, { replace: true });
          });
    })
  }

  return (
    <div className="flex gap-6 justify-center">
      <div>
        <button className="btn btn-circle btn-outline">
          <FaFacebookF></FaFacebookF>
        </button>
      </div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
          <FaGoogle></FaGoogle>
        </button>
      </div>
      <div>
        <button className="btn btn-circle btn-outline">
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;