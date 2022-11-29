import styled from 'styled-components';

export const CardLine = styled.div`
    width: 100%;
    display: grid;
    grid-template: 'flag1 player1 res1 res2 player2 flag2'
                   'data data data data data data';  
    grid-template-columns: 15% 30% 5% 5% 30% 15%;
    grid-template-rows: auto auto;
    align-items: center;
    color: ${(props)=>props.theme.colors.lightBg};
`;

export const CardFlag1 = styled.div`
    grid-area: flag1;
    position: relative;
    padding: 0;
    margin: 0;
    min-height: 1.875rem;
    display: flex;  
    justify-content: center;
    align-items: center;
`;

export const CardFlag2 = styled.div`
    grid-area: flag2;
    position: relative;
    padding: 0;
    margin: 0;
    min-height: 1.875rem;
    display: flex;  
    justify-content: center;
    align-items: center;
`;

export const FlagImg1 = styled.img`
    width: 1.875rem;
    position: absolute;
    right: 0;
    top: 0;
`;

export const FlagImg2 = styled.img`
    width: 1.875rem;
    position: absolute;
    left: 0;
    top: 0;
`;

export const Position = styled.p`
    width: 3rem;
    text-align: center;
    font-weight: bold;
    margin: 0;
`;

export const CardPlayer1 = styled.div`
    grid-area: player1;
    padding-left: 0.5em;
    font-weight: bold;
`;

export const CardPlayer2 = styled.div`
    grid-area: player2;
    padding-right: 0.5em;
    text-align:right;
    font-weight: bold;
`;

export const CardResult1 = styled.div`
    grid-area: res1;
    min-width: 1.1rem;
    aspect-ratio: 1 / 1;
    border: 1px solid ${(props)=>props.theme.colors.black};
    margin-right: 0.2em;
    background-color: ${(props)=>props.theme.colors.whiteBg};
    text-align: center;
    color: ${(props)=>props.theme.colors.primary};
    `;

export const CardResult2 = styled.div`
    grid-area: res2;
    min-width: 1.1rem;
    aspect-ratio: 1 / 1;
    border: 1px solid ${(props)=>props.theme.colors.black};
    margin-left: 0.2em;
    background-color: ${(props)=>props.theme.colors.whiteBg};
    text-align: center;
    color: ${(props)=>props.theme.colors.primary};
`;

export const CardData = styled.div`
    grid-area: data;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
`;