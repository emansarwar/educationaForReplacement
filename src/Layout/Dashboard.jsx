// import React from 'react'

import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";
import Footer from "../pages/Shared/Footer/Footer";

const Dashboard = () => {
  // const [cart] = useCart();

  // const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="bg-emerald-800 w-full sm:w-1/3">
          <ul className="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/details">College Details</NavLink>
            </li>

            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="bg-emerald-900 p-8 w-full sm:w-2/3">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
