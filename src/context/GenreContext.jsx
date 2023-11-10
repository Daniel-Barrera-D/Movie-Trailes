import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const GenreContext = createContext();

const dataGenres = [
    {
        id: uuidv4(),
        genre: "Acción",
        descGenre: "Mejores películas de acción",
        color: "#6BD1FF"
    },
    {
        id: uuidv4(),
        genre: "Comedia",
        descGenre: "Mejores películas de comedia",
        color: "#00C86F"
    },
    {
        id: uuidv4(),
        genre: "Suspenso",
        descGenre: "Mejores películas de suspenso",
        color: "#6B5BE2"
    },
    {
        id: uuidv4(),
        genre: "Drama",
        descGenre: "Mejores películas de drama",
        color: "#1D8192"
    },
];

export const GenreProvider = ({children}) => {

    const [genres, updateGenres] = useState(dataGenres);

    return(
        <GenreContext.Provider value={{
            genres,
            updateGenres
        }}>
            {children}
        </GenreContext.Provider>
    )
}