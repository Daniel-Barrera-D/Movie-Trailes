import styled from "styled-components";
import TitleGenre from "../TitleGenre/TitleGenre";
import Slider from "../Slider/Slider";

const DescGenre = styled.p`
    color: #F5F5F5;
    font-size: 15px;
`

const Information = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Content = styled.section`
    display: flex;
    height: 275px;
    flex-direction: column;
    background-color: #000000;
    /* height: 270px; */
    align-items: flex-start;
    padding: 0 30px;
    padding-top: 30px;
    overflow-x: hidden;
    overflow-y: hidden;
    @media (max-width: 400px) {
        height: 280px;
    }
`
// const SectionMovie = styled.div`
//     display: flex;
//     /* flex-wrap: wrap ; */
//     gap: 35px;
//     width: 100%;
//     cursor: grab;
// `

const Generes = (props) => {

    const { genre, descGenre, color } = props.data;
    const { movies } = props;

    return(
        <>
        {
            movies.length > 0 &&
            <Content>
            <Information>
                <TitleGenre color={color}>{ genre }</TitleGenre>
                <DescGenre>{ descGenre }</DescGenre>
            </Information>

            <Slider movies={movies} color={color}/>
            
            </Content>
        }
        </>
    )
}

export default Generes;