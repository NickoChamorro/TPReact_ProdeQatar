import axios from 'axios';
import { useEffect, useState } from 'react';
import { CONFIGHEADER, URLBASEAPI, URLPATHPREDICT } from '../../../../config/routes/paths.js';
import {CardLine, CardFlag1, CardFlag2, Position, FlagImg1, FlagImg2, CardPlayer1, CardPlayer2, CardResult1, CardResult2, CardData, CardInput} from './LineStyle.js' 
import { GetFlag } from '../../GetFlag.js';
const urlFlags = require.context("../../../../img/flags", true); 

function Line ({myKey, data, user, predecir, withFlag}){
    const urlBase = `${URLBASEAPI}${URLPATHPREDICT}`; 
    const urlGet = `${URLBASEAPI}${URLPATHPREDICT}user/${user}/game/${data.idPartido}`; 
    const withUser = (user!=='' && user!==null && user!==undefined) ? true : false; 
    const CHECKED = true;
    const UNCHECKED = false;

    const [prediccion, setPrediccion] = useState('');
    const [preEquipo1, setPreEquipo1] = useState(false);
    const [preEquipo2, setPreEquipo2] = useState(false);

    const [puntos, setPuntos] = useState(0);//<------------------------------------------ no esta funcionando como se debe
    
    
    useEffect(()=>{
        //procedimiento para traer un usuario
        try {
            const getPrediction = async () => {
                const res = await axios.get(urlGet, CONFIGHEADER);
                Array.from(res.data).forEach((item)=>{
                    setPrediccion(item.idPrediccion);
                    setPreEquipo1(item.preEquipo1===1?true:false);
                    setPreEquipo2(item.preEquipo2===1?true:false)
                });
            }
            getPrediction()
        } catch (error) {
            alert(error)
        }    
    },[urlGet])

    useEffect(()=>{
        if(predecir>0 && prediccion>0 && (preEquipo1!==UNCHECKED || preEquipo2!==UNCHECKED)){
            //console.log(`Modificar Put: data.idPartido ${data.idPartido} user ${user} preEquipo1 ${preEquipo1} preEquipo2 ${preEquipo2}`)
            
            
            
            //---------------------------------------------------------------------------------------------------------
            const getPuntos = async () => {
                const pre = await axios.get (urlBase+`user/8/game/${data.idPartido}`,CONFIGHEADER)//cargo la prediccion del admin
                if (pre.data.length == 0)//si no existe dicha prediccion(el admin no deberia entrar aca ya que al ser un update su resultado siempre se encontrara)
                {
                    if(user !== 8){
                        const result = await axios.get (urlBase+`result/${user}`,CONFIGHEADER)//cargo la suma de los puntajes actuales del usuario
                        const datauser = await axios.get (URLBASEAPI+`users/users/${user}`,CONFIGHEADER)//cargo los datos del usuario actual
                        Array.from(result.data).forEach( async(total)=>{//recorro el resultado
                            Array.from(datauser.data).forEach(async(data)=>{
                                await axios.put (URLBASEAPI+`users/${user}`,{//actualizo su puntaje total
                                    nombre: data.nombre,
                                    apellido: data.apellido,
                                    email: data.email,
                                    usuario: data.usuario,
                                    pass: data.pass,
                                    puntos: total.puntos_total
                                },CONFIGHEADER);
                                //console.log(`Actualizacion de puntos: ${total.puntos_total} del usuario: ${user}`)
                            });
                        });
                        
                    }
                    //console.log(`Se actualizara los puntajes una vez subido los resultados`);
                    setPuntos(0);
                    
                }
                else{
                    if(user==8){//si el usuario actual es admin actualizara los datos de todas las predicciones y puntajes totales
                        const users = await axios.get (URLBASEAPI+`users`,CONFIGHEADER)//cargo los datos de todos los usuarios
                        Array.from(users.data).forEach( async(useri)=>{//recorro cada usuario
                            const userpre = await axios.get(urlBase+`user/${useri.idUsuario}`)//cargo todas las predicciones por usuario
                            Array.from(userpre.data).forEach( async(preu)=>{//recorro cada prediccion
                                if(preu.idPartido == data.idPartido){//me aseguro que los partidos a tener en cuenta sean los de la carta
                                    if(preu.preEquipo1 == preEquipo1 && preu.preEquipo2 == preEquipo2){//si la prediccion del usuario es igual a la prediccion del admin actualizo puntos
                                        console.log(`${preu.idUsuario} ${preu.idPartido} ${preu.preEquipo1} = ${preEquipo1}   ${preu.preEquipo2} = ${preEquipo2} ${data.idPartido}`)
                                        console.log(`usuario:${preu.idUsuario} acerto al partido:${preu.idPartido}`)
                                        await axios.put(urlBase+`${preu.idPrediccion}`,{
                                            idPartido: preu.idPartido,
                                            idUsuario: preu.idUsuario,
                                            preEquipo1: preu.preEquipo1,
                                            preEquipo2: preu.preEquipo2,
                                            puntos: 1
                                        }, CONFIGHEADER);
                                    }
                                    else{
                                        await axios.put(urlBase+`${preu.idPrediccion}`,{
                                            idPartido: preu.idPartido,
                                            idUsuario: preu.idUsuario,
                                            preEquipo1: preu.preEquipo1,
                                            preEquipo2: preu.preEquipo2,
                                            puntos: 0
                                        }, CONFIGHEADER);
                                        //console.log(`${preu.idUsuario} ${preu.idPartido} ${preu.preEquipo1} = ${preEquipo1}   ${preu.preEquipo2} = ${preEquipo2} ${data.idPartido}`)
                                        //console.log(`usuario:${preu.idUsuario} no acerto al partido:${preu.idPartido}`)
                                    } 
                                }
                            });
                            
                            const result = await axios.get (urlBase+`result/${useri.idUsuario}`,CONFIGHEADER)//cargo la suma de los puntajes actuales del usuario recorrido actual
                            Array.from(result.data).forEach( async(total)=>{//actualizo los puntos totales de usuario recorrido
                                try {  
                                    await axios.put (URLBASEAPI+`users/${useri.idUsuario}`,{
                                        nombre: useri.nombre,
                                        apellido: useri.apellido,
                                        email: useri.email,
                                        usuario: useri.usuario,
                                        pass:useri.pass,
                                        puntos:total.puntos_total
                                    },CONFIGHEADER);
                                    //console.log(`Actualizacion de puntos: ${total.puntos_total} del usuario: ${useri.usuario}`)
                                } catch (error) {
                                    alert(error)
                                }
                            });
                        });
                        setPuntos(0);
                    }
                    else{//si no es admin 1, actualizara puntos total de dicho usuario y calculara resultado de la prediccion actual
                        //console.log(`Calculando puntaje`);
                        Array.from(pre.data).forEach((item)=>{
                            if(preEquipo1 == item.preEquipo1 && preEquipo2 == item.preEquipo2){
                                //console.log(`Acertaste a la prediccion del partido: ${data.idPartido}`);
                                setPuntos(1);
                                //setPuntos(item.puntos);
                            }
                            else{
                                //console.log(`No acertaste a la prediccion del partido: ${data.idPartido}`);
                                setPuntos(0);
                            }
                        });
                        //console.log("actualizando puntaje");
                        const result = await axios.get (urlBase+`result/${user}`,CONFIGHEADER)//cargo la suma de los puntajes actuales del usuario
                        const datauser = await axios.get (URLBASEAPI+`users/users/${user}`,CONFIGHEADER)//cargo los datos del usuario actual
                        Array.from(result.data).forEach( async(total)=>{//recorro el resultado
                            Array.from(datauser.data).forEach(async(datau)=>{
                                await axios.put (URLBASEAPI+`users/${user}`,{//actualizo su puntaje total
                                    nombre: datau.nombre,
                                    apellido: datau.apellido,
                                    email: datau.email,
                                    usuario: datau.usuario,
                                    pass: datau.pass,
                                    puntos: total.puntos_total
                                },CONFIGHEADER);
                                //console.log(`Actualizacion de puntos: ${total.puntos_total} del usuario: ${user}`)
                            });
                        });
                    }  
                }
            }
            getPuntos();
            //console.log(puntos)
            //al hacer click por primera ves al boton de predicir se ejecutara primero el update en vez de los getpuntos por ende hara el update con puntos= 0
            //----------------------------------------------------------------------------------------------------------

           
            
            const changePrediction = async () =>{
                
                try { 
                    await axios.put (urlBase+prediccion,{
                        idPartido: data.idPartido,
                        idUsuario: user,
                        preEquipo1: preEquipo1,
                        preEquipo2: preEquipo2,
                        puntos: puntos
                    }, CONFIGHEADER);
                } catch (error) {
                    alert(error)
                }
            };
            changePrediction()

        } else if (predecir>0 && (prediccion==='') && (preEquipo1!==UNCHECKED || preEquipo2!==UNCHECKED)) {
            //console.log(`Create Post: data.idPartido ${data.idPartido} user ${user} preEquipo1 ${preEquipo1} preEquipo2 ${preEquipo2}`)
            
           
           
            //-------------------------------------------------------------------------------------------------------
            const getPuntos = async () => {
                const pre = await axios.get (urlBase+`user/8/game/${data.idPartido}`,CONFIGHEADER)//cargo los datos del admin 1 de la tabla predicciones dependiendo del partido actual
                if (pre.data.length == 0)//si no tengo resultados de ese partido del admin
                {
                    if(user==8){//si el usuario de actual es admin, actualizara todas las predicciones y puntajes totales
                        const users = await axios.get (URLBASEAPI+`users`,CONFIGHEADER)//cargo los datos de todos los usuarios
                        Array.from(users.data).forEach( async(useri)=>{//recorro cada usuario
                            const userpre = await axios.get(urlBase+`user/${useri.idUsuario}`)//cargo todas las predicciones por usuario
                            Array.from(userpre.data).forEach( async(preu)=>{//recorro cada prediccion
                                if(preu.idPartido == data.idPartido){//me aseguro que los partidos a tener en cuenta sean los de la carta
                                    if(preu.preEquipo1 == preEquipo1 && preu.preEquipo2 == preEquipo2){//si la prediccion del usuario es igual a la prediccion del admin actualizo puntos
                                        //console.log(`${preu.idUsuario} ${preu.idPartido} ${preu.preEquipo1} = ${preEquipo1}   ${preu.preEquipo2} = ${preEquipo2} ${data.idPartido}`)//verifico que los partido coincidan
                                        //console.log(`usuario:${preu.idUsuario} acerto al partido:${preu.idPartido}`)//note que unos pocos datos no se toma el punto 1 pero creo que solo vi a 1 aunque alla entrado aca
                                        await axios.put(urlBase+`${preu.idPrediccion}`,{
                                            idPartido: preu.idPartido,
                                            idUsuario: preu.idUsuario,
                                            preEquipo1: preu.preEquipo1,
                                            preEquipo2: preu.preEquipo2,
                                            puntos: 1
                                        }, CONFIGHEADER);
                                    }
                                    else{
                                        await axios.put(urlBase+`${preu.idPrediccion}`,{
                                            idPartido: preu.idPartido,
                                            idUsuario: preu.idUsuario,
                                            preEquipo1: preu.preEquipo1,
                                            preEquipo2: preu.preEquipo2,
                                            puntos: 0
                                        }, CONFIGHEADER);
                                        //console.log(`${preu.idUsuario} ${preu.idPartido} ${preu.preEquipo1} = ${preEquipo1}   ${preu.preEquipo2} = ${preEquipo2} ${data.idPartido}`)
                                        //console.log(`usuario:${preu.idUsuario} no acerto al partido:${preu.idPartido}`)
                                    } 
                                }
                            });
                            
                            const result = await axios.get (urlBase+`result/${useri.idUsuario}`,CONFIGHEADER)//cargo la suma de los puntajes actuales del usuario recorrido actual
                            Array.from(result.data).forEach( async(total)=>{//actualizo los puntos totales de usuario recorrido
                                try {  
                                    await axios.put (URLBASEAPI+`users/${useri.idUsuario}`,{
                                        nombre: useri.nombre,
                                        apellido: useri.apellido,
                                        email: useri.email,
                                        usuario: useri.usuario,
                                        pass:useri.pass,
                                        puntos:total.puntos_total
                                    });
                                    //console.log(`Actualizacion de puntos: ${total.puntos_total} del usuario: ${useri.usuario}`)
                                } catch (error) {
                                    alert(error)
                                }
                            });
                            
                        });
                    }
                    else{//si no es admin, actualizara puntos total de dicho usuario
                        const result = await axios.get (urlBase+`result/${user}`,CONFIGHEADER)//cargo la suma de los puntajes actuales del usuario
                        const datauser = await axios.get (URLBASEAPI+`users/users/${user}`,CONFIGHEADER)//cargo los datos del usuario actual
                        Array.from(result.data).forEach( async(total)=>{//recorro el resultado
                            if (result.data.length == 0){//si es la primera vez que participa en la prediccion
                                alert("Bienvenido a la predicciones, que tengas mucha suerte")//
                            }
                            else{
                                Array.from(datauser.data).forEach(async(datau)=>{
                                    try {  
                                        await axios.put (URLBASEAPI+`users/${user}`,{//actualizo su puntaje total
                                            nombre: datau.nombre,
                                            apellido: datau.apellido,
                                            email: datau.email,
                                            usuario: datau.usuario,
                                            pass: datau.pass,
                                            puntos: total.puntos_total
                                        });
                                        //console.log(`Actualizacion de puntos: ${total.puntos_total} del usuario: ${user}`)
                                    } catch (error) {
                                        alert(error)
                                    }
                                });
                            }
                        });
                    }  
                    //console.log(`Se actualizara los puntajes una vez subido los resultados`);
                    setPuntos(0);
                }
                else{//si se encuentra los resultados del admin(el admin no deberia entrar en este else ya que esta en la creacion de un nuevo y unico prediccion)
                    console.log(`Calculando puntaje`);
                    Array.from(pre.data).forEach(async (item)=>{
                        if(preEquipo1 == item.preEquipo1 && preEquipo2 == item.preEquipo2){//comparo si el resultado del usuario actual es igual al resultado del admin
                            //console.log(`Acertaste a la prediccion del partido: ${data.idPartido}`);
                            setPuntos(1);
                            //setPuntos(item.puntos);
                        }
                        else{
                            //console.log(`No acertaste a la prediccion del partido: ${data.idPartido}`);
                            setPuntos(0);
                        };
                    });
                    const result = await axios.get (urlBase+`result/${user}`,CONFIGHEADER)//cargo la suma de los puntajes actuales del usuario
                    const datauser = await axios.get (URLBASEAPI+`users/users/${user}`,CONFIGHEADER)//cargo los datos del usuario actual
                    Array.from(result.data).forEach( async(total)=>{//recorro el resultado
                        if (result.data.length === 0){//si es la primera vez que participa en la prediccion
                            alert("Bienvenido a la predicciones, que tengas mucha suerte")
                        }
                        else{
                            Array.from(datauser.data).forEach(async(data)=>{
                                try {  
                                    await axios.put (URLBASEAPI+`users/${user}`,{//actualizo su puntaje total
                                        nombre: data.nombre,
                                        apellido: data.apellido,
                                        email: data.email,
                                        usuario: data.usuario,
                                        pass: data.pass,
                                        puntos: total.puntos_total
                                    });
                                    //console.log(`Actualizacion de puntos: ${total.puntos_total} del usuario: ${user}`)
                                } catch (error) {
                                    alert(error)
                                }
                            });
                        }
                    });
                }
            }
            getPuntos();
            //console.log(puntos);//mismo bug que el update
            //----------------------------------------------------------------------------------------------------------

            
            
            const createPrediction = async () =>{
         
                try {  
                    await axios.post (urlBase,{
                        idPartido: data.idPartido,
                        idUsuario: user,
                        preEquipo1: preEquipo1,
                        preEquipo2: preEquipo2,
                        puntos: puntos
                    }, CONFIGHEADER);
                } catch (error) {
                    alert(error)
                }
            };
            createPrediction()
        }     
              
    },[predecir, prediccion, urlBase, data.idPartido, user, preEquipo1, preEquipo2, UNCHECKED])

    const flag1 = withFlag ? <FlagImg1 src={urlFlags(`./${GetFlag(data.equipo1)}`)} alt="flag"/> : <Position>{data.posicion1}</Position>;
    const flag2 = withFlag ? <FlagImg2 src={urlFlags(`./${GetFlag(data.equipo2)}`)} alt="flag"/> : <Position>{data.posicion2}</Position>;

    return(
        <CardLine key={myKey}> 
            <CardFlag1> {flag1} </CardFlag1>                
            <CardPlayer1>{data.equipo1}</CardPlayer1>
            {   withUser && preEquipo1===CHECKED?
                    <label><CardInput type="checkbox" id="Input1" checked={preEquipo1} defaultChecked onChange={e => setPreEquipo1(preEquipo1===CHECKED ? UNCHECKED : CHECKED)}></CardInput></label>:
                withUser && preEquipo1!==CHECKED?
                    <label><CardInput type="checkbox" id="Input1" checked={preEquipo1} unchecked onChange={e => setPreEquipo1(preEquipo1===UNCHECKED ? CHECKED : UNCHECKED)}></CardInput></label>:
                <CardResult1>{data.goles1}</CardResult1>
            }
            {   withUser && preEquipo2===CHECKED?
                    <label><CardInput type="checkbox" id="Input2" checked={preEquipo2} defaultChecked onChange={e => setPreEquipo2(preEquipo2===CHECKED ? UNCHECKED : CHECKED)}></CardInput></label>:
                withUser && preEquipo2!==CHECKED?
                    <label><CardInput type="checkbox" id="Input2" checked={preEquipo2} unchecked onChange={e => setPreEquipo2(preEquipo2===UNCHECKED ? CHECKED : UNCHECKED)}></CardInput></label>:
                <CardResult2>{data.goles2}</CardResult2>
            }
            <CardPlayer2>{data.equipo2}</CardPlayer2>
            <CardFlag2> {flag2} </CardFlag2>
            <CardData>{data.fecha} {data.hora} {data.estadio}</CardData>       
        </CardLine>
    )
}

export default Line

/*
Se debe modificar la parte de label: 
- si ya no se puede modificar porque paso la fecha usar la primer forma: disabled="disabled" y 
    checked="checked" o "unchecked" según corresponda con los datos que devuelva el back.
    <label><CardInput type="checkbox" id="Input1" value="check1" disabled="disabled" checked="checked"></CardInput></label>
- si todavía puede modificar las predicciones (checkbox), usar defaultChecked y unchecked dependiendo
    que devuelve el back si tenía valores cargados.
    <label><CardInput type="checkbox" id="Input2" value="check2" defaultChecked></CardInput></label>
*/