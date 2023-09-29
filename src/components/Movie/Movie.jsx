import { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/DataContext";

const SectionCard = styled.div`
    transition: transform 0.3s;
    &:hover{
        transform: scale(1.1);
    }
`

const CardMovie = styled.div`
    width: 350px;
    height: 197px;
    border: 3px solid ${props => props.color};
    /* background-image: url("https://i.ytimg.com/vi/8ubRKDsM1FI/maxresdefault.jpg"); */
    /* background-size: 100%; */
    background-repeat: no-repeat;
`


const Movie = (props) => {

    const { genreMovie, synopsis, title, urlVideo, urlImage } = props.data;
    const { color } = props;

    const { setDataBanner } = useContext(DataContext);

    const sendData = {
        genreMovie,
        title,
        synopsis,
        urlVideo,
        color
    }
    
    return(
        <SectionCard>
            <CardMovie color={color} onClick={() => setDataBanner(sendData)}>
                <img style={{width:"100%"}} src={urlImage} alt="foto" draggable="false"/>
            </CardMovie>
        </SectionCard>
    )
}

export default Movie