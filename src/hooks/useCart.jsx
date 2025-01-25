// // import React from 'react'

// import { useQuery } from "@tanstack/react-query";
// // import { useEffect } from "react"
// import useAxiosCqre from "./useAxiosCqre";
// import useAuth from "./useAuth";
// const useCart = () => {
//   const axiosCqre = useAxiosCqre();
//   const { user } = useAuth();
//   const { refetch, data: cart = [] } = useQuery({
//     queryKey: ["carts", user?.email],
//     queryFn: async () => {
//       const res = await axiosCqre.get(`/carts?email=${user.email}`);
//       return res.data;
//     },
//   });
//   return [cart, refetch];
// };

// export default useCart;
