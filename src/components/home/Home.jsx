import { Myh1, Info, ContainerButton, ImgCopa, DivImg ,DivTotal, DivTexto} from "./HomeStyle";
import { useContextProvider } from "../../contexts/authContext";
import { useState } from "react";
import Button from "../commons/button/Button.jsx";
import imgInicio from '../../img/copa3.png';



function Home(){
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const {isAuthenticated} = useContextProvider();

    function botonShowMobileMenu(){
        setShowMobileMenu(!showMobileMenu)
    }
    return (
        <>  
            <DivTotal>            
                <DivTexto>
                    <Myh1>Prode Qatar 2022</Myh1>
                    <Info>
                        Prode Qatar 2022 es un juego online de pronóstico deportivo que incentiva la competencia sana. Diviértete con tus amigos, compañeros de trabajo o estudio, a través de la predicción de los resultados de los partidos del mundial de manera totalmente gratuita.
                    </Info>

                    <Myh1>¿Cómo realizar mis predicciones?</Myh1>
                    <Info>
                        Los partidos van a estar disponibles por etapas: fase de grupos, luego octavos, cuartos, semifinales y, por último, tercer y cuarto puesto y final. Las predicciones deben realizarse antes de comenzar los partidos, ese es el tiempo límite para realizar el pronóstico.
                        Por cada partido hay 2 botones de check, 1 por cada equipo. Si nuestro pronóstico es que va a ganar un equipo en particular seleccionamos el check de ese equipo, y si creemos que va a ser un empate, seleccionamos los 2. 
                        De octavos en adelante no hay empates, se toma en cuenta el resultado final por más que haya empate en el tiempo reglamentario y vayan a alargue o penales.
                    </Info>
                    <Myh1>Puntuación</Myh1>
                    <Info>
                        Cada partido acertado suma 1 punto. El puntaje se puede observar en el perfil del usuario o en el menú ranking con el podio de usuarios y los puntos acumulados.
                    </Info>
                    <Myh1>¿Cómo empezar a jugar?</Myh1>
                    <Info>
                        Empezar a jugar requiere de sólo 2 pasos: registrarse al sitio (si aún no tenés una cuenta creada) y luego, cargar tus pronósticos. Así de fácil. Así de sencillo. Así de rápido.
                    </Info>

                    <ContainerButton>
                        <Button action={botonShowMobileMenu} string={isAuthenticated?'Mi Perfil':'Jugar ahora'} route='/public/iniciosesion'/>
                    </ContainerButton>  
                </DivTexto>

                <DivImg>
                    <ImgCopa src= {imgInicio} alt="img_inicio"/>
                </DivImg>
            </DivTotal>

        </>
    )
}

export default Home