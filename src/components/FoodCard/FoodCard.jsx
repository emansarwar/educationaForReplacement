// "../../providers/AuthProvider";
// import Swal from "sweetalert2";
// import useAuth from "../../hooks/useAuth";
// // import { Navigate, useLocation} from "react-router-dom";
// import { useLocation, useNavigate } from "react-router-dom";
// // import axios from "axios";
// import useAxiosCqre from "../../hooks/useAxiosCqre";
// import useCart from "../../hooks/useCart";

// const FoodCard = ({ item }) => {
//   const axiosCqre = useAxiosCqre();
//   const { name, image, price, recipe, _id } = item;
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [,refetch] = useCart();
//   const handleAddToCart = () => {
//     if (user && user.email) {
//       // console.log(user);
//       const cartItem = {
//         menuId: _id,
//         email: user.email,
//         name,
//         image,
//         price,
//       };
//       axiosCqre.post("/carts", cartItem)
//       .then((res) => {
//         // console.log(res.data);
//         if (res.data.insertedId) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `${name} added to your cart`,
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           //refetch cart
//           refetch();
//         }
//       });
//     } else {
//       Swal.fire({
//         title: "You are not Logged In",
//         text: "Please login to add to the cart.",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, Login!",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           // return <Navigate to="/login" state={{from: location}} replace/>
//           navigate("/login", {state:{from:location}});
//         }
//       });
//     }
//   };
//   return (
//     <div className="bg-emerald-900 shadow-xl w-full card">
//       <figure>
//         <img className="rounded-2xl" src={image} alt="Shoes" />
//       </figure>
//       <div className="p-5 text-left">
//         <h2 className="card-title">{name}</h2>
//         <hr />
//         <p className="text-justify">{recipe}</p>
//         <p className="font-bold text-justify text-white">Price: ${price}</p>
//         <p className="font-bold text-justify text-white">Admission Dates: {price}</p>
//         <p className="font-bold text-justify text-white">Events: {price}</p>
//         <p className="font-bold text-justify text-white">Research History: {price}</p>
//         <p className="font-bold text-justify text-white">Sports: {price}</p>
//         <div className="mt-3 card-actions justify">
//           <button onClick={handleAddToCart} className="bg-emerald-700 btn">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodCard;
