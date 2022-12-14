import styled from "styled-components";

export const DivTotal = styled.div`
    width: 100%;
    display: flex;
    /* margin-top: 1rem; */
    /* margin-bottom: 2rem; */
    @media (max-width: 850px) {
        padding-bottom: 1rem;
    } 
    @media (max-width: 684px) {
        flex-direction: column-reverse;
        align-items: center;
    } 
    

`;
export const DivTexto = styled.div`
    margin-left: 3rem;
    text-align: left;
    width: 80%;
    @media (max-width: 684px) {
        text-align: center;
        margin-right: 3rem;

    } 

`;
export const DivImg = styled.div`
    @media (max-width: 826px) {
        width: 40%;
    } 
    @media (max-width: 684px) {
        width: 20%;
    } 
`;

export const ImgCopa = styled.img`
    width: 100%;
    max-width: 330px;
    height: auto;
    margin-top: 1rem;
`;

export const Myh1 = styled.h1`
    color: ${(props)=>props.theme.colors.whiteBg};
    font-weight: bold;
    font-size: 150%;
    
    @media (max-width: 900px) {
        font-size:130%;
    }  
`;
export const Info = styled.p`
    color: ${(props)=>props.theme.colors.whiteBg};
    font-size: 90%;
    
    @media (max-width: 900px) {
        font-size:80%;
    }  
`;

export const ContainerButton = styled.div`
    display: flex;
    margin-top: 1rem;
    transition: all .6s ease;
    justify-content: center;
    a:hover{
        color: ${(props)=>props.theme.colors.whiteBg};
    }
    /* @media (max-width: 684px) {
        justify-content: center;

    } */
   
`;