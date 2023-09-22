import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const ListOptions = (props) => {

    const { value, updateGenre, genres } = props;
   
    const handleChange = (e) => {
        updateGenre(e.target.value);
    }

    return(
        <FormControl variant="filled">
            <InputLabel >Escoja una genero</InputLabel>
            <Select
                label="Escoja un genero"
                value={value}
                onChange={handleChange}
            >
                {genres.map((genre, index) => <MenuItem key={index} value={genre}>{ genre }</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default ListOptions;