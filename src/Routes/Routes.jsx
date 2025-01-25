import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Menu/Menu/Colleges";
// import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
// import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/updateItem/updateItem";
// import Order from "../pages/Order/Order/Order";
// import Payment from "../pages/Dashboard/Payment/Payment";
// import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import CollegeRoute from "../pages/Home/CollegeRoute/CollegeRoute";
import CollegeDetails from "../pages/Home/CollegeRoute/CollegeDetails";
import AdmissionRoute from "../pages/Home/Admission/AdmissionRoute";
import AdmissionForm from "../pages/Home/Admission/AdmissionForm";
import MyCollege from "../pages/Home/MyCollege/MyCollege";
import NotFound from "../pages/Notfound/Notfound";
import Profile from "../pages/Home/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collegeRoute",
        element: <CollegeRoute />,
      },
      

      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/admission",
        element: <AdmissionRoute />,
      },
      {
        path: "/admission/:id",
        element: <AdmissionForm />,
      },
      {
        path: "/my-college",
        element: <MyCollege />,
      },
      {
        path: "/users",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      // {
      //   path: "/order/:category",
      //   element: <Order />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/details",
    element: (
      <PrivateRoute>
        <CollegeDetails />
      </PrivateRoute>
    )
  },
  {
    path: "details",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    )
  },
// {
//     children: [
      
     
//       {
//         path: "/details",
//         element: <CollegeDetails />,
//       },
      
//       {
//         path: "/profile",
//         element: <Profile />,
//       }
      
     
//     ]
//   },
]);
