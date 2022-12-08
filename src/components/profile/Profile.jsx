import { useEffect, useState } from "react";
import { LOGOUT, URLBASEAPI, URLPATHUSER, AUTH_USER } from "../../config/routes/paths.js"
import Button from "../commons/button/Button.jsx";
import { ContainerButton } from "../commons/button/ButtonStyle.js";
import { FormProfile, ProfileInput, ProfileLabel, ProfilePuntos, SectionProfile } from "./ProfileStyle.js";
import axios from "axios";

function Profile(){
    const url = `${URLBASEAPI}${URLPATHUSER}`;
    const id = window.localStorage.getItem(AUTH_USER) ?? 0;

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');
    const [points, setPoints] = useState('');

    useEffect(()=>{
        //procedimiento para traer un usuario
        try {
            const getUser = async () => {
                const res = await axios.get(url+id)
                setName(res.data.nombre)
                setSurname(res.data.apellido)
                setEmail(res.data.email)
                setUser(res.data.usuario)
                setPass(res.data.pass)
                setPoints(res.data.puntos)
            }
            getUser()
        } catch (error) {
            alert(error)
        }    
    },[url,id])

    const handleSubmit = async (event) =>{
        event.preventDefault();  
        //procedimiento para actualizar un usuario
        if (repeatPass!==null && repeatPass!=='' && repeatPass!==pass){
            alert('Contraseña no coincide con Repetir contraseña');
            return
        }
        try {  
            await axios.put (url+id,{
                nombre: name,
                apellido: surname,
                email: email,
                usuario: user,
                pass:pass
            });
            alert('Modificación realizada')
        } catch (error) {
            alert(error)
        }
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