import axios from "axios";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import PropTypes from 'prop-types';
import { URLBASEAPI, URLPATHUSER, AUTH_APP, AUTH_USER, CONFIGHEADER} from "../config/routes/paths.js";

const url = `${URLBASEAPI}${URLPATHUSER}`;

export const AuthContext = createContext();

function AuthContextProvider({children}){

    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(AUTH_APP) ?? false);
    const [idUser, setIdUser] = useState(window.localStorage.getItem(AUTH_USER) ?? 0);

    // Funcion de logueo, aca deberia ir la logica que controle sobre el back usuario y pass, y lo marque como logueado, 
    // y si hay error mostrarlo, dejando además lo de localStoge
    const login = useCallback((user, pass)=>{
        
        // Traer id usuario por usuario+pass    
        const urlComplete = `${url}login/${user}/pass/${pass}`;
        const getUser = async () =>{
            const res = await axios.get(urlComplete, CONFIGHEADER);
            if (res===null || res.data.idUsuario === 0){
                alert('Usuario y/o contraseña incorrectos.')
                return
            };
            setIdUser(res.data.idUsuario);
            window.localStorage.setItem(AUTH_USER, res.data.idUsuario)
        };
        getUser();
        
        // Actualizar logueo en base
        const update = async () =>{
            await axios.put (url+idUser,{
                login:1,
            }, CONFIGHEADER)
        };
        update();

        window.localStorage.setItem(AUTH_APP, true);
        setIsAuthenticated(true);

    }, [idUser]);

    // Funcion de deslogueo
    const logout = useCallback(()=>{
        window.localStorage.removeItem(AUTH_APP);
        window.localStorage.setItem(AUTH_USER, 0)
        setIsAuthenticated(false);
        // Desloguear desde el back, actualizar base de datos
        const update = async () =>{
            await axios.put (url+idUser,{
                login:0,
            }, CONFIGHEADER)
        }
        update()
    }, [idUser]);

    // Memorizamos cuando cambie alguno de los valores del contexto 
    const value = useMemo(()=>({
        login, logout, isAuthenticated
    }),[login, logout, isAuthenticated] 
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
    children: PropTypes.object
};

export default AuthContextProvider;

export function useContextProvider(){
    return useContext(AuthContext)
}
