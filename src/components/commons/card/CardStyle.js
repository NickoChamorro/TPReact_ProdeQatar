import styled from 'styled-components';

export const CardStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    max-width: 28rem; 
    min-width: 25rem;
    margin: 1rem;
    padding-bottom:0.2em;
    overflow: hidden;
    //Efecto glassmorphism
    background: ${(props)=>props.theme.colors.cardBg};
    box-shadow: 0 8px 32px 0 ${(props)=>props.theme.colors.cardShadow};
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    @media (max-width: 450px) {
        min-width: 22rem;
    }
`;

export const CardTitle = styled.h2`
    width: 100%;
    text-align: center;
    text-transform: capitalize;
    color: ${(props)=>props.theme.colors.lightBg};
    margin: 0 auto 0.5em;
    //Efecto glassmorphism
    background: ${(props)=>props.theme.colors.cardTitleBg};
    box-shadow: 0 8px 32px 0 ${(props)=>props.theme.colors.cardShadow};
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
`;