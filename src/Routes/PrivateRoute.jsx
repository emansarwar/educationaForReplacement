
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    
    const {user} = useAuth(AuthContext);
    const location = useLocation();
    if(!user){
        
        return <Navigate to="/login" state={{from: location}} replace/>
    }else{
        
        return children;
    }
  
}
export default PrivateRoute;