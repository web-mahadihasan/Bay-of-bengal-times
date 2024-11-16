import { useContext } from "react";
import { AuthProviderContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthProviderContext)
    const {pathname} = useLocation()
    if(loading){
       return <LoadingSpinner/>
    }
    if(user && user?.email){
       return children
    }
    return (
        <Navigate state={pathname} to={"/auth/login"}></Navigate>
    );
};

export default PrivateRoute;