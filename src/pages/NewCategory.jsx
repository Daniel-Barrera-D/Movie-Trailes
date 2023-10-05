import React, { useContext, useState } from "react";
import SectionForm from "../components/Form/Form";
import TitlePage from "../components/TitlePage/TitlePage";
import Input from "../components/Input/Input";
import SectionButtons from "../components/SectionButtons/SectionButtons";
import Btn from "../components/Button/Button";
import BasicTable from "../components/BasicTable/BasicTable";
import { GenreContext } from "../context/GenreContext";
import { v4 as uuidv4 } from 'uuid';
import { MovieContext } from "../context/MovieContext";
import { validateColor, validateDescription, validateGenre } from "../Validations/form-two";
import Swal from "sweetalert2";
import Confeti from "../components/Confeti/Confeti";

const NewCategory = () => {

    const { genres, updateGenres } = useContext(GenreContext);
    const { movies, updateMovies } = useContext(MovieContext);

    const [id, updateId] = useState('');
    const [genre, updateGenre] = useState({ value: '', valid: null });
    const [descGenre, updateDescription] = useState({ value: '', valid: null });
    const [color, updateColor] = useState({ value: "#000000", valid: null});

    const [gMovie, updategMovie] = useState("");
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

    //Registrar un nuevo género
    const registerGenre = (genre) => {
        updateGenres([...genres, {...genre, id: uuidv4()}])
    }

    const handleResetForm = () => {
        updateGenre({value: '', valid: null});
        updateDescription({value: '', valid: null});
        updateColor({value: '#000000', valid: null})
    }

    const handleSubmitGenre = () => {
        if(genre.value === "" || descGenre.value === "" || genre.valid === false || descGenre.valid === false){
            return Swal.fire({
                title: "Error!",
                text:"Por favor verifique los campos del formulario",
                icon:"error",
                confirmButtonText:"Intentar de nuevo"
            })
        }else {
            
            if(id){
                return Swal.fire({
                    title: "Error!",
                    text:"El genero ya existe, si desea editar haga click en el botón correspondiente.",
                    icon:"warning",
                    confirmButtonText:"Intentar de nuevo"
                })
            }
            let sendData = {
                genre : genre.value,
                descGenre : descGenre.value,
                color : color.value
            }
            Swal.fire({
                title: "Hecho!",
                text:"El género se ha creado correctamente.",
                icon:"success",
                confirmButtonText:"Cerrar"
            })
            registerGenre(sendData);
            showConfettiOnAction();
            handleResetForm();
        }
    }

    const setValues = (id, genre, descGenre, color, valid) => {
        updateId(id)
        updateGenre({value: genre, valid: valid});
        updateDescription({value: descGenre, valid: valid});
        updateColor({value: color, valid: valid});
        updategMovie(genre);
    }

    const editGenre = () => {
        if(genre.value === "" || descGenre.value === ""){
            return Swal.fire({
                title: "Error!",
                text:"Por favor seleccione de la tabla el elemento a editar.",
                icon:"error",
                confirmButtonText:"Intentar de nuevo"
            })
        }
        if(id === ""){
            return Swal.fire({
                title: "Error!",
                text:"El genero no existe, si desea guardalo, haga click en el botón correspondiente.",
                icon:"warning",
                confirmButtonText:"Intentar de nuevo"
            })
        }
        const genreUpdate = genres.map((g) => {
            if(g.id === id){
                g.genre = genre.value;
                g.descGenre = descGenre.value;
                g.color = color.value;
            }
            
            return g;
        })
        if(genre.valid === false || descGenre.valid === false){
            return Swal.fire({
                title: "Error!",
                text:"Por favor verifique los campos del formulario",
                icon:"warning",
                confirmButtonText:"Intentar de nuevo"
            })
        }else{
            Swal.fire({
                title: "Hecho!",
                text:"El género se ha editado correctamente.",
                icon:"success",
                confirmButtonText:"Cerrar"
            })
            updateGenres(genreUpdate);
            showConfettiOnAction();
            handleResetForm();
        }

        const movieUpdateGenre = movies.map((movie) => {
            if(movie.genreMovie === gMovie){
                movie.genreMovie = genre.value
            } 
            return movie;
            
        })
        updateMovies(movieUpdateGenre);
    }

    const deleteGenre = (id) => {
        const newGenres = genres.filter((genre) => genre.id !== id);
        updateGenres(newGenres);
    }

    return(
        <SectionForm onSubmit={handleSubmit}>
            {confetti ? <Confeti/> : <></>}
            <TitlePage>Nueva Categoría</TitlePage>
            <Input
                text="Género"
                value={ genre.value }
                error={ genre.valid === false }
                helperText = { genre.valid === false && "Por favor ingrese un texto válido" }
                updateValue={ updateGenre }
                validateData = { validateGenre }
            />
            <Input
                text="Descripción"
                value={ descGenre.value }
                error={ descGenre.valid === false }
                helperText = { descGenre.valid === false && "Por favor ingrese un texto válido" }
                updateValue={updateDescription}
                validateData = { validateDescription }
            />
            <Input
                type="color"
                text="Color"
                value={ color.value }
                updateValue={ updateColor }
                validateData = { validateColor }
            />
            <SectionButtons>
                <Btn func={ handleSubmitGenre } text="Guardar" color="success"></Btn>
                <Btn func={ editGenre }text="Editar" color="warning"></Btn>
                <Btn func={ handleResetForm }text="Limpiar" color="info"></Btn>
            </SectionButtons>
            <BasicTable editGenre={setValues} deleteGenre={deleteGenre}/>
        </SectionForm>
    )
}

export default NewCategory;