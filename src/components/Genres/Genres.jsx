import styled from "styled-components";
import TitleGenre from "../TitleGenre/TitleGenre";
import Slider from "../Slider/Slider";

const DescGenre = styled.p`
    color: #F5F5F5;
    font-size: 15px;
`

const Information = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const Content = styled.section`
    display: flex;
    height: 260px;
    flex-direction: column;
    background-color: #000000;
    /* height: 270px; */
    align-items: flex-start;
    padding: 0 30px;
    padding-top: 30px;
    overflow-x: hidden;
    overflow-y: hidden;
`
// const SectionMovie = styled.div`
//     display: flex;
//     /* flex-wrap: wrap ; */
//     gap: 35px;
//     width: 100%;
//     cursor: grab;
// `

const Generes = () => {
    return(
        <>
            <Content>
            <Information>
                <TitleGenre>Acción</TitleGenre>
                <DescGenre>Mejores películas de acción</DescGenre>
            </Information>
            
                {/* <Movie/>
                <Movie/>
                <Movie/>
                <Movie/> */}
            <Slider />
            
            </Content>
        </>
    )
}

export default Generes;