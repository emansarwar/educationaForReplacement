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
    const axiosPubleague = useAxiosPubleague();
const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

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
    return updateProfile(auth.currentUser, {
        displayName:name
    });
}

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser){
                //get token and store client
                const userInfo = {email: currentUser.email};
                // console.log(userInfo)
                axiosPubleague.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false)
                    }
                }
                )
            }else{
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