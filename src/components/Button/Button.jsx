import styled from "styled-components";

const Button = styled.button`
    margin: 0;
    margin-top: 20px;
    width: fit-content;
    text-align: center;
    background-color: #2A7AE4;
    border-radius: 3px;
    padding: 10px 20px;
    color: #FFFFFF;
    border: 1px solid #2A7AE4;
    transition: 0.15s all ease-out;
    cursor: pointer;
    &:hover {
        background-color: #1E5CAD;
    }
`

export default Button;