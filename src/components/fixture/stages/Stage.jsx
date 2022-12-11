import Card from '../../commons/card/Card.jsx';
import { CardStyle, CardTitle } from '../../commons/card/CardStyle.js';
import { Section } from './StageStyle.js';
import groupStage from '../../../files/groupStage.json';
import finalStage from '../../../files/finalStage.json';

function Stage ({section}){
    const stage = section === "GroupStage" ? groupStage : section === "FinalStage" ? finalStage : [] ;
    let winner = '';
    return(
        <Section id={section}>
            {   stage.map((item,index) =>{
                    if (item.name === "FINAL") winner = item.winner;    
                    return <Card key={index+1} name={item.name} withFlag={item.withFlag} user={null} data={item.data}/> 
                })      
            }  
            {
                section === "FinalStage" ?
                <CardStyle>
                    <CardTitle>Ganador</CardTitle>
                    <p className="ganador">{winner}</p>
                </CardStyle> : <></>
            }
        </Section>                                        
    )
};

export default Stage