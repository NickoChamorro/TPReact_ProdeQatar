import { createGlobalStyle } from 'styled-components';
import Background from '../img/Background1.jpg';
import fontQatarBold from '../files/Qatar2022Arabic-Bold.ttf';
import fontQatarHeavy from '../files/Qatar2022Arabic-Heavy.ttf';
 
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Qatar Bold';
        src: url(${fontQatarBold}) format("truetype");
    }
    @font-face {
        font-family: 'Qatar Heavy';
        src: url(${fontQatarHeavy}) format("truetype");
    }

    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${(props)=>props.theme.colors.primary} url(${Background}) center center no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        min-height: 100vh;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    @media (max-width: 400px){
        body {
            font-size: 75%;
        }
    }

    a:link, a:visited, a:active {
        text-decoration:none;
        color: ${(props)=>props.theme.colors.primary};
    }

    h1,h2,a{
        font-family: 'Qatar Bold', sans-serif ;
    }

`;
 
export default GlobalStyle;