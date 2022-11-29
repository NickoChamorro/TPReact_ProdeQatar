import Button from "../commons/button/Button.jsx"
import { ContainerButton } from "../commons/button/ButtonStyle.js"
import { FormRegister, RegisterInput, RegisterLabel, SectionRegister } from "./RegisterStyle.js"


function Register(){

    function handleSubmit(event){
        event.preventDefault();
        
    }

    return(
        <SectionRegister>

            <FormRegister name="formulario" onSubmit={handleSubmit}>
                
                <h2>Registrarse</h2>

                <RegisterLabel>Nombre:</RegisterLabel> 
                <RegisterInput type="text" name="Nombre" placeholder="Ingrese su nombre..."   required/>

                <RegisterLabel>Apellido:</RegisterLabel> 
                <RegisterInput type="text" name="Apellido" placeholder="Ingrese su apellido..."   required/>

                <RegisterLabel>Usuario:</RegisterLabel> 
                <RegisterInput type="text" name="Usuario" placeholder="Ingrese su usuario..."   required/>
                
                <RegisterLabel>Contraseña:</RegisterLabel>    
                <RegisterInput type="password" name="Contraseña" placeholder="Ingrese su contraseña..."  required/>

                <RegisterLabel>Repita su Contraseña:</RegisterLabel>    
                <RegisterInput type="password" name="RepetirContraseña" placeholder="Ingrese su contraseña..."  required/>

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