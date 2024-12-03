// import React from 'react'

import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosCqre from "../../../hooks/useAxiosCqre";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const axiosCqre = useAxiosCqre();
  const [menu,  refetch] = useMenu();
  // console.log("manageitems menu", menu);
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure:",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosCqre.delete(`/menu/${item._id}`);
        // console.log('manage items',res.data);
        if (res.data.deletedCount > 0) {
            refetch();
          Swal.fire({
            position: "top-end:",
            title: `${item.name} has been deleted`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500
            });
        }
        
      }
    });
    //helo
  };
  return (
    <div>
      <SectionTitle heading="manage all items" subHeading="hurry up"></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="w-full table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="">${item.price}</td>

                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="bg-emerald-700 btn btn-ghost btn-md">
                      <FaEdit className="text-white-600"></FaEdit>
                    </button>
                    </Link>
                    
                  </td>
                  <td>
                    <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg">
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;

