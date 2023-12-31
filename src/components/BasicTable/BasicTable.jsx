import React, { useContext } from "react";

import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { GenreContext } from "../../context/GenreContext";

const BasicTable = (props) => {

    const { genres } = useContext(GenreContext);
    const { editGenre, deleteGenre } = props;
    // console.log(func);
    
    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Género</TableCell>
                        <TableCell>Descripción</TableCell>
                        <TableCell>Editar</TableCell>
                        <TableCell>Eliminar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {genres.map((genre) => (
                        <TableRow
                            key={genre.genre}
                        >
                            <TableCell>{genre.genre}</TableCell>
                            <TableCell>{genre.descGenre}</TableCell>
                            <TableCell><IconButton  color="primary" onClick={()=>editGenre(genre.id, genre.genre, genre.descGenre, genre.color)}><Edit /></IconButton></TableCell>
                            <TableCell><IconButton color="error" onClick={() => deleteGenre(genre.id)}><Delete /></IconButton></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BasicTable;