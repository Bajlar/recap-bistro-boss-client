import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaBook, FaCalendarAlt, FaCommentDots, FaEnvelope, FaHome, FaListUl, FaRegCalendarAlt, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [cart] = useCart();
  // TODO:
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile max-w-6xl mx-auto">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 w-72 h-full bg-[#D1A054]">
          <h3 className="text-2xl font-black pl-4 uppercase">Bistro Boss</h3>
          <h2 className="text-2xl font-bold pl-4 mb-4">Restaurant</h2>
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome className="text-2xl"></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils className="text-2xl"></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaListUl className="text-2xl"></FaListUl>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBooking">
                  <FaBook className="text-2xl"></FaBook>Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers className="text-2xl"></FaUsers>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome className="text-2xl"></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt className="text-2xl"></FaCalendarAlt>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaWallet className="text-2xl"></FaWallet>Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <FaShoppingCart className="text-2xl"></FaShoppingCart>My Cart
                  <div className="badge badge-secondary">
                    +{cart?.length || 0}
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">
                  <FaCommentDots className="text-2xl"></FaCommentDots>Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myBooking">
                  <FaRegCalendarAlt className="text-2xl"></FaRegCalendarAlt>My
                  Booking
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome className="text-2xl"></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars className="text-2xl"></FaBars>Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              <FaShoppingBag className="text-2xl"></FaShoppingBag>Order
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope className="text-2xl"></FaEnvelope>Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;