// import React from 'react'

import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import Footer from "../pages/Shared/Footer/Footer";

const Dashboard = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="flex flex-wrap">
      <div className="bg-emerald-800 w-full sm:w-1/3 sm:min-h-full">
        <ul className="menu">
            
            {
              isAdmin ?
              <>
              <li><NavLink to="/dashboard/adminHome" >
            <FaHome></FaHome>Admin Home</NavLink>
            </li>
            <li><NavLink to="/dashboard/addItems" >
            <FaUtensils></FaUtensils>Add Items</NavLink>
            </li>
            <li><NavLink to="/dashboard/manageItems" >
            <FaList></FaList>Manage Items</NavLink>
            </li>
            {/* <li><NavLink to="/dashboard/manageBookings" >
            <FaBook></FaBook>Manage Bookings</NavLink>
            </li> */}
            <li><NavLink to="/dashboard/users" >
            <FaUsers></FaUsers>All Users</NavLink>
            </li>
              </>:
              <>
                <li><NavLink to="/dashboard/userHome" >
            <FaHome></FaHome>User Home</NavLink>
            </li>
            {/* <li><NavLink to="/dashboard/history" >
            <FaCalendar></FaCalendar>Payment History</NavLink>
            </li> */}
            <li><NavLink to="/dashboard/carts" >
            <FaShoppingCart></FaShoppingCart>My Cart({cart.length})</NavLink>
            </li>
            {/* <li><NavLink to="/dashboard/review" >
            <FaShoppingCart></FaShoppingCart>Add a Review</NavLink>
            </li> */}
            <li><NavLink to="/dashboard/paymentHistory" >
            <FaList></FaList>Payment History</NavLink>
            </li>
              </>
            }
            {/* shared nav links */}
            <div className="divider"></div>
            <li><NavLink to="/" >
            <FaHome></FaHome>Home</NavLink>
            </li>
            <li><NavLink to="/menu" >
            <FaSearch></FaSearch>Menu</NavLink>
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
