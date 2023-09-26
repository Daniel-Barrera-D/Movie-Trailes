import React from "react";
import SectionForm from "../components/Form/Form";
import TitlePage from "../components/TitlePage/TitlePage";
import Input from "../components/Input/Input";
import { TextField } from "@mui/material";
import SectionButtons from "../components/SectionButtons/SectionButtons";
import Btn from "../components/Button/Button";
import BasicTable from "../components/BasicTable/BasicTable";


const NewCategory = () => {
    return(
        <SectionForm>
            <TitlePage>Nueva Categoría</TitlePage>
            <Input
                text="Género"

            />
            <Input
                text="Descripción"
                 
            />
            <TextField
                type="color"
                label="Color"
            />
            <BasicTable/>
            <SectionButtons>
                <Btn text="Guardar" color="success"></Btn>
                <Btn text="Limpiar" color="info"></Btn>
            </SectionButtons>
            
        </SectionForm>
    )
}

export default NewCategory;