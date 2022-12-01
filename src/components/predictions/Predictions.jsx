import { useState } from "react";
import Select from "react-select";
import Stage from "../fixture/stages/Stage.jsx";
import { SectionPredictions } from "./PredictionsStyle.js";

function Predictions(){

    const stages = [
        { label: 'Fase de grupos', value: 'Grupos' },
        { label: 'Octavos', value: 'Octavos' },
        { label: 'Cuartos', value: 'Cuartos' },
        { label: 'Semifinales', value: 'Semis' },
        { label: 'Final', value: 'Final' },
    ];

    const [select, setSelect] = useState('');

    const handleSelectChange = ({value}) => {
        //Buscar los registros del backend

        //Actualizar estado para renderizar
        setSelect(value)
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
            { 
                //Modificar cuando se implemente el back, debe cargar siempre de la misma forma ya que el back 
                //trae los partidos que corresponden a la fase seleccionada, se le envía como valor al back la fase y devuelve los partidos.
                // Deberia ser un map al json que traiga directamente y cargar los componentes Card.
                select==='Grupos' || select==='' ? 
                <Stage section="GroupStage"/> :
                <Stage section="FinalStage"/>  
            }

        </SectionPredictions>

    ) 
}

export default Predictions