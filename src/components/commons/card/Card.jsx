import React from 'react';
import Line from './line/Line.jsx';
import {CardStyle, CardTitle} from './CardStyle.js'

function Card ({name, withFlag, data}){
    
    return(
        <CardStyle>
            <CardTitle>{name}</CardTitle>
            {   data.map((item, index) =>{
                    return <Line key={index+1} myKey={index+1} data={item} withFlag={withFlag}/>
                })        
            }
        </CardStyle>    
    )
}

export default Card