import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa'
import imgLogo from '../../img/LogoCatarSinFondo.png';
import imgTitle from '../../img/TituloQatar2.png';
import { BoxButton, HeaderBar, ItemList, List, Logo, LogoImg, Title, TitleContainer, TitleImg } from "./NavStyle";
import { useState } from "react";
import { useContextProvider } from "../../contexts/authContext";

function Navigation(){

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const {isAuthenticated} = useContextProvider();

    return(
        <>
            <HeaderBar id="headerBar">
                <IconContext.Provider value={{ style: {fontSize: "2em"} }}>
                    <TitleContainer>
                        <Logo>
                            <Link to="/">
                                <LogoImg src={imgLogo} alt="logo"/>
                            </Link>
                        </Logo> 
                        <Title>
                            <TitleImg src={imgTitle} alt="title"/>
                        </Title>
                    </TitleContainer>

                    <BoxButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <FaBars></FaBars>
                    </BoxButton>
                    
                    <List open={showMobileMenu}>
                        <ItemList onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Link to="/">Inicio</Link>
                        </ItemList>
                        <ItemList onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Link to="/partidos">Partidos</Link>
                        </ItemList>
                        <ItemList onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Link to="/ranking">Ranking</Link>
                        </ItemList>
                        <ItemList onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Link to="/private/predicciones">Predicciones</Link>
                        </ItemList>
                        <ItemList onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Link to="/public/iniciosesion">
                                {isAuthenticated?'Mi Perfil':'Login'}
                            </Link>
                        </ItemList>
                    </List>
                    
                </IconContext.Provider>   
            </HeaderBar>     
            
            <Outlet/>
      </>
    )
}

export default Navigation