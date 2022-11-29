import styled from 'styled-components';

export const HeaderBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap; 
    width: 100%; 
    margin: 0;
    padding: 0;
    background: ${(props)=>props.theme.colors.whiteBg};
    z-index: 2;
    @media (min-width: 1000px){
        justify-content: space-around;
    }  
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0;
    margin: 0;
`;

export const Logo = styled.div`
    width: 4rem;
    @media (max-width: 900px){
        width: 3.8rem;
    }
`;

export const LogoImg = styled.img`
    max-width: 100%;
    height: auto;
`;

export const Title = styled.div`
    width: 11.25rem;
    @media (max-width: 900px) {
        width: 10rem;
    }
    @media (max-width: 400px) {
        width: 8rem;
    }
`;

export const TitleImg = styled.img`
    max-width: 100%;
    height: auto;
`;

export const List = styled.ul`
    position: relative;
    padding:0;
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-right: 2rem;
    z-index: 2;
    @media (max-width: 900px){
        background: linear-gradient(to bottom, ${(props)=>props.theme.colors.greyBg}, ${(props)=>props.theme.colors.lightBg});
        position: absolute;
        font-size: 150%;
        top: 70px;
        left: ${({ open }) => (open ? "0%" : "-100%")};
        margin: 0;
        bottom:0;
        width: 100%;
        height: 90vh;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        transition: 0.5s all ease;
    }
`;

export const ItemList = styled.li`
    position: relative;
    color: ${(props)=>props.theme.colors.primary}; //#951434
    font-weight: bold;
    margin-left: 2.5em;
    height: 1.35rem;
    cursor: pointer;
    
    &:before{
        content: '';
        position: absolute;
        bottom: -0.22rem;
        left: 0;
        width: 0;
        height: .2rem;
        background: ${(props)=>props.theme.colors.primary};
        transition: .5s;
    }
    &:after{
        content: '';
        position: absolute;
        bottom: -0.22rem;
        right: 0;
        width: 0;
        height: .2rem;
        background: ${(props)=>props.theme.colors.greyBg};
        transition: .5s;
        @media (max-width: 800px) {
            background: white;
        }
    }

    &:hover{
        color: black;
        transition: .5s;

        &:before{
            width: 50%;
            translate: 100%;    
        }

        &:after{
            width: 50%;
            translate: -100%;
        }
        @media (max-width: 900px) {
            color: black;
        }
    }

    @media (max-width: 900px) {
        margin-left: 0; 
        height: 2rem;
        color: ${(props)=>props.theme.colors.primary};
    }

`;

export const BoxButton = styled.div`
    display: none;
    margin-right: 1rem;
    font-size: 100%;
    @media (max-width: 900px) {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg{
            fill: ${(props)=>props.theme.colors.primary};
            margin-right: 0.5rem;
        }
    }
`
export const ContainerButtonNav = styled.div`
    position: relative;
    display: flex;
    margin-left: 2.5em;
    transition: all .6s ease;
    a:hover{
        color: ${(props)=>props.theme.colors.whiteBg};
    }
    @media (max-width: 900px) {
        margin-left: 0; 
    }    
`
