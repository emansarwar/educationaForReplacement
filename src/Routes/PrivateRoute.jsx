
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useAuth(AuthContext);
    const location = useLocation();
    if(loading){
        return <progress className="w-3/4 text-center progress"></progress>
    }
    if(user){
        return children;
    }
  return <Navigate to="/login" state={{from: location}} replace/>
}
export default PrivateRoute;