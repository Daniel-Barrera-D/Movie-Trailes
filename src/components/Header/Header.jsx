import React from "react";
import { styled } from "styled-components";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    display: flex;
    background-color: #000000;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    border-bottom: 2px solid #6BD1FF;
`

const Logo = styled.img`
    width: 200px;
    height: 40px;
    cursor: pointer;
    @media (max-width: 400px) {
        width: 150px;
        height: 25px;
    }
`

const BtnHeader = styled.section`
    text-align: center;
    border-radius: 3px;
    padding: 10px 20px;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
    transition: 0.15s all ease-out;
    cursor: pointer;
    &:hover {
        background-color: #3D3B3B;
    }
    @media (max-width: 370px) {
        font-size: small;
    }
`

const Header = () => {
    return <StyledHeader>
        <Link to={"/"}><Logo src={ logo } alt="Logo"/></Link>
        <Link to="/new-video" style={ {textDecoration: 'none'} }><BtnHeader>Nuevo Video</BtnHeader></Link>
        
    </StyledHeader>
}

export default Header;