import styled from "styled-components";


export const DivImg = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    justify-content: right;
    backdrop-filter: initial;
    border-top: 20px solid transparent;
    @media (max-width: 1094px) {
        justify-content: center;
        background-color: rgba(0,0,0,0.5);
        border-left: 180px solid rgba(255,255,255,0.5) ;
        border-right: 180px solid rgba(255,255,255,0.5);
        /* border-bottom: 20px solid transparent; */
        border-top: none;

    } 
    @media (max-width: 750px) {
        border-left: 110px solid rgba(255,255,255,0.5) ;
        border-right: 110px solid rgba(255,255,255,0.5);
    } 
   
`;


export const ImInicio = styled.img`
    max-width: 23%;
    /* height: auto; */
    position: absolute;
    margin: 4rem 2rem 0 2rem;
    /* background-color: rgba(0,0,0,0.5); */
    
    @media (max-width: 1094px) {
        position: relative;
        margin: 1rem 0 1rem 0;
        max-width: 24%;
        /* background-color: transparent; */

    }
    @media (max-width: 570px) {
        max-width: 30%;
    }
`;

export const Myh1 = styled.h1`
    color: ${(props)=>props.theme.colors.whiteBg};
    font-weight: bold;
    font-size: 150%;
    display: flex;
    justify-content: left;
    min-width: 16rem;
    margin-left: 3rem;
    margin-right: 3rem;
    @media (max-width: 1094px) {
    justify-content: center;


} 
    @media (max-width: 900px) {
        font-size:130%;
    }  
`;
export const Info = styled.p`
    color: ${(props)=>props.theme.colors.whiteBg};
    font-size: 90%;
    display: flex;
    justify-content: left;
    max-width: 55%;
    margin-left: 3rem;
    
    @media (max-width: 1094px) {
        max-width: 80%;
       
    }  
    @media (max-width: 1094px) {
        justify-content: center;
        max-width: 100%;
        text-align: center;
        margin-right: 3rem;
       
    }
    @media (max-width: 900px) {
        font-size:80%;
    }  
`;

export const ContainerButton = styled.div`
display: flex;
justify-content: left;
margin-top: 1rem;
margin-left: 3rem;
margin-right: 3rem;
margin-bottom: 3rem;
transition: all .6s ease;
a:hover{
    color: ${(props)=>props.theme.colors.whiteBg};
}
@media (max-width: 1094px) {
    justify-content: center;


}
   
@media (max-width: 900px) {
    margin-top: 2rem;
}  
`