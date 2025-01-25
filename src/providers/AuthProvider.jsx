import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPubleague from "../hooks/useAxiosPubleague";
export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);
    const googleProvider = new GoogleAuthProvider();
    // const user1 = auth.currentUser;
    // console.log(user.displayName)
    const axiosPubleague = useAxiosPubleague();
const createUser = async (email, password) =>{
    setLoading(true);
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("user signed up:", user);
    } catch (error) {
        console.log("error during sign-up:", error.message);
    }finally{
        setLoading(false);
    }

};

const signIn = ( email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);

}
const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}


const updateUserProfile = (name) =>{
    // console.log("update",user)
    return updateProfile(auth.currentUser, {
        displayName:name
    });
}


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            // console.log("subscribe", user)
            if(currentUser){
                console.log("User Name:", currentUser.displayName);
            console.log("User Email:", currentUser.email);
                //get token and store client
                const userInfo = {email: currentUser.email};
                // console.log(email)
                // axiosPubleague.post('/users', userInfo)
                // .then(res =>{
                //     if(res.data.token){
                //         localStorage.setItem('access-token', res.data.token);
                //         setLoading(false)
                //     }
                }
                
            
            else{
                //TODO: remove token (if token stored in the client side: local storage, caching, in memory)
                localStorage.removeItem('access-token')
                setLoading(false)
            }
        })
        return () =>{
            return unsubscribe();
        }
    },[axiosPubleague])
    
    const authInfo ={
        user,
        loading,
        updateUserProfile,
        createUser,
        signIn,
        logOut,
        googleSignIn,
    }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider;

// import { createContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { app } from "../firebase/firebase.config";
// import useAxiosPubleague from "../hooks/useAxiosPubleague";

// export const AuthContext = createContext(null);
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const googleProvider = new GoogleAuthProvider();
//   const axiosPubleague = useAxiosPubleague();

//   const createUser = async (email, password) => {
//     setLoading(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log("User signed up:", user);
//     } catch (error) {
//       console.log("Error during sign-up:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const googleSignIn = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   /**
//    * Update user profile, including custom fields (e.g., university, address)
//    * @param {Object} updatedData - Object containing fields to update
//    * @returns {Promise<void>}
//    */
//   const updateUserProfile = async (updatedData) => {
//     const currentUser = auth.currentUser;

//     if (!currentUser) throw new Error("No user is logged in");

//     try {
//       // Update the displayName in Firebase Authentication
//       if (updatedData.name) {
//         await updateProfile(currentUser, {
//           displayName: updatedData.name,
//         });
//       }

//       // Update additional fields in the backend
//       const response = await axiosPubleague.post("/users",{ uid: currentUser.uid, ...updatedData,
//       });

//       if (response.status === 201) {
//         // Reflect changes in local user state
//         setUser({ ...currentUser, ...updatedData });
//         console.log("User profile updated successfully:", response.data);
//       }
//     } catch (error) {
//       console.error("Error updating user profile:", error.message);
//       throw error;
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       setUser(currentUser);
//       if (currentUser) {
//         // Get token and store in client
//         const userInfo = { email: currentUser.email };
//         try {
//           const res = await axiosPubleague.post("/jwt", userInfo);
//           if (res.data.token) {
//             localStorage.setItem("access-token", res.data.token);
//           }
//         } catch (error) {
//           console.error("Error fetching JWT token:", error.message);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         // Remove token if user logs out
//         localStorage.removeItem("access-token");
//         setLoading(false);
//       }
//     });

//     return () => unsubscribe();
//   }, [axiosPubleague]);

//   const authInfo = {
//     user,
//     loading,
//     updateUserProfile,
//     createUser,
//     signIn,
//     logOut,
//     googleSignIn,
//   };

//   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;
