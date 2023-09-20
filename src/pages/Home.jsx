import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import Generes from "../components/Genres/Genres";
import { v4 as uuidv4 } from "uuid";

const Home = () => {

    const [movies, updateMovie] = useState(
        [
            {
                id: uuidv4(),
                genre: "Acción",
                urlImage: "https://i.ytimg.com/vi/8ubRKDsM1FI/maxresdefault.jpg",
                title: "Jonh Wick",
                urlVideo: "https://www.youtube.com/embed/8ubRKDsM1FI?si=yeEOEATYVqkiNuzu",
                synopsis: "El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema."
            },
            {
                id: uuidv4(),
                genre: "Comedia",
                urlImage: "https://img.youtube.com/vi/z4h_29kuhc4/maxresdefault.jpg",
                title: "Son como niños",
                urlVideo: "",
                synopsis: "Un grupo de amigos y excompañeros descubren que envejecer no siempre significa madurar cuando se reúnen para honrar la memoria de su entrenador de baloncesto."
            },
            {
                id: uuidv4(),
                genre: "Suspenso",
                urlImage: "https://i.ytimg.com/vi/8ubRKDsM1FI/maxresdefault.jpg",
                title: "Los espantos del fantasma",
                urlVideo: "",
                synopsis: "El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema."
            },
            {
                id: uuidv4(),
                genre: "Suspenso",
                urlImage: "https://i.ytimg.com/vi/8ubRKDsM1FI/maxresdefault.jpg",
                title: "Los espantos del fantasma",
                urlVideo: "",
                synopsis: "El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema."
            },
        ]
    )

    const [genres, updateGenres] = useState(
        [
            {
                id: uuidv4(),
                genre: "Acción",
                descGenre: "Mejores película de acción",
                color: "#6BD1FF"
            },
            {
                id: uuidv4(),
                genre: "Comedia",
                descGenre: "Mejores película de comedia",
                color: "#00C86F"
            },
            {
                id: uuidv4(),
                genre: "Suspenso",
                descGenre: "Mejores película de suspenso",
                color: "#6B5BE2"
            },
        ]
    )

    return(
        <>
            <Banner/>
            {
                genres.map((genre) => <Generes
                    data = { genre }
                    key={ genre.genre }
                    movies = { movies.filter(movie => movie.genre === genre.genre) }
                />)
            }
        </>
    )
}

export default Home;