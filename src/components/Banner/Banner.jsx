import { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/DataContext";

const StyledBanner = styled.div`
    display: flex;
    padding: 160px 40px 50px 40px;
    height: max-content;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(0deg, rgba(34,48,107,1) 12%, rgba(10,3,28,1) 88%);
`

const TitleCategoryBanner = styled.h1`
    display: flex;
    margin-top: 0;
    margin-bottom: 40px;
    background-color: ${props => props.color};
    color: #F5F5F5;
    font-size: 35px;
    padding: 15px;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: 20px;
`

const TitleMovieBanner = styled.h2`
    color: #F5F5F5;
    font-size: 30px;
    margin: 0;
`
const Synopsis = styled.p`
    color: #F5F5F5;
    font-size: 18px;
    margin-right: 10px;
`

const Information = styled.div`
    width: 1500px;
    display: flex;
    flex-direction: column;
`

const CardVideoBanner = styled.iframe`
    border: 3.5px solid ${props => props.color};
    width: 900px;
    height: 350px;
`

const Banner = () => {

    const { dataBanner } = useContext(DataContext);

    const { genre, title, synopsis, urlVideo, color } = dataBanner;

    return(
        <StyledBanner>
            <Information>
                <TitleCategoryBanner color={color}>{genre}</TitleCategoryBanner>
                <TitleMovieBanner>{title}</TitleMovieBanner>
                <Synopsis>{synopsis}</Synopsis>
            </Information>
            <CardVideoBanner color={color} src={urlVideo} />
        </StyledBanner>
    )
}

export default Banner;