import { useState } from "react";
import { LOGOUT } from "../../config/routes/paths"
import Button from "../commons/button/Button.jsx";
import { ContainerButton } from "../commons/button/ButtonStyle.js";
import { FormProfile, ProfileInput, ProfileLabel, ProfilePuntos, SectionProfile } from "./ProfileStyle.js";

function Profile(){

    // Traer los valores del back con un GET a usuario
    //const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');
    const points = 0;

    function handleSubmit(event){
        event.preventDefault();
        console.log(`Update`)
    }

    return(
        <SectionProfile>
            <FormProfile name="formulario" onSubmit={handleSubmit}>
                
                <h2>Mi Perfil</h2>

                <ProfileLabel>Nombre
                    <ProfileInput type="text" name="Nombre" value={name} onChange={e => setName(e.target.value)} required/>
                </ProfileLabel> 

                <ProfileLabel>Apellido
                    <ProfileInput type="text" name="Apellido"  value={surname} onChange={e => setSurname(e.target.value)} required/>    
                </ProfileLabel> 

                <ProfileLabel>Email
                    <ProfileInput type="email" name="email"  value={email} onChange={e => setEmail(e.target.value)} required/>    
                </ProfileLabel>    

                <ProfileLabel>Usuario
                    <ProfileInput type="text" name="Usuario"  value={user} onChange={e => setUser(e.target.value)} required/>    
                </ProfileLabel> 
                
                <ProfileLabel>Contraseña
                    <ProfileInput type="password" name="Contraseña"  value={pass} onChange={e => setPass(e.target.value)} required/>    
                </ProfileLabel>    
                
                <ProfileLabel>Repetir contraseña
                    <ProfileInput type="password" name="RepetirContraseña"  value={repeatPass} onChange={e => setRepeatPass(e.target.value)} required/>    
                </ProfileLabel>    

                <ProfileLabel>Puntos
                    <ProfilePuntos>{points}</ProfilePuntos>
                </ProfileLabel>

                <br/>
                <ContainerButton>
                    <Button type="submit" action={handleSubmit} string='Modificar' />
                </ContainerButton>

                <br/>
                <ContainerButton>
                    <Button route={LOGOUT} string='Cerrar Sesión'/>
                </ContainerButton>
                <br/>
            </FormProfile>
        </SectionProfile>
    ) 
}

export default Profile