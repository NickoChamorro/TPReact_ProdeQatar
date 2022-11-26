import { useEffect } from "react";
import { useContextProvider } from "../../contexts/authContext"

function Logout(){
    const {logout} = useContextProvider();
    useEffect( ()=> logout() );
    return null
}

export default Logout