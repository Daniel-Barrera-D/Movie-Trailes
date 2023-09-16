import styled from "styled-components"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const StyledFooter = styled.footer`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 30px;
    border-top: 1px solid #6BD1FF;
`

const Logo = styled.img`
    width: 150px;
    height: 30px;
    cursor: pointer;
`

const Autor = styled.p`
    color: #2841A7;
    font-size: 15px;
    margin: 0;
`

const Footer = () => {
    return(
            <StyledFooter>
                <Link to="/"><Logo src={ logo }></Logo></Link>
                <Autor>Desarrollado por Daniel Barrera Devia</Autor>
            </StyledFooter>
    )
}

export default Footer;