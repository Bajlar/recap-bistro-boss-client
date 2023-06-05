import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user, logOut);
  const [cart] = useCart();
  // console.log(cart);

  const handleSignOut = () => {
    // console.log('btn click');
    logOut()
      .then( () => { })
      .catch(error => {
        console.log(error);
      })
  }

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order">Our Shop</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/dashboard/myCart">
          <button className="btn btn-sm capitalize">
            <FaShoppingCart className="text-lg"></FaShoppingCart>
            <div className="badge badge-secondary ml-2">
              +{cart?.length || 0}
            </div>
          </button>
        </Link>
      </li>
      <div>
        {user ? (
          <div className="flex justify-center items-center gap-4">
            {/* <p className="text-lg">{user?.displayName}</p> */}
            <p className="text-lg">{user?.email}</p>
            <div className="avatar placeholder">
              <div className="text-neutral-content rounded-full w-12">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="btn bg-opacity-30 hover:bg-opacity-30 border-0 capitalize"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </div>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-20 bg-black text-white px-14">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-60 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;