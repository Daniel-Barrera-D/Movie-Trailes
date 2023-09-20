import React, { createContext, useState } from "react";

export const DataContext = createContext();

const dataFixed = {
    genre: "Acción",
    title: "Jonh Wick",
    synopsis: "El marqués Vincent de Gramont pretende matar a John Wick para afianzar su poder en la Orden Suprema.",
    urlVideo: "https://www.youtube.com/embed/8ubRKDsM1FI?si=yeEOEATYVqkiNuzu",
    color: "#6BD1FF"
}

export const DataProvider = ({ children }) => {

    const [dataBanner, setDataBanner] = useState(dataFixed);

    return(
        <DataContext.Provider value={{
            dataBanner,
            setDataBanner
        }}>
            { children }
        </DataContext.Provider>
    )
}