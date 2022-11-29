import styled from 'styled-components';

export const ButtonStandard = styled.button`
    position: relative; 
    min-width: 7.7rem;
    min-height: 1.8rem;
    line-height: 1.8rem;
    margin: 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    text-align: center;
    color: ${(props)=>props.theme.colors.primary};
    background: ${(props)=>props.theme.colors.greyBg};
    border-radius: 10px;
    cursor: pointer;
    z-index: 1; 
    overflow: hidden; 
    transition: all .6s ease;
    &:before{
        content: '';
        position: absolute;
        color: ${(props)=>props.theme.colors.whiteBg};
        background: ${(props)=>props.theme.colors.primary};
        width: 0;
        height: 100%;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        z-index: -1;
        transition: all .6s ease;
    }

    &:hover{
        letter-spacing: 1px;
        &:before{
            width: 100%;
        }
    } 
    
    @media (max-width: 900px) {
        min-width: 9rem;
        min-height: 2.5rem;
        line-height: 2.5rem; 
    }   
`;

export const ContainerButton = styled.div`
    position: relative;
    display: flex;
    transition: all .6s ease;
    a:hover{
        color: ${(props)=>props.theme.colors.whiteBg};
    }
    @media (max-width: 900px) {
        margin-left: 0; 
    }    
`