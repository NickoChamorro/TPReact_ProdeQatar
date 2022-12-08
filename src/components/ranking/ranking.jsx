import React from "react";
import Marquee from "./Marquee";
import CarteleraGanador from "./CarteleraGanador";
import posiciones from "./posiciones.json";
import "./ranking.css";

function Ranking(){

    const encabezadoRanking= {
        fontSize: "4rem", marginBottom:0   }

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
    <Marquee string={`${posiciones[0].nombre} lidera la tabla`}/>
    </header>
    <CarteleraGanador />
    <table style={tablaRanking}>
        <thead>
        <tr>
            <th>Pos.</th>
            <th>Nombre</th>
            <th>Puntaje</th>
        </tr>
        </thead>
        <tbody style={{background:"rgba(149,20,52,0.25)"}}>
        { posiciones.map((fila)=>
            <tr key={fila.nombre}>
                <td style={{padding:"0.75rem 0 0.35rem" }}>{fila.posicion}</td>
                <td style={{padding:"0.75rem 0 0.35rem" }}>{fila.nombre}</td>
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

