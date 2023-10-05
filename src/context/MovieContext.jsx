import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const MovieContext = createContext();

const dataMovies = [
    {
        id: uuidv4(),
        genreMovie: "Acción",
        urlImage: "https://i.ytimg.com/vi/8ubRKDsM1FI/maxresdefault.jpg",
        title: "Jonh Wick",
        urlVideo: "https://www.youtube.com/embed/8ubRKDsM1FI?si=yeEOEATYVqkiNuzu",
        synopsis: "El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema."
    },
    {
        id: uuidv4(),
        genreMovie: "Acción",
        urlImage: "https://i.ytimg.com/vi/8ubRKDsM1FI/maxresdefault.jpg",
        title: "Jonh Wick",
        urlVideo: "https://www.youtube.com/embed/8ubRKDsM1FI?si=yeEOEATYVqkiNuzu",
        synopsis: "El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema."
    },
    {
        id: uuidv4(),
        genreMovie: "Acción",
        urlImage: "https://i.ytimg.com/vi/8ubRKDsM1FI/maxresdefault.jpg",
        title: "Jonh Wick",
        urlVideo: "https://www.youtube.com/embed/8ubRKDsM1FI?si=yeEOEATYVqkiNuzu",
        synopsis: "El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema."
    },
    {
        id: uuidv4(),
        genreMovie: "Comedia",
        urlImage: "https://img.youtube.com/vi/z4h_29kuhc4/maxresdefault.jpg",
        title: "Son como niños",
        urlVideo: "https://www.youtube.com/embed/FSAMw7m9QRA?si=3NsdVKKt2395EVP_",
        synopsis: "Un grupo de amigos y excompañeros descubren que envejecer no siempre significa madurar cuando se reúnen para honrar la memoria de su entrenador de baloncesto."
    },
    {
        id: uuidv4(),
        genreMovie: "Comedia",
        urlImage: "https://img.youtube.com/vi/z4h_29kuhc4/maxresdefault.jpg",
        title: "Son como niños",
        urlVideo: "https://www.youtube.com/embed/FSAMw7m9QRA?si=3NsdVKKt2395EVP_",
        synopsis: "Un grupo de amigos y excompañeros descubren que envejecer no siempre significa madurar cuando se reúnen para honrar la memoria de su entrenador de baloncesto."
    },
    {
        id: uuidv4(),
        genreMovie: "Comedia",
        urlImage: "https://img.youtube.com/vi/z4h_29kuhc4/maxresdefault.jpg",
        title: "Son como niños",
        urlVideo: "https://www.youtube.com/embed/FSAMw7m9QRA?si=3NsdVKKt2395EVP_",
        synopsis: "Un grupo de amigos y excompañeros descubren que envejecer no siempre significa madurar cuando se reúnen para honrar la memoria de su entrenador de baloncesto."
    },
    {
        id: uuidv4(),
        genreMovie: "Suspenso",
        urlImage: "https://img.youtube.com/vi/eewRUtNpqoQ/maxresdefault.jpg",
        title: "Demonio Negro",
        urlVideo: "https://www.youtube.com/embed/eewRUtNpqoQ?si=O7jcPob7ZvxChSN0",
        synopsis: "Paul y su familia se enfrentan a la peor batalla cuando deciden irse de vacaciones a lo que parecía ser el destino ideal, pero rápidamente se convertirá en una pesadilla cuando se encuentren con un feroz tiburón megalodón."
    },
    {
        id: uuidv4(),
        genreMovie: "Suspenso",
        urlImage: "https://img.youtube.com/vi/eewRUtNpqoQ/maxresdefault.jpg",
        title: "Demonio Negro",
        urlVideo: "https://www.youtube.com/embed/eewRUtNpqoQ?si=O7jcPob7ZvxChSN0",
        synopsis: "Paul y su familia se enfrentan a la peor batalla cuando deciden irse de vacaciones a lo que parecía ser el destino ideal, pero rápidamente se convertirá en una pesadilla cuando se encuentren con un feroz tiburón megalodón."
    },
    {
        id: uuidv4(),
        genreMovie: "Suspenso",
        urlImage: "https://img.youtube.com/vi/eewRUtNpqoQ/maxresdefault.jpg",
        title: "Demonio Negro",
        urlVideo: "https://www.youtube.com/embed/eewRUtNpqoQ?si=O7jcPob7ZvxChSN0",
        synopsis: "Paul y su familia se enfrentan a la peor batalla cuando deciden irse de vacaciones a lo que parecía ser el destino ideal, pero rápidamente se convertirá en una pesadilla cuando se encuentren con un feroz tiburón megalodón."
    },
]

export const MovieProvider = ({children}) => {

    const [movies, updateMovies] = useState(dataMovies);

    return(
        <MovieContext.Provider value={{
            movies,
            updateMovies
        }}>
            {children}
        </MovieContext.Provider>
    )
}