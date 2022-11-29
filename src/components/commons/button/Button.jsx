import { Link } from 'react-router-dom'
import {ButtonStandard} from './ButtonStyle.js'

function Button({string, route, action}){
    return (
        <ButtonStandard as={Link} to={route} onClick={action}>
            {string}
        </ButtonStandard>
    )
}

export default Button
