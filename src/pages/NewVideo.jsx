import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Button from "../components/Button/Button"
import TitlePage from "../components/TitlePage/TitlePage"
import Input from "../components/Input/Input"
import SectionButtons, { ButtonsContainer } from "../components/SectionButtons/SectionButtons"
import ListOptions from "../components/ListOptions/ListOptions"
import SectionForm from "../components/Form/Form"
import { GenreContext } from "../context/GenreContext"
import { MovieContext } from "../context/MovieContext"
import Btn from "../components/Button/Button"
import { v4 as uuidv4 } from 'uuid';

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
        e.preventDefault();
    }

    //Registrar Nueva Película
    const registerMovie = (movie) => {
        updateMovies([...movies, {...movie, id: uuidv4() }]);
    }

    const handleSubmitMovie = () => {
        if(title === '' || urlVideo === '' || urlImage === '' || genre === '' || synopsis === ''){
            alert("Verifique que los campos no esten vacíos");
        }else{
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
            <ButtonsContainer>
                <SectionButtons>
                    <Btn func={handleSubmitMovie} text="Guardar" color="success"></Btn>
                    <Btn func={handleResetForm} text="Limpiar" color="info"></Btn>
                </SectionButtons>
                <Link to={"/new-category"} style={ {textDecoration: "none"} }><Button text="Nueva Categoria"></Button></Link>
            </ButtonsContainer>
        </SectionForm>
    )
}

export default NewVideo