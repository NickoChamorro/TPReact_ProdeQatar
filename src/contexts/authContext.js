import { createContext, useCallback, useContext, useMemo, useState } from "react";
import PropTypes from 'prop-types';

const AUTH_APP = 'AUTH_APP'; // Nombre de variable de sesion

export const AuthContext = createContext();

function AuthContextProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(AUTH_APP) ?? false);

    // Funcion de logueo, aca deberia ir la logica que controle sobre el back usuario y pass, y lo marque como logueado, 
    // y si hay error mostrarlo, dejando además lo de localStoge
    const login = useCallback(()=>{
        window.localStorage.setItem(AUTH_APP, true);
        setIsAuthenticated(true);
    }, [])

    // Funcion de deslogueo, aca deberia ir la logica que actualice el back y lo marque como deslogueado, dejando además lo de localStoge
    const logout = useCallback(()=>{
        window.localStorage.removeItem(AUTH_APP);
        setIsAuthenticated(false);
    }, [])

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
