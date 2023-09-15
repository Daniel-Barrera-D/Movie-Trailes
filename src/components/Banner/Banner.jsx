import styled from "styled-components";

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
    background-color: #6BD1FF;
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
    border: 3.5px solid #6BD1FF;
    width: 900px;
    height: 350px;
`

const Banner = () => {
    return(
        <StyledBanner>
            <Information>
                <TitleCategoryBanner>Acción</TitleCategoryBanner>
                <TitleMovieBanner>John Wick</TitleMovieBanner>
                <Synopsis>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Synopsis>
            </Information>
            <CardVideoBanner src="https://www.youtube.com/embed/8ubRKDsM1FI?si=yeEOEATYVqkiNuzu" />
        </StyledBanner>
    )
}

export default Banner;