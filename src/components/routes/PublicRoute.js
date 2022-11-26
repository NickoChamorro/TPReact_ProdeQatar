import { Navigate, Outlet } from "react-router";
import { PROFILE } from "../../config/routes/paths";
import { useContextProvider } from "../../contexts/authContext";

function PublicRoute(){
    const {isAuthenticated} = useContextProvider();
    
    if (isAuthenticated) {
        return <Navigate to={ PROFILE } />; 
    }
    
    return(
        <>
            <Outlet/>
        </>
    );
}

export default PublicRoute