import styled from 'styled-components';

export const SectionProfile = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const FormProfile = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    max-width: 40rem; 
    min-width: 30rem;
    margin: 1rem;
    padding-bottom:0.2em;
    overflow: hidden;
    color: ${(props)=>props.theme.colors.whiteBg};
    //Efecto glassmorphism
    background: ${(props)=>props.theme.colors.cardBg};
    box-shadow: 0 8px 32px 0 ${(props)=>props.theme.colors.cardShadow};
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    @media (max-width: 500px) {
        min-width: 22rem;
    }
`;


export const ProfileLabel = styled.label`
    display: flex;
    justify-content: flex-end ;
    align-items: center;
    flex-direction: row;
    min-width: 27.1rem;
    margin-bottom: 1rem;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const ProfileInput = styled.input`
    min-width: 16rem;
    margin-left: 1rem;
    
    @media (max-width: 500px) {
        margin-left: 0;
    }
`;

export const ProfilePuntos = styled.span`
    min-width: 16rem;
    margin-left: 1.5rem;
    
    @media (max-width: 500px) {
        margin-left: 0;
        text-align: center;
    }
`;


