import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Menu/Menu/Colleges";
// import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/updateItem/updateItem";
import Order from "../pages/Order/Order/Order";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import CollegeRoute from "../pages/Home/CollegeRoute/CollegeRoute";
import CollegeDetails from "../pages/Home/CollegeRoute/CollegeDetails";
import AdmissionRoute from "../pages/Home/Admission/AdmissionRoute";
import AdmissionForm from "../pages/Home/Admission/AdmissionForm";
import MyCollege from "../pages/Home/MyCollege/MyCollege";



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
        path: "/details",
        element: <CollegeDetails />
      },
     
      {
        path: "/colleges",
        element: <Colleges />
      },
      {
        path: "/admission",
        element: <AdmissionRoute />
      },
      {
        path: "/admission/:id",
        element: <AdmissionForm />
      },
      {
        path: "/my-college",
        element: <MyCollege />
      },
      {
        path: "/rev",
        element: <MyCollege />
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      }
      
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),

    children: [
      //normal users routes
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "carts",
        element: <Cart />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      // Admin routes
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",

        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) => fetch(`https://food-server-sepia-nine.vercel.app/menu/${params.id}`),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
