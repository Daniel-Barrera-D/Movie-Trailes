import React, { useContext } from "react";
import Banner from "../components/Banner/Banner";
import Generes from "../components/Genres/Genres";
import { MovieContext } from "../context/MovieContext";
import { GenreContext } from "../context/GenreContext";


const Home = () => {
    
    const { movies } = useContext(MovieContext);
    const { genres } = useContext(GenreContext);
    
    return(
        <>
            <Banner/>
            {
                genres.map((genre) => <Generes
                    data = { genre }
                    key={ genre.genre }
                    movies = { movies.filter(movie => movie.genreMovie === genre.genre) }
                />)
            }
        </>
    )
}

export default Home;
