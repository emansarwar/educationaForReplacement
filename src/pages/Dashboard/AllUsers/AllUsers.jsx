// import React from 'react'

import { useQuery } from "@tanstack/react-query";
import useAxiosCqre from "../../../hooks/useAxiosCqre";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosCqre = useAxiosCqre();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosCqre.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosCqre.patch(`/users/admin/${user._id}`)
    .then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async(result) => {
      if (result.isConfirmed) {
        axiosCqre.delete(`/users/${user._id}`)
        .then((result) => {
            // console.log("delete user", result);
            if (result.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-around my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="bg-emerald-800 w-full table">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th className="ml-5">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={() => handleMakeAdmin(user)} className="bg-emerald-700 btn btn-ghost btn-lg">
                      <FaUsers className="text-white-600"></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-lg">
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
