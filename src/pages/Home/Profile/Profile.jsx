// import React, { useState, useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";
// import Swal from "sweetalert2";
// import { useVarsity } from "../../../providers/VarsityProvider";
// // import useVarsity from "../../../hooks/useVarsity";

// const Profile = () => {
//     const {varsity} = useVarsity();
//     console.log("varsity", varsity)

// //    console.log("profile", name)
//   const { user, updateUserProfile } = useContext(AuthContext);

//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     name: user?.displayName || "",
//     email: user?.email || "",
//     varsity: varsity,
//     // university: varsity || "",

//     // address: user?.address || "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = () => {
//     updateUserProfile(formData)
//       .then(() => {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Profile updated successfully!",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         setIsEditing(false);
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: error.message || "Something went wrong!",
//         });
//       });
//   };

//   return (
//     <div className="bg-green-800 p-10">
//       <h1 className="font-bold text-2xl text-center">Profile</h1>
//       <hr />
//       <div className="mt-6 text-center">
//         {!isEditing ? (
//           <><div className="w-full">
// <p><strong>Name:</strong> {formData.name}</p>
//             <p><strong>Email:</strong> {formData.email}</p>
//             <p><strong>University:</strong> {varsity}</p>
//             {/* <p><strong>University:</strong> {formData.university}</p> */}
//             {/* <p><strong>Address:</strong> {formData.address}</p> */}
//             <button
//               className="mt-4 btn btn-primary"
//               onClick={() => setIsEditing(true)}
//             >
//               Edit
//             </button>
//           </div>

//           </>
//         ) : (
//           <form className="space-y-4">
//             <div>
//               <label className="block font-bold">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="input-bordered w-full input"
//               />
//             </div>
//             <div>
//               <label className="block font-bold">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="input-bordered w-full input"
//               />
//             </div>
//             <div>
//               <label className="block font-bold">University:</label>
//               <input
//                 type="text"
//                 name="varrsity"
//                 value={varsity}
//                 onChange={handleInputChange}
//                 className="input-bordered w-full input"
//               />
//             </div>
//             {/* <div>
//               <label className="block font-bold">Address:</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 className="input-bordered w-full input"
//               />
//             </div> */}
//             <button
//               type="button"
//               className="mt-4 btn btn-success"
//               onClick={handleSave}
//             >
//               Save
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Profile = () => {
    const [loading, setLoading] = useState(true)
  const { user  } = useContext(AuthContext); // Access the logged-in user
//   const { user, updateUserProfile } = useContext(AuthContext); 
  // Access the logged-in user
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    varsity: ""
  });
//   const [formData, setFormData] = useState({
//     name: user?.displayName || "",
//     email: user?.email || "",
//     varsity: "",
//   });

  useEffect(() => {
    if (!user?.email) {
      console.error("User email is undefined");
    } else {
      console.log("User email:", user.email);
    }
  }, [user]);

  // Fetch user data from the database on component mount

  useEffect(() => {
    const fetchUserData = async () => {
        setLoading(true);
      if (!user?.email) {
        console.error("User email is missing");
        return;
      }
  
      try {
        const response = await fetch(`http://localhost:5000/users?email=${user.email}`);
        const data = await response.json();
        
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
  
        console.log("Fetched user data:", data); 
        
        if (data) {
          setFormData({
            name: data.name || user?.displayName || "",
            email: data.email || user?.email || "",
            varsity: data.varsity || "",
          });
          console.log("varsity:", data.varsity)
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  setLoading(false);
    fetchUserData();
  }, [user?.email]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
  
      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Profile updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsEditing(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Update failed",
          text: data.message || "Unable to update profile",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong!",
      });
    }
  };
  
//   const handleSave = () => {
//     // Update the user's profile in your database
//     fetch(`http://localhost:5000/users`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount > 0) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Profile updated successfully!",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           setIsEditing(false);
//         }
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: error.message || "Something went wrong!",
//         });
//       });
//   };

  return (
    <div className="bg-green-800 p-10">
      <h1 className="font-bold text-2xl text-center">Profile</h1>
      <hr />
      <div className="mt-6 text-center">
        {!isEditing ? (
          <div className="bg-teal-900 p-5 rounded-3xl w-full">
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>University:</strong> {formData.varsity}
            </p>
            <button className="mt-4 btn btn-primary" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </div>
        ) : (
          <form className="space-y-4">
            <div>
              <label className="block font-bold">Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="input-bordered w-full input" />
            </div>
            <div>
              <label className="block font-bold">Email:</label>
              <input 
              type="email" 
              name="email" 
              readOnly
              value={formData.email} onChange={handleInputChange} className="input-bordered w-full input" />
            </div>
            <div>
              <label className="block font-bold">University:</label>
              <input type="text" name="varsity" value={formData.varsity} onChange={handleInputChange} className="input-bordered w-full input" />
            </div>
            <button type="button" className="mt-4 btn btn-success" onClick={handleSave}>
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
