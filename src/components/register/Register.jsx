import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URLBASEAPI, URLPATHUSER, CONFIGHEADER, LOGIN } from "../../config/routes/paths.js"
import Button from "../commons/button/Button.jsx"
import { ContainerButton } from "../commons/button/ButtonStyle.js"
import { FormRegister, RegisterInput, RegisterLabel, SectionRegister } from "./RegisterStyle.js"


function Register(){

    const url = `${URLBASEAPI}${URLPATHUSER}`;
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();
        //Validar datos antes de envíar
        if (name===null){
            alert('Debe ingresar Nombre')
            return
        } else if (surname===null){
            alert('Debe ingresar Apellido')
            return
        } else if (email===null){
            alert('Debe ingresar Email')
            return
        } else if (user===null){
            alert('Debe ingresar Usuario')
            return
        } else if (pass===null){
            alert('Debe ingresar Contraseña')
            return
        } else if (repeatPass===null){
            alert('Debe repetir la contraseña')
            return
        } else if (pass!==repeatPass){
            alert('Contraseña no coincide con repetición')
            return
        }
        try {  
            await axios.post (url,{
                nombre: name,
                apellido: surname,
                email: email,
                usuario: user,
                pass:pass
            }, CONFIGHEADER);
            alert('Generación de usuario realizada');
            navigate(LOGIN)
        } catch (error) {
            alert(error)
        }

    }

    return(
        <SectionRegister>

            <FormRegister name="formulario" onSubmit={handleSubmit}>
                
                <h2>Registrarse</h2>

                <RegisterLabel>Nombre:</RegisterLabel> 
                <RegisterInput type="text" name="Nombre" placeholder="Ingrese su nombre..." value={name} onChange={e => setName(e.target.value)} required/>

                <RegisterLabel>Apellido:</RegisterLabel> 
                <RegisterInput type="text" name="Apellido" placeholder="Ingrese su apellido..." value={surname} onChange={e => setSurname(e.target.value)} required/>

                <RegisterLabel>Email:</RegisterLabel>    
                <RegisterInput type="email" name="email" placeholder="Ingrese su correo electrónico..." value={email} onChange={e => setEmail(e.target.value)} required/>

                <RegisterLabel>Usuario:</RegisterLabel> 
                <RegisterInput type="text" name="Usuario" placeholder="Ingrese su usuario..." value={user} onChange={e => setUser(e.target.value)} required/>
                
                <RegisterLabel>Contraseña:</RegisterLabel>    
                <RegisterInput type="password" name="Contraseña" placeholder="Ingrese su contraseña..." value={pass} onChange={e => setPass(e.target.value)} required/>

                <RegisterLabel>Repita su contraseña:</RegisterLabel>    
                <RegisterInput type="password" name="RepetirContraseña" placeholder="Ingrese su contraseña..." value={repeatPass} onChange={e => setRepeatPass(e.target.value)} required/>

                <br />
                <ContainerButton>
                    <Button type="submit" action={handleSubmit} string='Registrarse' />
                </ContainerButton>
                <br />
            </FormRegister>
        </SectionRegister>  
    )
}

export default Register