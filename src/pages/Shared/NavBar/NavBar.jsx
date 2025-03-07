// import React from 'react'

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
// import { FaShoppingCart } from "react-icons/fa";
// import useCart from "../../../hooks/useCart";
// import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  // const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);
  // const [isAdmin] = useAdmin();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  
  
  const navoptions = (
    <>
      <li className="hover:bg-cyan-700 rounded-lg font-bold">
        <Link  to="/">Home</Link>
      </li>
      <li className="hover:bg-cyan-700 rounded-lg font-bold">
        <Link to="/collegeRoute">Colleges</Link>
      </li>
      
      <li className="hover:bg-cyan-700 rounded-lg font-bold">
        <Link to="/admission">Admission</Link>
      </li>
      <li className="hover:bg-cyan-700 rounded-lg font-bold">
        <Link to="/my-college">My College</Link>
      </li>
      

      {user ? (
        <>
          
          <li className="hover:bg-cyan-700 rounded-lg font-bold">
            <Link  to="/users" >{user?.displayName || "Profile"}</Link>
          </li>
          {/* <li className="hover:bg-cyan-700 rounded-lg font-bold">
            <Link to="/users" className="">{user?.displayName}</Link>
          </li> */}
          <li className="hover:bg-cyan-700 rounded-lg font-bold">
            <Link onClick={handleLogout} to="/login">
              Logout
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="hover:bg-cyan-700 rounded-lg font-bold">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="top-0 z-10 sticky bg-cyan-800 bg-opacity-95 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="z-[1] flex-end bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm">
              {navoptions}
            </ul>
          </div>
          <a to="/home" className="font-bold text-xl btn btn-ghost">Edu-Media</a>
        </div>
        <div className="lg:flex hidden navbar-center">
          <ul className="px-1 menu menu-horizontal">{navoptions}</ul>
        </div>
        
      </div>
    </>
  );
};

export default NavBar;
