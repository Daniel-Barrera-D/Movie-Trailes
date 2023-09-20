import styled from "styled-components";

const TitleGenre = styled.label`
    display: flex;
    background-color: ${props => props.color};
    color: #F5F5F5;
    font-size: 20px;
    padding: 8px 15px;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: 20px;
` 

export default TitleGenre;