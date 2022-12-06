import { Myh1, Info, ContainerButton} from "./HomeStyle";
import { useContextProvider } from "../../contexts/authContext";
import { useState } from "react";
import Button from "../commons/button/Button.jsx";


function Home(){
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const {isAuthenticated} = useContextProvider();

    function botonShowMobileMenu(){
        setShowMobileMenu(!showMobileMenu)
    }
    return (
        <>
            <Myh1>Prode-Qatar 2022</Myh1>
            <Info>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dolorem nihil doloremque saepe molestiae exercitationem harum. Repellendus quisquam adipisci unde non. Ullam, nulla necessitatibus consequatur sequi similique iusto nostrum? Unde?
                Hic odit sit accusantium, quaerat minus officiis vero corrupti, nam quos, reprehenderit quisquam ducimus. Praesentium esse quia corrupti neque debitis quis repellendus, in aspernatur consequuntur explicabo alias, totam dolores velit.
                Quam nisi commodi ipsa! Reiciendis facilis, odio possimus laudantium numquam, accusantium corrupti, sint molestiae vel cumque esse inventore! Praesentium ducimus iure corporis deserunt debitis nulla adipisci sint laudantium odio doloribus.
            </Info>
            <Myh1>Reglas</Myh1>
            <Info>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dolorem nihil doloremque saepe molestiae exercitationem harum. Repellendus quisquam adipisci unde non. Ullam, nulla necessitatibus consequatur sequi similique iusto nostrum? Unde?
                Hic odit sit accusantium, quaerat minus officiis vero corrupti, nam quos, reprehenderit quisquam ducimus. Praesentium esse quia corrupti neque debitis quis repellendus, in aspernatur consequuntur explicabo alias, totam dolores velit.
                Quam nisi commodi ipsa! Reiciendis facilis, odio possimus laudantium numquam, accusantium corrupti, sint molestiae vel cumque esse inventore! Praesentium ducimus iure corporis deserunt debitis nulla adipisci sint laudantium odio doloribus.
            </Info>
            <Myh1>Puntuaciones</Myh1>
            <Info>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dolorem nihil doloremque saepe molestiae exercitationem harum. Repellendus quisquam adipisci unde non. Ullam, nulla necessitatibus consequatur sequi similique iusto nostrum? Unde?
                Hic odit sit accusantium, quaerat minus officiis vero corrupti, nam quos, reprehenderit quisquam ducimus. Praesentium esse quia corrupti neque debitis quis repellendus, in aspernatur consequuntur explicabo alias, totam dolores velit.
                Quam nisi commodi ipsa! Reiciendis facilis, odio possimus laudantium numquam, accusantium corrupti, sint molestiae vel cumque esse inventore! Praesentium ducimus iure corporis deserunt debitis nulla adipisci sint laudantium odio doloribus.
            </Info>
            <Myh1>Jugar ahora</Myh1>
            <Info>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dolorem nihil doloremque saepe molestiae exercitationem harum. Repellendus quisquam adipisci unde non. Ullam, nulla necessitatibus consequatur sequi similique iusto nostrum? Unde?
                Hic odit sit accusantium, quaerat minus officiis vero corrupti, nam quos, reprehenderit quisquam ducimus. Praesentium esse quia corrupti neque debitis quis repellendus, in aspernatur consequuntur explicabo alias, totam dolores velit.
                Quam nisi commodi ipsa! Reiciendis facilis, odio possimus laudantium numquam, accusantium corrupti, sint molestiae vel cumque esse inventore! Praesentium ducimus iure corporis deserunt debitis nulla adipisci sint laudantium odio doloribus.

            </Info>
            
            <ContainerButton>
                <Button action={botonShowMobileMenu} string={isAuthenticated?'Mi Perfil':'Login'} route='/public/iniciosesion'/>
            </ContainerButton>  
             
        </>
    )
}

export default Home