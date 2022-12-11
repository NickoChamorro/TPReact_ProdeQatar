import axios from "axios";
import { useState } from "react";
import Select from "react-select";
import { AUTH_USER, CONFIGHEADER, URLBASEAPI, URLPATHGAME } from "../../config/routes/paths.js";
import Card from "../commons/card/Card.jsx";
import { ContainerPredictions, SectionPredictions } from "./PredictionsStyle.js";

function Predictions(){

    const url = `${URLBASEAPI}${URLPATHGAME}`;
    const id = window.localStorage.getItem(AUTH_USER) ?? 0;

    const [grupoA, setGrupoA] = useState([]);
    const [grupoB, setGrupoB] = useState([]);
    const [grupoC, setGrupoC] = useState([]);
    const [grupoD, setGrupoD] = useState([]);
    const [grupoE, setGrupoE] = useState([]);
    const [grupoF, setGrupoF] = useState([]);
    const [grupoG, setGrupoG] = useState([]);
    const [grupoH, setGrupoH] = useState([]);
    const [octavos, setOctavos] = useState([]);
    const [cuartos, setCuartos] = useState([]);
    const [semis, setSemis] = useState([]);
    const [tercerCuarto, setTercerCuarto] = useState([]);
    const [final, setFinal] = useState([]);

    const stages = [
        { label: 'Fase de grupos', value: 'Grupos' },
        { label: 'Octavos', value: 'Octavos' },
        { label: 'Cuartos', value: 'Cuartos' },
        { label: 'Semifinales', value: 'Semis' },
        { label: 'Final', value: 'Final' },
    ];

    const [select, setSelect] = useState('');

    const handleSelectChange = async ({value}) => {
        //Actualizar estado para renderizar
        setSelect(value)
        //Buscar los registros del backend
        const urlComplete = `${url}stage/${value}`
        try {
            const res = await axios.get(urlComplete, CONFIGHEADER)
            setGrupoA(Array.from(res.data).filter(elements => elements.fase === 'Grupos' && elements.grupo === 'A'));
            setGrupoB(Array.from(res.data).filter(elements => elements.fase === 'Grupos' && elements.grupo === 'B'));
            setGrupoC(Array.from(res.data).filter(elements => elements.fase === 'Grupos' && elements.grupo === 'C'));
            setGrupoD(Array.from(res.data).filter(elements => elements.fase === 'Grupos' && elements.grupo === 'D'));
            setGrupoE(Array.from(res.data).filter(elements => elements.fase === 'Grupos' && elements.grupo === 'E'));
            setGrupoF(Array.from(res.data).filter(elements => elements.fase === 'Grupos' && elements.grupo === 'F'));
            setGrupoG(Array.from(res.data).filter(elements => elements.fase === 'Grupos' && elements.grupo === 'G'));
            setGrupoH(Array.from(res.data).filter(elements => elements.fase === 'Grupos' && elements.grupo === 'H'));
            setOctavos(Array.from(res.data).filter(elements => elements.fase === 'Octavos'));
            setCuartos(Array.from(res.data).filter(elements => elements.fase === 'Cuartos'));
            setSemis(Array.from(res.data).filter(elements => elements.fase === 'Semis'));
            setTercerCuarto(Array.from(res.data).filter(elements => elements.fase === '3roy4to'));
            setFinal(Array.from(res.data).filter(elements => elements.fase === 'Final'))
        } catch (error) {
            alert(error)
        };
    };

    return(
        <SectionPredictions>
            <Select
                defaultValue={{label:'Seleccionar...', value:''}}
                options={ stages }
                onChange={  handleSelectChange }
                theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: '#dfe6e9',
                      primary: '#951434',
                    },
                  })}
            />
            <ContainerPredictions>
            { 
                select==='Grupos'?
                    <>
                        <Card name='Grupo A' withFlag={true} user={id} data={grupoA}/>
                        <Card name='Grupo B' withFlag={true} user={id} data={grupoB}/>
                        <Card name='Grupo C' withFlag={true} user={id} data={grupoC}/>
                        <Card name='Grupo D' withFlag={true} user={id} data={grupoD}/>
                        <Card name='Grupo E' withFlag={true} user={id} data={grupoE}/>
                        <Card name='Grupo F' withFlag={true} user={id} data={grupoF}/>
                        <Card name='Grupo G' withFlag={true} user={id} data={grupoG}/>
                        <Card name='Grupo H' withFlag={true} user={id} data={grupoH}/>
                    </> :
                select==='Octavos'?
                    <Card name='Octavos' withFlag={true} user={id} data={octavos}/>:   
                select==='Cuartos'?
                    <Card name='Cuartos' withFlag={true} user={id} data={cuartos}/>:   
                select==='Semis'?
                    <Card name='Semis' withFlag={true} user={id} data={semis}/>:   
                select==='Final'?
                    <>
                        <Card name='3er y 4to Puesto' withFlag={true} user={id} data={tercerCuarto}/>
                        <Card name='Final' withFlag={true} user={id} data={final}/>
                    </>:
                <></>    
            }
            </ContainerPredictions>
        </SectionPredictions>

    ) 
}

export default Predictions