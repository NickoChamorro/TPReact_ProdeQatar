import { Link } from "react-router-dom"
import { LOGOUT } from "../../config/routes/paths"

function Profile(){
    return(
    <>
        <h1>Profile</h1>
        <Link to={LOGOUT}>Cerrar Sesión</Link>
    </>
    ) 
}

export default Profile