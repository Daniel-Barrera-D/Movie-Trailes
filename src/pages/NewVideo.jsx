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
import { validateGenre, validateSynopsis, validateTitleMovie, validateUrlImage, validateUrlVideo } from "../Validations/form-one";
import Swal from "sweetalert2";
import Confeti from "../components/Confeti/Confeti";

const NewVideo = () => {

    const { movies, updateMovies } = useContext(MovieContext);
    const { genres } = useContext(GenreContext);
    
    const [title, updateTitle] = useState({ value: '', valid: null });
    const [urlVideo, updateUrlVideo] = useState({ value: '', valid: null });
    const [urlImage, updateUrlImage] = useState({ value: '', valid: null });
    const [genreMovie, updateGenre] = useState({ value: '', valid: null });
    const [synopsis, updateSynopsis] = useState({ value: '', valid: null });

    const [confetti, showConfetti] = useState(false);

    //Evitar recargar la pagina al enviar datos por el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    //Función para mostrar confeti
    const showConfettiOnAction = () => {
        showConfetti(true);

        setTimeout(() => {
            showConfetti(false);
        }, 5000);
    }

    //Registrar Nueva Película
    const registerMovie = (movie) => {
        updateMovies([...movies, {...movie, id: uuidv4() }]);
    }

    const handleSubmitMovie = () => {
        if(title.value === '' || urlVideo.value === '' || urlImage.value === '' || genreMovie.value === '' || synopsis.value === ''
            || !title.valid || !urlVideo.valid || !urlImage.valid || !genreMovie.valid || !synopsis.valid){
            Swal.fire({
                title: "Error!",
                text:"Por favor verifique los campos del formulario.",
                icon:"error",
                confirmButtonText:"Intentar de nuevo"
            })
        }else {
            
            let sendData = {
                title : title.value,
                genreMovie : genreMovie.value,
                synopsis : synopsis.value,
                urlVideo : urlVideo.value,
                urlImage : urlImage.value
            }
            Swal.fire({
                title: "Hecho!",
                text:"La película se ha creado correctamente.",
                icon:"success",
                confirmButtonText:"Cerrar"
            })
            registerMovie(sendData);
            showConfettiOnAction();
            handleResetForm();
        }
    }

    const handleResetForm = () => {
        console.log("Limpiando...");
        updateTitle({ value: '', valid: ''});
        updateUrlVideo({ value: '', valid: ''});
        updateUrlImage({ value: '', valid: ''});
        updateGenre({ value: '', valid: ''});
        updateSynopsis({ value: '', valid: ''});
    }

    return (
        <SectionForm onSubmit={handleSubmit}>
            {confetti ? <Confeti/> : <></>}
            <TitlePage>Nuevo Video</TitlePage>
            <Input
                value={ title.value }
                text="Nombre Película"
                error={ title.valid === false }
                helperText = { title.valid === false && "Ingresa un texto válido" }
                updateValue = { updateTitle }
                validateData = { validateTitleMovie }
            />
            <Input
                value={ urlVideo.value } 
                text="Link del vídeo"
                error={ urlVideo.valid === false }
                helperText = { urlVideo.valid === false && "Ingresa una URL válida (https://www.youtube.com/embed/xxxxxx?si=xxxxx)" }
                updateValue = { updateUrlVideo }
                validateData = { validateUrlVideo }
            />
            <Input
                value={ urlImage.value } 
                text="Link de la imágen del vídeo"
                error={ urlImage.valid === false }
                helperText = { urlImage.valid === false && "Ingresa una URL válida (https://img.youtube.com/vi/xxxxxxxxxxx/maxresdefault.jpg)" }
                updateValue = { updateUrlImage }
                validateData = { validateUrlImage }
            />
            <ListOptions
                value= { genreMovie.value }
                updateGenre = { updateGenre }
                genres = { genres.map((genre) => genre.genre )}
                error = { genreMovie.valid === false }
                validateData = { validateGenre }
            />
            <Input
                value={ synopsis.value }
                text="Sinopsis"
                error={ synopsis.valid === false }
                helperText = { synopsis.valid === false && "Ingresa un texto válido" }
                updateValue = { updateSynopsis }
                validateData = { validateSynopsis }
            />
            <ButtonsContainer>
                <SectionButtons>
                    <Btn func={handleSubmitMovie} text="Guardar" color="success"></Btn>
                    <Btn func={handleResetForm} text="Limpiar" color="info"></Btn>
                </SectionButtons>
                <Link to={"/new-category"} style={ {textDecoration: "none"} }><Button text="Nuevo Genero"></Button></Link>
            </ButtonsContainer>
        </SectionForm>
    )
}

export default NewVideo