import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "./Marquee.js";
import CarteleraGanador from "./CarteleraGanador.js";
import "./ranking.css";
import { CONFIGHEADER, URLBASEAPI, URLPATHUSER } from "../../config/routes/paths.js";

function Ranking(){

    const url = `${URLBASEAPI}${URLPATHUSER}`;
    const [posiciones, setPosiciones] = useState([]);
    const [lider, setLider] = useState('');

    useEffect(()=>{ 
        async function getUsers(){
            const res = await axios.get(url, CONFIGHEADER);
            const resOrdenado = await res.data.sort((a, b) => {
                if(a.puntos < b.puntos) {
                  return 1;
                }
                if(a.puntos > b.puntos) {
                  return -1;
                }
                return 0;
            })
            const resSinAdmin = await resOrdenado.filter (fila => fila.admin !== 1 )
            setPosiciones(resSinAdmin);
            setLider(resSinAdmin[0].usuario);
        }    
        getUsers()
    },[url]) 

    const encabezadoRanking= {
        fontSize: "2rem",
        marginTop: 0, 
        marginBottom:0   
    }

    const mainRanking= {
        margin:0,
        textAlign: "center", 
        color: 'goldenrod',
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
    }
    const tablaRanking= {width:"50%",
        maxWidth:"700px",
        border:"3px solid white",
        color:"white",
        borderCollapse:"collapse",
        fontSize: "16px",
    }

    return (
    <main style={mainRanking}>
    <header>
    <h1 style={encabezadoRanking}>Ranking</h1>
    <Marquee string={`${lider} lidera la tabla`}/>
    </header>
    <CarteleraGanador lider={lider}/> 
    <table style={tablaRanking}>
        <thead>
        <tr>
            <th>Pos.</th>
            <th>Usuario</th>
            <th>Puntaje</th>
        </tr>
        </thead>
        <tbody style={{background:"rgba(149,20,52,0.25)"}}>
        { posiciones.map((fila, index)=>
            <tr key={fila.idUsuario}>
                <td style={{padding:"0.75rem 0 0.35rem" }}>{index+1}</td>
                <td style={{padding:"0.75rem 0 0.35rem" }}>{fila.usuario}</td>
                <td style={{padding:"0.75rem 0 0.35rem" }}>{fila.puntos}</td>
            </tr>
            )
        } 
        </tbody>

    </table>
    </main>
    )
}

export default Ranking

