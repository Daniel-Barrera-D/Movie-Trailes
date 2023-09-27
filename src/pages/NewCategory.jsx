import React, { useContext, useState } from "react";
import SectionForm from "../components/Form/Form";
import TitlePage from "../components/TitlePage/TitlePage";
import Input from "../components/Input/Input";
import SectionButtons from "../components/SectionButtons/SectionButtons";
import Btn from "../components/Button/Button";
import BasicTable from "../components/BasicTable/BasicTable";
import { GenreContext } from "../context/GenreContext";
import { v4 as uuidv4 } from 'uuid';


const NewCategory = () => {

    const { genres, updateGenres } = useContext(GenreContext);

    const [id, updateId] = useState('');
    const [genre, updateGenre] = useState('');
    const [descGenre, updateDescription] = useState('');
    const [color, updateColor] = useState('#000000');

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
        console.log("Registrando género...");
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
        updateColor(color)
    }

    const edit = () => {
        const genreUpdate = genres.map((g) => {
            if(g.id === id){
                g.genre = genre;
                g.descGenre = descGenre;
                g.color = color;
            }
            return g;
        })
        updateGenres(genreUpdate);
        console.log("Editar id:", id);
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
                <Btn func={edit}text="Editar" color="info"></Btn>
                <Btn func={handleResetForm}text="Limpiar" color="info"></Btn>
            </SectionButtons>
            <BasicTable func={setValues}/>
        </SectionForm>
    )
}

export default NewCategory;