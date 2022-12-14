import React from 'react';

const CarteleraGanador = (props) => {
    
    let cantidadGanadores=1; //provisiorio acá se indica la cantidad de ganadores
    let mundialFinalizado=true;//provisorio acá se debería calcular cuando se terminó el mundial

    let encabezadoTarjeta="";
    let textoTarjeta="";


    const estiloCartelera= {
        width:"50%",
        maxWidth:"700px",
        minWidth:"250px",
        border:"3px solid white",
        borderRadius:"16px",
        background:"beige",
        color:"black",
        fontSize: "16px",
        margin:"16px",
        padding:"8px",
        position:"relative"
     }

    if (mundialFinalizado){
        switch(cantidadGanadores) //de acuerdo a la cantidad de ganadores da distintos mensajes
        {
            default:
                encabezadoTarjeta="El torneo ha finalizado";
                textoTarjeta="Corrobore su posición en la tabla";
                break;
            case 1:
                encabezadoTarjeta=`¡Felicitaciones ${props.lider}!`;
                textoTarjeta=` ${props.lider} se ha consagrado como campeón del torneo`;
                break;
            case 2:
                encabezadoTarjeta=`¡Felicitaciones ${props.lider} y ${props.lider}!`;
                textoTarjeta=`Los usuarios ${props.lider} y ${props.lider} se han consagrado como campeones del torneo`;
                break;
            case 3:
                encabezadoTarjeta=`¡Felicitaciones ${props.lider}, ${props.lider} y ${props.lider}!`;
                textoTarjeta="Se han consagrado como campeones del torneo";
                break;     
        }
    }

    return(
      <article style={mundialFinalizado?estiloCartelera:{display:'none'}}>
            <a  style={{color:"beige",textDecoration:"none"}}href="https://www.flaticon.com/free-icons/medal"> <img src="https://cdn-icons-png.flaticon.com/128/179/179250.png" alt="medal" title="Medal icons created by Pixel Buddha - Flaticon"/></a>
            <h3> {encabezadoTarjeta} </h3>
            <p>{textoTarjeta}</p>
      </article>
    )
  }
  
  export default CarteleraGanador;