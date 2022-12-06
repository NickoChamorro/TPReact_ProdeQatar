import styled from "styled-components";

export const Myh1 = styled.h1`
    color: ${(props)=>props.theme.colors.whiteBg};
    font-weight: bold;
    font-size: 150%;
    display: flex;
    justify-content: center;
    min-width: 16rem;
    margin-left: 3rem;
    margin-right: 3rem;
    @media (max-width: 900px) {
        font-size:130%;
    }  
`;
export const Info = styled.p`
    color: ${(props)=>props.theme.colors.whiteBg};
    font-size: 90%;
    display: flex;
    justify-content: justify;
    min-width: 16rem;
    margin-right: 3rem;
    margin-left: 3rem;
    @media (max-width: 900px) {
        font-size:80%;
    }  
`;

export const ContainerButton = styled.div`
display: flex;
justify-content: center;
margin-top: 1rem;
margin-bottom: 3rem;
transition: all .6s ease;
a:hover{
    color: ${(props)=>props.theme.colors.whiteBg};
}

@media (max-width: 900px) {
    margin-top: 2rem;
}  
`