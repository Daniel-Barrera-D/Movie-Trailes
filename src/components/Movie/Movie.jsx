import styled from "styled-components";

const CardMovie = styled.iframe`
    width: 350px;
    height: 190px;
    border: 2px solid #6BD1FF;
    background-image: url("https://i.ytimg.com/vi/8ubRKDsM1FI/maxresdefault.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
`


const Movie = () => {
    return(
        <CardMovie ></CardMovie>
    )
}

export default Movie