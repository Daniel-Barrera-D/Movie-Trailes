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

    //Evitar recargar la pagina al enviar datos por el formulario
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    //Registrar Nueva Película
    const registerMovie = (movie) => {
        updateMovies([...movies, movie]);
    }

    const handleSubmitMovie = () => {
        console.log("Enviando película...");
        let sendData = {
            title,
            genre,
            synopsis,
            urlVideo,
            urlImage
        }
        registerMovie(sendData);
    }

    const handleResetForm = () => {
        console.log("Limpiando...");
        updateTitle('');
        updateUrlVideo('');
        updateUrlImage('');
        updateGenre('');
        updateSynopsis('');
    }

    return (
        <SectionForm onSubmit={handleSubmit}>
            <TitlePage>Nuevo Video</TitlePage>
            <Input
                value={title}
                text="Nombre Película"
                updateValue = { updateTitle }
            />
            <Input
                value={urlVideo} 
                text="Link del vídeo"
                updateValue = { updateUrlVideo }
            />
            <Input
                value={urlImage} 
                text="Link de la imágen del vídeo"
                updateValue = { updateUrlImage }
            />
            <ListOptions
                value= { genre }
                updateGenre = { updateGenre }
                genres = { genres.map((genre) => genre.genre )}
            />
            <Input
                value={synopsis}
                text="Sinopsis"
                updateValue = { updateSynopsis }
            />
            <SectionButtons>
                <Button onClick={handleSubmitMovie}>Guardar</Button>
                <Button onClick={handleResetForm}>Limpiar</Button>
                <Link to={"/new-category"} style={ {textDecoration: "none"} }><Button>Nueva Categoria</Button></Link>
            </SectionButtons>
        </SectionForm>
    )
}

export default NewVideo