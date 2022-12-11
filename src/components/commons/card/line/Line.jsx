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
            console.log(`Modificar Put: data.idPartido ${data.idPartido} user ${user} preEquipo1 ${preEquipo1} preEquipo2 ${preEquipo2}`)
            const changePrediction = async () =>{
                try {  
                    await axios.put (urlBase+prediccion,{
                        idPartido: data.idPartido,
                        idUsuario: user,
                        preEquipo1: preEquipo1,
                        preEquipo2: preEquipo2
                    }, CONFIGHEADER);
                } catch (error) {
                    alert(error)
                }
            };
            changePrediction()
        } else if (predecir>0 && (prediccion==='') && (preEquipo1!==UNCHECKED || preEquipo2!==UNCHECKED)) {
            console.log(`Create Post: data.idPartido ${data.idPartido} user ${user} preEquipo1 ${preEquipo1} preEquipo2 ${preEquipo2}`)
            const createPrediction = async () =>{
                try {  
                    await axios.post (urlBase,{
                        idPartido: data.idPartido,
                        idUsuario: user,
                        preEquipo1: preEquipo1,
                        preEquipo2: preEquipo2
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