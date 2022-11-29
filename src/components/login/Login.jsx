import { useState } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../contexts/authContext";
import imgFootball from '../../img/PelotaQatarSinFondo.png';
import Button from "../commons/button/Button.jsx";
import { FormInput, FormLabel, FormLogin, ImgForm, Links, LinksForm, SectionLogin, TitleForm } from "./LoginStyle.js";
import { ContainerButton } from "../commons/button/ButtonStyle.js";
import { REGISTER } from '../../config/routes/paths.js'


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
        <SectionLogin>

            <FormLogin name="formulario" onSubmit={handleSubmit}>
                <TitleForm>
                    <ImgForm src={imgFootball} alt="Football"/>
                </TitleForm>

                <FormLabel>Usuario:</FormLabel> 
                <FormInput type="text" name="Usuario" placeholder="Ingrese su usuario..." value={magicWord} onChange={handleInputChange} required/>
                
                <FormLabel>Contraseña:</FormLabel>    
                <FormInput type="password" name="Contraseña" placeholder="Ingrese su contraseña..." value={magicWord} onChange={handleInputChange} required/>

                <br />
                <ContainerButton>
                    <Button type="submit" action={handleSubmit} string='Iniciar Sesión' />
                </ContainerButton>

                <LinksForm>
                    <Links as={Link} to={REGISTER}>Registrarse</Links>
                </LinksForm>
            </FormLogin>
        </SectionLogin>    
    ) 
}

export default Login