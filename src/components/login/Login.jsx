import { useState } from "react";
import { useContextProvider } from "../../contexts/authContext"

function Login(){
    const {login} = useContextProvider();
    const [magicWord, setMagicWord] = useState('');
    const MAGIC_WORD = 'admin';

    function handleInputChange(event){
        setMagicWord(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        if (magicWord === MAGIC_WORD){
            login();
        }
    }
    
    return(
    <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="Usuario" placeholder="Usuario" value={magicWord} onChange={handleInputChange}/>
            <input type="password" name="Contraseña" placeholder="Contraseña" value={magicWord} onChange={handleInputChange}/>
            <button type="submit">Iniciar Sesión</button>
        </form>
    </>
    ) 
}

export default Login