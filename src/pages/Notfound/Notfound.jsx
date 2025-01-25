import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white">
      <h1 className="font-extrabold text-9xl tracking-widest">404</h1>
      <p className="bg-black mt-4 px-4 py-2 rounded-lg text-sm uppercase tracking-wide">Page Not Found</p>
      <p className="mt-6 max-w-md text-center text-lg">
        Oops! The page you're looking for doesn't exist. But don't worry, you can always find your way back.
      </p>
      <button
        onClick={goHome}
        className="bg-indigo-600 hover:bg-indigo-700 shadow-lg mt-8 px-6 py-3 rounded-lg font-bold text-white transform transition-transform hover:scale-105"
      >
        Back to Home
      </button>
      
    </div>
  );
};

export default NotFound;
