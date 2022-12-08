import Stage from "./stages/Stage.jsx"
/* import { ShowAllGames } from "../services/games/ShowGames.js"  */

function Fixture (){

/*     const games = ShowAllGames();
    
    const grupos = games.filter( game => game.fase === "Grupos" );

    console.log( grupos.filter( game => game.grupo === "A") );

    console.log( grupos.filter( game => game.grupo === "B") );

    console.log( games.filter( game => game.fase === "Octavos" ) )
 */

    return(
        <>
            <Stage section="GroupStage"/> 
            <Stage section="FinalStage"/>  
        </>
    )    
};

export default Fixture