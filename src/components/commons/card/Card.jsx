import React from 'react';
import Line from './line/Line.jsx';
import {CardStyle, CardTitle} from './CardStyle.js'
import { ContainerButton } from '../button/ButtonStyle.js';
import Button from '../button/Button.jsx';
import { useState } from 'react';

function Card ({name, withFlag, user, data}){

    const [predecir, setPredecir] = useState(0);

    const handlePredictions = () =>{   
        setPredecir(predecir+1);
    }

    return(
        <CardStyle>
            <CardTitle>{name}</CardTitle>
            {   data.map((item, index) =>{
                    return <Line key={index+1} myKey={index+1} data={item} user={user} predecir={predecir} withFlag={withFlag}/>
                })        
            }
            {
                (user!=='' && user!==null && user!==undefined)?
                <ContainerButton>
                    <Button action={handlePredictions} string='Predecir' />
                </ContainerButton>:
                <></>
            }
        </CardStyle>  
          
    )
}

export default Card