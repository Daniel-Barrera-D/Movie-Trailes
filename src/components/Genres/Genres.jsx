import styled from "styled-components";
import Movie from "../Movie/Movie";
import TitleGenre from "../TitleGenre/TitleGenre";

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
    flex-direction: column;
    background-color: #000000;
    /* height: 270px; */
    align-items: flex-start;
    padding: 0 30px;
    padding-top: 30px;
`

const SectionMovie = styled.div`
    display: flex;
    flex-wrap: wrap ;
    gap: 15px;
`

const Generes = () => {
    return(
        <>
            <Content>
            <Information>
                <TitleGenre>Acción</TitleGenre>
                <DescGenre>Mejores películas de acción</DescGenre>
            </Information>
            <SectionMovie>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
            </SectionMovie>
            </Content>
            
        </>
    )
}

export default Generes;