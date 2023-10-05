import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const ListOptions = (props) => {

    const { value, updateGenre, genres, validateData, error } = props;
   
    const handleChange = (e) => {
        updateGenre({value: e.target.value});
    }

    const handleOnblur = (e) => {
        const data = e.target.value;
        updateGenre({value: data, valid:validateData(data)})
    }

    return(
        <FormControl variant="filled" error={error}>
            <InputLabel>Escoja un genero *</InputLabel>
            <Select
                label="Escoja un genero"
                value={value}
                onChange={handleChange}
                onBlur={handleOnblur}
                error={error}
            >
                {genres.map((genre, index) => <MenuItem key={index} value={genre}>{ genre }</MenuItem>)}
            </Select>
            {error ? <FormHelperText error={error}>Debe seleccionar un elemento de la lista</FormHelperText> : <></>}
        </FormControl>
    )
}

export default ListOptions;