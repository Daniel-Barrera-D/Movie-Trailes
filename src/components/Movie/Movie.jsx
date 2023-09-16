import styled from "styled-components";

const SectionCard = styled.div`
    transition: transform 0.3s;
    &:hover{
        transform: scale(1.1);
    }
`

const CardMovie = styled.div`
    width: 350px;
    height: 190px;
    border: 2px solid #6BD1FF;
    background-image: url("https://i.ytimg.com/vi/8ubRKDsM1FI/maxresdefault.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
`


const Movie = () => {
    return(
        <SectionCard>
            <CardMovie/>
        </SectionCard>
    )
}

export default Movie