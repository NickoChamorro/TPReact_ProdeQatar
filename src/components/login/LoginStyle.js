import styled from 'styled-components';

export const SectionLogin = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const FormLogin = styled.form`
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

export const TitleForm = styled.div`
    width: 8rem;
    @media (max-width: 900px) {
        width: 7rem;
    }
    @media (max-width: 400px) {
        width: 6rem;
    }
`

export const ImgForm = styled.img`
    max-width: 100%;
    height: auto;
`;

export const FormLabel = styled.label`
    display: block; 
`;

export const FormInput = styled.input`
    display: block;
    margin: 0.5rem;
`;


export const LinksForm = styled.div`
    margin: 1rem;
    a{
        color: ${(props)=>props.theme.colors.whiteBg};  
    }
`

export const Links = styled.span`
    color: ${(props)=>props.theme.colors.whiteBg};
    &:hover{
        cursor: pointer;
        text-shadow: ${(props)=>props.theme.colors.black} 0.1em 0.1em 0.2em;
    }
`
