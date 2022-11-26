import { Navigate, Outlet } from "react-router";
import { LOGIN } from "../../config/routes/paths";
import { useContextProvider } from "../../contexts/authContext";

function PrivateRoute(){
    const {isAuthenticated} = useContextProvider();
    
    if (!isAuthenticated) {
        return <Navigate to={LOGIN} />;
    }
    
    return(
        <>
            <Outlet/>
        </>
    );
}

export default PrivateRoute