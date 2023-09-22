import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Button from "../components/Button/Button"
import TitlePage from "../components/TitlePage/TitlePage"
import Input from "../components/Input/Input"
import SectionButtons from "../components/SectionButtons/SectionButtons"
import ListOptions from "../components/ListOptions/ListOptions"
import SectionForm from "../components/Form/Form"
import { GenreContext } from "../context/GenreContext"
import { MovieContext } from "../context/MovieContext"

const NewVideo = () => {

    const { movies, updateMovies } = useContext(MovieContext);
    const { genres } = useContext(GenreContext);
    
    const [title, updateTitle] = useState("");
    const [urlVideo, updateUrlVideo] = useState("");
    const [urlImage, updateUrlImage] = useState("");
    const [genre, updateGenre] = useState("");
    const [synopsis, updateSynopsis] = useState("");

    //Registrar Nueva Película
    const registerMovie = (movie) => {
        updateMovies(...movies, movie);
    }

    const handleSubmitMovie = (e) => {
        e.preventDefault();
        console.log("Enviando película...");
        let sendData = {
            title,
            genre,
            synopsis,
            urlVideo,
            urlImage
        }
        console.log(sendData);
    }

    return (
        <SectionForm onSubmit={ handleSubmitMovie }>
            <TitlePage>Nuevo Video</TitlePage>
            <Input 
                text="Nombre Película"
                updateValue = { updateTitle }
            />
            <Input 
                text="Link del vídeo"
                updateValue = { updateUrlVideo }
            />
            <Input 
                text="Link de la imágen del vídeo"
                updateValue = { updateUrlImage }
            />
            <ListOptions
                value= { genre }
                updateGenre = { updateGenre }
                genres = { genres.map((genre) => genre.genre )}
            />
            <Input 
                text="Sinopsis"
                updateValue = { updateSynopsis }
            />
            <SectionButtons>
                <Button>Guardar</Button>
                <Button>Limpiar</Button>
                <Link to={"/new-category"} style={ {textDecoration: "none"} }><Button>Nueva Categoria</Button></Link>
            </SectionButtons>
        </SectionForm>
    )
}

export default NewVideo