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


const NewCategory = () => {

    const { genres, updateGenres } = useContext(GenreContext);
    const { movies, updateMovies } = useContext(MovieContext);

    const [id, updateId] = useState('');
    const [genre, updateGenre] = useState('');
    const [descGenre, updateDescription] = useState('');
    const [color, updateColor] = useState('#000000');

    const [gMovie, updategMovie] = useState("");

    //Evitar recargar la pagina al enviar datos por el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    //Registrar un nuevo género
    const registerGenre = (genre) => {
        updateGenres([...genres, {...genre, id: uuidv4()}])
    }

    const handleResetForm = () => {
        updateGenre('');
        updateDescription('');
        updateColor('#000000')
    }

    const handleSubmitGenre = () => {
        if(genre === "" || descGenre === ""){
            return alert("Por favor llene los campos del formulario");
        }
        console.log("Registrando género...");
        if(id){
            return alert("El genero ya existe, si desea editar haga click en el botón correspondiente.");
        }
        let sendData = {
            genre,
            descGenre,
            color
        }
        
        registerGenre(sendData);
    }

    const setValues = (id, genre, descGenre, color) => {
        updateId(id)
        updateGenre(genre);
        updateDescription(descGenre);
        updateColor(color);
        updategMovie(genre);
    }

    const editGenre = () => {
        if(genre === "" || descGenre === ""){
            return alert("Por favor en la tabla, seleccione el elemento a editar.");
        }
        if(id === ""){
            return alert("El genero no existe, si desea guardalo, haga click en el botón correspondiente.")
        }
        const genreUpdate = genres.map((g) => {
            if(g.id === id){
                g.genre = genre;
                g.descGenre = descGenre;
                g.color = color;
            }
            
            return g;
        })
        updateGenres(genreUpdate);

        const movieUpdateGenre = movies.map((movie) => {
            if(movie.genreMovie === gMovie){
                movie.genreMovie = genre
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
            <TitlePage>Nueva Categoría</TitlePage>
            <Input
                text="Género"
                value={genre}
                updateValue={updateGenre}
            />
            <Input
                text="Descripción"
                value={descGenre}
                updateValue={updateDescription}
            />
            <Input
                type="color"
                text="Color"
                value={color}
                updateValue={updateColor}
            />
            <SectionButtons>
                <Btn func={handleSubmitGenre} text="Guardar" color="success"></Btn>
                <Btn func={editGenre}text="Editar" color="warning"></Btn>
                <Btn func={handleResetForm}text="Limpiar" color="info"></Btn>
            </SectionButtons>
            <BasicTable editGenre={setValues} deleteGenre={deleteGenre}/>
        </SectionForm>
    )
}

export default NewCategory;