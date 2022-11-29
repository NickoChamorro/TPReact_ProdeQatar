import {CardLine, CardFlag1, CardFlag2, Position, FlagImg1, FlagImg2, CardPlayer1, CardPlayer2, CardResult1, CardResult2, CardData} from './LineStyle.js' 
const urlFlags = require.context("../../../../img/flags", true); 

function Line ({myKey, data, withFlag}){

    function getFlag (playerName){
        return( 
            playerName === 'ARGENTINA'  ? "argentina.png" :
            playerName === 'ALEMANIA'   ? "alemania.png" :
            playerName === 'ARABIA S.'  ? "arabia-saudita.png" :
            playerName === 'AUSTRALIA'  ? "australia.png" :
            playerName === 'BELGICA'    ? "belgica.png" :
            playerName === 'BRASIL'     ? "brasil.png" :
            playerName === 'CAMERUN'    ? "camerun.png" :
            playerName === 'CANADA'     ? "canada.png" :
            playerName === 'COLOMBIA'   ? "colombia.png" : 
            playerName === 'COREA S.'   ? "corea-del-sur.png" :
            playerName === 'COSTA RICA' ? "costa-rica.png" :
            playerName === 'CROACIA'    ? "croacia.png" :
            playerName === 'DINAMARCA'  ? "dinamarca.png" :
            playerName === 'ECUADOR'    ? "ecuador.png" :
            playerName === 'ESPAÑA'     ? "espana.png" :
            playerName === 'EE.UU.'     ? "estados-unidos.png" :
            playerName === 'FRANCIA'    ? "francia.png" :
            playerName === 'GALES'      ? "gales.png" :
            playerName === 'GHANA'      ? "ghana.png" :
            playerName === 'IRAN'       ? "iran.png" :
            playerName === 'JAPON'      ? "japon.png" :
            playerName === 'MARRUECOS'  ? "marruecos.png" :
            playerName === 'MEXICO'     ? "mexico.png" :
            playerName === 'P.BAJOS'    ? "paises-bajos.png" :
            playerName === 'POLONIA'    ? "polonia.png" :
            playerName === 'PORTUGAL'   ? "portugal.png" :
            playerName === 'QATAR'      ? "qatar.png" :
            playerName === 'INGLATERRA' ? "reino-unido.png" :
            playerName === 'SENEGAL'    ? "senegal.png" :
            playerName === 'SERBIA'     ? "serbia.png" :
            playerName === 'SUIZA'      ? "suiza.png" :
            playerName === 'TUNEZ'      ? "tunez.png" :
            playerName === 'URUGUAY'    ? "uruguay.png" :
            ""
        ) 
    }

    const flag1 = withFlag ? <FlagImg1 src={urlFlags(`./${getFlag(data.player1)}`)} alt="flag"/> : <Position>{data.position1}</Position>;
    const flag2 = withFlag ? <FlagImg2 src={urlFlags(`./${getFlag(data.player2)}`)} alt="flag"/> : <Position>{data.position2}</Position>;

    return(
        <CardLine key={myKey}> 
            <CardFlag1> {flag1} </CardFlag1>                
            <CardPlayer1>{data.player1}</CardPlayer1>
            <CardResult1>{data.score1}</CardResult1>
            <CardResult2>{data.score2}</CardResult2>
            <CardPlayer2>{data.player2}</CardPlayer2>
            <CardFlag2> {flag2} </CardFlag2>
            <CardData>{data.date} {data.hour} {data.stadium}</CardData>       
        </CardLine>
    )
}

export default Line