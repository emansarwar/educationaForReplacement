// // VarsityProvider.js
// import React, { createContext, useState, useContext } from "react";

// // Create Varsity Context
// const VarsityContext = createContext();

// // Provider Component
// export const VarsityProvider = ({ children }) => {
//   const [varsity, setVarsity] = useState("");

//   return (
//     <VarsityContext.Provider value={{ varsity, setVarsity }}>
//       {children}
//     </VarsityContext.Provider>
//   );
// };

// // Custom Hook to Use Varsity Context
// export const useVarsity = () => {
//   return useContext(VarsityContext);
// };
